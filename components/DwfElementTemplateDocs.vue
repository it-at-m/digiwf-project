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
      <v-row class="font-weight-medium">
        <v-col>
          Label
        </v-col>
        <v-col>
          Type
        </v-col>
        <v-col>
          Binding Type
        </v-col>
        <v-col>
          Constraints
        </v-col>
      </v-row>
      <v-row v-for="property in elementtemplate.properties" v-bind:key="property.label">
        <v-col>
          {{ property.label }}
        </v-col>
        <v-col>
          <code>
            {{ property.type }}
          </code>
        </v-col>
        <v-col>
          <code>
            {{ property.binding.type }}
          </code>
        </v-col>
        <v-col>
          {{ property.constraints }}
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
