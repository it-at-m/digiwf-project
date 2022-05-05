---
title: Contributions
description: How to participate in the development of DigiWF?
category: 'Contributions'
categoryIcon: 'mdi-gift-open-outline'
position: 1
---

## Documentation

### DwfMarkdownLoader

The component `DwfMarkdownLoader` can be used to load Markdown files that are located on other servers.

``` html
<dwf-markdown-loader source="https://raw.githubusercontent.com/it-at-m/digiwf-s3-integration/dev/README.
md"></dwf-markdown-loader>
```

If you want to load Markdown documents from github, it is recommended to use the "raw" view. 

### Documentation of integration artifacts

The documentation of (official) integration artifacts should be done in the respective repository. On the other hand here in the official overall documentation. In order not to have to maintain content twice, the following rules apply:

1. documentation shall be in English only. Also in other translations (as for example German) the English documentation is integrated.
2. the documentation is located in the respective repo in the folder 'docs'.
3. the sections of the documentation will be splitted into single sections. These are then included in the `readme.md` in the repo, as well as in the central documentation.
4. for each language a page must be created under `[language]/resources/modules`. The Markdown files from the repos are included via the component `DwfMarkdownLoader`.
5. for the integration artifact an entry is created on the page `[language]/resources/modules/modules.md` (again please for all translations).
6. in the folder `docs` should be (at least) the following contents: quickstart, architecture overview (if possible with picture), all
   operations (element templates) in separate files. Please document especially the input and output parameters of the element templates.

<v-alert color="red darken-1" border="left" elevation="2" colored-border icon="mdi-robot-angry">
It is important to rebuild and deploy the central documentation page when making changes to the documentation in the repo. Since it is a static page, it does not get anything from changes in another repo / on another server.
</v-alert>