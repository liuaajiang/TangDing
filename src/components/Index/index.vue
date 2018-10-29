<template>
  <div class="index">
    <!-- <h1>{{ msg }}</h1> -->
     <div class="banner">
      <!--<el-carousel :interval="7000" arrow="always" trigger="click">
        <el-carousel-item v-for="(item,index) in list" :key="index">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel> -->
      <!-- <img src="@/assets/index/banner.png"> -->
      
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
    <div class="messageList" >
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="2"><div class="grid-content bg-purple">最新消息：</div></el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <el-row >
            <el-col :span="12" v-for="(item,index) in messageList" :key="index">
             <div class="grid-content bg-purple" >{{item.text}}<span>{{item.date}}</span></div>
            </el-col>
          </el-row>
        </div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple more">查看更多</div></el-col>
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
             <div class="list_bg"></div>
            <p class="product_title">全程监督监管</p>
            <p class="product_content">证监会批准并监督管理，民生银行全程资金监管。</p>
          </li>
      </ul>
      <div class="featured_products">
        <div class="tang_introduce">
          <p class="introduce_title">特色产品</p>
          <p class="english_text">PRODUCTS</p>
          <p class="introduce_content">北京唐鼎耀华基金销售有限公司，是证监会批准从事基金销售业务的的持牌基金销售机构。公司在充分了解基金公司、券商的投研能力和投资管理能力的基础上，通过三级风控体系筛选出种类丰富、风险等级齐全的产品，供不同风险偏好的投资人一站式购买。公司专注为客户提供专业金融产品及服务，全品类的资产配置助您的财富稳健增值。</p>
        </div>
        <ul class="featured_list">
          <li class="featured_lists">
            <div class="lists_img"><img src="@/assets/index/product_one_img.png" alt=""></div>
            <p class="featured_title1">元山母基金系列</p>
            <p class="featured_title2">他山之石，聚力元山</p>
            <p class="featured_content">作为市场首只投资不良资产的母基金，元山抓住市场先机，利用团队的专业优势，用直投的眼光做母基金，通过全面配置、优中选优的策略，迅速在行业和高净值客户层面第一时间打开市场，树立口碑，建立品牌。</p>
          </li>
          <li class="featured_lists yuanyi">
            <div class="lists_img"><img src="@/assets/index/product_two_img.png" alt=""></div>
            <p class="featured_title1">元山母基金系列</p>
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
    <div class="wrap_bottom">
      <div class="operating_procedures">
        <p class="operating_text">操作流程</p>
        <p class="operating_english">OPERATING PROCESS</p>
        <div class="operating_bottom">
          <ul class="operating_change">
            <li><span class="order">01</span><span>下载app</span></li>
            <li><span class="order">02</span><span>人脸实名认证</span></li>
            <li><span class="order">03</span><span>绑卡交易</span></li>
            <li><span class="order">04</span><span>指定财富师</span></li>
          </ul>
          <div class="operating_change_content">
              <div class="one_bg"><img src="@/assets/index/change_content_bg.png" alt=""></div>
              <!-- <div class="one_content">
                <ul class="one_content_list">
                  <li>买私募 买基金</li>
                  <li class="jiange">随时随地查看资产</li>
                  <li>新产品抢购</li>
                </ul>
                <ul class="one_content_list">
                  <li>指定财富师</li>
                  <li class="jiange">积分兑换商品</li>
                  <li>报名尊享活动</li>
                </ul>
              </div> -->
              
          </div>
        
        </div> 
      </div>
      <div class="banking">
        <div class="tang_introduce">
            <p class="introduce_title">特色产品</p>
            <p class="english_text">PRODUCTS</p>
            <p class="introduce_content">北京唐鼎耀华基金销售有限公司，是证监会批准从事基金销售业务的的持牌基金销售机构。公司在充分了解基金公司、券商的投研能力和投资管理能力的基础上，通过三级风控体系筛选出种类丰富、风险等级齐全的产品，供不同风险偏好的投资人一站式购买。公司专注为客户提供专业金融产品及服务，全品类的资产配置助您的财富稳健增值。</p>
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
          <ul class="license_list">            
            
            <li class="license_lists">
              <img src="@/assets/index/plate1_img.png" alt="">
              <div>
                <p>经营证券期货业务许可证</p>
                <div class="line"></div>
              </div>
            </li>
            <li class="license_lists" style="margin: 0 2%;">
              <img src="@/assets/index/plate2_img.png" alt="">
              <div>
                <p>营业执照</p>
                <div class="line"></div>
              </div>
            </li>
            <li class="license_lists" style="margin-right:2%;">
              <img src="@/assets/index/plate3_img.png" alt="">
              <div>
                <p>基金业协会会员证书</p>
                <div class="line"></div>
              </div>
            </li>
            <li class="license_lists">
              <img src="@/assets/index/plate4_img.png" alt="">
              <div>
                <p>民生银行全程资金监管</p>
                <div class="line"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
     
    </div>
      <!-- <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <ul>
              <li>
                <img src="@/assets/logo.png" style="width:30px;">
              </li>
              <li style="width:300px;">
                <P>产品种类丰富</P>
                目前产品涵盖私募基金、公募基金、资管计划、信托等，满足不同投资者的需求</li>
            </ul>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <ul>
              <li>
                <img src="@/assets/logo.png" style="width:30px;">
              </li>
              <li style="width:300px;">
                <P>产品种类丰富</P>
                目前产品涵盖私募基金、公募基金、资管计划、信托等，满足不同投资者的需求</li>
            </ul>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <ul>
              <li>
                <img src="@/assets/logo.png" style="width:30px;">
              </li>
              <li style="width:300px;">
                <P>产品种类丰富</P>
                目前产品涵盖私募基金、公募基金、资管计划、信托等，满足不同投资者的需求</li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="product">
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark">特色产品  PRODUCT</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <ul>
              <li>元山母基金系列<br>他山之石，聚力元山</li>
              <li>
                作为市场首只投资不良资产的母基金，元山抓住市场先机，利用团队的专业优势，用直投的眼光做母基金，通过全面配置、优中选优的策略，迅速在行业和高净值客户层面第一时间打开市场，树立口碑，建立品牌。
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <ul>
              <li>元山母基金系列<br>他山之石，聚力元山</li>
              <li>
                作为市场首只投资不良资产的母基金，元山抓住市场先机，利用团队的专业优势，用直投的眼光做母基金，通过全面配置、优中选优的策略，迅速在行业和高净值客户层面第一时间打开市场，树立口碑，建立品牌。
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <ul>
              <li>元山母基金系列<br>他山之石，聚力元山</li>
              <li>
                作为市场首只投资不良资产的母基金，元山抓住市场先机，利用团队的专业优势，用直投的眼光做母基金，通过全面配置、优中选优的策略，迅速在行业和高净值客户层面第一时间打开市场，树立口碑，建立品牌。
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="operating">
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark">操作流程   OPERATING PROCESS</div></el-col>
      </el-row>
      <el-tabs v-model="activeName2" type="card" :tab-position="tabPosition">
        <el-tab-pane label="下载app" name="first">下载app</el-tab-pane>
        <el-tab-pane label="人脸实名认证" name="second">人脸实名认证理</el-tab-pane>
        <el-tab-pane label="绑卡交易" name="third">绑卡交易</el-tab-pane>
        <el-tab-pane label="指定财富师" name="fourth">指定财富师</el-tab-pane>
      </el-tabs>
    </div>
    <div class="licensePlate">
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark">公司资质  LICENSE PLATE</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple plateImg">
            <img src="@/assets/logo.png" >
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light plateImg">
            
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            
          </div>
        </el-col>
      </el-row>
    </div> -->

    <div @click="goTop" ref="btn" title="回到顶部" class="gotop-btn"></div>
   
    
   </div>
