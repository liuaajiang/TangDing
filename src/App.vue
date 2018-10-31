<template>
  <div id="app">
    <Header></Header>
    <!-- <Navheader></Navheader> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '@/components/Header'
// import Navheader from '@/components/Navheader'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    // Navheader,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background: url(assets/index/bg_img01.png) no-repeat center; */

}
a{
  text-decoration: none;
}
</style>
