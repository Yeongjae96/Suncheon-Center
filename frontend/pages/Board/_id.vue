<template>
  <div>
    {{ id || "기본값" }}
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    return new Promise((resolve, reject) => {
      const id = params.id;
      resolve({ id });
    });
  },
}
</script>

<style>

</style>