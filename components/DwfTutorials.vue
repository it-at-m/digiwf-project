<template>
  <div>
    <div class="d-flex flex-wrap float-left" v-for="tutorial in $data.tutorials" :key="tutorial.title">
      <v-card
        class="ma-3 align-start"
        width="290"
        height="230"
      >
        <v-card-title>
          <v-icon large>mdi-school</v-icon>
        </v-card-title>
        <v-card-text>
          <div class="text-h6 text--primary">
            {{ tutorial.title }}
          </div>
          <div class="text--primary">
            {{ tutorial.description }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            text
            color="black"
            :to="localePath(tutorial.path)"
            nuxt
          >
            <v-icon>
              mdi-file-document-outline
            </v-icon>
            {{ $t('tutorials.view') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DwfTutorials.vue',
  data () {
    return {
      tutorials: []
    }
  },
  mounted () {
    this.$content('/resources/tutorials', { deep: true })
      .fetch()
      .then((pages) => {
        const filteredPages = pages
          .filter(p => p.category === 'Tutorials' && p.position > 1)
        this.tutorials.push(...filteredPages)
      })
  }
}
</script>
