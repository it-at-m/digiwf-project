<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <div class="subtitle-1 grey--text text--darken-1 mt-6 mb-4">
          {{ navigation[0].category }}
        </div>
        <v-list nav dense>
          <v-list-item v-for="nav in navigation" :key="nav.path" nuxt :to="nav.path">
            <v-list-item-content>
              <v-list-item-title>{{ nav.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="8">
        <h1 class="mb-6 mt-6 text-h5 text-xl-h1 text-lg-h2 text-md-h3 text-sm-h4">{{ article.title }}</h1>
        <nuxt-content :document="article"></nuxt-content>
      </v-col>
      <v-col cols="2">
        <div class="subtitle-1 grey--text text--darken-1 mt-6 mb-4">
          Table of contents
        </div>
        <v-list dense>
          <v-list-item v-for="link in article.toc" :key="link.id" nuxt :to="`#${link.id}`">
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
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
</script>
