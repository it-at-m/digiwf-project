<template>
  <v-card
      class="ma-3 align-start"
      width="100%"
  >
    <v-card-title>
      <div class="text-h4 text--primary">
        {{ elementtemplate.name }}
      </div>
    </v-card-title>
    <v-card-subtitle>
      {{ elementtemplate.id }}
    </v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col>
          {{ elementtemplate.properties[0].label }}
        </v-col>
        <v-col>
          <code>
            {{ elementtemplate.properties[0].type }}
          </code>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'DwfElementTemplateDocs',
  props: {
    jsonurl: {
      default: 'json url',
      type: String
    }
  },
  data: () => ({
    elementtemplate: ''
  }),
  async fetch () {
    this.elementtemplate = await this.$http.$get(this.jsonurl)
  }
}
</script>
