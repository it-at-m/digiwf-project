<template>
  <v-container fluid class="pa-0 ma-0">
    <v-img
      sizes="(max-width: 2268px) 100vw, 2268px"
      srcset="
        background_oqun5d_c_scale,w_700.png 700w,
        background_oqun5d_c_scale,w_1235.png 1235w,
        background_oqun5d_c_scale,w_1807.png 1807w,
        background_oqun5d_c_scale,w_2268.png 2268w"
      src="background_oqun5d_c_scale,w_2268.png"
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
          <v-sheet class="pa-3" color="rgb(255,255,255, 0.9)">
            <h1 class="text-h5 text-xl-h1 text-lg-h2 text-md-h3 text-sm-h4 font-weight-black mb-1 mb-xl-5 mb-lg-4 mb-md-3 mb-sm-2">
              processes.
            </h1>
            <h1 class="text-h5 text-xl-h1 text-lg-h2 text-md-h3 text-sm-h4 font-weight-black mb-1 mb-xl-5 mb-lg-4 mb-md-3 mb-sm-2">
              forms.
            </h1>
            <h1 class="text-h5 text-xl-h1 text-lg-h2 text-md-h3 text-sm-h4 font-weight-black mb-1 mb-xl-5 mb-lg-4 mb-md-3 mb-sm-2">
              integration.
            </h1>
            <h4 class="subheading">
              build your end2end process app today!
            </h4>
          </v-sheet>
        </v-col>
      </v-row>
    </v-img>
    <v-sheet color="grey lighten-4">
      <v-row
        align="center"
        justify="center"
        class="align-stretch"
      >
        <v-col cols="2" />
        <v-col class="text-center" cols="8">
          <h1 class="mb-6 mt-6 text-h5 text-xl-h1 text-lg-h2 text-md-h3 text-sm-h4">
            {{ history.title }}
          </h1>
          <article>
            <nuxt-content :document="history"></nuxt-content>
          </article>
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
        <v-col class="text-center" cols="8">
          <h2 class="mb-6 mt-6 text-h6 text-xl-h2 text-lg-h3 text-md-h4 text-sm-h5">
            {{ roadmap.title }}
          </h2>
          <article>
            <section class="text-center mb-5">
              DigiWF is currently an internal developed project. We'll create repos for new artifacts directly on github. All the older ones will be transferred step by step from our internal git to this public git space (https://github.com/it-at-m). This is a time consuming process - so please stay calm and follow to keep in touch.
            </section>
            <section class="text-left mb-10">
              <nuxt-content :document="roadmap"></nuxt-content>
            </section>
          </article>
        </v-col>
        <v-col cols="2" />
      </v-row>
    </v-sheet>
  </v-container>
</template>
<script>
export default {
  /* eslint-disable */
  layout (context) {
    return 'landing-layout'
  },
  /* eslint-enable */
  async asyncData ({ $content, app, params, error }) {
    // load the history
    const history = await $content('history').fetch()
    if (!history) {
      // nothing found? nirwana!
      return error({ statusCode: 404, message: 'History not found' })
    }

    // load the history
    const roadmap = await $content('roadmap').fetch()
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
