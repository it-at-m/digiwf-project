<template>
  <v-footer dark padless class="ma-0 pa-8">
    <v-container fluid class="pa-0 ma-0">
      <v-sheet height="100" color="transparent" />
      <v-row class="pb-8">
        <v-col />
        <v-col>
          <v-row class="font-weight-medium">
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
        <v-col class="font-weight-medium">
          <v-row class="font-weight-medium">
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
        <v-col class="font-weight-medium">
          <v-row class="font-weight-medium">
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
        <v-col class="font-weight-medium">
          <v-row class="font-weight-medium">
            Stay tuned!
          </v-row>
          <v-row class="text-body-2 mt-6">
            Star us on github, or follow on twitter.
          </v-row>
          <v-row class="text-body-2 ">
            <v-btn icon aria-label="link to our github account" href="https://github.com/it-at-m/digiwf-project" class="px-1">
              <v-icon>
                mdi-github
              </v-icon>
            </v-btn>
            <v-btn icon aria-label="link to our twitter account" href="https://twitter.com/digiwf_munich" class="px-1">
              <v-icon>
                mdi-twitter
              </v-icon>
            </v-btn>
          </v-row>
        </v-col>
        <v-col />
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {

}
</script>
