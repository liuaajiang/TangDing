<template>
  <div id="notfound">
    <h1>404 Not Found</h1>
    <!-- <p>nginx</p> -->
  </div>
</template>
<script>
  export default {
    name: 'Index',
    data() {
      return {
      }
    },
    created() {
      this.loadEl();
    },
    methods: {
      loadEl() {
        setTimeout(function () {
          $(".header").hide();
          $(".footer_content").hide();
          $(".p_bottom").hide();
          $(".zhiCustomBtn").hide();
        }, 1);
      }
    }
  }
</script>
<style scoped lang="stylus">
#notfound  h1 {
  padding-bottom: 0.8em;
  border-bottom: 1px solid #555;
  text-align: center;
  font-weight: 600;
  font-size: 2.3em;
}

p {
  text-align: center;
}
</style>