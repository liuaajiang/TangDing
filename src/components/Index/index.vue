<template>
  <div class="index">
    <!-- <h1>{{ msg }}</h1> -->
     <div class="banner">
      <!--<el-carousel :interval="7000" arrow="always" trigger="click">
        <el-carousel-item v-for="(item,index) in list" :key="index">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel> -->
      <img src="@/assets/index/banner.png">
      <div class="banner_top">
        <ul class="navul">
            <router-link tag="li" to="/index">首页</router-link>
            <router-link tag="li" to="/register">产品</router-link>
            <router-link tag="li" to="/index">服务</router-link>
            <router-link tag="li" to="/register">企业金融</router-link>
        </ul>
      </div>
    </div>
    <div class="messageList" >
    <el-row>
      <el-col :span="3"><div class="grid-content bg-purple">最新消息：</div></el-col>
      <el-col :span="21">
        <div class="grid-content bg-purple-light">
          <el-row >
            <el-col :span="8" v-for="(item,index) in messageList" :key="index">
             <div class="grid-content bg-purple" >{{item.text}}<span>{{item.date}}</span></div>
            </el-col>
          </el-row>
        </div></el-col>
    </el-row>
    </div>
    <div class="companyProfile">
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark title">唐鼎耀华</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark">北京唐鼎耀华基金销售有限公司，是证监会批准从事基金销售业务的的持牌基金销售机构。公司在充分了解基金公司、券商的投研能力和投资管理能力的基础上，通过三级风控体系筛选出种类丰富、风险等级齐全的产品，供不同风险偏好的投资人一站式购买。公司专注为客户提供专业金融产品及服务，全品类的资产配置助您的财富稳健增值。</div></el-col>
      </el-row>
      <el-row>
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
    </div>

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
        { "text":"新版大唐财富师APP上线通知" , "date":"2018.08.19" }
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
h1, h2 {
  font-weight: normal;
}
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
li {
  display: inline-block;
  margin: 0 10px;
}
.banner{
  width:100%;
  position: relative;
}
.banner img{
  width:100%;
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
    .navul
      overflow hidden
      width 1200px
      position absolute
      top 0
      .navul
        float right
</style>
