---
title: DigiWF Overview
description: What is the DigiWF architecture from an astronauts view.
category: 'Architecture'
categoryIcon: 'mdi-floor-plan'
position: 1
---

DigiWF is the glue between your frontend and backend systems. Everything you can reach over a network connection, you can attach to DigiWF and use ist declarative in your BPMN processes. We're the bridge between the developer team and process designers.

## The DigiWF Platform Concept
<figure>
<v-img alt="The concept behind DigiWF. In the middle are your business processes, that can talk to your backend or 
the cloud via integration artifacts." contain max-width="960" 
src="images/resources/documentation/architecture/digiwf_concept.png" 
lazy-src="images/resources/documentation/architecture/preview_digiwf_concept.png" ></v-img>
<figcaption>Interaction DigWF Core & the surrounding systems</figcaption>
</figure>

The main goal of DigiWF is to create a declarative way for process designers to interact with a technical infrastructure. For this we've created some supporting services around the opensource [camunda](https://camunda.com/) workflow:

[comment]: <> (![Foo]&#40;images/resources/documentation/architecture/digiwf_concept.png&#41;)


- Process Service: This is the service where Camunda is embedded. It is used mainly to execute the BPMN workflows.
- Service Instance: This handles any kind of service instances. A service instance can be a process, but does not 
  have to do. 
- Task Service: This service handles everything we need for human tasks (authorization, mapping, back channel, ...).
- Form & Validation Service: Everything we need in connection with forms is processed. We save the form definition and perform all kinds of form validation.
- Service Definition Service: This service is responsible for service definitions and the corresponding configurations.  


## Core Modules
<figure>
<v-img alt="The DigiWF architecture with attached custom components like frone end, microservices and integration 
artifacts. You can see the four provided DigiWF modules core, tasklist, integration and co-creation." contain 
max-width="960" 
src="images/resources/documentation/architecture/digiwf_core_modules.
png" 
lazy-src="images/resources/documentation/architecture/preview_digiwf_core_modules.png" ></v-img>
<figcaption>The DigiWF Modules + possibilities to integrate custom components</figcaption>
</figure>

The picture above shows a possible "full blown" DigiWF architecture including self crafted artifacts. Everything in 
blue is provided by the DigiWF project, but we're open for integrations. So you could create and integrate:

- your own frontends
- your own integration artifacts to communicate with your on premise or cloud infrastructure
- your own (micro) services

You can use any technology you want. There're only two preconditions:

- your frontend technology must have a GraphQL client
- your backen (services, integration artifacts) must be able to communicate with one of [Spring Cloud Streams](https://spring.io/projects/spring-cloud-stream) supported Binder implementations.

<v-alert color="yellow darken-1" border="left" elevation="2" colored-border icon="mdi-robot-confused">
If you want use another EventBus infrastructure than Apache Kafka, you have to configure this in your DigiWF configurations.
</v-alert>

Of course - if you'll use Spring Boot in your backend components and VueJs as front end technology, you can use all cross-section components (like Spring Boot Starters, NPM components, ...) we have created for our components.

### DigiWF Core
DigiWF Core is the heart of DigiWF. As you can see in the section above it consists of 5 services. It has a GraphQL 
API to interact with frontend applications and a very generic API, that communicates with various backend systems over an event bus.
   
### DigiWF Integration
If you want to integrate any kind of backend system, you can do this via the integration layer. DigiWF integration is on one side a set of predefined integration artifacts like S3, Mail, JMS or other. On the other side is DigiWF integration a toolbox, to help you to build own integration artifacts as quick as possible. 

### DigiWF Tasklist
This is a simple frontend to interact with running process instances. Every user task occurs on the tasklist and can be picked up (of course only if you have the right to). You can see the state of "your" processes and you can start new instances over the tasklist. If you don't like such a highly standardized frontend, you're free to use the components like the form builder and integrate them into your own beautiful web app. Or you can use the API directly and build all the fancy frontend stuff on your own, in the technology you like most.   

### DigiWF Co-Creation
The DigiWF Co-Creation section is the low code area. Here can a process designer can draw BPMN processes, tinkering 
with decision tables (DMN) or create webforms per drag and drop. Deployment into different infrastructures is possible over this web app, too. 
<figure>
<v-img contain max-width="1200" alt="A picture of the DigiWF form builder wich is a part of the co-creation 
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

