---
title: Deploy artifacts to digiwf-engine?
description: Deployment of bpmn, dmn and jsonschema forms to the digiwf-engine with kafka
category: 'Tutorials'
categoryIcon: 'mdi-school'
position: 2
---

This tutorial should show you how to deploy artifacts (bpmn, dmn and jsonschema forms) to the digiwf-engine using the corresponding kafka topic.
Additionally, you can check out our documentation [here](/resources/documentation/concept/eventbustopics).

To integrate with the digiwf-engine you have to send events to the kafka topics the digiwf-engine listens to.
Internally the digiwf-engine uses a custom spring cloud stream function router that routes the incoming events to the according topics based on the `type` header.
With this approach the same topic can be used for different event types.
The supported event types are listed in the [documentation](/resources/documentation/concept/eventbustopics).

> Note: If you do not set the Header `type` in your kafka messages the digiwf-engine cannot route the message to the suitable consumer function. This also applies if you set an unknown value for the `type` header.


## Artifact deployment (bpmn, dmn, json schema and process configurations)

To deploy artifacts to the digiwf-engine send a deployment event to the `dwf-cocreation-<ENV>` topic topic (replace the *ENV* with a valid environment) with the header `type` and the value `deploy` for *.bpmn* and *.dmn* files. For json schema forms use the header `type` with the value `deploySchema`. For process configurations use the header `type` with the value `deployConfiguration`.

The deployment event consists of a unique `deploymentId` and `versionId`. The `target` represent the environment you deployed the event to. The `artifactType` is either `BPMN`, `DMN`, `FORM` or `CONFIGURATION` and the `file` is the file converted to string.

```json
{
  "deploymentId": "8d15da94-b4cb-43de-abb5-bca085af0da0",
  "versionId": "26326aa2-f3d4-4783-bbd8-7099d4bfd4a4",
  "target": "DEV",
  "file": "...",
  "artifactType": "BPMN"
}
```
