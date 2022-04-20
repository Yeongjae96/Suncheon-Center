<template>
  <div>
    {{ name }} 화면
    <NuxtLink to="/Board/Name/1">
      1번으로이동
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'DefaultBoardList',
  // 처음 페이지 로딩시 id값을 가져오는 부분
  asyncData({ params }) {
    return new Promise((resolve, reject) => {
      const name = params.name;
      resolve({ name });
    });
  },
}
</script>

<style>

</style>