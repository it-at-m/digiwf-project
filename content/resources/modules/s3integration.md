---
title: S3 Integration Artifact
description: S3 Integration Artifact
category: 'Integration Artifacts'
categoryIcon: 'mdi-toy-brick'
position: 10
---

## About
There are several ways to store files in S3 compatible storage. Each project often has to implement the same functionalities and solve the same problems. With this library, we create the possibility to store and clean up files to in a structured and simple way. Here's why:

- Files often need to be stored in folder structures
- Files often must be stored in a structured way and enriched with metadata
- Cleaning up the data must be done in a structured way
- Synchronous and asynchronous interfaces are often required

Of course, one service is not suitable for all projects, as your needs may be different. That's why we decided to provide a Spring Boot Starter library for an integration service that can be easily customized. Additionally a second starter library is included, which serves as a client library to handle files and folders with the above-mentioned starter.

## Overview

<figure>
<v-img alt="The picture shows the architecture of a custom S3 integration artifact." contain 
max-width="960" 
src="images/resources/modules/s3_integration.png" 
lazy-src="images/resources/modules/preview_s3_integration.png" ></v-img>
<figcaption>How to build your own integration Artifact</figcaption>
</figure>

The github repo: [https://github.com/it-at-m/digiwf-s3-integration](https://github.com/it-at-m/digiwf-s3-integration)

## Components

### S3 Integration Library

### S3 Integration Client