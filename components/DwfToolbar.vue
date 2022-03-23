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
    <v-divider vertical light />
    <dwf-language-switcher />
  </v-app-bar>
</template>
<script>
import DwfLanguageSwitcher from "./DwfLanguageSwitcher";
export default {
  components: {DwfLanguageSwitcher},
  methods: {
    /**
     * Sends the user back to the landing page
     */
    goHome () {
      const path = this.localePath('/')
      this.$router.push(path)
    }
  }
}
</script>
