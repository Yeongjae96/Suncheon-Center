<template>
  <ul>
    <menu-item
      v-for="menu in menuList"
      :key="menu.id"
      v-bind="menu"
    />
  </ul>
</template>

<script>
import MenuItem from './MenuItem.vue'
export default {
  name: 'MenuItemList',
  components: {
    MenuItem,
  },
  data() {
    return {
      menuList: [],
    }
  },
  created() {
    this.menuList = [
      {
        id: 'M001',
        url: '/Main',
        title: '메인페이지',
        children: [
          {
            id: 'M001002',
            url: '/Main/1',
            title: '서브메인페이지'
          },
          {
            id: 'M001003',
            url: '/Main/1',
            title: '서브메인페이지'
          },
          {
            id: 'M001004',
            url: '/Main/1',
            title: '서브메인페이지'
          },
          {
            id: 'M001005',
            url: '/Main/1',
            title: '서브메인페이지'
          },
        ]
      },
      { id: 'M002', url: '/Board/Notice', title: '공지사항' },
      { id: 'M003', url: '/About', title: '소개페이지' },
      { id: 'M004', url: '/Board/Yerin', title: '게시판' },
    ];
  },
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss">
  ul > * {
    color: #333;
    font-weight: bold;
  }
</style>