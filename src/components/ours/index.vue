<template>
    <div class="index">
        <div class="banner">
            <img class="banner_img" src="@/assets/index/banner4.jpg" alt="">          
        </div>
        <Navheader></Navheader>
        <div class="about_content">
            <div class="content_wrap">
                <p class="ours_text">关于我们</p>
                <p class="text_english">OURS</p>
                <ul class="contetn_list">                               
                    <li class="content_lists">唐鼎耀华成立于2013年8月，注册资本2000万元。 公司股东和管理人员均拥有10年以上金融行业从业经验和多年财富管理经验。 2014年3月获得北京证监局关于“证券投资基金销售业务资格”牌照的批复，成为拥有独立基金销售业务资格的金融机构之一。</li>
                    <li class="content_lists">公司股东及管理团队力求打造中国一流的基金销售机构，遵循“一切为客户创造价值”的核心服务理念，对客户财务状况、理财需求、投资偏好等进行综合分析，为客户提供一站式金融咨询、理财规划服务。</li>
                    <li class="content_lists" style="margin-bottom:40px;">唐鼎耀华秉持以“客户独立，精益求精”的理念，将“认真负责，实现客户利益的最大化”作为为客户提供财富管理服务的一贯准则，注重加强和基金公司、知名券商的广泛合作，在充分了解基金公司、券商的投研能力和投资管理能力的基础上，通过三级风控体系筛选产品。致力于通过全面的资产配置方案，为客户资产的保值、增值保驾护航。</li>
                </ul>
                <ul class="kinds">
                    <li class="list product">
                        <div class="list_bg"><img src="@/assets/index/product_img.png" alt=""></div>
                        <p class="product_title">产品种类丰富</p>
                        <p class="product_content">目前产品涵盖私募基金、公募基金、资管计划、信托等，满足不同投资者的需求。</p>
                    </li>
                    <li class="list service">
                        <div class="list_bg"><img src="@/assets/index/service_img.png" alt=""></div>
                        <p class="product_title">专属客户服务</p>
                        <p class="product_content">尊享财富师提供专业指导，一对一交流；400热线、在线客服随时提供在线支持。</p>
                    </li>
                    <li class="list supervision">
                        <div class="list_bg"><img src="@/assets/index/security_img.png" alt=""></div>
                        <p class="product_title">全程监督监管</p>
                        <p class="product_content">证监会批准并监督管理，民生银行全程资金监管。</p>
                    </li>
                </ul>
                <div class="advantage">
                    <p class="ours_text">优势</p>
                    <p class="text_english">SUPERIORITY</p>
                    <ul class="advantage_list">
                        <li class="advantage_lists">
                            <div class="lists_bg"><img src="@/assets/index/superiority1_icon.png" alt=""></div>
                            <p class="lists_text">真正中立客观的第三方投资顾问</p>
                        </li>
                        <li class="advantage_lists">
                            <div class="lists_bg"><img src="@/assets/index/superiority_icon2.png" alt=""></div>
                            <p class="lists_text">全产品的资产配置助您财富稳健增值</p>
                        </li>
                        <li class="advantage_lists">
                            <div class="lists_bg"><img src="@/assets/index/superiority_icon3.png" alt=""></div>
                            <p class="lists_text">及时、准确、专业而全面的基金资讯</p>
                        </li>
                    </ul>
                </div>
                
            </div> 
            <div class="contact">
                <div class="contact_content">
                    <p class="contact_text">联系我们</p>
                    <p class="contact_english">CONTACT US</p>
                    <p class="mobile">电话：400-819-9868（全国统一客户服务电话）</p>
                    <p class="mobile">传真：010-8593 2880（全国统一传真）</p>
                    <p class="mobile">电子邮箱：vip@tdyhfund.com</p>
                    <p class="mobile">总公司地址：北京市朝阳区建国门外大街19号A座1504/1505室　邮编：100020</p>
                    <p class="mobile">分公司地址：浙江省湖州市红丰路1366号3幢1214-6   邮编：313099</p>
                    <p class="mobile">对于唐鼎耀华的任何问题，欢迎随时联系我们。</p>
                </div>
            </div>          
        </div>
    </div>
