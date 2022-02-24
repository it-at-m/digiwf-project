---
title: Architecture Overview
description: What is the DigiWF architecture from an astronauts view.
category: 'Architecture'
position: 1
---

DigiWF is the glue between your frontend and backend systems. Everything you can reach over a network connection, you can attach to DigiWF and use ist declarative in your BPMN processes. We're the bridge between the developer team and process designers.

## The DigiWF Platform Concept
<figure>
<v-img alt="The concept behind DigiWF. In the middle are your business processes, that can talk to your backend or the cloud via integration artifacts." contain max-width="960" src="resources/documentation/architecture/digiwf_concept.png" lazy-src="preview_blue_yellow.png" ></v-img>
<figcaption>Interaction DigWF Core & the surrounding systems</figcaption>
</figure>

The main goal of DigiWF is to create a declarative way for process designers to interact with a technical infrastructure. For this we've created some supporting services around the opensource [camunda](https://camunda.com/) workflow:

- Process Service: This is the service where Camunda is embedded. It is used mainly to execute the BPMN workflows.
- Service Instance: This handles any kind of service instances. A service instance can be a process, but must not. 
- Task Service: This service handles everything we need for human tasks (authorization, mapping, back channel, ...). The task service is backed by an Elasticsearch database, so you can do full text search over all tasks.
- Form & Validation Service: This handles everything, that we need around forms. We store the form definition here an do all kind of form validation.
- Service Definition Service: This service is responsible for service definitions and the corresponding configurations.  


## Core Modules
<figure>
<v-img contain max-width="960" src="resources/documentation/architecture/digiwf_core_modules.png" lazy-src="preview_blue_yellow.png" ></v-img>
<figcaption>The DigiWF Modules + possibilities to integrate custom components</figcaption>
</figure>

The picture above shows a possible "full blown" DigiWF architecture including self crafted artifacts. Everything in blue is provided by the DigiWF project, but as you know we're open for integrations from every direction. So you could create and integrate:

- your own front ends
- your own integration artifacts to communicate with your on premise or cloud infrastructure
- your own (micro) services

You can use any technology you want. There're only two preconditions:

- your frontend technology must have a GraphQL client
- your backen (services, integration artifacts) must be able to communicate with one of [Spring Cloud Streams](https://spring.io/projects/spring-cloud-stream) supported Binder implementations.

<v-alert color="yellow darken-1" border="left" elevation="2" colored-border icon="mdi-robot-confused">
If you want use an other EventBus infrastructure than Apache Kafka, you have to configure this in your DigiWF configurations.
</v-alert>

Of course - if you'll use Spring Boot in your backend components and VueJs as front end technology, you can use all cross-section components (like Spring Boot Starters, NPM components, ...) we have created for our components.

### DigiWF Core

### DigiWF Integration

### DigiWF Tasklist

### DigiWF Co-Creation

[comment]: <> (<v-alert color="yellow darken-1" border="left" elevation="2" colored-border icon="mdi-robot-confused">)

[comment]: <> (This is a hint field!)

[comment]: <> (</v-alert>)

[comment]: <> (<v-alert color="red darken-1" border="left" elevation="2" colored-border icon="mdi-robot-angry">)

[comment]: <> (This is a warn field!)

[comment]: <> (</v-alert>)

[comment]: <> (<v-alert color="grey lighten-1" border="left" elevation="2" colored-border icon="mdi-robot-happy">)

[comment]: <> (This is a neutral field!)

[comment]: <> (</v-alert>)

