<template>
  <v-app-bar app elevate-on-scroll flat dark>
    <v-toolbar-title style="cursor: pointer;" class="font-weight-light" v-on:click="goHome">
      Digi
      <span class="font-weight-medium">
          WF
        </span>
    </v-toolbar-title>
    <v-spacer />
    <dwf-github-button />
    <dwf-twitter-button />
    <dwf-slack-button />
  </v-app-bar>
</template>
<script>
export default {
  methods: {
    /**
     * Sends the user back to the landing page
     */
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