</template>
<script>
import Navheader from '@/components/Navheader'
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your  App11111111111111',
      activeName2: 'first',
      tabPosition: 'left',
      list: [6,7,8,4,5],
      isTop: true,
      timer: null,
      messageList: [
        { "text":"南方日添益货币E暂停申购通知" , "date":"2018.08.18" }, 
        { "text":"新版大唐财富APP上线通知" , "date":"2018.08.19" }, 
        // { "text":"新版大唐财富师APP上线通知" , "date":"2018.08.19" }
      ]
    }
  },
  components:{Navheader},
  mounted () {
    this.changeCai() 
  },
  methods: {     
    changeCai (){
      $(".caifu_lists").hover(function(){
          $(this).find(".lists_title").hide();
           $(this).find(".lists_detail").show();
      },function(){
          $(this).find(".lists_title").show();
           $(this).find(".lists_detail").hide();
      })
    }        
  }
}
</script>
<style scoped lang="stylus">
#zhichiBtnBox{
    display: none;
}
.index{
  width:100%;
  overflow:hidden;
  min-width:1200px;
  position relative
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
    min-height 90px
    position absolute
    top 0px
.about_content
    width 100%
    background-image url(../../assets/index/ours_bg.png)
    background-attachment fixed
    background-position center center
    background-size cover
.content_wrap
    width 62.5%
    margin 0 auto
    padding-top 45px
    color #ffffff       
    .ours_text
        font-size 40px        
        margin-bottom 10px
        font-weight bold
    .text_english
        font-size 28px
        margin-bottom 24px
        font-weight bold
        color rgba(255,255,255,0.8)
    .contetn_list
        font-size 18px
        color #CCCCCC
        .content_lists
            margin-bottom 30px
            font-size 16px
            line-height 2.0
.kinds
  margin-bottom 45px
  padding 29px 5%
  box-sizing border-box
  background-color #ffffff
  overflow hidden
  font-size 20px
  .list
    width 25%
    float left 
    color #000000
    .list_bg       
      height 24px
      img 
        width 30%
        //height 100%
    .product_title
      margin-top 5px
      margin-bottom 10px
      font-size 20px
      font-weight bold
    .product_content
      font-size 14px
      line-height 1.5
  .product
    background-image url(../../assets/index/product_bg.png)
    background-repeat no-repeat   
    background-size 40% 70%;
    background-position-x 70%;
  .service
    margin 0 12.5%
    background-image url(../../assets/index/service_bg.png)
    background-repeat no-repeat
    background-size 40% 70%;
    background-position-x 70%;
  .supervision
    background-image url(../../assets/index/supervision_bg.png)
    background-repeat no-repeat
    background-size 50% 90%;
    background-position-x 70%;
.advantage
    padding 45px 30px 50px 42px 
    box-sizing border-box
    background-color rgba(176,154,125,0.24)
    .advantage_list
        display flex
        .advantage_lists
           flex 1
           .lists_bg
                width 35%
                margin 0 auto 20px                
                img 
                    width 100%
                    height 100%
            .lists_text
                text-align center
                font-size 14px
.contact
    width 100%
    background-color rgba(21,20,23,0.83)
    .contact_content
        width 62.5%
        margin 0 auto
        padding-top 45px
        padding-bottom 30px
        .contact_text
            margin-bottom 10px
            font-weight bold
            font-size 40px
            color #B09A7D
        .contact_english
            margin-bottom 25px
            font-size 28px
            color #B09A7D
            font-weight bold
        .mobile 
            margin-bottom 18px
            color rgba(255,255,255,0.8)
.go-top
  width 100%
.gotop-btn
  width 50px
  height 50px
  position fixed
  right 0
  bottom 235px
  border none
  display none
  z-index 9999
  img
    width 100%
</style>