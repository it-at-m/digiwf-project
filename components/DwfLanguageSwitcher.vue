<template>
  <v-menu offset-y rounded="lg">
    <template v-slot:activator="{ attrs, on }">
      <v-btn :aria-label="$t('toolbar.language.aria')" v-bind="attrs" v-on="on" class="px-1">
        <v-icon>
          mdi-translate
        </v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        nuxt
      >
        <v-list-item-title v-text="locale.name" />
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  name: 'DwfLanguageSwitcher',
  computed: {
    availableLocales () {
      const locales = this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      return locales
    }
  }
}
</script>
