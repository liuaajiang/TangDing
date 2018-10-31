<template>
    <div class="index">
        <div class="banner">
            <img class="banner_img" src="@/assets/index/banner2.jpg" alt="">          
        </div>
         <div class="bannering">
                <div class="banner_top">
                    <div class="banner_title">
                    <img src="@/assets/index/top_title.png" alt="">         
                    </div>
                    <ul class="navul">
                        <router-link tag="li" to="/index">首页</router-link>
                        <router-link tag="li" to="/product">产品</router-link>
                        <router-link tag="li" to="/sever">服务</router-link>
                        <router-link tag="li" to="" class="enter_jin">企业金融</router-link>
                        <router-link tag="li" to="/ours">关于我们</router-link>
                    </ul> 
                </div>
            </div>
        <div class="product_content">
            <div class="content_left">
                <p class="content_title">公募基金</p>
                <div class="contetnt_detail">
                    <p class="title_english">PUBLIC FUND</p>
                    <p class="contetnt_detail_text">公募基金是市场上最透明、最规范的基金，有着制度优势与专业优势，以百元起的低门槛投资产品解决一切标准化资产的投资需求，可为客户提供丰富的公募及专户理财产品。目前平台已与53家基金公司长期合作，代销了1408只公募基金，涵盖市场上常见的大部分基金。</p>
                </div>
                 <div class="img_right">
                    <img src="@/assets/index/public_img.png" alt="">   
                    <div class="bring_card clearfix">
                        <div class="line_left line"></div>
                        <div class="card_text">公募基金</div>
                        <div class="line_right line"></div>
                    </div>                 
                </div>
               
            </div>
           <div class="content_right">
                <p class="content_title_right">私募基金</p>
                <div class="contetnt_detail_right">
                    <p class="title_english_right">PRIVATE OFFERING FUND</p>
                    <p class="contetnt_detail_text_right">唐鼎耀华母公司大唐财富及其他子公司拥有不同类型的私募证券投资基金管理人资质，专业的投研团队提供了元山、元一、唐诚、唐盈等多款优质私募系列产品。除销售大唐财富管理的私募产品之外，公司也已与其他优秀的私募机构合作代销产品。</p>
                </div>
                 <div class="img_right_right">
                    <img src="@/assets/index/private_img.png" alt="">
                    <div class="bring_card clearfix">
                        <div class="line_left line"></div>
                        <div class="card_text">私募基金</div>
                        <div class="line_right line"></div>
                    </div> 
                </div>
            </div>
            <div class="content_left">
                <p class="content_title">资管计划</p>
                <div class="contetnt_detail">
                    <p class="title_english">MANGEMENT PLAN</p>
                    <p class="contetnt_detail_text">券商资管计划在操作模式上与信托最接近，但产品收益高于信托，在募集速度和投资者喜好程度上更胜信托。目前唐鼎耀华正在与东证融汇、国海资管、广发资管、中泰证券等公司展开合作，资管计划即将上线。</p>
                </div>
                 <div class="img_right">
                    <img src="@/assets/index/plan_img.png" alt="">
                    <div class="bring_card clearfix">
                        <div class="line_left line"></div>
                        <div class="card_text">资管计划</div>
                        <div class="line_right line"></div>
                    </div>   
                </div>
            </div>
            <div class="content_right" style="margin-bottom:59px">
                <p class="content_title_right">企业金融</p>
                <div class="contetnt_detail_right">
                    <p class="title_english_right">ENTERPRISE FINANCE</p>
                    <p class="contetnt_detail_text_right">唐鼎耀华的服务对象不仅是个人用户，也包括非金融机构。基于机构客户及超高净值客户对于投资的多元化、个性化需求，除以上产品外，还提供定制公募基金及专户理财产品，力求以客户为中心、从需求出发做好资产管理，让客户资产不断增值。</p>
                </div>
                 <div class="img_right_right">
                    <img src="@/assets/index/finance_img.png" alt="">
                     <div class="bring_card clearfix">
                        <div class="line_left line"></div>
                        <div class="card_text">企业金融</div>
                        <div class="line_right line"></div>
                    </div> 
                    <div class="enter_jinrong">
                        <!-- <img src="@/assets/index/enter_jin.png" alt=""> -->
                        <span class="enter_text" style="font-size:14px;">进入企业金融</span>                       
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'product',
  mounted () {
    this.enterJin()       
  },
  methods: {    
    enterJin (){
      $(".enter_jin").on('click',function(){
           window.location.href="https://jg.tdyhfund.com/";
      })
    }
  }
}
</script>

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
.index{
  width:100%;
  overflow:hidden;
  min-width:1200px;
}
.banner 
   width 100%  
   position relative
   img 
    width 100%
    vertical-align middle
