<template>
  <div class="page-index">
    <a-carousel style="width:800px;height:400px;">
      <div style="backgroundColor:#f00">
        <img src="~/assets/img/1.jpg" />
      </div>
      <div><img src="~/assets/img/2.jpg" /></div>
      <div><img src="~/assets/img/3.jpg" /></div>
      <div><img src="~/assets/img/4.jpg" /></div>
    </a-carousel>
    <a-button type="primary" @click="toDetail">跳页面测试</a-button>
  </div>
</template>

<script>
export default {
  layout: 'home',
  // async fetch({ store, $axios }) {
  //   const { list } = await $axios.get('/home/navInfo')
  //   store.commit('home/setMenuList', list)
  //   // return { list }
  // },
  async asyncData({ store, $axios }) {
    const { list } = await $axios.get('/home/navInfo')
    store.commit('home/setMenuList', list)
    // return { list: [] }
  },
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
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
