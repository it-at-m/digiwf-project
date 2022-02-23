---
title: Architecture Overview
description: What is the DigiWF architecture from an astronauts view.
category: 'Architecture'
position: 1
---

DigiWF is the glue between your frontend and backend systems. Everything you can reach over a network connection, you can attach to DigiWF and use ist declarative in your BPMN processes. We're the bridge between the developer team and process designers.

## The DigiWF Platform Concept
<figure>
<v-img alt="The concept behind DigiWF. In the middle are your business processes, that can talk to your backend or the cloud via integration artifacts." contain max-width="960" src="resources/documentation/architecture/digiwf_concept.png" lazy-src="preview_blue_yellow.png" ></v-img>
<figcaption>Interaction DigWF Core & the surrounding systems</figcaption>
</figure>

The main goal of DigiWF is to create a declarative way for process designers to interact with a technical infrastructure. For this we've created some supporting services around the opensource [camunda](https://camunda.com/) workflow. Camunda itself is used as a dependency embedded inside the process service.


## Core Modules
<figure>
<v-img contain max-width="960" src="resources/documentation/architecture/digiwf_core_modules.png" lazy-src="preview_blue_yellow.png" ></v-img>
<figcaption>The DigiWF Modules + possibilities to integrate custom components</figcaption>
</figure>

### DigiWF Core

### DigiWF Integration

### DigiWF Tasklist

### DigiWF Co-Creation

<v-alert color="yellow darken-1" border="left" elevation="2" colored-border icon="mdi-robot-confused">
This is a hint field!
</v-alert>

<v-alert color="red darken-1" border="left" elevation="2" colored-border icon="mdi-robot-angry">
This is a warn field!
</v-alert>

<v-alert color="grey lighten-1" border="left" elevation="2" colored-border icon="mdi-robot-happy">
This is a neutral field!
</v-alert>

## Second Header
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

### Sub Header
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

### Other Sub Header
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

### Some Java Script Code

Javascript Code Block
```javascript
export default {
  async asyncData ({ $content, app, params, error }) {
    // get url params
    const path = `/${params.pathMatch || 'index'}`
    // load the requested *.md file
    const [article] = await $content({ deep: true }).where({ path }).fetch()
    let navigation = []

    if (!article) {
      // nothing found? nirwana!
      return error({ statusCode: 404, message: 'Article not found' })
    } else {
      // load all articles in the requested folder
      navigation = await $content(article.dir).only(['title', 'path', 'category']).sortBy('position').fetch()
    }

    return {
      article, navigation
    }
  }
}
```

## Some other Header
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
