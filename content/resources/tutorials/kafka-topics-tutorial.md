---
title: How to communicate with digiwf-engine?
description: Tutorials and Guides
category: 'Tutorials'
categoryIcon: 'mdi-school'
position: 2
---

This tutorial should show you how to integrate with the digiwf-engine using the kafka topics. Additionally, you can check out our documentation [here](/resources/documentation/concept/eventbustopics).

To integrate with the digiwf-engine you have to send events to the kafka topics the digiwf-engine listens to.
Internally the digiwf-engine uses a custom spring cloud stream function router that routes the incoming events to the according topics based on the `type` header.
With this approach the same topic can be used for different event types.
The supported event types are listed in the [documentation](/resources/documentation/concept/eventbustopics).

> Note: If you do not set the `type` in your kafka messages the digiwf-engine cannot route the message to the suitable consumer function. This also applies if you set an unknown value for the `type` header.


## Start process

The digiwf-engine uses internally a custom spring cloud stream function router that routes incoming message to the according topic.
Therefore, you have to send a start process event to the `dwf-digiwf-engine-ENV` topic (replace the *ENV* with a valid environment) with the header `type` and the value `startProcessV01` to start a new process.
The `type` headers value is used in the digiwf-engine to route the start process event to the suitable consumer function.

The start process event may contain a business key in `key` variable and additional data in the `data` variable. The `data` variable is represented in the digiwf-engine with a map. Therefore, you can add information dynamically following a key (String) value (any object) schema.

> The business key is special process variable that is fully indexed and usually contains domain specific information. For more details checkout [this blog post](https://camunda.com/blog/2018/10/business-key/).

```json
{
  "key": "my-process",
  "data": {
    ...
  }
}
```

| Field | Datatype            | Required |
|-------|---------------------|----------|
| key   | String              | Optional |
| data  | Map<String, Object> | Optional |


## Correlate message

The digiwf-engine uses internally a custom spring cloud stream function router that routes incoming message to the according topic.
Therefore, you have to send a correlate message event to the `dwf-digiwf-engine-ENV` topic (replace the *ENV* with a valid environment) with the header `type` and the value `CorrelateMessageTOV01` to correlate a message to a process instance.
The `type` headers value is used in the digiwf-engine to route the correlate message event to the suitable consumer function.

The correlate message event should contain as `processInstanceId` the instance id of your process, an optional message name and an optional business key. Additionally, you can provide correlation. The correlation and payload variables are represented as a key (string) value (any object) map.

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

| Field                     | Datatype                  | Required |
|---------------------------|---------------------------|----------|
| processInstanceId         | String                    | Required |
| messageName               | String                    | Optional |
| businessKey               | String                    | Optional |
| correlationVariables      | Map<String, Object>       | Optional |
| correlationVariablesLocal | Map<String, Object>       | Optional |
| payloadVariables          | Map<String, Object>       | Optional |
| payloadVariablesLocal     | Map<String, Object>       | Optional |
