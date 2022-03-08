<template>
  <v-footer dark padless class="ma-0 pa-8">
    <v-container fluid class="pa-0 ma-0">
      <v-sheet height="60" color="transparent" />
      <v-row class="pb-8">
        <v-col cols="0" sm="0" md="0" lg="2" xl="2" />
        <v-col cols="12" sm="3" md="3" lg="2" xl="2">
          <v-row class="font-weight-medium mt-10">
            About
          </v-row>
<!--          <v-row class="text-body-2 mt-6">-->
<!--            Open Source Software-->
<!--          </v-row>-->
          <v-row class="text-body-2 mt-6">
            <NuxtLink class="text-decoration-none white--text" to="/about/rules">
              Code of Conduct
            </NuxtLink>
          </v-row>
          <v-row class="text-body-2 mt-6">
            <NuxtLink class="text-decoration-none white--text" to="/about/contact">
              Contact us
            </NuxtLink>
          </v-row>
          <v-row class="text-body-2 mt-6">
            <NuxtLink class="text-decoration-none white--text" to="/about/impress">
              Impress
            </NuxtLink>
          </v-row>
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="2" xl="2">
          <v-row class="font-weight-medium mt-10">
            Ecosystem
          </v-row>
<!--          <v-row class="text-body-2 mt-6">-->
<!--            Announcements-->
<!--          </v-row>-->
<!--          <v-row class="text-body-2 mt-6">-->
<!--            Contribute-->
<!--          </v-row>-->
<!--          <v-row class="text-body-2 mt-6">-->
<!--            Team-->
<!--          </v-row>-->
<!--          <v-row class="text-body-2 mt-6">-->
<!--            Tutorials-->
<!--          </v-row>-->
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="2" xl="2">
          <v-row class="font-weight-medium mt-10">
            Resources
          </v-row>
          <v-row class="text-body-2 mt-6">
            <NuxtLink class="text-decoration-none white--text" to="/resources/documentation/architecture/overview">
              Architecture
            </NuxtLink>
          </v-row>
<!--          <v-row class="text-body-2 mt-6">-->
<!--            Installation-->
<!--          </v-row>-->
<!--          <v-row class="text-body-2 mt-6">-->
<!--            Process Creation-->
<!--          </v-row>-->
<!--          <v-row class="text-body-2 mt-6">-->
<!--            Examples-->
<!--          </v-row>-->
<!--          <v-row class="text-body-2 mt-6">-->
<!--            Modules-->
<!--          </v-row>-->
<!--          <v-row class="text-body-2 mt-6">-->
<!--            Releases-->
<!--          </v-row>-->
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="2" xl="2">
          <v-row class="font-weight-medium mt-10">
            Stay tuned!
          </v-row>
          <v-row class="text-body-2 mt-6">
            Star us on github, follow on twitter or chat on slack.
          </v-row>
          <v-row class="text-body-2 ">
            <dwf-github-button />
            <dwf-twitter-button />
            <dwf-slack-button />
          </v-row>
        </v-col>
        <v-col cols="0" sm="0" md="0" lg="2" xl="2" />
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {

}
</script>
