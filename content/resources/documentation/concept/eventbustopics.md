---
title: Event Bus Topics
description: How to communicate with DigiWF?
category: 'Concept'
categoryIcon: 'mdi-floor-plan'
position: 5
---

## Naming conventions for Event Bus Topics

```
<prefix>-<domain>-<usage-context>-<environment>
```

Every DigiWF topic name consist of these 3 parts: 

- **prefix** is used to group the topics to a specific application. In the context of DigiWF this prefix is usually `dwf`.
- **domain** Every DigiWF topic belongs to a specific domain. The name of the domain may be similar to the application name.
- **usage-context** If a domain has more than 1 topic an additional usage context is added to the topics name. The usage-context is optional.
- **environment** is the suffix describing the environment the applications run in.

Examples:

- `dwf-cocreation-ENV` is the main topic of the cocreation plattform. To this topic deployment events are sent.
- `dwf-cocreation-deploy-ENV` is the second topic of the cocreation plattform. To this topic deployment success messages are sent.

## Available Event Bus Topics

Currently, the environments `dev`, `test`, `demo` and `local-01` exist. `dev`, `test` and `demo` are our CI/CD stages and `local-01` is used for development.

### Domain digiwf-engine

```
dwf-digiwf-engine-<ENV>
```


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
In this use case the header `type` with the value `deploy` is used in the deployment event. 

```
dwf-cocreation-deploy-<ENV>
```

After every deployment the digiwf-engine sends a deployment status event to the `dwf-cocreation-deploy-<ENV>` topic. 
