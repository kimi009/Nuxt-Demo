<template>
  <div class="page-index">
    <test :list="list"></test>
    <a-button type="primary" @click="toDetail">跳页面测试</a-button>
  </div>
</template>

<script>
import Test from '@/components/Test'
export default {
  components: { Test },
  async asyncData({ $axios }) {
    const {
      status,
      data: { list }
    } = await $axios.get('/user/info')
    if (status === 200) {
      return { list }
    }
    return { list: [] }
  },
  data() {
    return {
      current: ['mail']
    }
  },
  methods: {
    toDetail() {
      location.href = '/users/111'
    }
  }
}
</script>

<style lang="less" scoped>
.page-index {
  // .ant-menu {
  //   background-color: #000000;
  // }
  // .ant-menu-submenu {
  //   color: #ffffff;
  // }
  // .ant-menu-item-selected {
  //   color: #1890ff;
  // }
  // .ant-menu-item {
  //   a {
  //     color: #ffffff;
  //   }
  // }
}
</style>
