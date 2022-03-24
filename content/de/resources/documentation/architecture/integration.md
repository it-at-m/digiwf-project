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
src="images/resources/documentation/architecture/integration/digiwf_integration_architecture.png" 
lazy-src="images/resources/documentation/architecture/integration/preview_digiwf_integration_architecture.png" ></v-img>
<figcaption>High Level Integrations Architektur</figcaption>
</figure>

Ganz abstrakt haben wir im `Application Integration Layer` eine Sammlung von Services, die mit dem `Event Bus` 
verbunden sind. Dabei ist es erst einmal egal, wo diese Services laufen, bzw. in welcher Technologie sie 
implementiert sind. Wichtig ist, dass sie mit dem `Event Bus` kommunizieren können. Die "Art" der Services ist auch 
nicht auf eine Verbindung zwischen der Plattform und einem bereits bestehenden System beschränkt. Hier können auch 
diverse Microservices direkt angebunden werden.

Im `run` weiß auch der `Business Process Layer` (DigiWF Core) nichts von irgend einem Integrations Service. Die 
beiden sind tatsächlich lose gekoppelt. Im `build` dagegen müssen die Services, bzw. die Service Operationen, die 
man aus einem Prozess heraus aufrufen will sehr wohl bekannt sein. Die Verbindung passiert hier durch ein `Element 
Template` [^1]. Im Prinzip ist solch ein Template ein Input / Output Mapping. D.h. Die Daten aus dem Prozess werden 
auf die erwarteten Daten der Operation gemappt und umgekehrt.

## Interaktion aus dem Prozess heraus
<figure>
<v-img alt="Es wird dargestellt, wie ein Aufruf eines Integrationsartefaktes mit Hilfe eines Subprozesses aus einem 
BPMN Prozess heraus aussehen könnte." contain 
max-width="960" 
src="images/resources/documentation/architecture/integration/digiwf_integrate_from_process.png" 
lazy-src="images/resources/documentation/architecture/integration/preview_digiwf_integrate_from_process.png" ></v-img>
<figcaption>Beispielhafte Nutzung eines Integrationsartefaktes aus einem BPMN Prozess heraus</figcaption>
</figure>

Um wiederverwendbare Operationsaufrufe aus BPMN Prozessen heraus erstellen zu können, ist es sinnvoll diese in 
Subprozessen zu kapseln. Die Abbildung oben zeigt dies exemplarisch. Ein Send & Reply Pattern erscheint hier als ein 
Service Task, den Prozessmodellierer einfach in den Prozess aufnehmen kann. Hier könnte auch ein generisches 
Fehlerhandling abgebildet werden. Wichtig ist, dass der Subprozess ein eigenes `Element Template` hat. D.h. die 
eingehenden Parameter entsprechen den Werten, die der Subprozess zum Aufruf erwartet. Die ausgehenden 
Parameter sind diejenigen, die der Subprozess am Ende zurückgibt.




[^1]: Siehe https://docs.camunda.io/docs/components/modeler/desktop-modeler/element-templates/about-templates/