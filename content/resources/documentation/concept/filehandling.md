---
title: Handling files
description: How can (large) files be handled in processes?
category: 'Concept'
categoryIcon: 'mdi-floor-plan'
position: 3
---

<section>

Dealing with files inherently presents challenges for a process and integration platform. Files can be very large, or occur in large numbers, and thus present a potential resource problem. Therefore, DigiWf does not load files into memory or loop them through the process. File handling takes place in the integration layers (either GUI or backend).

<figure>
<v-img alt="The three layers GUI Integration, DigiWF Core and Application Integration Layer are shown. It is shown that file handling only takes place in the two integration layers." contain 
max-width="960" 
src="images/resources/documentation/concept/filehandling/digiwf_file_handling_in_integration_layers.png" 
lazy-src="images/resources/documentation/concept/filehandling/preview_digiwf_file_handling_in_integration_layers.png" ></v-img>
<figcaption>File handling in the two integration layers</figcaption>
</figure>

A fundamental element in the handling of files (regardless of whether they enter the system via the GUI or connected backend components) is the file store. In the case of DigiWF, this is an 'S3 service'. Here a cloud solution like AWS or an on prem service can be used. Communication with the service itself is abstracted via a generically valid interface.

In principle, it is possible (and recommended if the platform is used multiple times) to provide more than one `S3 bucket` as file storage. However, not in the same `S3 Service` - here there is a 1:1 relationship between service and `S3 Bucket`. Nevertheless - depending on the subject matter - a separate `S3 Bucket` with its own `S3 Service` can be connected to the platform here according to domain, process or department. This means that with a larger installation (for example, company-wide) you will usually have n `S3 Services` connected.

</section>
<section>

## File handling in the Application Integration Layer
Classic cases where files need to be handled in the `Application Integration Layer` are:
- E-mail (with attachments)
- File and record storage in a document management system
- File generation, such as PDF generation

### Incoming Files
<figure>
<v-img alt="It is shown how file handling works for incoming files." contain 
max-width="960" 
src="images/resources/documentation/concept/filehandling/digiwf_incoming_files.png" 
lazy-src="images/resources/documentation/concept/filehandling/preview_digiwf_incoming_files.png" ></v-img>
<figcaption>File handling for incoming files</figcaption>
</figure>

The figure above shows how incoming files are handled.

1. A file is created or received from outside.
2. To store the files, a `presigned URL` [^1] is requested and generated at the `S3 service` for storage. A `presigned URL` is a temporary URL for a specific operation (e.g. `POST`, `PUT`, etc.) that can be used to send files directly to an `S3 bucket` without having to be logged in. How long such a URL is valid can be set. For the use case shown here, even very short validity periods work, since this is purely machine processing. In addition to the URL, a reference or file ID is generated and returned at this point.
3. With the URL the file is now written directly into the S3 memory. This is done without a detour via another service.
4. The file reference is passed to the process via the `Event Bus`. From this point on the process is responsible for keeping this file ID carefully, because only with this reference can the file still be found via the `S3 service` and loaded accordingly.

### Outgoing Files
<figure>
<v-img alt="It is shown how the file handling works with outgoing files." contain 
max-width="960" 
src="images/resources/documentation/concept/filehandling/digiwf_outgoing_files.png" 
lazy-src="images/resources/documentation/concept/filehandling/preview_digiwf_outgoing_files.png" ></v-img>
<figcaption>File handling for outgoing files</figcaption>
</figure>

The figure above shows how outgoing files are handled.

1. Basic requirement to fetch a file (or a whole folder) from the 'S3 Bucket' is the reference or file ID. If you want to load multiple files / folders - and attach them to an email for example - you will also need a corresponding number of reference IDs. I.e. the cardinality between file / folder and reference ID is always 1:1.
2. With the reference ID a `presigned URL` can be requested at the `S3 Service` for the operation `GET`. The same applies here - a separate `presigned URL` is required for each file.
3. With the `presigned URL` the file can be loaded directly from the `S3 Bucket`.
4. The file(s) will be attached to the mail and sent.

<v-alert color="red darken-1" border="left" elevation="2" colored-border icon="mdi-robot-angry">
By the way, it is not recommended to give out a presigned URL directly (e.g. to send it by mail). As described above, such a URL is only valid for a certain time. I.e. if this period has expired, then the file can no longer be accessed via the URL. If then also the process instance was terminated, one has also no longer so simply access to the reference ID.
</v-alert>

</section>
<section>

## File handling in GUI Integration Layer
Of course, files do not only come from connected procedures, but can also enter the system via the graphical user interface. Here, too, file handling is handled via the S3 service. It is important to note here that communication does not take place via the 'event bus' - as is the case with the integration artifacts - but via a 'REST' call, since the user interface components do not have direct access to the 'event bus'.

<figure>
<v-img alt="It is shown how saving files from the frontend works." contain 
max-width="960" 
src="images/resources/documentation/concept/filehandling/digiwf_frontend_save_file.png" 
lazy-src="images/resources/documentation/concept/filehandling/preview_digiwf_frontend_save_file.png" ></v-img>
<figcaption>Saving file(s) from the frontend.</figcaption>
</figure>

Here is described how to save a file from the form component `File Upload Control`. However, the way is in principle also usable for own forms or other interfaces.

1. A `presigned URL` is requested at the `S3 Service`. The following parameters are passed:
   - `refID` The reference, under which the file can be retrieved later.
   - `filename` The name of the file to be saved.
   - `endOfLife` A deletion date can be specified. At this time the file will be deleted automatically from the S3 memory. This is especially useful if data may only be kept for a certain time.
   - `expiredInMinutes` The time span in minutes for which the link is valid. After this time has expired, it can no longer be used.
2. The `S3 Service` creates a corresponding `presigned URL` via the S3 storage. What exactly happens there can be seen in the sequence diagram below. This URL is returned to the `File Upload Control`.
3. Using the `presigned URL`, the user interface component can now transfer the file directly to the S3 storage.

If you want to store more than one file, you have to repeat this process accordingly.

### Authorization when handling files from the frontend

While in the integration layer it is relatively clear who can access which file, this is much more difficult to decide in the frontend. this is much more difficult to decide, since here potentially everyone can access the interface first.

<figure>
<v-img alt="It is shown how saving files from the frontend works." contain 
max-width="960" 
src="images/resources/documentation/concept/filehandling/digiwf_save_file_sequence_diagram.png" 
lazy-src="images/resources/documentation/concept/filehandling/preview_digiwf_save_file_sequence_diagram.png" ></v-img>
<figcaption>Saving file(s) from the frontend - detailed view.</figcaption>
</figure>

<figure>
<v-img alt="It is shown how saving files from the frontend works (sequence diagram)." 
contain 
max-width="926" 
src="images/resources/documentation/concept/filehandling/digiwf_load_file_sequence_diagram.png" 
lazy-src="images/resources/documentation/concept/filehandling/preview_digiwf_load_file_sequence_diagram.png" ></v-img>
<figcaption>Loading file(s) from the frontend - detailed view.</figcaption>
</figure>

</section>
<section>

[^1]: see https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html

</section>

