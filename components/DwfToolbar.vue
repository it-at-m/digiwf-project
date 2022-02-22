<template>
  <v-app-bar app elevate-on-scroll flat dark>
    <v-toolbar-title style="cursor: pointer;" class="font-weight-light" v-on:click="goHome">
      Digi
      <span class="font-weight-medium">
          WF
        </span>
    </v-toolbar-title>
    <v-spacer />
    <v-btn aria-label="link to our github account" icon  href="https://github.com/it-at-m/digiwf-project" class="px-1">
      <v-icon>
        mdi-github
      </v-icon>
    </v-btn>
    <v-btn aria-label="link to our twitter account" icon  href="https://twitter.com/digiwf_munich" class="px-1">
      <v-icon>
        mdi-twitter
      </v-icon>
    </v-btn>
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
