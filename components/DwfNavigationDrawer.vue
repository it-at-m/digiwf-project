<template>
  <v-navigation-drawer v-model="drawer" v-bind="$attrs">
    <v-list-item class="px-2">
      <v-list-item-icon>
        <v-icon>{{ navigation[0].categoryIcon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title>{{ navigation[0].category }}</v-list-item-title>
    </v-list-item>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item v-for="nav in navigation" :key="nav.path" nuxt :to="nav.path">
        <v-list-item-content>
          <v-list-item-title>{{ nav.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "DwfNavigationDrawer.vue",
  props: {
    navigation: Array
  },
  data () {
    return {
      drawer: true
    }
  }
}
</script>