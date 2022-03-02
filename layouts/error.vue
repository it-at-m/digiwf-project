<template>
  <v-container fluid class="pa-0" fill-height>
    <v-sheet color="yellow darken-1" class="fill-height" width="100%">
      <v-container fill-height>
        <v-row
            align="center"
            justify="center"
        >
          <v-col
              class="text-center"
              cols="12"
          >
            <v-card class="mx-auto" max-width="500">
              <v-img src="images/404.png" width="100%" />
              <v-card-actions>
                <v-btn text nuxt to="/">
                  Go Home
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-container>
</template>
<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>
