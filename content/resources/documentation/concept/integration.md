---
title: System Integration
description: How can I integrate systems into the processes?
category: 'Concept'
categoryIcon: 'mdi-floor-plan'
position: 2
---

A basic functionality of DigiWF is to connect the processes with the backend infrastructure. Here it is
secondary where the applications are located that are to be used in a workflow. They can be hosted on prem, as well as running in the cloud. The important thing is that they have an interface - or if they don't have an
have one, the application can still be connected via a RPA service. 

## The DigiWF integration architecture
<figure>
<v-img alt="The picture shows DigiWF Core, the event bus and the integration layer with various 
integration services (e.g. S3, Mail, LDAP, etc.)." contain max-width="960" 
src="images/resources/documentation/concept/integration/digiwf_integration_architecture.png" 
lazy-src="images/resources/documentation/concept/integration/preview_digiwf_integration_architecture.png" ></v-img>
<figcaption>High Level Integrations Architecture</figcaption>
</figure>

Quite abstractly, we have in the 'Application Integration Layer' a collection of services that are connected to the 'Event Bus'. It does not matter where these services run or in which technology they are implemented. The important thing is that they can communicate with the `Event Bus`. The `type` of services is also not limited to a connection between the platform and an already existing system. Various microservices can also be directly connected here.

In `run`, the `Business Process Layer` (DigiWF Core) also knows nothing about any integration service. The two are actually loosely coupled. In `build`, on the other hand, the services or the service operations that are to be called from a process must be known. The connection happens here by an `element template` [^1]. In principle such a template is an input / output mapping. I.e. the data from the process are mapped to the expected data of the operation and vice versa.

## Interaction from the process
<figure>
<v-img alt="It is shown how a call of an integration artifact with the help of a subprocess from a 
BPMN process could look like." contain 
max-width="960" 
src="images/resources/documentation/concept/integration/digiwf_integrate_from_process.png" 
lazy-src="images/resources/documentation/concept/integration/preview_digiwf_integrate_from_process.png" ></v-img>
<figcaption>Example use of an integration artifact from a BPMN process</figcaption>
</figure>

In order to be able to create reusable operation calls from BPMN processes, it makes sense to encapsulate them in subprocesses. The figure above shows an example of this. A Send & Reply pattern appears here as a service task that process modelers can easily include in the process. Generic error handling could also be mapped here. It is important that the subprocess has its own 'element template'. I.e. the incoming parameters correspond to the values that the subprocess expects to be called. The outgoing parameters are those that the subprocess returns at the end.

## Create your own integration artifacts
<figure>
<v-img alt="It is shown how to include existing Spring Boot Starter components to create an create your own integration artifact." contain 
max-width="960" 
src="images/resources/documentation/concept/integration/digiwf_how_to_build_a_integration_artifact.png" 
lazy-src="images/resources/documentation/concept/integration/preview_digiwf_how_to_build_a_integration_artifact.png" ></v-img>
<figcaption>Example use of Spring Boot starters to create your own integration artifact</figcaption>
</figure>

To make it as easy as possible to create your own integration artifacts or micro services, we provide basic functionality in the form of `Spring Boot Starters` [^2]. These can be easily integrated into the project using the appropriate dependency management (Maven, Gradle, etc.). After that they are ready for use. I.e. they can be configured via the `application.yaml` of the project (here `your-own-mail-integration`). This is useful to be able to set the individual environment specific parameters for a system - but still not have to implement the standardized usage anything by yourself.

In the example above, a `your-own-mail-integration` service is created. This handles incoming and outgoing mail. If you include the `digiwf-mail-integration-starter`, you automatically get a connection to the S3 service. Mails can contain file attachments, which you do not want to have in the process. I.e. with incoming attachments these are stored in advance in the file memory and the reference is passed on to the process. For outgoing mails it is the other way around. The process provides a reference to the file(s), which is used to load them from the file store and attach them to the mail. This logic - to process file attachments via the file store - is already completely included in `digiwf-mail-integration-starter` and `digiwf-s3-integration-client-starter`. I.e. to connect a mail server, in the best case nothing more has to be programmed. You just create a Spring Boot project (e.g. via [^3]), include the starters and you are ready to work with the right configuration.

[^1]: See https://docs.camunda.io/docs/components/modeler/desktop-modeler/element-templates/about-templates/
[^2]: See https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#using.build-systems.starters
[^3]: See https://start.spring.io/

