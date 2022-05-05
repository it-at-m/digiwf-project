---
title: Contributions
description: Wie kann man sich an der Entwicklung von DigiWF beteiligen?
category: 'Contributions'
categoryIcon: 'mdi-gift-open-outline'
position: 1
---

## Dokumentation

### DwfMarkdownLoader

Über die Komponente `DwfMarkdownLoader` können Markdown Dateien geladen werden, die auf anderen Server liegen.

``` html
<dwf-markdown-loader source="https://raw.githubusercontent.com/it-at-m/digiwf-s3-integration/dev/README.
md"></dwf-markdown-loader>
```

Bindet man Markdown Dokumente aus github ein, so bietet es sich an, hier die "raw" Ansicht zu wählen. 

### Dokumentation von Integrationsartefakten

Die Dokumentation von (offiziellen) Integrations Artefakten soll einerseits in dem jeweiligen Repository erfolgen. 
Andererseits hier in der offiziellen Gesamtdokumentation. Um nicht doppelt Inhalte pflegen zu müssen gelten folgende 
Regeln:

1. Die Dokumentation erfolgt ausschließlich in englischer Sprache. Auch in andere Übersetzungen (wie beispielsweise 
   Deutsch) wird die englische Dokumentation eingebunden. 
2. Die Dokumentation liegt im jeweiligen Repo im Ordner `docs`.
3. Die Abschnitte der Dokumentation wird in einzelne Abschnitte aufgeteilt. Diese werden dann in das `readme.md` im 
   Repo, als auch in die zentrale Dokumentation eingebunden.
4. Für jede Sprache muss unter `[Sprache]/resources/modules` eine Seite erstellt werden. Die Markdown Dateien aus 
   den Repos werden über die Komponente `DwfMarkdownLoader` eingebunden.
5. Für den integrationsartefakt wird ein Eintrag auf der Seite `[Sprache]/resources/modules/modules.md` erstellt 
   (auch hier bitte für alle Übersetzungen).
6. Im Ordner `docs` sollten (mindestens) folgende Inhalte liegen: Quickstart, Architekturüberblick (möglichst mit 
   Bild), alle 
   Operationen (Element Templates) in eigenen Dateien. Bitte vor allem die Input und Output Parameter der Element 
   Templates dokumentieren.

