__NUXT_JSONP__("/de/ecosystem/contribution/contribution", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj){return {data:[{article:{slug:"contribution",description:"Wie kann man sich an der Entwicklung von DigiWF beteiligen?",title:w,category:w,categoryIcon:P,position:1,toc:[{id:Q,depth:2,text:R},{id:S,depth:T,text:U},{id:V,depth:T,text:W}],body:{type:"root",children:[{type:b,tag:"h2",props:{id:Q},children:[{type:b,tag:l,props:{href:"#dokumentation",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[k,s]},children:[]}]},{type:a,value:R}]},{type:a,value:e},{type:b,tag:X,props:{id:S},children:[{type:b,tag:l,props:{href:"#dokumentation-von-integrationsartefakten",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[k,s]},children:[]}]},{type:a,value:U}]},{type:a,value:e},{type:b,tag:t,props:{},children:[{type:a,value:"Die Dokumentation von (offiziellen) Integrations Artefakten soll einerseits in dem jeweiligen Repository erfolgen.\nAndererseits hier in der offiziellen Gesamtdokumentation. Um nicht doppelt Inhalte pflegen zu müssen gelten folgende\nRegeln:"}]},{type:a,value:e},{type:b,tag:"ol",props:{},children:[{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"Die Dokumentation erfolgt ausschließlich in englischer Sprache. Auch in andere Übersetzungen (wie beispielsweise\nDeutsch) wird die englische Dokumentation eingebunden."}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"Die Dokumentation liegt im jeweiligen Repo im Ordner "},{type:b,tag:g,props:{},children:[{type:a,value:x}]},{type:a,value:"."}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"Die Abschnitte der Dokumentation wird in einzelne Dokumente aufgeteilt. Diese werden dann in das "},{type:b,tag:g,props:{},children:[{type:a,value:"readme.md"}]},{type:a,value:" im\nRepo, als auch in die zentrale Dokumentation eingebunden."}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"Für jede Sprache muss im Ordner "},{type:b,tag:g,props:{},children:[{type:a,value:"[Sprache]\u002Fresources\u002Fmodules"}]},{type:a,value:" eine Seite erstellt werden. Die Markdown Dateien aus\nden Repos werden über die Komponente "},{type:b,tag:g,props:{},children:[{type:a,value:z}]},{type:a,value:" eingebunden. Element Templates können über\n"},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:" dargestellt werden."}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"Für den Integrationsartefakt wird ein Eintrag auf der Seite "},{type:b,tag:g,props:{},children:[{type:a,value:"[Sprache]\u002Fresources\u002Fmodules\u002Fmodules.md"}]},{type:a,value:" erstellt\n(auch hier bitte für alle Übersetzungen). Um eine Karte auf der Übersichtsseite darzustellen muss die Komponente\n"},{type:b,tag:g,props:{},children:[{type:a,value:A}]},{type:a,value:" in das bereits vorhandene "},{type:b,tag:g,props:{},children:[{type:a,value:"\u003Cv-row\u003E"}]},{type:a,value:" Element eingefügt werden."}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"Im Ordner "},{type:b,tag:g,props:{},children:[{type:a,value:x}]},{type:a,value:" sollten (mindestens) folgende Inhalte liegen: Quickstart, Architekturüberblick (möglichst mit\nBild), alle\nOperationen (Element Templates) in eigenen Dateien. Bitte vor allem die Input und Output Parameter der Element\nTemplates dokumentieren (siehe hierfür auch "},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:")."}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"Bilder müssen mit absoluten Pfaden eingefügt werden, um sie auch hier korrekt anzeigen zu können. In github gibt\nes dazu die Funktion \"copy permalink\" (siehe Screenshot unten). Ob das Bild über Markdown oder HTML eingebunden\nwird ist egal. Bei einer Einbindung über HTML wäre es schon, die Größe zu begrenzen."}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"Wichtigster Punkt: Bitte schau, das alles funktioniert und gut aussieht. Beispielsweise, dass der Text nicht über\ndie Karten ragt. Das Bilder möglichst einen Maximalwert in der Breite haben (z.B. 960px), usw."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:Y,props:{color:"red darken-1",border:Z,elevation:_,"colored-border":v,icon:"mdi-robot-angry",className:["pb-4"]},children:[{type:a,value:"\nEs ist wichtig bei Änderungen der Dokumentation im Repo die zentrale Dokumentationsseite nochmal zu bauen und \nauszubringen. Da es sich um eine statische Seite handelt, bekommt die nichts von Änderungen in einem anderen Repo \u002F \nauf einem anderen Server mit.\n"}]},{type:a,value:e},{type:b,tag:Y,props:{color:"yellow darken-1",border:Z,elevation:_,"colored-border":v,icon:"mdi-robot-confused"},children:[{type:a,value:"\nWenn man in den Dateien im Ordner `docs` auf Überschriften verzichtet und diese stattdessen auf der \nBeschreibungsseite platziert, so wird automatisch auf der rechten Seite ein Inhaltsverzeichnis generiert. \nÜberschriften innerhalb der referenzierten Dokumente können hier nicht gezeigt werden.\n"}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:a,value:e},{type:b,tag:C,props:{alt:"Es wird gezeigt, wo sich auf github die Schaltfläche befindet, über die absolute Links zu Bildern \nkopiert werden können. (Screenshot)",contain:v,"max-width":D,src:"images\u002Fecosystem\u002Fcontribution\u002Fgithub_file_link.png","lazy-src":"images\u002Fecosystem\u002Fcontribution\u002Fpreview_github_file_link.png"},children:[]},{type:a,value:e},{type:b,tag:E,props:{},children:[{type:a,value:"Absolute Pfade zu Bildern"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:X,props:{id:V},children:[{type:b,tag:l,props:{href:"#spezielle-komponenten",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[k,s]},children:[]}]},{type:a,value:W}]},{type:a,value:e},{type:b,tag:F,props:{id:"dwfintegrationartifact"},children:[{type:b,tag:l,props:{href:"#dwfintegrationartifact",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[k,s]},children:[]}]},{type:a,value:A}]},{type:a,value:e},{type:b,tag:t,props:{},children:[{type:a,value:G},{type:b,tag:g,props:{},children:[{type:a,value:A}]},{type:a,value:" können auf der Übersichts Seite für die Integrationsartefakte \"Kacheln\"\nerstellt werden."}]},{type:a,value:e},{type:b,tag:H,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,L]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:$}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,f,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:"mdi-email-fast"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,f,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:"mail-Integration"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,f,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:"Artifact to integrate an e-mail server, so you can send mails from processes."},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,f,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:"https:\u002F\u002Fgithub.com\u002Fit-at-m\u002Fdigiwf-email-integration"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,f,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:"\u002Fresources\u002Fmodules\u002Femailintegration"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:$}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:t,props:{},children:[{type:a,value:"Attribute:"}]},{type:a,value:e},{type:b,tag:"ul",props:{},children:[{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:k}]},{type:a,value:" = Der "},{type:b,tag:l,props:{href:"https:\u002F\u002Fmaterialdesignicons.com\u002F",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Material Design Icons"}]},{type:a,value:" Code für das Icon, das oben links in der Ecke dargestellt werden soll."}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ab}]},{type:a,value:" = Der Name des Integrationsartefakts."}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ac}]},{type:a,value:" = Die Beschreibung des Integrationsartefakts. Bitte darauf achten, dass die Beschreibung möglichst\nkurz die Leistung darstellt, aber nicht so lang ist, dass andere Inhalte aus der Karte \"gepresst\" werden."}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ad}]},{type:a,value:" = Die URL zum github Repository."}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:x}]},{type:a,value:" = Der relative Pfad auf die Beschreibung, die in dieser Dokumentation abgelegt ist. Er wird in der Regel\nmit "},{type:b,tag:g,props:{},children:[{type:a,value:"\u002Fresources\u002Fmodules\u002F"}]},{type:a,value:" beginnen, gefolgt vom Namen der Markdowndatei (ohne Dateiendung). Wenn die Datei an\nanderer Stelle abgelegt wurde, dann muss natürlich auch der Pfad entsprechend angepasst werden. Der Pfad für die\nÜbersetzungen wird automatisch angepasst. Es muss also beispielsweise für die Deutsche Übersetzung kein "},{type:b,tag:g,props:{},children:[{type:a,value:"de"}]},{type:a,value:"\nvorangestellt werden."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:a,value:e},{type:b,tag:C,props:{alt:"Es wird gezeigt, wie die Darstellung einer Karte für einen Integrationsartefakt in der Doku aussieht. \n(Screenshot)",contain:v,"max-width":D,src:"images\u002Fecosystem\u002Fcontribution\u002Fintegration_artifact_card.png","lazy-src":"images\u002Fecosystem\u002Fcontribution\u002Fpreview_integration_artifact_card.png"},children:[]},{type:a,value:e},{type:b,tag:E,props:{},children:[{type:a,value:"Integration Artifact Card (Beispiel)"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:F,props:{id:"dwfmarkdownloader"},children:[{type:b,tag:l,props:{href:"#dwfmarkdownloader",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[k,s]},children:[]}]},{type:a,value:z}]},{type:a,value:e},{type:b,tag:t,props:{},children:[{type:a,value:G},{type:b,tag:g,props:{},children:[{type:a,value:z}]},{type:a,value:" können Markdown Dateien geladen werden, die auf anderen Servern liegen."}]},{type:a,value:e},{type:b,tag:H,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,L]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:ae}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"source"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,f,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:"https:\u002F\u002Fraw.githubusercontent.com\u002Fit-at-m\u002Fdigiwf-s3-integration\u002Fdev\u002FREADME.\nmd"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:t,props:{},children:[{type:a,value:"Bindet man Markdown Dokumente aus github ein, so bietet es sich an, hier die \"raw\" Ansicht zu wählen."}]},{type:a,value:e},{type:b,tag:F,props:{id:"dwfelementtemplatedocs"},children:[{type:b,tag:l,props:{href:"#dwfelementtemplatedocs",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[k,s]},children:[]}]},{type:a,value:y}]},{type:a,value:e},{type:b,tag:t,props:{},children:[{type:a,value:G},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:" können Element Templates geladen werden, die auf einem anderen Server\nliegen. Das Template wird dann als Liste angezeigt, wobei jede Zeile einem Property entspricht."}]},{type:a,value:e},{type:b,tag:H,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,L]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:ag}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"jsonurl"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,f,o]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:"https:\u002F\u002Fraw.githubusercontent.com\u002Fit-at-m\u002Fdigiwf-email-integration\u002Fdev\u002Fdocs\u002FsendMail.json"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:a,value:e},{type:b,tag:C,props:{alt:"Es wird gezeigt, wie die Darstellung der Element Templates in der Doku aussieht. (Screenshot)",contain:v,"max-width":D,src:"images\u002Fecosystem\u002Fcontribution\u002Felement_template_table.png","lazy-src":"images\u002Fecosystem\u002Fcontribution\u002Fpreview_element_template_table.png"},children:[]},{type:a,value:e},{type:b,tag:E,props:{},children:[{type:a,value:"Element Template Tabelle (Beispiel)"}]},{type:a,value:e}]}]},dir:"\u002Fde\u002Fecosystem\u002Fcontribution",path:ah,extension:".md",createdAt:ai,updatedAt:ai},navigation:[{title:w,category:w,categoryIcon:P,path:ah}],prev:aj,next:aj}],fetch:{},mutations:void 0}}("text","element","span","token","\n","punctuation","code","\"","li","tag","icon","a","attr-name","attr-value","attr-equals","=","true",-1,"icon-link","p","\u003E","","Contributions","docs","DwfElementTemplateDocs","DwfMarkdownLoader","DwfIntegrationArtifact","figure","v-img","960","figcaption","h4","Über die Komponente ","div","nuxt-content-highlight","pre","language-html","line-numbers","\u003C","\n   ","\u003C\u002F","mdi-gift-open-outline","dokumentation","Dokumentation","dokumentation-von-integrationsartefakten",3,"Dokumentation von Integrationsartefakten","spezielle-komponenten","Spezielle Komponenten","h3","v-alert","left","2","dwf-integration-artifact"," \n   ","name","description","github","dwf-markdown-loader"," ","dwf-element-template-docs","\u002Fde\u002Fecosystem\u002Fcontribution\u002Fcontribution","2022-05-19T13:52:43.239Z",null)));