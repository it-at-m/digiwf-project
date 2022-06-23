<template>
  <div class="d-flex flex-wrap float-left">
    <v-card
        class="ma-3 align-start"
        width="290"
        max-height="400"
    >
      <v-card-title>
        <v-icon large>
          {{ icon }}
        </v-icon>
      </v-card-title>
      <v-card-text>
        <div class="text-h4 text--primary">
          {{ name }}
        </div>
        <div class="text--primary">
          {{ description }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
            text
            color="black"
            :href="github"
            target="_blank"
            nuxt
        >
          <v-icon>
            mdi-github
          </v-icon>
          {{ $t('integrationartifact.github') }}
        </v-btn>
        <v-btn
            text
            color="black"
            :to="localePath(docs)"
            nuxt
        >
          <v-icon>
            mdi-file-document-outline
          </v-icon>
          {{ $t('integrationartifact.documentation') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'DwfIntegrationArtifact.vue',
  props: {
    name: {
      default: 'name',
      type: String
    },
    description: {
      default: 'description',
      type: String
    },
    github: {
      default: 'github url',
      type: String
    },
    docs: {
      default: 'docs url',
      type: String
    },
    icon: {
      default: 'mdi-toy-brick-outline',
      type: String
    }
  }
}
</script>
