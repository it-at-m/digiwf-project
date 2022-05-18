---
title: Contributions
description: How to participate in the development of DigiWF?
category: 'Contributions'
categoryIcon: 'mdi-gift-open-outline'
position: 1
---

## Documentation

### Documentation of integration artifacts

The documentation of (official) integration artifacts should be done in the respective repository. On the other hand here in the official overall documentation. In order not to have to maintain content twice, the following rules apply:

1. documentation shall be in English only. Also in other translations (as for example German) the English documentation is integrated.
2. the documentation is located in the respective repo in the folder 'docs'.
3. the sections of the documentation will be splitted into single sections. These are then included in the `readme.md` in the repo, as well as in the central documentation.
4. for each language a page must be created under `[language]/resources/modules`. The Markdown files from the repos are included via the component `DwfMarkdownLoader`.
5. for the integration artifact an entry is created on the page `[language]/resources/modules/modules.md` (again please for all translations).
6. in the folder `docs` should be (at least) the following contents: quickstart, architecture overview (if possible with picture), all
   operations (element templates) in separate files. Please document especially the input and output parameters of the element templates.
7. Images must be inserted with absolute paths to display them correctly here as well. In github there is a function "copy permalink" (see screenshot below). It doesn't matter if the image is included via Markdown or HTML. If it is embedded via HTML, it would already be to limit the size.

<v-alert color="red darken-1" border="left" elevation="2" colored-border icon="mdi-robot-angry">
It is important to rebuild and deploy the central documentation page when making changes to the documentation in the repo. Since it is a static page, it does not get anything from changes in another repo / on another server.
</v-alert>
<v-alert color="yellow darken-1" border="left" elevation="2" colored-border icon="mdi-robot-confused">
If you omit headers in the files in the folder 'docs' and place them instead on the description page, a table of contents is automatically generated on the right side. Headings within the referenced documents cannot be shown here.
</v-alert>

<figure>
<v-img alt="It is shown where on github the button is located to copy absolute links to images. (screenshot)" contain 
max-width="960" 
src="images/ecosystem/contribution/github_file_link.png" 
lazy-src="images/ecosystem/contribution/preview_github_file_link.png" ></v-img>
<figcaption>Absolute paths to images</figcaption>
</figure>

### Special Components

#### DwfMarkdownLoader

The component `DwfMarkdownLoader` can be used to load Markdown files that are located on other servers.

``` html
<dwf-markdown-loader source="https://raw.githubusercontent.com/it-at-m/digiwf-s3-integration/dev/README.
md"></dwf-markdown-loader>
```

If you want to load Markdown documents from github, it is recommended to use the "raw" view. 

#### DwfElementTemplateDocs

Über die Komponente `DwfElementTemplateDocs` können Element Templates geladen werden, die auf einem anderen Server liegen. Das Template wird dann als Liste angezeigt, wobei jede Zeile einem Property entspricht.

``` html
<dwf-element-template-docs jsonurl="https://raw.githubusercontent.com/it-at-m/digiwf-email-integration/dev/docs/sendMail.json"></dwf-element-template-docs>
```

<figure>
<v-img alt="It is shown how the display of the element templates looks like in the docs. (Screenshot)" contain 
max-width="960" 
src="images/ecosystem/contribution/element_template_table.png" 
lazy-src="images/ecosystem/contribution/preview_element_template_table.png" ></v-img>
<figcaption>Element template table (example)</figcaption>
</figure>