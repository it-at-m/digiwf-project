---
title: Getting started
description: 'Empower your NuxtJS application with @nuxt/content module: write in a content/ directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS.'
---

<img src="/background_oqun5d_c_scale,w_700.png" class="light-img" alt="Fancy Background Image"/>

Empower your NuxtJS application with `@nuxtjs/content` module: write in a `content/` directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a **Git-based Headless CMS**.

---

```html
---
title: Home
---

## Links

<nuxt-link to="/articles">Nuxt Link to Blog</nuxt-link>
<a href="/articles">Html Link to Blog</a>
[Markdown Link to Blog](/articles)
<a href="https://nuxtjs.org">External link html</a>
[External Link markdown](https://nuxtjs.org)
```

At the command prompt, type `nano`

``Use `code` in your Markdown file.``

## Writing content

Learn how to write your `content/`, supporting Markdown, YAML, CSV and JSON: https://content.nuxtjs.org/writing.

## Fetching content

Learn how to fetch your content with `$content`: https://content.nuxtjs.org/fetching.

## Displaying content

Learn how to display your Markdown content with the `<nuxt-content>` component directly in your template: https://content.nuxtjs.org/displaying.
