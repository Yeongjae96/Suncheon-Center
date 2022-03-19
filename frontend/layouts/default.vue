<template>
  <div>
    <global-navigation-bar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import GlobalNavigationBar from './parts/GlobalNavigationBar.vue'
import Footer from './parts/Footer.vue'
export default {
  name: 'Default',
  components: {
    GlobalNavigationBar,
    Footer,
  }
};
</script>

<style>
</style>