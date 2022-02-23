<template>
  <v-app>
    <dwf-toolbar />
    <v-main>
      <Nuxt />
    </v-main>
    <dwf-footer />
  </v-app>
</template>
<style>
.nuxt-content a {
  color: black;
}

.nuxt-content a:hover {
  color: #fdd835;
}

.nuxt-content figcaption {
  font-size: smaller;
  color: #616161;
}

.nuxt-content p {
  margin-top: 2em;
}

.nuxt-content figure div {
  border:1px solid black;
}
</style>
