---
title: How to communicate with digiwf-engine?
description: Tutorials and Guides
category: 'Tutorials'
categoryIcon: 'mdi-school'
position: 2
---

This tutorial should show you how to integrate with the digiwf-engine using the kafka topics. Additionally, you can check out our documentation [here](/resources/documentation/concept/eventbustopics).

## Start process

To start processes with the digiwf-engine you have to send a start process event to the `dwf-digiwf-engine-ENV` topic (replace the *ENV* with a valid environment) with the header `type` and the value `startProcessV01`.

The start process event must contain the process key in `key` variable. Additionally, you can add additional data in the `data` variable. The `data` variable is represented in the digiwf-engine with a map. Therefore, you can add information dynamically following a key (String) value (any object) schema.

```json
{
  "key": "my-process",
  "data": {
    ...
  }
}
```

## Correlate message

To correlate a message to a process instance you have to send a correlate message event to the `dwf-digiwf-engine-ENV` topic (replace the *ENV* with a valid environment) with the header `type` and the value `CorrelateMessageTOV01`.

The correlate message event should contain as `processInstanceId` the instance id of your process, a message name and the business key. Additionally, you can provide correlation. The correlation and payload variables are represented as a key (string) value (any object) map.

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
