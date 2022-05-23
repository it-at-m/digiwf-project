---
title: Event Bus Topics
description: How to communicate with DigiWF?
category: 'Concept'
categoryIcon: 'mdi-floor-plan'
position: 5
---

The DigiWF applications communicate with an `Event Bus` to exchange events that occur within the DigiWF plattform.
Internally the DigiWF application use spring cloud stream as an abstraction layer to interact with the `Event Bus`. Therefore, the `Event Bus` is interchangeable as long as a spring cloud stream binder exists.

In this article we explain our topic naming conventions and list the currently existing topics. 

## Naming conventions for Event Bus Topics

```
<prefix>-<domain>-<usage-context>-<environment>
```

Every DigiWF topic name consist of these 3 parts: 

- **prefix** is used to group the topics to a specific application. In the context of DigiWF this prefix is usually `dwf`.
- **domain** Every DigiWF topic belongs to a specific domain. The name of the domain may be similar to the application name.
- **usage-context** If a domain has more than 1 topic an additional `<usage context>` is added to the topics name. The `<usage context>` is optional.
- **environment** is the suffix describing the environment the applications run in.

Examples:

- `dwf-cocreation-ENV` is the main topic of the cocreation plattform. To this topic deployment events are sent.
- `dwf-cocreation-deploy-ENV` is the second topic of the cocreation plattform. To this topic deployment success messages are sent.

## Available Event Bus Topics

Currently, the environments `dev`, `test`, `demo` and `local-01` exist. `dev`, `test` and `demo` are our CI/CD stages and `local-01` is used for development.

### Domain digiwf-engine

The digiwf-engine uses the spring cloud stream function router to route events based on the `type` header to the according spring cloud functions.
Therefore, every message that is sent to `dwf-digiwf-engine-<ENV>` requires the header `type`.

```
dwf-digiwf-engine-<ENV>
```

The following values for the header `type` are currently supported:

| Header Type         | Payload Type            | Description                                                                                      |
|---------------------|-------------------------|--------------------------------------------------------------------------------------------------|
| correlateMessageV01 | `CorrelateMessageTOV01` | Use `CorrelateMessageTOV01` header type to correlate a message to a process instance.            |
| startProcessV01     | `StartInstanceTOV01`    | Use `startProcessV01` header type to start a new process instance with the process key and data. |


> **Note:**
> We use springwolf to generate asyncapi documentations. Checkout the services asyncapi docs under */springwolf/asyncapi-ui.html*.

### Domain cocreation

Processes, decision tables and json schema forms that are developed in the cocreation plattform are deployed to the digiwf-engine with a deployment event that is sent to the `dwf-cocreation-<ENV>` topic.

```
dwf-cocreation-<ENV>
```

In the cocreation plattform the user can choose the environment their artifact is deployed to.
Based on their environment decision the deployment event is dynamically routed to the according topic.
This happens in the bpm-server application.

The digiwf-engine application is a consumer of the `dwf-cocreation-<ENV>` topic and deploys the artifacts (bpmn, dmn or json form) from incoming deployment events to the camunda engine.
The digiwf-engine uses the spring cloud stream function router to route events based on the `type` header to the according spring cloud functions.

The following values for the header `type` are currently supported:

| Header Type    | Payload Type            | Description                                                                                |
|----------------|-------------------------|--------------------------------------------------------------------------------------------|
| deploy         | `DeploymentEvent`       | Use the `deploy` header type to deploy processes and decision tables to the digiwf-engine. |
| deploySchema   | `SchemaDeploymentEvent` | Use the `deploySchema` header type to deploy JSON schema forms to the digiwf-engine.       |

```
dwf-cocreation-deploy-<ENV>
```

After every deployment the digiwf-engine sends a deployment status event to the `dwf-cocreation-deploy-<ENV>` topic that informs subscribes of the topic about the success or failure of the deployment.

> **Note:**
> We use springwolf to generate asyncapi documentations. Checkout the services asyncapi docs under */springwolf/asyncapi-ui.html*.
