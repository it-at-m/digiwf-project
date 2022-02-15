<template>
  <v-container fluid>
    <article>
      <h1>{{ page.title }}</h1>
    </article>
  </v-container>
</template>
<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('resources/architecture/overview').fetch()
    return  {
      page
    }
  }
 }
</script>
