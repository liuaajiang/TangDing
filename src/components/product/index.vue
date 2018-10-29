<template>
    <div class="product_wrap">
        <div class="banner_top">
        <div class="banner_title">
          <img src="@/assets/index/top_title.png" alt="">         
        </div>
         <ul class="navul">
            <router-link tag="li" to="/index">首页</router-link>
            <router-link tag="li" to="/product">产品</router-link>
            <router-link tag="li" to="/sever">服务</router-link>
            <router-link tag="li" to="/register">企业金融</router-link>
        </ul> 
      </div>
    </div>
</template>
<style scoped lang="stylus">
*{margin:0;padding: 0;}
ul,li,ol{list-style:none;}
img,fieldset,button{border:0; }							
a{text-decoration:none;}			
h1,h2,h3,h4,h5,h6{font-weight:100;}			
body{font-family: "Microsoft Yahei","微软雅黑","Tahoma","Helvetica","STHeiti";position:relative;}			
input,a,select{outline:none;}
i{font-style:normal;}	
html,body{width:100%}
ul {
  list-style-type: none;
  padding: 0;
}
.banner_top
    background rgba(0,0,0,0.5)
    width 100%
    height 100px
    padding 25px 18.75% 23px 18.75%
    box-sizing border-box
    .banner_title
      float left
    .navul
     margin-top 10px
     font-weight normal
     overflow hidden     
     float right
     li
      float left
      width 25%
      text-align center
</style>