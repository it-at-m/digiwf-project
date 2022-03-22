---
title: DigiWF Process & Integration platform
description: ''
category: 'Landing'
position: 1
---

In 2019 we started to drive process automation in the public administration of the state capital Munich based on the [Camunda](https://camunda.com/) BPMN process engine. A separate task list based on [VueJs](https://vuejs.org/) and [VuetifyJs](https://vuetifyjs.com/) was implemented relatively early on under the project name DigiWF. In addition, the first integration modules such as mail or DMS were built into the backend infrastructure.

<figure>
<v-img alt="The concept behind DigiWF. In the middle are your business processes, that can talk to your backend or 
the cloud via integration artifacts." class="mx-auto" contain max-width="960" 
src="images/digiwf_concept_process_and_integrationplatform.png" 
lazy-src="images/preview_digiwf_concept_process_and_integrationplatform.png" ></v-img>
<figcaption>The Core Components</figcaption>
</figure>

Today - more than 1.5 years later - DigiWF has become a frequently used platform. Above all, the integration concept is now mature and any system that has an interface (and if it doesn't have an interface, then you just connect an RPA client) can be connected without much effort. This is made possible by a modular building block concept via a collection of Spring Boot starters. Problems such as file handling become a standard problem that can be solved equally (equally easily) on all input channels.

When such a platform grows, sooner or later the question arises as to who should do the work. DigiWF has been consistently built so that people who are able to create automated workflows (but can't program) can do so on their own. This is made possible by a separate "low code" component - the co-creation. There, processes and decision tables can be created on the basis of BPMN and DMN. Backend systems (if an integration artefact is available for them) are declaratively connected via input and output templates. In addition to the processes, forms for user tasks can also be created using drag & drop.

If you - similar to the state capital Munich - have many processes with a lot of user tasks. And then a 
heterogeneous backend landscape that you have to integrate into your processes, then you should definitely take a 
look at DigiWF. Simply contact us by [email](mailto:opensource@muenchendigital.io) or one of the social media channels.