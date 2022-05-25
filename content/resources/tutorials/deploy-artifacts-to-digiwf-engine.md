---
title: Deploy artifacts to digiwf-engine?
description: Deployment of bpmn, dmn and jsonschema forms to the digiwf-engine with kafka
category: 'Tutorials'
categoryIcon: 'mdi-school'
position: 2
---

This tutorial should show you how to deploy artifacts (bpmn, dmn and jsonschema forms) to the digiwf-engine using the corresponding kafka topic.
Additionally, you can check out our documentation [here](/resources/documentation/concept/eventbustopics).

## Artifact deployment (bpmn, dmn and json schema)

To deploy artifacts to the digiwf-engine send a deployment event to the `dwf-cocreation-<ENV>` topic topic (replace the *ENV* with a valid environment) with the header `type` and the value `deploy` for *.bpmn* and *.dmn* files. For json schema forms use the header `type` with the value `deploySchema`.

The deployment event consists of a unique `deploymentId` and `versionId`. The `target` represent the environment you deployed the event to. The `artifactType` is either `BPMN`, `DMN` or `FORM` and the `file` is the file converted to string.

```json
{
  "deploymentId": "8d15da94-b4cb-43de-abb5-bca085af0da0",
  "versionId": "26326aa2-f3d4-4783-bbd8-7099d4bfd4a4",
  "target": "DEV",
  "file": "...",
  "artifactType": "BPMN"
}
```
