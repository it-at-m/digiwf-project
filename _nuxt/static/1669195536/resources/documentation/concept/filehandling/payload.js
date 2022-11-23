__NUXT_JSONP__("/resources/documentation/concept/filehandling", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z){return {data:[{article:{slug:"filehandling",description:"How can (large) files be handled in processes?",title:A,category:j,categoryIcon:k,position:v,toc:[{id:B,depth:C,text:D},{id:E,depth:v,text:F},{id:G,depth:v,text:H},{id:I,depth:C,text:J},{id:K,depth:v,text:L}],body:{type:"root",children:[{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Dealing with files inherently presents challenges for a process and integration platform. Files can be very large, or occur in large numbers, and thus present a potential resource problem. Therefore, DigiWf does not load files into memory or loop them through the process. File handling takes place in the integration layers (either GUI or backend)."}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{alt:"The three layers GUI Integration, DigiWF Core and Application Integration Layer are shown. It is shown that file handling only takes place in the two integration layers.",contain:i,"max-width":o,src:"images\u002Fresources\u002Fdocumentation\u002Fconcept\u002Ffilehandling\u002Fdigiwf_file_handling_in_integration_layers.png","lazy-src":"images\u002Fresources\u002Fdocumentation\u002Fconcept\u002Ffilehandling\u002Fpreview_digiwf_file_handling_in_integration_layers.png"},children:[]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"File handling in the two integration layers"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"A fundamental element in the handling of files (regardless of whether they enter the system via the GUI or connected backend components) is the file store. In the case of DigiWF, this is an 'S3 service'. Here a cloud solution like AWS or an on prem service can be used. Communication with the service itself is abstracted via a generically valid interface."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"In principle, it is possible (and recommended if the platform is used multiple times) to provide more than one "},{type:b,tag:d,props:{},children:[{type:a,value:M}]},{type:a,value:" as file storage. However, not in the same "},{type:b,tag:d,props:{},children:[{type:a,value:p}]},{type:a,value:" - here there is a 1:1 relationship between service and "},{type:b,tag:d,props:{},children:[{type:a,value:y}]},{type:a,value:". Nevertheless - depending on the subject matter - a separate "},{type:b,tag:d,props:{},children:[{type:a,value:y}]},{type:a,value:" with its own "},{type:b,tag:d,props:{},children:[{type:a,value:p}]},{type:a,value:" can be connected to the platform here according to domain, process or department. This means that with a larger installation (for example, company-wide) you will usually have n "},{type:b,tag:d,props:{},children:[{type:a,value:"S3 Services"}]},{type:a,value:" connected."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:N,props:{id:B},children:[{type:b,tag:g,props:{href:"#file-handling-in-the-application-integration-layer",ariaHidden:q,tabIndex:r},children:[{type:b,tag:s,props:{className:[t,u]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Classic cases where files need to be handled in the "},{type:b,tag:d,props:{},children:[{type:a,value:"Application Integration Layer"}]},{type:a,value:" are:"}]},{type:a,value:c},{type:b,tag:O,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"E-mail (with attachments)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"File and record storage in a document management system"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"File generation, such as PDF generation"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:z,props:{id:E},children:[{type:b,tag:g,props:{href:"#incoming-files",ariaHidden:q,tabIndex:r},children:[{type:b,tag:s,props:{className:[t,u]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{alt:"It is shown how file handling works for incoming files.",contain:i,"max-width":o,src:"images\u002Fresources\u002Fdocumentation\u002Fconcept\u002Ffilehandling\u002Fdigiwf_incoming_files.png","lazy-src":"images\u002Fresources\u002Fdocumentation\u002Fconcept\u002Ffilehandling\u002Fpreview_digiwf_incoming_files.png"},children:[]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"File handling for incoming files"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"The figure above shows how incoming files are handled."}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"A file is created or received from outside."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"To store the files, a "},{type:b,tag:d,props:{},children:[{type:a,value:h}]},{type:a,value:" "},{type:b,tag:"sup",props:{id:"fnref-1"},children:[{type:b,tag:g,props:{href:"#fn-1",className:["footnote-ref"]},children:[{type:a,value:"1"}]}]},{type:a,value:" is requested and generated at the "},{type:b,tag:d,props:{},children:[{type:a,value:P}]},{type:a,value:" for storage. A "},{type:b,tag:d,props:{},children:[{type:a,value:h}]},{type:a,value:" is a temporary URL for a specific operation (e.g. "},{type:b,tag:d,props:{},children:[{type:a,value:"POST"}]},{type:a,value:", "},{type:b,tag:d,props:{},children:[{type:a,value:"PUT"}]},{type:a,value:", etc.) that can be used to send files directly to an "},{type:b,tag:d,props:{},children:[{type:a,value:M}]},{type:a,value:" without having to be logged in. How long such a URL is valid can be set. For the use case shown here, even very short validity periods work, since this is purely machine processing. In addition to the URL, a reference or file ID is generated and returned at this point."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"With the URL the file is now written directly into the S3 memory. This is done without a detour via another service."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The file reference is passed to the process via the "},{type:b,tag:d,props:{},children:[{type:a,value:"Event Bus"}]},{type:a,value:". From this point on the process is responsible for keeping this file ID carefully, because only with this reference can the file still be found via the "},{type:b,tag:d,props:{},children:[{type:a,value:P}]},{type:a,value:" and loaded accordingly."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:z,props:{id:G},children:[{type:b,tag:g,props:{href:"#outgoing-files",ariaHidden:q,tabIndex:r},children:[{type:b,tag:s,props:{className:[t,u]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{alt:"It is shown how the file handling works with outgoing files.",contain:i,"max-width":o,src:"images\u002Fresources\u002Fdocumentation\u002Fconcept\u002Ffilehandling\u002Fdigiwf_outgoing_files.png","lazy-src":"images\u002Fresources\u002Fdocumentation\u002Fconcept\u002Ffilehandling\u002Fpreview_digiwf_outgoing_files.png"},children:[]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"File handling for outgoing files"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"The figure above shows how outgoing files are handled."}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Basic requirement to fetch a file (or a whole folder) from the 'S3 Bucket' is the reference or file ID. If you want to load multiple files \u002F folders - and attach them to an email for example - you will also need a corresponding number of reference IDs. I.e. the cardinality between file \u002F folder and reference ID is always 1:1."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"With the reference ID a "},{type:b,tag:d,props:{},children:[{type:a,value:h}]},{type:a,value:" can be requested at the "},{type:b,tag:d,props:{},children:[{type:a,value:p}]},{type:a,value:" for the operation "},{type:b,tag:d,props:{},children:[{type:a,value:"GET"}]},{type:a,value:". The same applies here - a separate "},{type:b,tag:d,props:{},children:[{type:a,value:h}]},{type:a,value:" is required for each file."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"With the "},{type:b,tag:d,props:{},children:[{type:a,value:h}]},{type:a,value:" the file can be loaded directly from the "},{type:b,tag:d,props:{},children:[{type:a,value:y}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The file(s) will be attached to the mail and sent."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"v-alert",props:{color:"red darken-1",border:"left",elevation:"2","colored-border":i,icon:"mdi-robot-angry"},children:[{type:a,value:"\nBy the way, it is not recommended to give out a presigned URL directly (e.g. to send it by mail). As described above, such a URL is only valid for a certain time. I.e. if this period has expired, then the file can no longer be accessed via the URL. If then also the process instance was terminated, one has also no longer so simply access to the reference ID.\n"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:N,props:{id:I},children:[{type:b,tag:g,props:{href:"#file-handling-in-gui-integration-layer",ariaHidden:q,tabIndex:r},children:[{type:b,tag:s,props:{className:[t,u]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Of course, files do not only come from connected procedures, but can also enter the system via the graphical user interface. Here, too, file handling is handled via the S3 service. It is important to note here that communication does not take place via the 'event bus' - as is the case with the integration artifacts - but via a 'REST' call, since the user interface components do not have direct access to the 'event bus'."}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{alt:R,contain:i,"max-width":o,src:"images\u002Fresources\u002Fdocumentation\u002Fconcept\u002Ffilehandling\u002Fdigiwf_frontend_save_file.png","lazy-src":"images\u002Fresources\u002Fdocumentation\u002Fconcept\u002Ffilehandling\u002Fpreview_digiwf_frontend_save_file.png"},children:[]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Saving file(s) from the frontend."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Here is described how to save a file from the form component "},{type:b,tag:d,props:{},children:[{type:a,value:S}]},{type:a,value:". However, the way is in principle also usable for own forms or other interfaces."}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"A "},{type:b,tag:d,props:{},children:[{type:a,value:h}]},{type:a,value:" is requested at the "},{type:b,tag:d,props:{},children:[{type:a,value:p}]},{type:a,value:". The following parameters are passed:\n"},{type:b,tag:O,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"refID"}]},{type:a,value:" The reference, under which the file can be retrieved later."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"filename"}]},{type:a,value:" The name of the file to be saved."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"endOfLife"}]},{type:a,value:" A deletion date can be specified. At this time the file will be deleted automatically from the S3 memory. This is especially useful if data may only be kept for a certain time."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"expiredInMinutes"}]},{type:a,value:" The time span in minutes for which the link is valid. After this time has expired, it can no longer be used."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The "},{type:b,tag:d,props:{},children:[{type:a,value:p}]},{type:a,value:" creates a corresponding "},{type:b,tag:d,props:{},children:[{type:a,value:h}]},{type:a,value:" via the S3 storage. What exactly happens there can be seen in the sequence diagram below. This URL is returned to the "},{type:b,tag:d,props:{},children:[{type:a,value:S}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Using the "},{type:b,tag:d,props:{},children:[{type:a,value:h}]},{type:a,value:", the user interface component can now transfer the file directly to the S3 storage."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If you want to store more than one file, you have to repeat this process accordingly."}]},{type:a,value:c},{type:b,tag:z,props:{id:K},children:[{type:b,tag:g,props:{href:"#authorization-when-handling-files-from-the-frontend",ariaHidden:q,tabIndex:r},children:[{type:b,tag:s,props:{className:[t,u]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"While in the integration layer it is relatively clear who can access which file, this is much more difficult to decide in the frontend. this is much more difficult to decide, since here potentially everyone can access the interface first."}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{alt:R,contain:i,"max-width":o,src:"images\u002Fresources\u002Fdocumentation\u002Fconcept\u002Ffilehandling\u002Fdigiwf_save_file_sequence_diagram.png","lazy-src":"images\u002Fresources\u002Fdocumentation\u002Fconcept\u002Ffilehandling\u002Fpreview_digiwf_save_file_sequence_diagram.png"},children:[]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Saving file(s) from the frontend - detailed view."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{alt:"It is shown how saving files from the frontend works (sequence diagram).",contain:i,"max-width":"926",src:"images\u002Fresources\u002Fdocumentation\u002Fconcept\u002Ffilehandling\u002Fdigiwf_load_file_sequence_diagram.png","lazy-src":"images\u002Fresources\u002Fdocumentation\u002Fconcept\u002Ffilehandling\u002Fpreview_digiwf_load_file_sequence_diagram.png"},children:[]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Loading file(s) from the frontend - detailed view."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:"div",props:{className:["footnotes"]},children:[{type:a,value:c},{type:b,tag:"hr",props:{},children:[]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{id:"fn-1"},children:[{type:a,value:"see "},{type:b,tag:g,props:{href:T,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:T}]},{type:b,tag:g,props:{href:"#fnref-1",className:["footnote-backref"]},children:[{type:a,value:"↩"}]}]},{type:a,value:c}]},{type:a,value:c}]}]},dir:"\u002Fresources\u002Fdocumentation\u002Fconcept",path:U,extension:".md",createdAt:V,updatedAt:V},navigation:[{title:"DigiWF Overview",category:j,categoryIcon:k,path:"\u002Fresources\u002Fdocumentation\u002Fconcept\u002Foverview"},{title:W,category:j,categoryIcon:k,path:X},{title:A,category:j,categoryIcon:k,path:U},{title:Y,category:j,categoryIcon:k,path:Z},{title:"Event Bus Topics",category:j,categoryIcon:k,path:"\u002Fresources\u002Fdocumentation\u002Fconcept\u002Feventbustopics"}],prev:{title:W,path:X},next:{title:Y,path:Z}}],fetch:{},mutations:void 0}}("text","element","\n","code","li","p","a","presigned URL","","Concept","mdi-floor-plan","figure","v-img","figcaption","960","S3 Service","true",-1,"span","icon","icon-link",3,"section","ol","S3 Bucket","h3","Handling files","file-handling-in-the-application-integration-layer",2,"File handling in the Application Integration Layer","incoming-files","Incoming Files","outgoing-files","Outgoing Files","file-handling-in-gui-integration-layer","File handling in GUI Integration Layer","authorization-when-handling-files-from-the-frontend","Authorization when handling files from the frontend","S3 bucket","h2","ul","S3 service",".","It is shown how saving files from the frontend works.","File Upload Control","https:\u002F\u002Fdocs.aws.amazon.com\u002FAmazonS3\u002Flatest\u002Fuserguide\u002Fusing-presigned-url.html","\u002Fresources\u002Fdocumentation\u002Fconcept\u002Ffilehandling","2022-11-23T09:23:32.651Z","System Integration","\u002Fresources\u002Fdocumentation\u002Fconcept\u002Fintegration","Self Service","\u002Fresources\u002Fdocumentation\u002Fconcept\u002Fselfservice")));