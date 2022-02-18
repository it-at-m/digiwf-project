<template>
  <v-app-bar app elevate-on-scroll flat dark>
    <v-toolbar-title style="cursor: pointer;" class="font-weight-light" v-on:click="goHome">
      Digi
      <span class="font-weight-medium">
          WF
        </span>
    </v-toolbar-title>
    <v-spacer />
    <v-btn icon href="https://github.com/it-at-m/digiwf-project" class="px-1">
      <v-icon>
        mdi-github
      </v-icon>
    </v-btn>
    <v-icon class="px-1">
      mdi-twitter
    </v-icon>
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
