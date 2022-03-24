<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/component-definition-name-casing
  name: 'error',
  layout: 'none',
  props: {
    error: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style>

</style>