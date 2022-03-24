---
title: DigiWF Architektur Übersicht
description: Was ist DigiWF aus 20K Meter Höhe.
category: 'Architektur'
categoryIcon: 'mdi-floor-plan'
position: 1
---

DigiWF ist das Bindeglied zwischen Ihren Frontend- und Backend-Systemen. Alles, was Sie über eine Netzwerkverbindung erreichen können, können Sie an DigiWF anhängen und deklarativ in Ihren BPMN-Prozessen verwenden. Wir sind die Brücke zwischen dem Entwicklerteam und den Prozessdesignern.

## The DigiWF Platform Concept
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
If you want use another EventBus infrastructure than Apache Kafka, you have to configure this in your DigiWF configurations.
</v-alert>

Of course - if you'll use Spring Boot in your backend components and VueJs as front end technology, you can use all cross-section components (like Spring Boot Starters, NPM components, ...) we have created for our components.

### DigiWF Core
DigiWF Core is the heart of DigiWF. As you can see in the section above it consists of 5 services. It has a GraphQL 
API to interact with frontend applications and a very generic API, that communicates with various backend systems over an event bus.

<figure>
<v-img alt="The five services inside digiwf core: Service Definition, Form + Validation, Task, Service Instance and 
Process Engine" contain max-width="960" 
src="images/resources/documentation/architecture/digiwf_core_services.png" 
lazy-src="images/resources/documentation/architecture/preview_digiwf_core_services.png" ></v-img>
<figcaption>The DigiWF Core Services</figcaption>
</figure>

The main goal of DigiWF is to create a declarative way for process designers to interact with a technical infrastructure. For this we've created some supporting services around the opensource [camunda](https://camunda.com/) workflow:

- Process Service: This is the service where Camunda is embedded. It is used mainly to execute the BPMN workflows.
- Service Instance: This handles any kind of service instances. A service instance can be a process, but does not
  have to do.
- Task Service: This service handles everything we need for human tasks (authorization, mapping, back channel, ...).
- Form & Validation Service: Everything we need in connection with forms is processed. We save the form definition and perform all kinds of form validation.
- Service Definition Service: This service is responsible for service definitions and the corresponding configurations.
   
### DigiWF Integration
<figure>
<v-img alt="The DigiWF concept, how to create own integration artifacts based on different Spring Boot Starters like 
Mail or S3 file service." contain
max-width="960"
src="images/resources/documentation/architecture/digiwf_how_to_build_your_own_service.
png"
lazy-src="images/resources/documentation/architecture/preview_digiwf_how_to_build_your_own_service.png" ></v-img>
<figcaption>A sample how you can build a custom integration artifact based on our starters</figcaption>
</figure>
If you want to integrate any kind of backend system, you can do this via the integration layer. DigiWF integration is on one side a set of predefined integration artifacts like S3, Mail, JMS or other. On the other side is DigiWF integration a toolbox, to help you to build own integration artifacts as quick as possible. This is ensured by the consistent use of Spring Boot starters to implement basic functionalities.

### DigiWF Tasklist
This is a simple frontend to interact with running process instances. Every user task occurs on the tasklist and can be picked up (of course only if you have the right to). You can see the state of "your" processes and you can start new instances over the tasklist. If you don't like such a highly standardized frontend, you're free to use the components like the form builder and integrate them into your own beautiful web app. Or you can use the API directly and build all the fancy frontend stuff on your own, in the technology you like most.   

### DigiWF Co-Creation
The DigiWF Co-Creation section is the low code area. Here can a process designer can draw BPMN processes, tinkering 
with decision tables (DMN) or create webforms per drag and drop. Deployment into different infrastructures is possible over this web app, too. 
<figure>
<v-img contain max-width="960" alt="A picture of the DigiWF form builder wich is a part of the co-creation 
application."  src="images/resources/documentation/architecture/form_builder.png" 
lazy-src="images/resources/documentation/architecture/preview_form_builder.png" ></v-img>
<figcaption>The DigiWF Form Builder</figcaption>
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

