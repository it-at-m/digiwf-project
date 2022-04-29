<template>
  <div v-html="htmlcontent"></div>
</template>

<script>
import { marked } from 'marked'

export default {
  name: "DwfMarkdownLoader",
  props: {
    source: String
  },
  data: () => ({
    markdown: ''
  }),
  async fetch() {
    this.markdown = await this.$http.$get(this.source)
  },
  computed: {
    htmlcontent() {
      return marked.parse(this.markdown)
    }
  }
}
</script>
