<template>
  <v-container fluid>
    <v-row v-if="mobile">
      <dwf-navigation-drawer :navigation="navigation" hide-overlay elevation="0" width="100%" />
    </v-row>
    <v-row>
      <v-col cols="2" v-if="!mobile">
        <dwf-navigation-drawer :navigation="navigation" />
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="8" xl="8">
        <h1 class="mb-6 mt-6 text-h5 text-xl-h1 text-lg-h2 text-md-h3 text-sm-h4">
          {{ article.title }}
        </h1>
        <p class="text-caption">
          {{ $t('documentation.lastchange') }}: {{ $d(new Date(article.createdAt), 'short') }}
        </p>
        <nuxt-content :document="article" tag="article"></nuxt-content>
        <v-row>
          <v-btn v-if="prev"
                 small
                 text
                 nuxt
                 :to="prev.path"
                 :aria-label="`${$t('documentation.prev')}: ${prev.title}`"
                 class="my-5">
            <v-icon>
              mdi-arrow-left
            </v-icon>
            {{ prev.title }}
          </v-btn>
          <v-spacer />
          <v-btn v-if="next"
                 small
                 text
                 nuxt
                 :to="next.path"
                 :aria-label="`${$t('documentation.next')}: ${next.title}`"
                 class="my-5">
            {{ next.title }}
            <v-icon>
              mdi-arrow-right
            </v-icon>
          </v-btn>
        </v-row>
      </v-col>
      <!-- If the user uses a mobile device, don't display this column. -->
      <v-col cols="2" v-if="!mobile">
        <div class="subtitle-1 grey--text text--darken-1 mt-6 mb-4">
          {{ $t('documentation.toc') }}
        </div>
        <v-list dense>
          <v-list-item v-for="link in article.toc" :key="link.id" nuxt :to="`#${link.id}`">
            <v-list-item-content>
              <v-list-item-title :class="{ 'ml-3': link.depth === 3 }">
                {{ link.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { VAlert, VImg } from 'vuetify/lib'
import DwfIntegrationArtifact from "../components/DwfIntegrationArtifact";

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VAlert,
    // eslint-disable-next-line vue/no-unused-components
    VImg,
    // eslint-disable-next-line vue/no-unused-components
    DwfIntegrationArtifact
  },
  async asyncData ({ $content, params, error, app }) {
    // Get correct locale, delete first '/' and add a '/' to the end.
    // So we can get a localized source string for default (/) and all other
    let locale = app.localePath('/') + '/'
    // eslint-disable-next-line
    locale = locale.replace('\//', '/')
    // get url params
    const path = `${locale}${params.pathMatch || 'index'}`
    // load the requested *.md file
    const [article] = await $content({ deep: true }).where({ path }).fetch()
    let navigation = []
    let prev = null
    let next = null

    if (!article) {
      // nothing found? nirwana!
      return error({ statusCode: 404, message: 'Article not found' })
    } else {
      // load all articles in the requested folder
      navigation = await $content(article.dir).only(['title', 'path', 'category', 'categoryIcon', 'navIcon']).sortBy('position').fetch()

      // load prev and next
      const [p, n] = await $content(article.dir)
        .only(['title', 'path'])
        .sortBy('position')
        .surround(article.path)
        .fetch()

      if (p) {
        prev = p
      }

      if (n) {
        next = n
      }
    }
    return {
      article, navigation, prev, next
    }
  },
  computed: {
    // indicates, if the page is watched on a mobile device or not.
    mobile () {
      return this.$vuetify.breakpoint.mobile
    }
  }
}
</script>
