__NUXT_JSONP__("/de/resources/modules/emailintegration", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:[{article:{slug:"emailintegration",description:k,title:k,category:i,categoryIcon:j,position:100,toc:[{id:m,depth:2,text:n}],body:{type:"root",children:[{type:g,tag:l,props:{source:"https:\u002F\u002Fraw.githubusercontent.com\u002Fit-at-m\u002Fdigiwf-email-integration\u002Fdev\u002Fdocs\u002Fquickstart.md"},children:[{type:d,value:h}]},{type:d,value:o},{type:g,tag:l,props:{source:"https:\u002F\u002Fraw.githubusercontent.com\u002Fit-at-m\u002Fdigiwf-email-integration\u002Fdev\u002Fdocs\u002Farchitecture.md"},children:[{type:d,value:h}]},{type:d,value:o},{type:g,tag:l,props:{source:"https:\u002F\u002Fraw.githubusercontent.com\u002Fit-at-m\u002Fdigiwf-email-integration\u002Fdev\u002Fdocs\u002Fdocumentation.md"},children:[{type:d,value:h}]},{type:d,value:h},{type:g,tag:"h2",props:{id:m},children:[{type:g,tag:"a",props:{ariaHidden:"true",href:"#element-templates",tabIndex:-1},children:[{type:g,tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:d,value:n}]},{type:d,value:h},{type:g,tag:"dwf-element-template-docs",props:{jsonurl:"https:\u002F\u002Fraw.githubusercontent.com\u002Fit-at-m\u002Fdigiwf-email-integration\u002Fdev\u002Fdocs\u002FsendMail.json"},children:[{type:d,value:h}]}]},dir:"\u002Fde\u002Fresources\u002Fmodules",path:p,extension:".md",createdAt:"2022-06-02T18:58:48.902Z",updatedAt:"2022-06-02T18:58:48.906Z"},navigation:[{title:"Integration Artifacts Übersicht",category:i,categoryIcon:j,path:"\u002Fde\u002Fresources\u002Fmodules\u002Fmodules"},{title:q,category:i,categoryIcon:j,path:r},{title:k,category:i,categoryIcon:j,path:p}],prev:{title:q,path:r},next:null}],fetch:{"DwfMarkdownLoader:0":{markdown:"## Getting started\n\nBelow is an example of how you can install and set up your service.\n\n1. Use the spring initalizer and create a Spring Boot application with `Spring Web`\n   dependencies [https:\u002F\u002Fstart.spring.io](https:\u002F\u002Fstart.spring.io)\n2. Add the digiwf-email-integration-starter dependency.\n\nWith Maven:\n\n```\n   \u003Cdependency\u003E\n        \u003CgroupId\u003Eio.muenchendigital.digiwf\u003C\u002FgroupId\u003E\n        \u003CartifactId\u003Edigiwf-email-integration-starter\u003C\u002FartifactId\u003E\n        \u003Cversion\u003E${digiwf.version}\u003C\u002Fversion\u003E\n   \u003C\u002Fdependency\u003E\n```\n\nWith Gradle:\n\n```\nimplementation group: 'io.muenchendigital.digiwf', name: 'digiwf-email-integration-starter', version: '${digiwf.version}'\n```\n\n3. Add your preferred binder (see [Spring Cloud Stream](https:\u002F\u002Fspring.io\u002Fprojects\u002Fspring-cloud-stream)). In this\n   example, we use kafka.\n\nMaven:\n\n ```\n     \u003Cdependency\u003E\n         \u003CgroupId\u003Eorg.springframework.cloud\u003C\u002FgroupId\u003E\n         \u003CartifactId\u003Espring-cloud-stream-binder-kafka\u003C\u002FartifactId\u003E\n     \u003C\u002Fdependency\u003E\n```\n\nGradle:\n\n```\nimplementation group: 'org.springframework.cloud', name: 'spring-cloud-stream-binder-kafka'\n```\n\n4. Configure your binder.\u003Cbr\u003E\n   For an example on how to configure your binder,\n   see [DigiWF Spring Cloudstream Utils](https:\u002F\u002Fgithub.com\u002Fit-at-m\u002Fdigiwf-spring-cloudstream-utils#getting-started)\n   Note that you DO have to\n   configure ```spring.cloud.function.definition=functionRouter;sendMessage;sendCorrelateMessage;```, but you don't need\n   typeMappings. These are configured for you by the digiwf-mail-integration-starter. You also have to configure the\n   topics you want to read \u002F send messages from \u002F to.\n\n5. Configure your application\n\n```\nspring:\n  mail:\n    host: mail.example.com\n    port: 587\n    username: mymail@example.de\n    password: yourExcellentPassword\n    properties:\n      mail.debug: false\n      mail.tls: true\n      mail.transport.protocol: smtp\n      mail.smtp.host: mail.example.com\n      mail.smtp.port: 587\n      mail.smtp.connectiontimeout: 10000\n      mail.smtp.timeout: 10000\n      mail.smtp.auth: true\n      mail.smtp.ssl.trust: \"*\"\n      mail.smtp.ssl.checkserveridentity: true\n      mail.smtp.socketFactory.fallback: true\n      mail.smtp.starttls.enable: true\n```\n\nYou can also use digiwf.mail.fromAddress to define a mail address when not using smtp.auth.\n\n6. Define a RestTemplate. For an example, please refer to\n   the [example project](https:\u002F\u002Fgithub.com\u002Fit-at-m\u002Fdigiwf-email-integration\u002Ftree\u002Fdev\u002Fexample-digiwf-email-integration)."},"DwfMarkdownLoader:1":{markdown:"## Architecture\n\n\u003Cdiv\u003E\n    \u003Cimg src=\"https:\u002F\u002Fgithub.com\u002Fit-at-m\u002Fdigiwf-email-integration\u002Fraw\u002Fde4289200223bd74548dc462f07f9d07efdcb27c\u002Fimages\u002Farchitecture.png\" alt=\"Architecture\"\u003E\n\u003C\u002Fdiv\u003E\n"},"DwfMarkdownLoader:2":{markdown:"## Documentation\n\nTo send an e-mail through the eventbus, simply create\na [Mail](https:\u002F\u002Fgithub.com\u002Fit-at-m\u002Fdigiwf-email-integration\u002Ftree\u002Fdev\u002Fdigiwf-email-integration\u002Fsrc\u002Fmain\u002Fjava\u002Fio\u002Fmuenchendigital\u002Fdigiwf\u002Femail\u002Fintegration\u002Fdomain\u002Fmodel\u002FMail.java)\nobject, set the TYPE-Header\nto [MessageProcessor.TYPE_HEADER_SEND_MAIL_FROM_EVENT_BUS](https:\u002F\u002Fgithub.com\u002Fit-at-m\u002Fdigiwf-email-integration\u002Ftree\u002Fdev\u002Fdigiwf-email-integration\u002Fsrc\u002Fmain\u002Fjava\u002Fio\u002Fmuenchendigital\u002Fdigiwf\u002Femail\u002Fintegration\u002Fdomain\u002Fstreaming\u002FMessageProcessor.java)\nand send it to the corresponding kafka topic. That's it!"},"DwfElementTemplateDocs:0":{elementtemplate:{name:"Send E-Mail",id:"de.muenchen.digitalwf.templates.send-email",appliesTo:["bpmn:CallActivity"],properties:[{label:"Template",type:b,editable:e,value:"StreamingTemplateV01",binding:{type:"property",name:"calledElement"}},{label:"Event Topic",type:b,value:f,binding:{type:c,expression:a,target:"app_topic_name"},constraints:{notEmpty:a}},{label:"Event Message",type:b,editable:e,value:"genericEvent",binding:{type:c,expression:a,target:"app_message_name"},constraints:{notEmpty:a}},{label:"Type Header",type:b,editable:e,value:"sendMailFromEventBus",binding:{type:c,expression:a,target:"app_type_name"},constraints:{notEmpty:a}},{label:"Receiver",type:b,value:f,binding:{type:c,expression:a,target:"receivers"},constraints:{notEmpty:a}},{label:"Receiver (CC)",type:b,value:f,binding:{type:c,expression:a,target:"receiversCc"},constraints:{notEmpty:e}},{label:"Receiver (BCC)",type:b,value:f,binding:{type:c,expression:a,target:"receiversBcc"},constraints:{notEmpty:e}},{label:"Subject",type:b,value:f,binding:{type:c,expression:a,target:"subject"},constraints:{notEmpty:a}},{label:"Body",type:"Text",value:f,binding:{type:c,expression:a,target:"body"},constraints:{notEmpty:a}},{label:"Reply-To Address",type:b,value:f,binding:{type:c,expression:a,target:"replyTo"},constraints:{notEmpty:e}},{label:"Attachment Paths (S3)",type:b,value:f,description:"Create an array with json.array('','') (not yet implemented)",binding:{type:c,expression:a,target:"attachmentPaths"},constraints:{notEmpty:e}},{label:"Dispatch Status",value:s,type:"Boolean",binding:{type:"camunda:out",source:s},constraints:{notEmpty:e}}],entriesVisible:{_all:e}}}},mutations:void 0}}(true,"String","camunda:in","text",false,"","element","\n","Integration Artifacts","mdi-toy-brick","E-Mail Integration Artifact","dwf-markdown-loader","element-templates","Element Templates","\n\n\n","\u002Fde\u002Fresources\u002Fmodules\u002Femailintegration","OK.EWO Integration Artifact","\u002Fde\u002Fresources\u002Fmodules\u002Fokewointegration","mailSentStatus")));