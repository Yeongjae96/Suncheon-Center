<template>
  <div>
    Matrix Board
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'Maxrix',
  props: {
    name: {
      type: String,
      required: true,
    }
  }
}
</script>

<style>

</style>