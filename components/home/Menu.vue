<template>
  <a-row gutter="20" class="home-menu">
    <template v-for="item in menuList">
      <a-col :key="item.key" class="home-menu_col">
        {{ item.name }}
      </a-col>
    </template>
  </a-row>
</template>

<script>
export default {
  name: 'HomeMenu',
  props: {
    menuList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.home-menu {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 80px;
  background-color: #000000;
  color: #ffffff;
  margin: 0 !important;
  &_col {
    cursor: pointer;
    &:hover {
      color: #00bcc8;
    }
  }
}
</style>
