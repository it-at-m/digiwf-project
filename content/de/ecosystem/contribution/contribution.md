---
title: Contributions
description: Wie kann man sich an der Entwicklung von DigiWF beteiligen?
category: 'Contributions'
categoryIcon: 'mdi-gift-open-outline'
position: 1
---

## Dokumentation

### Dokumentation von Integrationsartefakten

Die Dokumentation von (offiziellen) Integrations Artefakten soll einerseits in dem jeweiligen Repository erfolgen. 
Andererseits hier in der offiziellen Gesamtdokumentation. Um nicht doppelt Inhalte pflegen zu müssen gelten folgende 
Regeln:

1. Die Dokumentation erfolgt ausschließlich in englischer Sprache. Auch in andere Übersetzungen (wie beispielsweise 
   Deutsch) wird die englische Dokumentation eingebunden. 
2. Die Dokumentation liegt im jeweiligen Repo im Ordner `docs`.
3. Die Abschnitte der Dokumentation wird in einzelne Dokumente aufgeteilt. Diese werden dann in das `readme.md` im 
   Repo, als auch in die zentrale Dokumentation eingebunden.
4. Für jede Sprache muss im Ordner `[Sprache]/resources/modules` eine Seite erstellt werden. Die Markdown Dateien aus 
   den Repos werden über die Komponente `DwfMarkdownLoader` eingebunden. Element Templates können über 
   `DwfElementTemplateDocs` dargestellt werden.
5. Für den Integrationsartefakt wird ein Eintrag auf der Seite `[Sprache]/resources/modules/modules.md` erstellt 
   (auch hier bitte für alle Übersetzungen). Um eine Karte auf der Übersichtsseite darzustellen muss die Komponente 
   `DwfIntegrationArtifact` in das bereits vorhandene `<v-row>` Element eingefügt werden.
6. Im Ordner `docs` sollten (mindestens) folgende Inhalte liegen: Quickstart, Architekturüberblick (möglichst mit 
   Bild), alle 
   Operationen (Element Templates) in eigenen Dateien. Bitte vor allem die Input und Output Parameter der Element 
   Templates dokumentieren (siehe hierfür auch `DwfElementTemplateDocs`).
7. Bilder müssen mit absoluten Pfaden eingefügt werden, um sie auch hier korrekt anzeigen zu können. In github gibt 
   es dazu die Funktion "copy permalink" (siehe Screenshot unten). Ob das Bild über Markdown oder HTML eingebunden 
   wird ist egal. Bei einer Einbindung über HTML wäre es schon, die Größe zu begrenzen. 
8. Wichtigster Punkt: Bitte schau, das alles funktioniert und gut aussieht. Beispielsweise, dass der Text nicht über 
   die Karten ragt. Das Bilder möglichst einen Maximalwert in der Breite haben (z.B. 960px), usw.

<v-alert color="red darken-1" border="left" elevation="2" colored-border icon="mdi-robot-angry" class="pb-4">
Es ist wichtig bei Änderungen der Dokumentation im Repo die zentrale Dokumentationsseite nochmal zu bauen und 
auszubringen. Da es sich um eine statische Seite handelt, bekommt die nichts von Änderungen in einem anderen Repo / 
auf einem anderen Server mit.
</v-alert>
<v-alert color="yellow darken-1" border="left" elevation="2" colored-border icon="mdi-robot-confused">
Wenn man in den Dateien im Ordner `docs` auf Überschriften verzichtet und diese stattdessen auf der 
Beschreibungsseite platziert, so wird automatisch auf der rechten Seite ein Inhaltsverzeichnis generiert. 
Überschriften innerhalb der referenzierten Dokumente können hier nicht gezeigt werden.
</v-alert>

<figure>
<v-img alt="Es wird gezeigt, wo sich auf github die Schaltfläche befindet, über die absolute Links zu Bildern 
kopiert werden können. (Screenshot)" contain 
max-width="960" 
src="images/ecosystem/contribution/github_file_link.png" 
lazy-src="images/ecosystem/contribution/preview_github_file_link.png" ></v-img>
<figcaption>Absolute Pfade zu Bildern</figcaption>
</figure>

### Spezielle Komponenten

#### DwfIntegrationArtifact

Über die Komponente `DwfIntegrationArtifact` können auf der Übersichts Seite für die Integrationsartefakte "Kacheln" 
erstellt werden. 

``` html
<dwf-integration-artifact 
   icon="mdi-email-fast"
   name="mail-Integration" 
   description="Artifact to integrate an e-mail server, so you can send mails from processes."
   github="https://github.com/it-at-m/digiwf-email-integration"
   docs="/resources/modules/emailintegration">
</dwf-integration-artifact>
```

Attribute:
- `icon` = Der [Material Design Icons](https://materialdesignicons.com/) Code für das Icon, das oben links in der Ecke dargestellt werden soll.
- `name` = Der Name des Integrationsartefakts.
- `description` = Die Beschreibung des Integrationsartefakts. Bitte darauf achten, dass die Beschreibung möglichst 
  kurz die Leistung darstellt, aber nicht so lang ist, dass andere Inhalte aus der Karte "gepresst" werden.
- `github` = Die URL zum github Repository.
- `docs` = Der relative Pfad auf die Beschreibung, die in dieser Dokumentation abgelegt ist. Er wird in der Regel 
  mit `/resources/modules/` beginnen, gefolgt vom Namen der Markdowndatei (ohne Dateiendung). Wenn die Datei an 
  anderer Stelle abgelegt wurde, dann muss natürlich auch der Pfad entsprechend angepasst werden. Der Pfad für die 
  Übersetzungen wird automatisch angepasst. Es muss also beispielsweise für die Deutsche Übersetzung kein `de` 
  vorangestellt werden.

<figure>
<v-img alt="Es wird gezeigt, wie die Darstellung einer Karte für einen Integrationsartefakt in der Doku aussieht. 
(Screenshot)" contain 
max-width="960" 
src="images/ecosystem/contribution/integration_artifact_card.png" 
lazy-src="images/ecosystem/contribution/preview_integration_artifact_card.png" ></v-img>
<figcaption>Integration Artifact Card (Beispiel)</figcaption>
</figure>

#### DwfMarkdownLoader

Über die Komponente `DwfMarkdownLoader` können Markdown Dateien geladen werden, die auf anderen Servern liegen.

``` html
<dwf-markdown-loader source="https://raw.githubusercontent.com/it-at-m/digiwf-s3-integration/dev/README.
md"></dwf-markdown-loader>
```

Bindet man Markdown Dokumente aus github ein, so bietet es sich an, hier die "raw" Ansicht zu wählen. 

#### DwfElementTemplateDocs

Über die Komponente `DwfElementTemplateDocs` können Element Templates geladen werden, die auf einem anderen Server 
liegen. Das Template wird dann als Liste angezeigt, wobei jede Zeile einem Property entspricht.

``` html
<dwf-element-template-docs jsonurl="https://raw.githubusercontent.com/it-at-m/digiwf-email-integration/dev/docs/sendMail.json"></dwf-element-template-docs>
```

<figure>
<v-img alt="Es wird gezeigt, wie die Darstellung der Element Templates in der Doku aussieht. (Screenshot)" contain 
max-width="960" 
src="images/ecosystem/contribution/element_template_table.png" 
lazy-src="images/ecosystem/contribution/preview_element_template_table.png" ></v-img>
<figcaption>Element Template Tabelle (Beispiel)</figcaption>
</figure>
