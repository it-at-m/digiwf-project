---
title: DigiWF Architektur Übersicht
description: Was ist DigiWF aus 20K Meter Höhe.
category: 'Architektur'
categoryIcon: 'mdi-floor-plan'
position: 1
---

DigiWF ist das Bindeglied zwischen Ihren Frontend- und Backend-Systemen. Alles, was Sie über eine Netzwerkverbindung erreichen können, können Sie an DigiWF anhängen und deklarativ in Ihren BPMN-Prozessen verwenden. Wir sind die Brücke zwischen dem Entwicklerteam und den Prozessdesignern.

## Das DigiWF Plattform Konzept
<figure>
<v-img alt="The concept behind DigiWF. In the middle are your business processes, that can talk to your backend or 
the cloud via integration artifacts." contain max-width="960" 
src="images/resources/documentation/architecture/digiwf_concept_process_and_integrationplatform.png" 
lazy-src="images/resources/documentation/architecture/preview_digiwf_concept_process_and_integrationplatform.png" ></v-img>
<figcaption>Interaction DigWF Core & the surrounding systems</figcaption>
</figure>

DigiWF stellt vier Kernkompetenzen zur Verfügung:

- Einen Prozesslayer (DigiWF Core), in dem natürlich die Prozessinstanzen und Entscheidungstabellen (DMN) auf Basis von Camunda BPMN ausgeführt werden. Aber auch die Formularbeschreibungen gespeichert, oder User Tasks ausgeführt werden.
- Einen Integrations Layer Richtung frontend. Hier werden zur Laufzeit Schnittstellen und / oder Formulare zur Verfügung gestellt, die man in eigenen (Frontend) Anwendungen nutzen kann. Alternativ kann die fertige Tasklist verwendet werden, um User Tasks abzuarbeiten, oder den Stand eines Workflows anzuzeigen.
-  Einen Integrationslayer richtung Backend. Über den kann alles was eine Schnittstelle hat angebunden werden. Hat es keine Schnittstelle, kann immer noch ein RPA Dienst verwendet werden. Um schnell eigene Verfahren in die Prozesse einbinden zu können, werden eine Reihe von "ready to use" Bausteinen in Form von Spring Startern zur Verfügung gestellt. Diese können genutzt werden, um wiederkehrende Problemstellung - wie beispielsweise der Umgang mit ein- oder ausgehenden Dateien (z.B. E-Mail mit Anhang) - standardisiert zu lösen. Einfach Starter einfügen und die API nutzen.
-  Einen Co-Creation Bereich, um auch nicht technischen Nutzern die Möglichkeit zu geben ihre Prozesse, entscheidungstabellen und Formulare modellieren und sogar auf der Plattform ausbringen zu können. Dafür wurde eine eigene Web IDE erstellt, die einfach über den Browser genutzt werden kann.

## Core Modules
<figure>
<v-img alt="Das Konzept hinter DigiWF wird dargestellt. In der Mitte ist DigiWF Core (der Prozess Layer) dargestellt.
Nach oben haben wir eine Integration Richtung GUI, nach unten eine Integration in die Verfahrenslandschaft. Rechts 
ist als Build Komponente das Co-Creation dargestellt." contain 
max-width="960" 
src="images/resources/documentation/architecture/digiwf_how_to_integrate_your_app.
png" 
lazy-src="images/resources/documentation/architecture/preview_digiwf_how_to_integrate_your_app.png" ></v-img>
<figcaption>Die Kern Komponenten</figcaption>
</figure>

Das Bild oben zeigt eine mögliche "ausgewachsene" DigiWF-Architektur einschließlich selbst erstellter Artefakte. Alles in
Blau wird vom DigiWF-Projekt bereitgestellt, aber wir sind offen für Integrationen. Es könnten also folgende Artefakte 
erstellen und integriert werden:

- eigene Frontends (Die Technologie ist nichjt wirklich entscheidend - wenn man aber beispielsweise unsere 
  Formurlarkomponente verwenden will, dann geht das mit VueJs am besten)
- eigene Integrationsartefakte zur Kommunikation mit der On-Premise- oder Cloud-Infrastruktur
- eigene (Mikro-)Services

Es kann jede beliebige Technologie verwenden werden. Bestens unterstützt wird man aber, wenn im Frontend VueJS (mit 
VuetifyJs) und in den Integrations- oder anderen Services Spring Boot verwendet wird. Es gibt nur zwei Voraussetzungen:

