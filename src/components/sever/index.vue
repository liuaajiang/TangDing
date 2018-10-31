<template>
    <div class="index">
        <div class="banner">
            <img class="banner_img" src="@/assets/index/banner3.jpg" alt=""> 
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
        <div class="server_content">
            <div class="caifu"> 
                <div class="caifu_content">
                    <p class="caifu_text">财富师</p>
                    <p class="caifu_english">TANG PRIVATE BANKER</p>
                    <p class="content_text">唐鼎耀华拥有专业的投研和服务团队，公司股东和管理人员均拥有10年以上金融行业从业经验和多年财富管理经验，更有优秀财富师为您提供一对一的投资咨询、交易支持、投后服务，全程为您提供专业支持。</p>
                    <ul class="caifu_list">
                        <li class="caifu_lists">
                            <img src="@/assets/index/banker1_img.png" alt="">
                            <div>
                                <p class="img_title">大区财富师</p>
                                <div class="line"></div>
                            </div>
                        </li>
                        <li class="caifu_lists" style="margin:0 4%;">
                            <img src="@/assets/index/banker2_img.png" alt="">
                            <div>
                                <p class="img_title">私行财富师</p>
                                <div class="line"></div>
                            </div>
                        </li>
                        <li class="caifu_lists">
                            <img src="@/assets/index/banker3_img.png" alt="">
                            <div>
                                <p class="img_title">董事长访问大区</p>
                                <div class="line"></div>
                            </div>                         
                        </li>
                    </ul>
                </div>               
            </div>
            <div class="assign_caifu">
                <div class="assign_wrap">
                     <p class="caifu_text">指定财富师操作流程</p>
                     <p class="caifu_english">OPERATING PROCESS</p>
                     <!-- <ul class="assign_list">
                         <li class="assign_lists">skjdflfdkl</li>
                         <li class="assign_lists" style="margin:0 2%">dflkdlf</li>
                         <li class="assign_lists">sldflkdf</li>
                     </ul> -->
                     <img src="@/assets/index/zhiding.png" alt="" style="width:100%;">
                </div>
            </div>
            <div class="caifu"> 
                <div class="caifu_content">
                    <p class="caifu_text">尊享活动</p>
                    <p class="caifu_english">EVENTS</p>
                    <p class="content_text">唐鼎耀华从体验出发，成功构建全周期、全触点、全流程的三全客户服务体系，为客户精心打造、定期举办了大唐盛宴、唐耀高尔夫等高端尊享活动，为每一位客户献上专属于您的美妙之旅。</p>
                    <ul class="caifu_list">
                        <li class="caifu_lists activity">
                            <img src="@/assets/index/yanhui.png" class="img_a" alt="">
                            <p class="lists_title">大唐盛宴<br/><span class="title2">品味大唐盛宴，尊享财富人生</span></p>                             
                            <p class="lists_detail">“大唐盛宴”是由唐鼎耀华主办，为客户提供的高端尊享活动。“春生、夏长、秋收、冬藏”中华文化对于文化、财富、美食都有着独到且完整的理论系统，“大唐盛宴”汲取传统文化之精粹与现代服务理念相融合，将文化、财富、美食三者熔冶一炉、合而为一，以高品质、高规格为价值准则，为每一位客户献上专属于您的美妙之旅。</p>                          
                        </li>
                        <li class="caifu_lists activity" style="margin:0 4%;">
                            <img src="@/assets/index/golf.png" class="img_a" alt="">   
                            <p class="lists_title">唐耀高尔夫<br/><span class="title2">高尔夫全球巡回赛</span></p>                             
                            <p class="lists_detail" style="top:25%">唐耀高尔夫俱乐部是唐鼎耀华为投资者精心打造的运动类服务平台，致力于为会员客户搭建一个高端健康的运动娱乐平台，为客户提供高品质赛事服务，同时为客户带来深层次、全方位、私人专属的全球资产配置服务。</p>                          
                        </li>
                        <li class="caifu_lists activity">
                            <img src="@/assets/index/post.png" class="img_a" alt="">   
                            <p class="lists_title">投后考察活动<br/><span class="title2">专业化、系统化、创新体验化</span></p>                             
                            <p class="lists_detail" style="top:10%">投后反哺投前，检验投资逻辑，专业化、系统化、创新体验化的投后管理体系。通过做实风险控制、做好增值服务，将监督、管理与服务三者有机结合，为合格投资者筛选优秀的产品，严格把关所投标的，做好投后服务工作。唐鼎耀华从体验出发，成功构建全周期、全触点、全流程的三全客户服务体系，给合格投资者带来“看得见”、“可体验”的投资服务。</p>                                          
                        </li>
                    </ul>
                </div>               
            </div>
            <div class="information" style="background-color: rgba(37,36,42,0.79);">
                <div class="caifu"> 
                    <div class="caifu_content">
                        <p class="caifu_text" style="color:#B09A7D;">信息服务</p>
                        <p class="caifu_english" style="color:#B09A7D;">INFORMATION SERVICE</p>
                        <p class="content_text" style="color:#DBDBDB;">北京唐鼎耀华基金销售有限公司提供各类丰富、多样的投资、理财及资讯服务，投资者可下载大唐财富APP或关注大唐财富公众号进行查阅。</p>
                        <ul class="advantage_list">
                            <li class="advantage_lists">
                                <div class="lists_bg"><img src="@/assets/index/service_img1.png" alt=""></div>
                                <p class="lists_title_infor">各类信息披露</p>
                                <p class="lists_text_infor">及时披露平台代销全部公募基金最新公告，及时向私募基金持有用户披露私募投后信息</p>
                            </li>
                            <li class="advantage_lists">
                                <div class="lists_bg"><img src="@/assets/index/service_img2.png" alt=""></div>
                                <p class="lists_title_infor">行业资讯</p>
                                <p class="lists_text_infor">精选财经要闻、热点干货、宏观政策解读、行业分析等行业最新资讯</p>

                            </li>
                            <li class="advantage_lists">
                                <div class="lists_bg"><img src="@/assets/index/service_img3.png" alt=""></div>
                                <p class="lists_title_infor">投资理财知识</p>
                                <p class="lists_text_infor">贴心提供投资参考、理财学堂、基金知识、法律法规等专业理财知识</p>
                            </li>
                        </ul>
                    </div>               
                </div>
            </div>
            <div class="service_basic">
                <div class="caifu"> 
                    <div class="caifu_content">
                        <p class="caifu_text">基本服务</p>
                        <p class="caifu_english" style="color:rgba(255,255,255,0.8);">BASIC SERVICES</p>
                        <ul class="service_basic_list">
                            <li class="basic_lists">
                                <p class="basic_lists_title">交易服务</p>
                                <p class="basic_lists_text">唐鼎耀华是为您提供种类丰富、不同风险等级的产品的一站式交易服务平台，您可全程通过线上平台进行认申购、赎回、转换、定期投资、修改分红方式等基金交易操作，也可通过线下转账等方式来支付投资资金。</p>
                            </li>
                            <li class="basic_lists">
                                <p class="basic_lists_title">消息提醒服务</p>
                                <p class="basic_lists_text">当您账户发生开户、交易、分红等业务时，唐鼎耀华会在T日发送业务申请受理短信，T+1日发送相关确认短信。 客户活动通知服务：您将收到唐鼎耀华举办的客户活动通知。</p>
                            </li>
                            <li class="basic_lists">
                                <p class="basic_lists_title">客户服务</p>
                                <p class="basic_lists_text">欢迎拨打唐鼎耀华客服/投诉热线400-819-9868（免长途话费），客服专员将会为您提供贴心的理财咨询及疑难解答服务。 工作时间：工作日8：30－11:30，13:00-17:30。</p>
                            </li>
                            <li class="basic_lists">
                                <p class="basic_lists_title">账单服务</p>
                                <p class="basic_lists_text">如需所持有产品的电子对账单或者纸质对账单，请拨打400-819-9868客服热线，联系客服并留下您的电子邮箱及现住址，客服人员会根据您的特殊需求为您提供个性化服务。</p>
                            </li>
                        </ul>
                    </div>               
                </div>
            </div>
        </div>
       
    </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'sever',
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
  mounted () {
    //this.needScroll()
    this.changeCai() 
    this.enterJin()      
  },
  methods: {
    // needScroll () {
    //   let clientHeight = document.documentElement.clientHeight
    //   let obtn = this.$refs.btn
    //   window.onscroll = function () {
    //     let osTop = document.documentElement.scrollTop || document.body.scrollTop
    //     if (osTop >= clientHeight) {
    //       obtn.style.display = 'block'
    //     } else {
    //       obtn.style.display = 'none'
    //     }
    //     if (!this.isTop) {
    //       clearInterval(this.timer)
    //     }
    //     this.isTop = false
    //   }
    // },
    changeCai (){
      $(".caifu_lists").hover(function(){
          $(this).find(".lists_title").fadeOut();
           $(this).find(".lists_detail").fadeIn();
           $(this).find(".img_a").css({opacity:0.6})
      },function(){
          $(this).find(".lists_title").fadeIn();
           $(this).find(".lists_detail").fadeOut();
           $(this).find(".img_a").css({opacity:1})
      })
    },
    enterJin (){
      $(".enter_jin").on('click',function(){
           window.location.href="https://jg.tdyhfund.com/";
      })
    }
      
    // goTop () {
    //   let self = this
    //   self.timer = setInterval(function () {
    //     let osTop = document.documentElement.scrollTop || document.body.scrollTop
    //     let ispeed = Math.floor(-osTop / 5)
    //     document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
    //     self.isTop = true
    //     if (osTop === 0) {
    //       clearInterval(self.timer)
    //     }
    //   }, 30)
    // }
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
    height 100px
    position absolute
    top 40px
   .banner_top
    width 62.5% 
    margin 0 auto
    overflow hidden
    .banner_title
      margin-top 3%
      float left
    .navul
     margin-top 5%
     font-weight normal
     overflow hidden     
     float right
     li
       float left
       padding 0 10px 8px 10px
       box-sizing border-box  
       text-align center 
       color #ffffff
       cursor pointer;
     li:hover
        border-bottom 2px solid #B09A7D
.server_content
    width 100%
    background-image url(../../assets/index/server_bg.png) 
    background-attachment fixed
    background-size cover
    background-position center center  
    margin 0 auto
    .caifu 
        width 62.5%
        margin 0 auto
        .caifu_content
            padding-top 67px
            padding-bottom 60px
            .caifu_text
                margin-bottom 10px
                font-size 40px
                font-weight 600
                color #ffffff
            .caifu_english
                margin-bottom 37px
                font-size 28px
                color #ffffff
                opacity 0.8
                font-weight 600
            .content_text
                font-size 16px
                color #ffffff
                line-height 2
                margin-bottom 40px
.caifu_list
  overflow hidden
  .caifu_lists
    float left
    width 30%
    p
      text-align center
    img
      width 100%
      vertical-align middle
.line
  width 12%
  height 2px
  margin 7px auto 0
  background-color #c9c9c9  
.img_title
    margin-top 22px
    color #ffffff
.assign_caifu
    width 100%
    background-color rgba(37,36,42,0.79)
    .assign_wrap
        width 62.5%
        margin 0 auto
        padding-top 55px
        padding-bottom 60px
        .caifu_text
                margin-bottom 10px
                font-size 40px
                font-weight 600
                color #ffffff
        .caifu_english
            margin-bottom 37px
            font-size 28px
            color #ffffff
            opacity 0.8
            font-weight 600
        .assign_list
            overflow hidden
            .assign_lists
                width 32%
                height 490px                
                float left
                background-color #25242A
.activity
    position relative
.lists_title
    width 100%
    font-size 24px
    line-height 30px
    color #ffffff
    font-weight bold
    text-align center
    position absolute
    top 40%
    left 0
    .title2
        font-size 16px
        font-weight normal
.lists_detail
    display none
    width 100%
    padding 0 4%
    box-sizing border-box
    font-size 14px
    color #ffffff
    text-align center
    line-height 1.8
    position absolute
    top 15%
    left 0  
.advantage_list
        display flex
        .advantage_lists
           flex 1
           .lists_bg
                width 40%
                margin 0 auto 22px                
                img 
                    width 100%
                    height 100%
            .lists_text
                text-align center
                font-size 18px  
            .lists_title_infor
                margin-bottom 12px
                font-size 20px
                color #ffffff
                text-align center  
            .lists_text_infor
                padding 0 8%
                box-sizing border-box
                font-size 16px
                color #C6C6C6                
                line-height 1.5
.basic_lists
    width 100%
    height 160px
    margin-bottom 24px
    padding 26px 40px 0 29px
    box-sizing border-box
    background-color rgba(37, 36, 42, 0.79)
    .basic_lists_title 
        margin-bottom 18px
        border-left 1px solid #B18C68
        padding-left 22px
        box-sizing border-box
        font-size 22px
        color #B18C68
        font-weight 600
    .basic_lists_text
        font-size 16px
        color #C9C9C9
        line-height 2
</style>