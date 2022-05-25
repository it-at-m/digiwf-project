---
title: How to communicate with digiwf-engine?
description: Tutorials and Guides
category: 'Tutorials'
categoryIcon: 'mdi-school'
position: 2
---

Dieses Tutorial soll Ihnen zeigen, wie Sie Artefakte (bpmn-, dmn- und jsonschema-Formulare) über das entsprechende Kafka Topic an die digiwf-Engine verteilen können.
Darüber hinaus können Sie unsere Dokumentation [hier](/de/resources/documentation/concept/eventbustopics) einsehen.

## Artefakt deployment

Um Artefakte für die digiwf-Engine bereitzustellen, senden Sie ein Bereitstellungsereignis an das Topic `dwf-cocreation-<ENV>` (ersetzen Sie *ENV* durch eine gültige Umgebung) mit dem Header `type` und dem Wert `deploy` für *.bpmn* und *.dmn* Dateien. Verwenden Sie für JSON-Schemaformulare den Header `type` mit dem Wert `deploySchema`.

Das Deployment-Ereignis besteht aus einer eindeutigen `deploymentId` und `versionId`. Das `Ziel` stellt die Umgebung dar, in der Sie das Ereignis bereitgestellt haben. Der `artifactType` ist entweder `BPMN`, `DMN` oder `FORM` und die `file` ist die in einen String konvertierte Datei.

```json
{
  "deploymentId": "8d15da94-b4cb-43de-abb5-bca085af0da0",
  "versionId": "26326aa2-f3d4-4783-bbd8-7099d4bfd4a4",
  "target": "DEV",
  "file": "...",
  "artifactType": "BPMN"
}
```
