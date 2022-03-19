<template>
  <a :href="url">
    <img :src="image" :alt="message">
  </a>
</template>

<script>
export default {
  name: 'IconLink',
  props: {
    url: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      default: '',
      required: false,
    },
  },
}
</script>

<style>

</style>