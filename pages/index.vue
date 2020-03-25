<template>
  <div class="page-index">
    <banner />
    <a-button type="primary" @click="toDetail">跳页面测试</a-button>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
export default {
  components: {
    Banner
  },
  layout: 'home',
  // async fetch({ store, $axios }) {
  //   const { list } = await $axios.get('/home/navInfo')
  //   store.commit('home/setMenuList', list)
  //   // return { list }
  // },
  async asyncData({ store, $axios }) {
    const { list } = await $axios.get('/home/navInfo')
    global.console.log(list)
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
