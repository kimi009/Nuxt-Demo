<template>
  <div class="home-menu">
    <div class="home-menu_content">
      <template v-for="item in menuList">
        <div
          :key="item.key"
          class="home-menu_col"
          @mouseenter="menuEnter(item)"
        >
          {{ item.name }}
        </div>
      </template>
    </div>
    <div
      v-show="menuItems.length"
      class="home-menu_items"
      @mouseleave="mouseLeaveItem"
    >
      <template v-for="item in menuItems">
        <div :key="item.key" class="home-menu_items_col">
          <div class="title">{{ item.name }}</div>
          <div class="items">
            <template v-for="subItem in item.items">
              <div :key="subItem" class="item">{{ subItem }}</div>
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMenu',
  props: {
    menuList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      menuItems: []
    }
  },
  methods: {
    menuEnter(item) {
      this.menuItems = this.menuList.find((i) => i.key === item.key).children
    },
    mouseLeaveItem() {
      this.menuItems = []
    }
  }
}
</script>

<style lang="less" scoped>
.home-menu {
  position: relative;
  &_content {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 60px;
    background-color: #202529;
    color: #ffffff;
    font-size: 15px;
    // margin: 0 !important;
  }
  &_col {
    margin-left: 30px;
    cursor: pointer;
    &:hover {
      color: #00bcc8;
    }
  }
  &_items {
    width: 100%;
    position: absolute;
    padding-left: 100px;
    padding-bottom: 50px;
    background-color: #000000;
    display: flex;
    justify-content: start;
    align-items: flex-start;
    &_col {
      padding-top: 50px;
      width: 200px;
      color: #ffffff;
      margin-right: 30px;
      .title {
        font-size: 15px;
        font-weight: bold;
        padding-bottom: 20px;
        border-bottom: 1px solid hsla(0, 0%, 100%, 0.8);
        &:hover {
          cursor: pointer;
          color: #00bcc8;
        }
      }
      .items {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .item {
          margin-bottom: 10px;
          &:hover {
            cursor: pointer;
            color: #00bcc8;
          }
        }
      }
    }
  }
}
</style>
