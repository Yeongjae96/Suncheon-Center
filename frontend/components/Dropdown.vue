<template>
  <transition name="fade">
    <ul
      class="dropotron level-0 center"
      @click="onItemClick"
    >
      <template
        v-for="item in items"
      >
        <slot name="default" v-bind="item" />
      </template>
    </ul>
  </transition>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    items: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    onItemClick() {
      console.log('item Click!');
    }
  }
}
</script>

<style scoped>
</style>