</template>

<script>
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
  mounted () {
    this.needScroll()
  },
  methods: {
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
    goTop () {
      let self = this
      self.timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
        self.isTop = true
        if (osTop === 0) {
          clearInterval(self.timer)
        }
      }, 30)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.companyProfile
  .title
    text-align center
// li {
//   display: inline-block;
//   margin: 0 10px;
//   color: #ffffff;
//   font-size: 26px;
// }
.banner{
  width:100%;
   height:800px;
   background-image url("../../assets/index/banner.png");
   background-repeat no-repeat
   background-size 100% 100%
   position: relative;
}
 
.banner .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .messageList {
    // padding-left 360px
    // box-sizing border-box
    background-color #B09A7D
    color #230A01
    font-size 18px
    padding 18px 0;
    .more{
      color #776145
    }
  }
  .go-top{
  width: 100%;
  }
  .gotop-btn{
    width: 50px;
    height: 50px;
    position: fixed;
    right: 50px;
    bottom: 50px;
    border: none;
    background: #666;
    display: none;
    z-index: 9999;
  }
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
.banner
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
.companyProfile
  padding 25px 18.75% 23px 18.75%
  box-sizing border-box
.tang_introduce
  margin-bottom 20px
.introduce_title
  font-size 40px 
  color #383838
  font-weight bold
