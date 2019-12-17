<template>
  <div class="Index">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="banner">
        <img class="banner_img" src="@/assets/index/banner1.png" alt="" >          
      </div>
      <Navheader></Navheader>
    <div class="messageList" >
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="3"><div class="grid-content bg-purple">最新消息：</div></el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light">
            <el-row >
              <el-col :span="12" v-for="(item,index) in messageList" :key="index">
              <div class="grid-content bg-purple"><span class="title_index">{{item.F_TITLE}}</span><span style="float:left">{{item.F_DATE}}</span></div>
              </el-col>
            </el-row>
          </div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple more" @click="jump_more">查看更多</div></el-col>
      </el-row>    
    </div>
    <div class="companyProfile">    
      <div class="tang_introduce">
         <p class="introduce_title">唐鼎耀华</p>
         <p class="english_text">BEIJING TANG DING YAOHUA FUND SALES CO.,LTD</p>
         <p class="introduce_content">北京唐鼎耀华基金销售有限公司，是证监会批准从事基金销售业务的的持牌基金销售机构。公司在充分了解基金公司、券商的投研能力和投资管理能力的基础上，通过三级风控体系筛选出种类丰富、风险等级齐全的产品，供不同风险偏好的投资人一站式购买。公司专注为客户提供专业金融产品及服务，全品类的资产配置助您的财富稳健增值。</p>
      </div>
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
            <!-- <div class="list_bg"></div> -->
            <p class="product_title">全程监督监管</p>
            <p class="product_content">证监会批准并监督管理，民生银行全程资金监管，资金安全有保障。</p>
          </li>
      </ul>
      <div class="featured_products">
        <div class="tang_introduce">
          <p class="introduce_title">特色产品</p>
          <p class="english_text">PRODUCTS</p>
        </div>
        <ul class="featured_list clearfloat">
          <li class="featured_lists">
            <div class="lists_img"><img src="@/assets/index/product_one_img.png" alt=""></div>
            <p class="featured_title1">元山母基金系列</p>
            <p class="featured_title2">他山之石，聚力元山</p>
            <p class="featured_content">元山母基金系列作为市场首只投资不良资产的母基金，元山母基金抓住市场先机，利用团队的专业优势，用直投的眼光做母基金，通过全面配置、优中选优的策略，迅速在行业和高净值客户层面第一时间打开市场，树立口碑，建立品牌。</p>
          </li>
          <li class="featured_lists yuanyi">
            <div class="lists_img"><img src="@/assets/index/product_two_img.png" alt=""></div>
            <p class="featured_title1">元一母基金系列</p>
            <p class="featured_title2">股权投资，分享红利</p>
            <p class="featured_content">自建“元一300”五维画像大数据系统，对超过1000家有退出业绩的股权投资团队进行专业筛选。投资团队长期深耕国内投资圈，能快速布局市场里的隐形冠军和新锐黑马，目前通过1期和2期母基金已经投资了市场里9支最顶级的基金。</p>
          </li>
           <li class="featured_lists">
            <div class="lists_img"><img src="@/assets/index/product_three_img.png" alt=""></div>
            <p class="featured_title1">唐诚现金管理系列</p>
            <p class="featured_title2">申赎灵活，超额收益</p>
            <p class="featured_content">含每隔日、7 日、15 日、30 日开放的产品，流动性高；不同开放期限的产品收益不同， 客户可根据资金使用情况，选择不同档期的产品。此类产品还设有业绩比较基准，超过业绩比较基准的部分，客户能拿到 20% 的超额收益。</p>
          </li>
        </ul>
      </div>
    </div>
    
      <div class="operating_procedures">
        <p class="operating_text">操作流程</p>
        <p class="operating_english">OPERATING PROCESS</p>
        <div class="operating_bottom clearfloat">
          <ul class="operating_change">
            <li class="operating_change_lists"><span class="order">01</span><span class="order_text">下载APP</span></li>
            <li class="operating_change_lists"><span class="order">02</span><span class="order_text">人脸实名认证</span></li>
            <li class="operating_change_lists"><span class="order">03</span><span class="order_text">绑卡交易</span></li>
            <li class="operating_change_lists"><span class="order">04</span><span class="order_text">指定财富师</span></li>
          </ul>
          <div class="operating_change_content clearfloat">
              <div class="one_bg"><img src="@/assets/index/change_content_bg.png" alt="" style="margin-top:1%;"></div>
              <div class="one_bg" style="display:none;"><img src="@/assets/index/renlian.png" alt=""></div>
              <div class="one_bg" style="display:none;"><img src="@/assets/index/bangka.png" alt=""></div>
              <div class="one_bg" style="display:none;"><img src="@/assets/index/zhiding.png" alt=""></div>   
              <div style="clear:both;"></div>                          
          </div>  
        </div> 
      </div>
      <div class="wrap_bottom">
      <div class="banking">
        <div class="tang_introduce">
            <p class="introduce_title">财富师</p>
            <p class="english_text">TANG PRIVATE BANKER</p>
            <p class="introduce_content">唐鼎耀华拥有专业的投研和服务团队，公司股东和管理人员均拥有10年以上金融行业从业经验和多年财富管理经验，更有优秀财富师为您提供一对一的投资咨询、交易支持、投后服务，全程为您提供专业支持。</p>
        </div>
        <ul class="caifu_list">
            <li class="caifu_lists">
              <img src="@/assets/index/banker1_img.png" alt="">
              <div>
                <p>大区财富师</p>
                <div class="line"></div>
              </div>
            </li>
            <li class="caifu_lists" style="margin:0 5%;">
            <img src="@/assets/index/banker2_img.png" alt="">
            <div>
              <p>私行财富师</p>
                <div class="line"></div>
            </div>
            </li>
            <li class="caifu_lists">
            <img src="@/assets/index/banker3_img.png" alt="">
              <div>
                <p>董事长访问大区</p>
                <div class="line"></div>
              </div> 
            
            </li>
        </ul>
        <div class="license">
          <p class="introduce_title">公司资质</p>
          <p class="english_text">LICENSE PLATE</p>
          <ul class="license_list clearfloat">            
            
            <li class="license_lists xuke">
              <img src="@/assets/index/plate1_img.png" alt="" class="lic_img">
              <div>
                <p class="license_text">经营证券期货业务许可证</p>
                <div class="line"></div>
              </div>
            </li>
            <li class="license_lists yingye" style="margin: 0 2%;">
              <img src="@/assets/index/plate2_img.png" alt="" class="lic_img2">
              <img src="@/assets/index/plate522@2x.png" alt="" class="lic_img3" >
              <!-- <div class="lic_img2"></div> -->
              <div>
                <p class="license_text">营业执照</p>
                <div class="line"></div>
              </div>
            </li>
            <li class="license_lists huiyuan" style="margin-right:2%;">
              <img src="@/assets/index/plate3_img.png" alt="" class="lic_img">
              <div>
                <p class="license_text">基金业协会会员证书</p>
                <div class="line"></div>
              </div>
            </li>
            <li class="license_lists jianguan">
              <img src="@/assets/index/plate4_img.png" alt="" class="lic_img4">
              <img src="@/assets/index/plate4@2x.png" alt="" class="lic_img5">
              <div>
                <p class="license_text">民生银行全程资金监管</p>
                <div class="line"></div>
              </div>
            </li>
          </ul>
        </div>
        <!-- <div class="mask"></div> -->
        <div class="big_licens">
          <img class="biging_licens" style="display:none;" src="@/assets/index/plate1_img.png" alt="">
          <img class="biging_licens" style="display:none;" src="@/assets/index/plate2_img.png" alt="">
          <img class="biging_licens" style="display:none;" src="@/assets/index/plate3_img.png" alt="">
          <img class="biging_licens" style="display:none;" src="@/assets/index/plate4_img.png" alt="">
        </div>
        <div class="rule_list"> 
          <p class="list_p" @click.stop='opentou'>投资人权益须知</p>
          <!-- <p class="list_p" @click.stop='openfeng'>风险揭示函</p> -->
          <p class="list_p" @click.stop='openjijin'>基金基础知识</p>
          <p @click="jump_law">相关法律法规</p>
        </div>
      </div>     
    </div> 
    <div  title="" class="chat"><img src="@/assets/index/chat.png" alt=""></div>            
    <!-- <div @click="goTop" ref="btn" title="回到顶部" class="gotop-btn"><img src="@/assets/index/up_right_img.png" alt=""></div>             -->
  </div>
  
