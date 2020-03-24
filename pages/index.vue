<template>
  <div class="page-index">
    {{ $store.state.home.menu }}
    <a-button type="primary" @click="toDetail">跳页面测试</a-button>
  </div>
</template>

<script>
export default {
  layout: 'home',
  async fetch({ store, $axios }) {
    const {
      status,
      data: { list }
    } = await $axios.get('http://localhost:6010/home/navInfo')
    if (status === 200) {
      store.commit('home/setMenuList', list)
      return { list }
    }
    return { list: [] }
  },
  // async asyncData(ctx) {
  //   const {
  //     status,
  //     data: { list }
  //   } = await ctx.$axios.get('http://localhost:6010/user/info')
  //   if (status === 200) {
  //     global.console.log(ctx.store.modules)
  //     store.commit('/home/setMenuList', list)
  //     return { list }
  //   }
  //   return { list: [] }
  // },
  // async asyncData({ $axios }) {
  //   const {
  //     status,
  //     data: { list }
  //   } = await $axios.get('/user/info')
  //   if (status === 200) {
  //     return { list }
  //   }
  //   return { list: [] }
  // },
  methods: {
    toDetail() {
      // location.href = '/users/111'
      this.$router.push('/users/111')
    }
  }
}
</script>

<style lang="less" scoped>
.page-index {
}
</style>
