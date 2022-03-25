---
title: Umgang mit Dateien
description: Wie können (große und kleine) Dateien auf der Prozessplattform verwaltet werden?
category: 'Konzept'
categoryIcon: 'mdi-floor-plan'
position: 3
---
<section>

Der Umgang mit Dateien stellt eine Prozess- und Integrationsplattform naturgemäß vor Herausforderungen. Dateien 
können sehr groß sein, oder in großer Anzahl auftreten und stellen somit ein potenzielles Ressourcenproblem dar. 
Deshalb werden bei DigiWf grundsätzlich keine Dateien in den Speicher geladen oder durch Prozess geschleift. Das 
File Handling findet in den Integrations Layern (entweder GUI oder Backend statt).

<figure>
<v-img alt="Es sind die drei Schichten GUI Integration, DigiWF Core und Application Integration Layer dargestellt. 
Dort ist eingezeichnet, dass nur in den beiden integrationsschichten File Handling statt findet." contain 
max-width="960" 
src="images/resources/documentation/concept/filehandling/digiwf_file_handling_in_integration_layers.png" 
lazy-src="images/resources/documentation/concept/filehandling/preview_digiwf_file_handling_in_integration_layers.png" ></v-img>
<figcaption>Datei Handling in den beiden Integrationsschichten</figcaption>
</figure>

Ein grundlegendes Element bei der Behandlung von Dateien (unabhängig davon, ob sie über die GUI oder angebundene 
Backend Komponenten in das System gelangen) ist der Datei Speicher. Im Fall von DigiWF ist das ein `S3-Service`. 
Hier kann eine Cloudlösung wie AWS oder ein on prem Dienst verwendet werden. Die Kommunikation mit dem Dienst an 
sich wird über eine generisch gültige Schnittstelle abstrahiert. 

</section>
<section>

## Datei Handling im Application Integration Layer
Klassische Fälle, in denen Dateien im `Application Integration Layer` behandelt werden müssen, sind:
- E-Mail (mit Anhängen)
- Datei und Aktenablage in einem Document Management System
- Erzeugen von Dateien, wie beispielsweise PDF Generierung

### Eingehende Dateien
<figure>
<v-img alt="Es wird gezeigt, wie die Datei Behandlung bei eingehenden Dateien funktioniert." contain 
max-width="960" 
src="images/resources/documentation/concept/filehandling/digiwf_incoming_files.png" 
lazy-src="images/resources/documentation/concept/filehandling/preview_digiwf_incoming_files.png" ></v-img>
<figcaption>Datei Handling bei eingehenden Dateien</figcaption>
</figure>

### Ausgehende Dateien
<figure>
<v-img alt="Es wird gezeigt, wie die Datei Behandlung bei ausgehenden Dateien funktioniert." contain 
max-width="960" 
src="images/resources/documentation/concept/filehandling/digiwf_outgoing_files.png" 
lazy-src="images/resources/documentation/concept/filehandling/preview_digiwf_outgoing_files.png" ></v-img>
<figcaption>Datei Handling bei ausgehenden Dateien</figcaption>
</figure>

</section>
<section>

## Datei Handling im GUI Integration Layer

</section>

