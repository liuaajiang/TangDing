<template>
  <div class="navheader">
    <ul class="navul">
        <router-link tag="li" to="/index">首页</router-link>
        <router-link tag="li" to="/register">产品</router-link>
        <router-link tag="li" to="/index">服务</router-link>
        <router-link tag="li" to="/register">企业金融</router-link>
    </ul>
  
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
ul
  list-style-type none
  padding 0
  margin 0
  li
    display inline-block
    margin 0 10px
    cursor pointer
.navheader
    overflow hidden
    width 100%
    min-width 1200px
    .navul
      float right
</style>
