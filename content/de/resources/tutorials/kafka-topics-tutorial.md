---
title: How to communicate with digiwf-engine?
description: Tutorials and Guides
category: 'Tutorials'
categoryIcon: 'mdi-school'
position: 2
---

Dieses Tutorial soll Ihnen zeigen, wie Sie die Integration mit der digiwf-Engine unter Verwendung der Kafka-Topics vornehmen können.Darüber hinaus können Sie unsere Dokumentation [hier](/de/resources/documentation/concept/eventbustopics) einsehen.

## Prozesse starten

Um Prozesse mit der digiwf-engine zu starten, müssen Sie ein Startprozess-Event an das Topic `dwf-digiwf-engine-ENV` (ersetzen Sie *ENV* durch eine gültige Umgebung) mit dem Header `type` und dem Wert `startProcessV01` senden.

Das Prozessstart-Event muss den process key in der Variablen "key" enthalten. Zusätzlich können Sie weitere Daten in der Variable `data` hinzufügen. Die Variable `data` wird in der digiwf-engine mit einer Map dargestellt. Daher können Sie Informationen dynamisch nach einem Schlüssel (String) Wert (beliebiges Objekt) Schema hinzufügen.

```json
{
  "key": "my-process",
  "data": {
    ...
  }
}
```

## Nachrichten korrelieren

Um eine Nachricht mit einer Prozessinstanz zu korrelieren, müssen Sie ein Korrelationsnachrichtenereignis an das Topic `dwf-digiwf-engine-ENV` (ersetzen Sie *ENV* durch eine gültige Umgebung) mit dem Header `type` und dem Wert `CorrelateMessageTOV01` senden.

Das Korrelationsnachrichtenereignis sollte als `processInstanceId` die Instanz-ID Ihres Prozesses, einen Nachrichtennamen und den Businesskey enthalten. Zusätzlich können Sie eine Korrelation angeben. Die Correlation- und Payloadvariablen werden als Schlüssel (String) Wert (beliebiges Objekt) Map dargestellt.

```json
{
  "processInstanceId": "my-process-instance-id",
  "messageName": "MessageEvent",
  "businessKey": "my-business-key",
  "correlationVariables": {
    ...
  },
  "correlationVariablesLocal": {
    ...
  },
  "payloadVariables": {
    ...
  },
  "payloadVariablesLocal": {
    ...
  }
}
```

## Artefakt deployment

Um Artefakte für die digiwf-Engine bereitzustellen, senden Sie ein Bereitstellungsereignis an das Thema `dwf-cocreation-<ENV>` (ersetzen Sie *ENV* durch eine gültige Umgebung) mit dem Header `type` und dem Wert `deploy` für *.bpmn* und *.dmn* Dateien. Verwenden Sie für JSON-Schemaformulare den Header `type` mit dem Wert `deploySchema`.

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
