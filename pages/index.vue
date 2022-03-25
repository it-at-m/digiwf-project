<template>
  <v-container fluid class="pa-0 ma-0">
    <v-img
      sizes="(max-width: 2268px) 100vw, 2268px"
      srcset="
        images/background_oqun5d_c_scale,w_700.png 700w,
        images/background_oqun5d_c_scale,w_1235.png 1235w,
        images/background_oqun5d_c_scale,w_1807.png 1807w,
        images/background_oqun5d_c_scale,w_2268.png 2268w"
      src="images/background_oqun5d_c_scale,w_2268.png"
      contain
    >
      <v-row
        align="center"
        justify="start"
      >
        <v-col
          class="text-left"
          cols="12"
          md="7"
          sm="9"
          lg="5"
          xl="4"
        >
          <v-sheet class="py-0 py-xl-3 py-lg-3 py-md-2 py-sm-1 px-3" color="rgb(255,255,255, 0.9)">
            <div class="text-h6 text-xl-h1 text-lg-h2 text-md-h3 text-sm-h4 font-weight-black mb-0 mb-xl-5 mb-lg-4 mb-md-3 mb-sm-2">
              processes.
            </div>
            <div class="text-h6 text-xl-h1 text-lg-h2 text-md-h3 text-sm-h4 font-weight-black mb-0 mb-xl-5 mb-lg-4 mb-md-3 mb-sm-2">
              forms.
            </div>
            <div class="text-h6 text-xl-h1 text-lg-h2 text-md-h3 text-sm-h4 font-weight-black mb-0 mb-xl-5 mb-lg-4 mb-md-3 mb-sm-2">
              integration.
            </div>
            <div class="caption text-xl-subtitle-1 text-lg-subtitle-1 text-md-subtitle-2 text-sm-body-2">
              build your end2end process app today!
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-img>
    <article>
      <v-sheet color="grey lighten-4">
        <v-row
          align="center"
          justify="center"
          class="align-stretch"
        >
          <v-col cols="2" />
          <v-col  cols="8">
            <section>
              <h1 class="mb-6 mt-6 text-h6 text-xl-h2 text-lg-h3 text-md-h4 text-sm-h5 text-center">
                {{ history.title }}
              </h1>
              <nuxt-content :document="history"></nuxt-content>
            </section>
          </v-col>
          <v-col cols="2" />
        </v-row>
      </v-sheet>
      <v-sheet>
        <v-row
          align="center"
          justify="center"
          class="align-stretch"
        >
          <v-col cols="2" />
          <v-col cols="8">
            <h1 class="mb-6 mt-6 text-h6 text-xl-h2 text-lg-h3 text-md-h4 text-sm-h5 text-center">
              {{ roadmap.title }}
            </h1>
            <section class="mb-10">
              <nuxt-content :document="roadmap"></nuxt-content>
            </section>
          </v-col>
          <v-col cols="2" />
        </v-row>
      </v-sheet>
    </article>
  </v-container>
</template>
<script>
export default {
  async asyncData ({ $content, error, app }) {
    // Get correct locale, delete first '/' and add a '/' to the end.
    // So we can get a localized source string for default (/) and all other
    const locale = app.localePath('/').replace('/', '') + '/'
    // load the history
    const history = await $content(locale + 'history').fetch()
    if (!history) {
      // nothing found? nirwana!
      return error({ statusCode: 404, message: 'History not found' })
    }

    // load the history
    const roadmap = await $content(locale + 'roadmap').fetch()
    if (!roadmap) {
      // nothing found? nirwana!
      return error({ statusCode: 404, message: 'roadmap not found' })
    }

    return {
      history, roadmap
    }
  }
}
</script>
<style>

</style>
