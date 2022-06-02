__NUXT_JSONP__("/resources/documentation/concept/eventbustopics", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar){return {data:[{article:{slug:"eventbustopics",description:"How to communicate with DigiWF?",title:B,category:g,categoryIcon:h,position:5,toc:[{id:C,depth:D,text:E},{id:F,depth:D,text:G},{id:H,depth:I,text:J},{id:K,depth:I,text:L}],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:a,value:"The DigiWF applications communicate with an "},{type:b,tag:c,props:{},children:[{type:a,value:z}]},{type:a,value:" to exchange events that occur within the DigiWF plattform.\nInternally the DigiWF application use spring cloud stream as an abstraction layer to interact with the "},{type:b,tag:c,props:{},children:[{type:a,value:z}]},{type:a,value:". Therefore, the "},{type:b,tag:c,props:{},children:[{type:a,value:z}]},{type:a,value:" is interchangeable as long as a spring cloud stream binder exists."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"In this article we explain our topic naming conventions and list the currently existing topics."}]},{type:a,value:d},{type:b,tag:M,props:{id:C},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#naming-conventions-for-event-bus-topics",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:E}]},{type:a,value:d},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,x]},children:[{type:b,tag:c,props:{},children:[{type:a,value:"\u003Cprefix\u003E-\u003Cdomain\u003E-\u003Cusage-context\u003E-\u003Cenvironment\u003E\n"}]}]}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Every DigiWF topic name consist of these 3 parts:"}]},{type:a,value:d},{type:b,tag:N,props:{},children:[{type:a,value:d},{type:b,tag:i,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"prefix"}]},{type:a,value:" is used to group the topics to a specific application. In the context of DigiWF this prefix is usually "},{type:b,tag:c,props:{},children:[{type:a,value:"dwf"}]},{type:a,value:y}]},{type:a,value:d},{type:b,tag:i,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"domain"}]},{type:a,value:" Every DigiWF topic belongs to a specific domain. The name of the domain may be similar to the application name."}]},{type:a,value:d},{type:b,tag:i,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"usage-context"}]},{type:a,value:" If a domain has more than 1 topic an additional "},{type:b,tag:c,props:{},children:[{type:a,value:O}]},{type:a,value:" is added to the topics name. The "},{type:b,tag:c,props:{},children:[{type:a,value:O}]},{type:a,value:" is optional."}]},{type:a,value:d},{type:b,tag:i,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"environment"}]},{type:a,value:" is the suffix describing the environment the applications run in."}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Examples:"}]},{type:a,value:d},{type:b,tag:N,props:{},children:[{type:a,value:d},{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:"dwf-cocreation-ENV"}]},{type:a,value:" is the main topic of the cocreation plattform. To this topic deployment events are sent."}]},{type:a,value:d},{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:"dwf-cocreation-deploy-ENV"}]},{type:a,value:" is the second topic of the cocreation plattform. To this topic deployment success messages are sent."}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:M,props:{id:F},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#available-event-bus-topics",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:G}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Currently, the environments "},{type:b,tag:c,props:{},children:[{type:a,value:P}]},{type:a,value:A},{type:b,tag:c,props:{},children:[{type:a,value:Q}]},{type:a,value:A},{type:b,tag:c,props:{},children:[{type:a,value:R}]},{type:a,value:S},{type:b,tag:c,props:{},children:[{type:a,value:T}]},{type:a,value:" exist. "},{type:b,tag:c,props:{},children:[{type:a,value:P}]},{type:a,value:A},{type:b,tag:c,props:{},children:[{type:a,value:Q}]},{type:a,value:S},{type:b,tag:c,props:{},children:[{type:a,value:R}]},{type:a,value:" are our CI\u002FCD stages and "},{type:b,tag:c,props:{},children:[{type:a,value:T}]},{type:a,value:" is used for development."}]},{type:a,value:d},{type:b,tag:U,props:{id:H},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#domain-digiwf-engine",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:J}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"The digiwf-engine uses the spring cloud stream function router to route events based on the "},{type:b,tag:c,props:{},children:[{type:a,value:m}]},{type:a,value:" header to the according spring cloud functions.\nTherefore, every message that is sent to "},{type:b,tag:c,props:{},children:[{type:a,value:"dwf-digiwf-engine-\u003CENV\u003E"}]},{type:a,value:" requires the header "},{type:b,tag:c,props:{},children:[{type:a,value:m}]},{type:a,value:y}]},{type:a,value:d},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,x]},children:[{type:b,tag:c,props:{},children:[{type:a,value:"dwf-digiwf-engine-\u003CENV\u003E\n"}]}]}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:V},{type:b,tag:c,props:{},children:[{type:a,value:m}]},{type:a,value:W}]},{type:a,value:X},{type:b,tag:Y,props:{},children:[{type:b,tag:Z,props:{},children:[{type:b,tag:k,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:_}]},{type:b,tag:l,props:{},children:[{type:a,value:$}]},{type:b,tag:l,props:{},children:[{type:a,value:aa}]}]}]},{type:b,tag:ab,props:{},children:[{type:b,tag:k,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"correlateMessageV01"}]},{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:ac}]}]},{type:b,tag:f,props:{},children:[{type:a,value:ad},{type:b,tag:c,props:{},children:[{type:a,value:ac}]},{type:a,value:" header type to correlate a message to a process instance."}]}]},{type:b,tag:k,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:ae}]},{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:"StartInstanceTOV01"}]}]},{type:b,tag:f,props:{},children:[{type:a,value:ad},{type:b,tag:c,props:{},children:[{type:a,value:ae}]},{type:a,value:" header type to start a new process instance with the process key and data."}]}]}]}]},{type:a,value:d},{type:b,tag:af,props:{},children:[{type:a,value:d},{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:ag}]},{type:a,value:ah},{type:b,tag:ai,props:{},children:[{type:a,value:aj}]},{type:a,value:y}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:U,props:{id:K},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#domain-cocreation",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:L}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Processes, decision tables and json schema forms that are developed in the cocreation plattform are deployed to the digiwf-engine with a deployment event that is sent to the "},{type:b,tag:c,props:{},children:[{type:a,value:ak}]},{type:a,value:" topic."}]},{type:a,value:d},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,x]},children:[{type:b,tag:c,props:{},children:[{type:a,value:"dwf-cocreation-\u003CENV\u003E\n"}]}]}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"In the cocreation plattform the user can choose the environment their artifact is deployed to.\nBased on their environment decision the deployment event is dynamically routed to the according topic.\nThis happens in the bpm-server application."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"The digiwf-engine application is a consumer of the "},{type:b,tag:c,props:{},children:[{type:a,value:ak}]},{type:a,value:" topic and deploys the artifacts (bpmn, dmn or json form) from incoming deployment events to the camunda engine.\nThe digiwf-engine uses the spring cloud stream function router to route events based on the "},{type:b,tag:c,props:{},children:[{type:a,value:m}]},{type:a,value:" header to the according spring cloud functions."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:V},{type:b,tag:c,props:{},children:[{type:a,value:m}]},{type:a,value:W}]},{type:a,value:X},{type:b,tag:Y,props:{},children:[{type:b,tag:Z,props:{},children:[{type:b,tag:k,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:_}]},{type:b,tag:l,props:{},children:[{type:a,value:$}]},{type:b,tag:l,props:{},children:[{type:a,value:aa}]}]}]},{type:b,tag:ab,props:{},children:[{type:b,tag:k,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:al}]},{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:"DeploymentEvent"}]}]},{type:b,tag:f,props:{},children:[{type:a,value:am},{type:b,tag:c,props:{},children:[{type:a,value:al}]},{type:a,value:" header type to deploy processes and decision tables to the digiwf-engine."}]}]},{type:b,tag:k,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:an}]},{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:"SchemaDeploymentEvent"}]}]},{type:b,tag:f,props:{},children:[{type:a,value:am},{type:b,tag:c,props:{},children:[{type:a,value:an}]},{type:a,value:" header type to deploy JSON schema forms to the digiwf-engine."}]}]}]}]},{type:a,value:d},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,x]},children:[{type:b,tag:c,props:{},children:[{type:a,value:"dwf-cocreation-deploy-\u003CENV\u003E\n"}]}]}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"After every deployment the digiwf-engine sends a deployment status event to the "},{type:b,tag:c,props:{},children:[{type:a,value:"dwf-cocreation-deploy-\u003CENV\u003E"}]},{type:a,value:" topic that informs subscribes of the topic about the success or failure of the deployment."}]},{type:a,value:d},{type:b,tag:af,props:{},children:[{type:a,value:d},{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:ag}]},{type:a,value:ah},{type:b,tag:ai,props:{},children:[{type:a,value:aj}]},{type:a,value:y}]},{type:a,value:d}]}]},dir:"\u002Fresources\u002Fdocumentation\u002Fconcept",path:ao,extension:".md",createdAt:ap,updatedAt:ap},navigation:[{title:"DigiWF Overview",category:g,categoryIcon:h,path:"\u002Fresources\u002Fdocumentation\u002Fconcept\u002Foverview"},{title:"System Integration",category:g,categoryIcon:h,path:"\u002Fresources\u002Fdocumentation\u002Fconcept\u002Fintegration"},{title:"Handling files",category:g,categoryIcon:h,path:"\u002Fresources\u002Fdocumentation\u002Fconcept\u002Ffilehandling"},{title:aq,category:g,categoryIcon:h,path:ar},{title:B,category:g,categoryIcon:h,path:ao}],prev:{title:aq,path:ar},next:null}],fetch:{},mutations:void 0}}("text","element","code","\n","p","td","Concept","mdi-floor-plan","li","strong","tr","th","type","a","true",-1,"span","icon","icon-link","div","nuxt-content-highlight","pre","language-text","line-numbers",".","Event Bus",", ","Event Bus Topics","naming-conventions-for-event-bus-topics",2,"Naming conventions for Event Bus Topics","available-event-bus-topics","Available Event Bus Topics","domain-digiwf-engine",3,"Domain digiwf-engine","domain-cocreation","Domain cocreation","h2","ul","\u003Cusage context\u003E","dev","test","demo"," and ","local-01","h3","The following values for the header "," are currently supported:","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","table","thead","Header Type","Payload Type","Description","tbody","CorrelateMessageTOV01","Use ","startProcessV01","blockquote","Note:","\nWe use springwolf to generate asyncapi documentations. Checkout the services asyncapi docs under ","em","\u002Fspringwolf\u002Fasyncapi-ui.html","dwf-cocreation-\u003CENV\u003E","deploy","Use the ","deploySchema","\u002Fresources\u002Fdocumentation\u002Fconcept\u002Feventbustopics","2022-06-02T18:58:48.906Z","Self Service","\u002Fresources\u002Fdocumentation\u002Fconcept\u002Fselfservice")));