.english_text
  color rgba(56,56,56,0.8)
  font-size 32px
  margin-bottom 20px
.introduce_content
  font-size 18px
  color #383838
  line-height 1.5  
.kinds
  margin-bottom 66px
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
      width 8%
      height 24px
      .list_bg img 
        width 100%
        height 100%
    .product_title
      margin-top 5px
      margin-bottom 10px
      font-size 20px
      font-weight bold
    .product_content
      font-size 16px
  .product
    background-image url(../../assets/index/product_bg.png)
    background-repeat no-repeat   
    background-size 40% 70%;
    background-position-x 70%;
  .service
    margin 0 10%
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
  overflow hidden
.featured_lists
  float left
  width 30%
  background-color #ffffff
  padding 2%
  box-sizing border-box
  .lists_img img
    width 100%
    height 100%
  .featured_title1
    margin-top 8px 
    margin-bottom 5px
    font-size 20px
    color #947E62
    font-weight bold
  .featured_title2
    margin-bottom 20px
    font-size 18px
    color #6B6B6B
  .featured_content
    font-size 16px
    color #000000     
    padding-bottom 10px
.yuanyi
    margin 0 5%
.operating_procedures

  width 100%
  padding 32px 18.75% 0 18.75%
  box-sizing border-box
  background-color rgba(0,0,0,0.93)  
  overflow hidden
  .operating_text
    font-size 40px
    color #B09A7D  
  .operating_english
    color rgba(176,154,125,0.7)
    font-size 30px
.operating_change
  float left
  width 15%
  margin-top 9%
  font-size 16px
  color #ffffff
  li
   margin-bottom 30%
   .order
      margin-right 5%
.operating_change_content
  float left
  width 85%
  overflow hidden
  .one_bg
    float left
    width 100%
    img
      width 100%
  // .one_content
  //   float left
  //   width 70%
  //   margin-top 40px
  //   padding 14.3% 11.45% 10.7% 11.45%
  //   box-sizing border-box
  //   background-color #46454B
  //   overflow hidden
  //   .one_content_list
  //     float left
  //     .jiange
  //       margin-top 23.6%
  //       margin-bottom 23.6%
.banking
  padding 25px 18.75% 0 18.75%
  box-sizing border-box
.caifu_list
  overflow hidden
  .caifu_lists
    float left
    width 30%
    p
      text-align center
    img
      width 100%
.line
  width 12%
  height 2px
  margin 7px auto 0
  background-color #c9c9c9    
.license
  padding 2%
  box-sizinig border-box
  background-color rgba(255,255,255,0.56)  
  margin-bottom 50px
.license_list
  overflow hidden
  .license_lists
    width 23.5%
    float left 
    // padding 2%
    // box-sizing border-box
    img
      width 100%
    p
      text-align center
</style>
