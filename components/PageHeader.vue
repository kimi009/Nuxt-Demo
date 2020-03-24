<template>
  <div class="page-header">
    <div class="page-header_left">
      <img src="~/assets/icon/logo.jpg" />
    </div>
    <div class="page-header_right">登录</div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  components: {}
}
</script>

<style lang="less" scoped>
.page-header {
  padding: 0 50px;
  height: 46px;
  background-color: #000000;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  &_left {
    img {
      width: 32px;
      border-radius: 50%;
    }
  }
  &_right {
    color: #ffffff;
  }
}
</style>
