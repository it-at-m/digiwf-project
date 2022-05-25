---
title: How to communicate with digiwf-engine?
description: Tutorials and Guides
category: 'Tutorials'
categoryIcon: 'mdi-school'
position: 2
---

Dieses Tutorial soll Ihnen zeigen, wie Sie die Integration mit der digiwf-Engine unter Verwendung der Kafka-Topics vornehmen können.
Darüber hinaus können Sie unsere Dokumentation [hier](/de/resources/documentation/concept/eventbustopics) einsehen.

Zur Integration mit der digiwf-engine müssen Sie Events an die Kafka Topics senden, auf die die digiwf-engine hört.
Intern verwendet die digiwf-engine einen benutzerdefinierten Spring-Cloud-Stream Funktionrouter, der die eingehenden Ereignisse auf der Grundlage des `type` Headers an die entsprechenden Topics weiterleitet.
Mit diesem Ansatz kann das gleiche Topic für verschiedene Eventtypen verwendet werden.
Die unterstützten Eventtypen sind in der [Dokumentation](/de/resources/documentation/concept/eventbustopics) aufgeführt.

> Hinweis: Wenn Sie in Ihren Kafka Messages den Header `type` nicht angeben, kann die digiwf-Engine die Message nicht an die passende Consumer-Funktion weiterleiten. Dies gilt auch, wenn Sie einen unbekannten Wert für den `type` Header setzen.


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

| Feld | Datentype           | Erforderlich  |
|------|---------------------|---------------|
| key  | String              | Erforderlich  |
| data | Map<String, Object> | Optional      |


## Nachrichten korrelieren

Um eine Nachricht mit einer Prozessinstanz zu korrelieren, müssen Sie ein Korrelationsnachrichtenereignis an das Topic `dwf-digiwf-engine-ENV` (ersetzen Sie *ENV* durch eine gültige Umgebung) mit dem Header `type` und dem Wert `CorrelateMessageTOV01` senden.

Das Korrelationsnachrichtenereignis sollte als `processInstanceId` die Instanz-ID Ihres Prozesses, einen optionalen Nachrichtennamen und den Businesskey enthalten. Zusätzlich können Sie eine Korrelation angeben. Die Correlation- und Payloadvariablen werden als Schlüssel (String) Wert (beliebiges Objekt) Map dargestellt.

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

| Feld                      | Datentype           | Erforderlich   |
|---------------------------|---------------------|----------------|
| processInstanceId         | String              | Erforderlich   |
| messageName               | String              | Optional       |
| businessKey               | String              | Erforderlich   |
| correlationVariables      | Map<String, Object> | Optional       |
| correlationVariablesLocal | Map<String, Object> | Optional       |
| payloadVariables          | Map<String, Object> | Optional       |
| payloadVariablesLocal     | Map<String, Object> | Optional       |