</template>
<script>
import axios from 'axios'
import Navheader from '@/components/Navheader'
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your ',
      activeName2: 'first',
      tabPosition: 'left',
      list: [6,7,8,4,5],
      isTop: true,
      timer: null,
      pageSize:2,
      pageNum:1,
      messageList: ''
    }
  },
  components:{Navheader},
  mounted () {
    //this.needScroll()
    this.changeTable()
    this.changeOperation()
    //this.changeLicens()  
    this.imgScola()  
  },
  methods: {
    jump_law(){
      this.$router.push({
          path:'/Laws',
          name:'Laws'
      })
    },
    opentou(){
      window.open("static/pdf/投资者权益须知pdf版.pdf",'_blank')
    },
    openjijin(){
      window.open("static/pdf/基金投资知识.pdf",'_blank')
    },
    getData:function(){
        let that = this;
        //console.log(that.pageNum)
        axios({
            method:'get',
            url:'https://funddata.tdyhfund.com/fundDataManage/fundInfo/AllNoticeList',
            params: {
                pageSize: that.pageSize,
                pageNum: that.pageNum
            }
        })
        .then(function(res) {//成功之后
           // console.log(res.data.data)
            that.fullscreenLoading = false
            var retCode=res.data.retCode
            var retMsg=res.data.retMsg;
            if(retCode == 0){
                that.messageList = res.data.data.NOTICE_LIST
                
            }
        });
    },
    dateInit (da){  
        var date = da.toString()
        var Date = date.substring(0, 4) + '.' + date.substring(4, 6)+ '.' + date.substring(6, 8)
        return Date
    }, 
    needScroll () {
      let clientHeight = document.documentElement.clientHeight
      let obtn = this.$refs.btn
      window.onscroll = function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        if (osTop >= clientHeight) {
          obtn.style.display = 'block'
        } else {
          obtn.style.display = 'none'
        }
        if (!this.isTop) {
          clearInterval(this.timer)
        }
        this.isTop = false
      }
    },
    jump_more(){
      this.$router.push({
        path:'/Message',
        name: 'Message'
      })
    },
    imgScola (){     
        $(".yingye").hover(function(){   
          $(".lic_img3").show() 
          $(".lic_img3").css({
            width:410,height:580,left:-100,top:-200
          })             
          $(".lic_img2").hide()   
        },function(){
          $(".lic_img2").show() 
          $(".lic_img3").css({
            width:190,height:120,left:0,top:0
          })   
          $(".lic_img3").hide()   
        });
        $(".jianguan").hover(function(){   
          $(".lic_img5").show() 
          $(".lic_img5").css({
            width:410,height:580,left:-100,top:-200
          })             
          $(".lic_img4").hide()   
        },function(){
          $(".lic_img4").show() 
          $(".lic_img5").css({
            width:190,height:120,left:0,top:0
          })   
          $(".lic_img5").hide()   
        });      
     },   
     changeTable (){     
        $(".caifu_lists").hover(function(){   
          $(this).find("p").css("color","#B09A7D");                 
          $(this).find(".line").css("background-color","#B09A7D");
        },function(){
            $(this).find("p").css("color","#2a2a2a");  
            $(this).find(".line").css("background-color","#c9c9c9");
        });      
     },
     changeOperation (){
       $(".operating_change_lists").hover(function(){     
          $(this).find(".order_text").css({"border-bottom":"2px solid #CEAA7B","color":"#CEAA7B"});
          $(".one_bg").eq($(this).index()).fadeIn().siblings().fadeOut();
       },function(){
          $(this).find(".order_text").css({"border-bottom":"0","color":"#ffffff"});
       });
     },
      // xuke(){
      //     $(".xuke").mouseenter(function(){
      //       $(this).children("img").animate({width:"200%",height:"200%",marginTop:"-50%",marginLeft:"-50%"})   
      //   }).mouseleave(function(){
      //       $(this).children("img").animate({width:"100%",height:"100%",marginTop:0,marginLeft:0}) 
      //   })

      // },
    //   changeLicens (){
    //    $(".license_lists").hover(function(){   
    //       $(this).css("color","#B09A7D")  
    //       $(this).find(".line").css({"background-color":"#B09A7D"}); 
    //        $(".big_licens").show();        
    //        $(".biging_licens").eq($(this).index()).show().siblings().hide();
    //    },function(){
    //       $(this).css("color","#2A2A2A");  
    //       $(this).find(".line").css({"background-color":"#2A2A2A"});          
    //    });
    //  },
        
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
  },
  created(){
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.one_bg img{
width:100%;
}
.license_lists{
  position: relative;
}
.license_lists img{
  transition: all .5s ease;
  -moz-transition: all .5s ease; /* Firefox 4 */
  -webkit-transition: all .5s ease;
} 
.license_lists:hover .lic_img{
  transform: scale(3.5);
  z-index:99999;
  position: absolute;
}
.lic_img3,.lic_img5{
  display: none;
  z-index: 99999;
  position: absolute;  
}
/* .license_lists .lic_img2{
  background:url(../../assets/index/plate2_img.png);
  height 120px
  background-size 193px 120px
}
.license_lists .lic_img2:hover{
  z-index:99999;
  background:url(../../assets/index/plate522.png);
  height:835px;
  width:600px;
  background-size:600px 835px;
  transition: all .5s ease;
} */
.Index
  width 100%
  
  min-width 1200px
  position relative
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
.messageList    
  background-color #B09A7D
  color #230A01
  font-size 15px
  padding 10px 0
  .row-bg
    width 62.5%
    margin 0 auto
  .message
    margin-right 10px
  .more
    color #776145
  .more:hover
    cursor pointer
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
.chat 
  width 50px
  height 50px
  position fixed
  right 0
  bottom 285px
  border none
  display none
  z-index 9999
  img 
    width 100%
.plateImg{ 
  padding:20px;
}
.plateImg img:hover{ 
  transform: scale(1.5, 1.5);  
  -webkit-transform: scale3d(1.5,1.5);
  transition: .8s transform;
  -webkit-transition: .8s transform;
  z-index:9999;
}
.companyProfile
  padding 45px 18.75% 23px 18.75%
  box-sizing border-box
.tang_introduce
  margin-bottom 20px
.introduce_title
  margin-bottom 10px
  font-size 40px 
  color #383838
  font-weight bold
.english_text
  color rgba(56,56,56,0.8)
  font-size 28px
  margin-bottom 15px
  font-weight bold
.introduce_content
  font-size 16px
  color #383838
  line-height 1.8  
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
.featured_list
  /* overflow hidden */
.featured_lists
  float left
  width 32%
  min-height 410px
  background-color #ffffff
  padding 1%
  box-sizing border-box
  .lists_img img
    width 100%
    height 100%
  .featured_title1
    margin-top 16px 
    margin-bottom 5px
    font-size 20px
    color #947E62
    font-weight bold
    text-align center
  .featured_title2
    margin-bottom 15px
    font-size 14px
    color #6B6B6B
    text-align center
  .featured_content
    padding-left 2px
    padding-right 2px
    box-sizing border-box
    font-size 14px
    color #000000     
    padding-bottom 10px
    line-height 1.7
.yuanyi
    margin 0 2%
.operating_procedures
  width 100%
  padding 45px 18.75% 0 18.75%
  box-sizing border-box
  background-color rgba(0,0,0,0.83)  
  overflow hidden
  .operating_text
    margin-bottom 10px
    font-size 40px
    color rgba(176,154,125,0.7) 
    font-weight bold 
  .operating_english
    margin-bottom 15px
    color rgba(176,154,125,0.7)
    font-size 28px
    font-weight bold 
.operating_change
  float left
  width 16%
  margin-top 7%
  font-size 16px
  color #ffffff
  li
   margin-bottom 20% 
   cursor pointer
   .order
      display inline-block
      margin-right 5%
   .order_text
      display inline-block
      padding-bottom 10px
.operating_change_content
  float left
  width 84%
  height 355px
  position relative
  .one_bg
    position absolute
    float right
    width 720px
  .one_bgs
    top 50px
.banking
  padding 45px 18.25% 0 18.25%
  box-sizing border-box
.caifu_list
  overflow hidden
  .caifu_lists
    cursor pointer
    float left
    width 30%
    p
      font-size 14px
      font-weight bold
      color #2a2a2a
      text-align center
    img
      width 100%
      margin-bottom 12px
.line
  width 12%
  height 2px
  margin 7px auto 0
  background-color #c9c9c9    
.license
  margin-top 45px
  padding 2%
  box-sizinig border-box
  background-color rgba(255,255,255,0.56)  
  margin-bottom 70px
.license_list
  .license_lists
    cursor pointer
    width 23.5%
    float left 
    img
      width 100%
      margin-bottom 12px
    p
      color #2a2a2a
      font-size 14px
      font-weight bold
      text-align center
.mask
  display none
  width 100%
  height 100%
  position fixed
  top 0
  left 0
  background rgba(0,0,0,0.7)
  z-index 3000
.big_licens
  display none
  width 80%
  box-sizing border-box 
  position fixed
  top 20%
  left 550px
  z-index 3000
.companyProfile
  background url(../../assets/index/home_banner1.png) no-repeat
  background-attachment fixed
  background-position center center
  //max-width 1920px
  height 1048.5px
  margin 0 auto
.operating_procedures
  background url(../../assets/index/move_bg2.png) no-repeat
  background-attachment fixed
  background-position center center
  background-size cover
  //max-width 1920px
  height 490px
  margin 0 auto
.wrap_bottom
  background url(../../assets/index/move_bg3.png) no-repeat
  background-attachment fixed
  background-position center center
  background-size cover
  //max-width 1920px
  height 925px
  margin 0 auto
.title_index
  width 220px
  display -webkit-box
  display -moz-box
  overflow hidden
  white-space normal !important
  -moz-text-overflow ellipsis
  text-overflow ellipsis
  word-wrap break-word
  -webkit-line-clamp 1
  /* autoprefixer: off */
  -webkit-box-orient vertical
  /* autoprefixer: on */
  float left
  height 20px
  line-height 20px
.rule_list
  overflow hidden
  /* background-color rgba(255,255,255,0.56) */
  padding 8px 15px
  p
    float left
    font-size 16px
    color #2A2A2A
    position relative
    width 33%
    text-align center
.rule_list p:hover
  color #B09A7D
  cursor pointer
.rule_list .list_p::after
  display block 
  clear both
  content ""
  height 17px
  position absolute
  width 2px
  background #D5D5D5
  top 0
  right 0
</style>