.bannering
    width 100%
    background rgba(0,0,0,0.5)   
    height 60px
    position absolute
    top 40px
.banner_top
    padding 5px 18.75% 0 18.75%
    box-sizing border-box
    overflow hidden
    .banner_title  
      width 50%  
      float left
      margin-top 5px
      img
        width 100%
    .navul
      margin-top 2%
      font-weight normal
      overflow hidden     
      float right
     li
      float left
      padding 0 10px 8px 10px
      box-sizing border-box  
      text-align center 
      color #ffffff
      cursor pointer
     li:hover
        border-bottom 2px solid #B09A7D
.product_content
    padding 70px 18.75% 23px 18.75%
    box-sizing border-box
    background-image url("../../assets/index/product_content_bg.png")
    background-repeat no-repeat
    background-size cover
    background-color rgba(0,0,0,0.83)   
    .content_left
        margin-bottom 88px
        position relative       
.content_title    
    margin-bottom 6px
    font-size 40px
    font-weight bold
    color #ffffff
.contetnt_detail
    width 90%
    padding-bottom: 24px
    background-color rgba(0,0,0,0.5)
    .title_english
        padding-top 7px
        margin-left 8px       
        font-size 28px
        color rgba(255,255,255,0.8)
        font-weight bold
    .contetnt_detail_text
        width 58%
        margin-left 6.5%
        margin-top 25px
        font-size 15px
        color #dec19c
        line-height 2.2
.img_right
    width 330px
    height 330px
    position absolute
    top -7%
    right 0
    img 
        width 100%
        height 100%   
.content_right
    margin-bottom 88px
    position relative
.content_title_right
    padding-left 42%
    box-sizing border-box
    margin-bottom 6px
    font-size 40px
    font-weight bold
    color #fff
.contetnt_detail_right
    width 90%
    margin-left 10%
    padding-bottom 59px
    background-color rgba(0,0,0,0.5)
    .title_english_right
        padding-top 7px
        font-weight bold
        margin-left 8px
        padding-left 35%
        box-sizing border-box
        font-size 28px
        color rgba(255,255,255,0.8)
    .contetnt_detail_text_right
        width 58%
        line-height 2.2
        margin-top 25px
        margin-left 36%       
        font-size 15px
        color #dec19c
.img_right_right
    width 330px
    height 330px
    position absolute
    top -7%
    left 0
    img 
        width 100%
        height 100%
.bring_card
    width 100%
    position absolute
    top 48%
    left 18%   
    margin-bottom 0.4rem
.card_text
    float left
    font-size 27px
    margin -10px 10px
    color #ffffff
.line
    float left
    width 13%
    height 5px
    border-bottom 1px solid #ffffff
.clearfix:after
    content "020"
    display block
    height 0
    clear both
    visibility hidden 
.clearfix
    zoom 1
.enter_jinrong
    width 39%
    height 10%
    background-image url(/static/img/enter_jin.b79f0d6.png)
    background-repeat no-repeat
    background-size 100% 100%
    position absolute
    top 70%
    left 31%
    text-align center
    padding-top 3%
    box-sizing border-box
    color #402D14
    font-weight bold



</style>