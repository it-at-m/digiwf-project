---
title: DigiWF Workflow integration platform
description: ''
category: 'Landing'
position: 1
---

Back in 2019 we startet to use the great [Camunda](https://camunda.com/) BPMN engine as embedded service inside a Spring Boot application. As we have a lot of user interaction in our processes, we decided to build a suitable tasklist based on [VueJs](https://vuejs.org/) and the beautiful [VuetifyJs](https://vuetifyjs.com/) frameworks. The second challenge was that we had and have several integrations into our heterogeneous backend infrastructure. So we build a thin integration layer of so-called "integration artifacts". Last but not least we coded a forms service based on JsonSchema and the [vjsf](https://koumoul-dev.github.io/vuetify-jsonschema-form/latest) library. The Vue Forms component can be plugged in into every VueJs application.    
