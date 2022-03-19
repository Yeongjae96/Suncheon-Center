<template>
  <ul
    class="dropotron level-0 center"
    @click="onItemClick"
  >
    <li
      v-for="item in item"
      :key="item.id"
    >
      <slot :child="item">
        {{ child.value }}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    value: {
      type: String,
      required: true,
    },
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