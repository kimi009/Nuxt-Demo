<template>
  <div class="banner-comp">
    <a-carousel class="banner-comp_carousel">
      <div>
        <img src="~/assets/img/1.jpg" />
      </div>
      <div><img src="~/assets/img/2.jpg" /></div>
      <div><img src="~/assets/img/3.jpg" /></div>
      <div><img src="~/assets/img/4.jpg" /></div>
    </a-carousel>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="less" scoped>
.banner-comp {
  width: 800px;
  &_carousel {
  }
}
</style>
