---
title: System Integration
description: Wie können die Integrationsartefakte oder Services aus den Prozessen heraus aufgerufen werden?
category: 'Architektur'
categoryIcon: 'mdi-floor-plan'
position: 2
---

Eine Basis Funktionalität von DigiWF ist es, die Prozesse mit der Backend Infrastruktur zu verbinden. Hierbei ist es 
zweitrangig, wo die Anwendungen liegen, die in einem Workflow verwendet werden sollen. Sie können sowohl on prem 
gehostet werden, als auch in der Cloud laufen. Wichtig ist, dass sie eine Schnittstelle haben - bzw. wenn sie keine 
haben, kann die Anwendung immer noch über einen RPA Dienst angebunden werden. 

## Die DigiWF Integrationsarchitektur
<figure>
<v-img alt="Es wird die Verbindung zwischen DigiWF Core, dem Event Bus und dem Integrationslayer mit diversen 
Integrations Services (z.B. S3, Mail, LDAP, usw.) gezeigt." contain max-width="960" 
src="images/resources/documentation/architecture/digiwf_integration_architecture.png" 
lazy-src="images/resources/documentation/architecture/preview_digiwf_integration_architecture.png" ></v-img>
<figcaption>High Level Integrations Architektur</figcaption>
</figure>
