<template>
  <v-card
      class="ma-3 align-start"
      max-width="350"
      max-height="350"
  >
    <v-card-text>
      <div>{{ $t('integrationartifact.name') }}</div>
      <div class="text-h4 text--primary">
        {{ name }}
      </div>
      <p>{{ $t('integrationartifact.description') }}</p>
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
</template>

<script>
export default {
  name: "DwfIntegrationArtifact.vue",
  props: {
    name: String,
    description: String,
    github: String,
    docs: String
  }
}
</script>