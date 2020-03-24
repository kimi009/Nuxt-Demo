<template>
  <div>
    <a-layout>
      <a-layout-header>
        <home-menu :menu-list="homeMenuList"></home-menu>
        <!-- <a-menu v-model="current" theme="dark" mode="horizontal">
          <template v-for="item in homeMenuList">
            <a-sub-menu v-if="item.children.length" :key="item.key">
              <span slot="title" class="submenu-title-wrapper">{{
                item.name
              }}</span>
              <template v-for="subItem in item.children">
                <a-menu-item-group :key="subItem.key" :title="subItem.name">
                  <template v-for="cItem in subItem.items">
                    <a-menu-item :key="cItem">{{ cItem }}</a-menu-item>
                  </template>
                </a-menu-item-group>
              </template>
            </a-sub-menu>
            <a-menu-item v-else :key="item.key">{{ item.name }}</a-menu-item>
          </template>
        </a-menu> -->
      </a-layout-header>
      <a-layout-content><nuxt /></a-layout-content>
      <a-layout-footer>我是底部</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HomeMenu from '@/components/home/Menu'
export default {
  components: {
    HomeMenu
  },
  data() {
    return {
      current: ['cloudTrain']
    }
  },
  computed: {
    ...mapState({
      homeMenuList: (state) => state.home.menuList
    })
  }
}
</script>