- Die Frontend-Technologie muss über einen GraphQL-Client verfügen
- Das Backend (Dienste, Integrationsartefakte) muss in der Lage sein, mit einer der von [Spring Cloud Streams]
  (https://spring.io/projects/spring-cloud-stream) unterstützten Binder-Implementierungen zu kommunizieren.

<v-alert color="yellow darken-1" border="left" elevation="2" colored-border icon="mdi-robot-confused">
Wenn eine andere Event Bus Infrastruktur verwendet werden soll, als Apache Kafka, so kann dies in der DigiWF 
Konfiguration erfolgen.
</v-alert>

Of course - if you'll use Spring Boot in your backend components and VueJs as front end technology, you can use all cross-section components (like Spring Boot Starters, NPM components, ...) we have created for our components.

### DigiWF Core
DigiWF Core ist das Herzstück von DigiWF und besteht aus 5 Diensten. Zur Interaktion mit Frontend-Anwendungen gibt 
es eine Graph-QL API. Zusätzlich eine sehr generische API, die über einen Event Bus mit verschiedenen 
Backend-Systemen kommuniziert.

<figure>
<v-img alt="Die fünf Services in Digiwf Core: Service Definition, Form + Validation, Task, Service Instance and 
Process Engine" contain max-width="960" 
src="images/resources/documentation/architecture/digiwf_core_services.png" 
lazy-src="images/resources/documentation/architecture/preview_digiwf_core_services.png" ></v-img>
<figcaption>Die DigiWF Core Services</figcaption>
</figure>

Das Hauptziel von DigiWF ist es, eine deklarative Möglichkeit für Prozessdesigner zu schaffen, mit einer technischen Infrastruktur zu interagieren. Dafür haben wir einige unterstützende Dienste rund um den Opensource [camunda](https://camunda.com/)-Workflow erstellt:

- Prozessdienst: Dies ist der Service, in den Camunda eingebettet ist. Es wird hauptsächlich verwendet, um die 
  BPMN-Workflows auszuführen.
- Serviceinstanz: Dies behandelt jede Art von Serviceinstanzen. Eine Serviceinstanz kann ein Prozess sein, muss aber 
  nicht.
- Task Service: Dieser Service übernimmt alles, was wir für menschliche Aufgaben benötigen (Autorisierung, Mapping, Rückkanal, ...).
- Formular- und Validierungsservice: Alles, was wir im Zusammenhang mit Formularen benötigen, wird hier verarbeitet. 
  Wir speichern die Formulardefinition und führen alle Arten von Formularvalidierungen durch.
- Servicedefinitionsservice: Dieser Service ist für die Definition eines Services und die entsprechenden 
  Konfigurationen 
  zuständig.
   
### DigiWF Integration
<figure>
<v-img alt="Das DigiWF-Konzept, wie man eigene Integrationsartefakte basierend auf verschiedenen Spring Boot 
Startern wie zum Beispiel Mail- oder S3-Dateidienst." contain
max-width="960"
src="images/resources/documentation/architecture/digiwf_how_to_build_your_own_service.
png"
lazy-src="images/resources/documentation/architecture/preview_digiwf_how_to_build_your_own_service.png" ></v-img>
<figcaption>Ein Beispiel, wie ein benutzerdefiniertes Integrationsartefakt basierend auf unseren Startern 
erstellt werden kann</figcaption>
</figure>

Um ein beliebiges Backend-System zu integrieren, kann dies über die Integrationsschicht getan werden. Die 
DigiWF-Integration ist einerseits eine Reihe vordefinierter Integrationsartefakte wie S3, Mail, JMS oder andere. Auf der anderen Seite ist die DigiWF-Integration eine Toolbox, die hilft, so schnell wie möglich eigene Integrationsartefakte zu erstellen. Dies wird durch die konsequente Verwendung von Spring Boot Startern zur Implementierung von Basisfunktionalitäten gewährleistet.

### DigiWF Tasklist
Dies ist ein einfaches Frontend zur Interaktion mit laufenden Prozessinstanzen. Jede Benutzeraufgabe kommt auf der 
Aufgabenliste vor und kann abgeholt werden (natürlich nur, wenn man das Recht dazu hat). Über die Taskliste können 
Sie den Status „Ihrer“ Prozesse einsehen und neue Instanzen starten. Wem ein so hochgradig standardisiertes Frontend 
nicht gefällt, kann "ready to use" Komponenten wie den Form Renderer verwenden und in die eigene, schöne Web Anwendung 
integrieren. 
Oder man kann die API direkt verwenden und ein schickes Frontend in der gewünschten Technologie selbst erstellen.  

### DigiWF Co-Creation
Die DigiWF Co-Creation ist der Low-Code-Bereich. Hier kann ein Prozessdesigner BPMN-Prozesse zeichnen, 
mit Entscheidungstabellen (DMN) herum tüfteln oder Webformulare per Drag and Drop erstellen. Auch das Deployment in 
verschiedenen Infrastrukturen ist über diese Web-App möglich.
<figure>
<v-img contain max-width="960" alt="Ein Bild des Drag & Drop Form Builders aus dem Co-Creation Bereich."  
src="images/resources/documentation/architecture/form_builder.png" 
lazy-src="images/resources/documentation/architecture/preview_form_builder.png" ></v-img>
<figcaption>Der DigiWF Form Builder</figcaption>
</figure>

[comment]: <> (<v-alert color="yellow darken-1" border="left" elevation="2" colored-border icon="mdi-robot-confused">)

[comment]: <> (This is a hint field!)

[comment]: <> (</v-alert>)

[comment]: <> (<v-alert color="red darken-1" border="left" elevation="2" colored-border icon="mdi-robot-angry">)

[comment]: <> (This is a warn field!)

[comment]: <> (</v-alert>)

[comment]: <> (<v-alert color="grey lighten-1" border="left" elevation="2" colored-border icon="mdi-robot-happy">)

[comment]: <> (This is a neutral field!)

[comment]: <> (</v-alert>)

