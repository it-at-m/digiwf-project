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
  margin-bottom: 2em;
}

.nuxt-content p {
  margin-top: 2em;
}

.nuxt-content figure p {
  margin: 0;
  padding: 0;
}

.nuxt-content figure div {
  border:1px solid black;
}

.nuxt-content h2 {
  font-weight: 300;
  font-size: 3.00rem;
  margin-top: 0.7em;
  margin-bottom: 0.4em;
}

.nuxt-content h3 {
  font-weight: 400;
  font-size: 2rem;
  margin-top: 0.4em;
  margin-bottom: 0.2em;
}

.nuxt-content div.v-alert {
  margin-top: 2em;
}
</style>
