---
title: How to communicate with digiwf-engine?
description: Deployment of bpmn, dmn and jsonschema forms to the digiwf-engine with kafka
category: 'Tutorials'
categoryIcon: 'mdi-school'
position: 2
---

Dieses Tutorial soll Ihnen zeigen, wie Sie Artefakte (bpmn-, dmn- und jsonschema-Formulare) über das entsprechende Kafka Topic an die digiwf-Engine verteilen können.
Darüber hinaus können Sie unsere Dokumentation [hier](/de/resources/documentation/concept/eventbustopics) einsehen.

Zur Integration mit der digiwf-engine müssen Sie Events an die Kafka Topics senden, auf die die digiwf-engine hört.
Intern verwendet die digiwf-engine einen benutzerdefinierten Spring-Cloud-Stream Funktionrouter, der die eingehenden Ereignisse auf der Grundlage des `type` Headers an die entsprechenden Topics weiterleitet.
Mit diesem Ansatz kann das gleiche Topic für verschiedene Eventtypen verwendet werden.
Die unterstützten Eventtypen sind in der [Dokumentation](/de/resources/documentation/concept/eventbustopics) aufgeführt.

> Hinweis: Wenn Sie in Ihren Kafka Messages den Header `type` nicht angeben, kann die digiwf-Engine die Message nicht an die passende Consumer-Funktion weiterleiten. Dies gilt auch, wenn Sie einen unbekannten Wert für den `type` Header setzen.


## Artefakt deployment

Um Artefakte für die digiwf-Engine bereitzustellen, senden Sie ein Bereitstellungsereignis an das Topic `dwf-cocreation-<ENV>` (ersetzen Sie *ENV* durch eine gültige Umgebung) mit dem Header `type` und dem Wert `deploy` für *.bpmn* und *.dmn* Dateien. Verwenden Sie für JSON-Schemaformulare den Header `type` mit dem Wert `deploySchema`. Verwenden Sie für Prozess-Konfigurationen den Header `type` mit dem Wert `deployConfiguration`.

Das Deployment-Ereignis besteht aus einer eindeutigen `deploymentId` und `versionId`. Das `Ziel` stellt die Umgebung dar, in der Sie das Ereignis bereitgestellt haben. Der `artifactType` ist entweder `BPMN`, `DMN`, `FORM` oder `CONFIGURATION` und die `file` ist die in einen String konvertierte Datei.

```json
{
  "deploymentId": "8d15da94-b4cb-43de-abb5-bca085af0da0",
  "versionId": "26326aa2-f3d4-4783-bbd8-7099d4bfd4a4",
  "target": "DEV",
  "file": "...",
  "artifactType": "BPMN"
}
```
