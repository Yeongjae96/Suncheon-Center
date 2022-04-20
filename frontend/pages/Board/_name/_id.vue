<template>
  <p>
    View화면
    <!-- 게시판 헤더(게시판 카테고리, 제목, 아이콘, 작성자이름, 작성일, URL복사) -->
    <!-- 게시판 본문 -->
    <!-- 게시판 본문(하단 프로필카드) -->
    <!-- 게시판 하단(해시태그, 공감, 댓글쓰기, 공유, 인쇄), 블로그전체카테고리글  -->
    {{ id }}
  </p>
</template>

<script>
export default {
  name: 'DefaultBoardView',
  asyncData({ params }) {
    return new Promise((resolve) => {
      const name = params.name;
      const id = params.id;
      resolve({ name, id });
    });
  }
}
</script>

<style>

</style>