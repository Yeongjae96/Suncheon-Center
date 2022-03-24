<template>
  <li
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
  >
    <NuxtLink
      :to="url || '#'"
      :class="{
        'active': isMouseEnter
      }"
    >
      {{ title }}
    </NuxtLink>
    <Dropdown
      v-if="hasChildren"
      v-show="isMouseEnter"
      :items="children"
    >
      <!-- v-for="(child) in children" -->
      <template #default="child">
        <menu-item
          :id="child.id"
          :key="child.id"
          :url="child.url"
          :title="child.title"
          :children="child.children"
        />
      </template>
    </Dropdown>
  </li>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: () => '기본값'
    },
    children: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      isMouseEnter: false,
    }
  },
  computed: {
    hasChildren() {
      return this.children.length > 0;
    },
  },
  created() {

  },
  mounted() {

  },
  methods: {
    onMouseOver() {
      this.isMouseEnter = true;
    },
    onMouseLeave() {
      this.isMouseEnter = false;
    }
  }
}
</script>

<style scoped>
  li > *:not(:last-child) {
    padding-bottom: 30px;
  }
</style>