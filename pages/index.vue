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
    <v-sheet color="grey lighten-4" height="30vh">
      <v-row
        align="center"
        justify="center"
        class="align-stretch"
      >
        <v-col class="text-center" cols="12">
          <h3 class="grey--text">
            Under construction. Stay tuned!
          </h3>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>
<script>
export default{
  layout (context) {
    return 'landing'
  }
}
</script>
<style>

</style>
