<template>
  <v-footer dark padless class="mx-0 mb-0 mt-3 pa-8">
    <v-container fluid class="pa-0 ma-0">
      <v-sheet height="60" color="transparent" />
      <v-row class="pb-8">
        <v-col cols="0" sm="0" md="0" lg="2" xl="2" />
        <v-col cols="12" sm="3" md="3" lg="2" xl="2">
          <v-row class="font-weight-medium mt-10">
            {{ $t('footer.about.title') }}
          </v-row>
<!--          <v-row class="text-body-2 mt-6">-->
<!--            Open Source Software-->
<!--          </v-row>-->
          <v-row class="text-body-2 mt-6">
            <NuxtLink class="text-decoration-none white--text" :to="localePath('/about/vision/vision')">
              {{ $t('footer.about.vision') }}
            </NuxtLink>
          </v-row>
          <v-row class="text-body-2 mt-6">
            <NuxtLink class="text-decoration-none white--text" :to="localePath('/about/roadmap')">
              {{ $t('footer.about.roadmap') }}
            </NuxtLink>
          </v-row>
          <v-row class="text-body-2 mt-6">
            <NuxtLink class="text-decoration-none white--text" :to="localePath('/about/rules')">
              {{ $t('footer.about.coc') }}
            </NuxtLink>
          </v-row>
          <v-row class="text-body-2 mt-6">
            <NuxtLink class="text-decoration-none white--text" :to="localePath('/about/contact')">
              {{ $t('footer.about.contact') }}
            </NuxtLink>
          </v-row>
          <v-row class="text-body-2 mt-6">
            <NuxtLink class="text-decoration-none white--text" :to="localePath('/about/impress')">
              {{ $t('footer.about.impress') }}
            </NuxtLink>
          </v-row>
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="2" xl="2">
          <v-row class="font-weight-medium mt-10">
            {{ $t('footer.ecosystem.title') }}
          </v-row>
<!--          <v-row class="text-body-2 mt-6">-->
<!--            Announcements-->
<!--          </v-row>-->
          <v-row class="text-body-2 mt-6">
            <NuxtLink class="text-decoration-none white--text" :to="localePath('/ecosystem/contribution/contribution')">
              {{ $t('footer.ecosystem.contribution') }}
            </NuxtLink>
          </v-row>
<!--          <v-row class="text-body-2 mt-6">-->
<!--            Team-->
<!--          </v-row>-->
<!--          <v-row class="text-body-2 mt-6">-->
<!--            Tutorials-->
<!--          </v-row>-->
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="2" xl="2">
          <v-row class="font-weight-medium mt-10">
            {{ $t('footer.resources.title') }}
          </v-row>
          <v-row class="text-body-2 mt-6">
            <NuxtLink class="text-decoration-none white--text" :to="localePath('/resources/documentation/concept/overview')">
              {{ $t('footer.resources.architecture') }}
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
          <v-row class="text-body-2 mt-6">
            <NuxtLink class="text-decoration-none white--text" :to="localePath('/resources/modules/modules')">
              {{ $t('footer.resources.modules') }}
            </NuxtLink>
          </v-row>
          <v-row class="text-body-2 mt-6">
            <NuxtLink class="text-decoration-none white--text" :to="localePath('/resources/tutorials/overview')">
              {{ $t('footer.resources.tutorials') }}
            </NuxtLink>
          </v-row>
<!--          <v-row class="text-body-2 mt-6">-->
<!--            Releases-->
<!--          </v-row>-->
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="2" xl="2">
          <v-row class="font-weight-medium mt-10">
            {{ $t('footer.social.title') }}
          </v-row>
          <v-row class="text-body-2 mt-6">
            {{ $t('footer.social.text') }}
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
