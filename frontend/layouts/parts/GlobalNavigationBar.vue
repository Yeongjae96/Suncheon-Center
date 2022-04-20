<template>
  <div id="header">
    <!-- Inner -->
    <div class="inner">
      <header>
        <!-- <h1><a id="logo" href="index.html">{{ title }}</a></h1>
        <hr>
        <p>{{ subtitle }}</p> -->
      </header>
      <footer>
        <!-- 나중에 이미지로 바꾸든 색깔을 둘수 있든 여러가지를 선택할수 있게 바꿈 -->
        <a href="#banner" class="button circled scrolly">센터 소개</a>
        <a href="#banner" class="button circled scrolly">게시판</a>
        <a href="#banner" class="button circled scrolly">정 보</a>
        <a href="#banner" class="button circled scrolly">프로그램</a>
        <a href="#banner" class="button circled scrolly">식단표</a>
      </footer>
    </div>
    <!-- Nav -->
    <nav id="nav">
      <menu-item-list />
    </nav>
</div>
</template>

<script>
import MenuItemList from './MenuItemList';
export default {
  name: 'GlobalNavigationBar',
  components: {
    MenuItemList,
  },
  data() {
    return {
      subtitle: '예시제목'
    };
  },
  created() {},
  mounted() {
    this.title = '은빛사랑채 노인복지센터'
    this.subtitle = '예시 서브타이틀'
  }
}
</script>

<style lang="scss">
  #header {
    background-image: url("~/assets/images/backtop.png");
    height: 600px;
    position: relative;

    & .inner {
      width: 100%;
    }
  }
</style>