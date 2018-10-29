<template>
  <div class="footer">
    <p class="hotline"><span>客服电话：400-819-9868</span><span>在线客服：(服务时间：08:30-17:30)</span></p>
    <p class="partner">合作伙伴</p>
    <p class="partner_english">Cooperative partner</p>
    <p class="partnered">
      <a href="">中植资本</a>
      <a href="">民生银行</a>
      <a href="">中融基金</a>
      <a href="" style="border:0;">工银基金</a>     
    </p>
    <p>北京唐鼎耀华基金销售有限公司 版权所有 CopyRight C 2014.All Rights Reserved 京ICP备14008122号14008122号</p>
    <div class="erweima">
      <div class="dtcf">
        <img src="@/assets/index/dtcf.png" alt="">
        <p>大唐财富APP</p>
      </div>
      <div class="dtcf_service">
         <img src="@/assets/index/dtcf_service.png" alt="">
        <p>大唐财富服务号</p>
      </div>
    </div>
   
    <!-- <el-row>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <ul class="topLeft">
            <li>客服电话：400-819-9868</li>
            <li>
            在线客服(服务时间：工作日 08:30-17:30)
            </li>
        </ul>
         <ul class="">
            <li>合作伙伴：</li>
            <li>
              <a href="http://www.zzcapital.com/" target="_blank">中植资本</a>
            </li>
            <li>
              <a href="http://www.cmbc.com.cn/" target="_blank">民生银行</a>
            </li>
            <li>
              <a href="http://www.zrfunds.com.cn/index.html" target="_blank">中融基金</a>
            </li>
            <li>
              <a href="#" target="_blank">工银基金</a>
            </li>
        </ul>
        </div>
      </el-col>
      <el-col :span="8">
      <div class="grid-content bg-purple-light">
        <ul class="topLeft">
            <li>
              <p>大唐财富APP</p>
            </li>
            <li>
              <p>大唐财富服务号</p>
            </li>
        </ul>
      </div>
      </el-col>
      <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        <p class="bottomp">北京唐鼎耀华基金销售有限公司版权所有</p>
        <p class="bottomp">CopyRight C 2014.All Rights Reserved 京ICP备14008122号</p>
      </div></el-col>
    </el-row> -->

  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'footer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
 

// .el-row {
//     width:1200px;
//     margin: 0 auto;
//     padding-top:80px;
//     &:last-child {
//       margin-bottom: 0;
//     }
//   }
//   .el-col {
//     border-radius: 4px;
//     color: #FFFFFF;
//   }  
//   .grid-content {
//     min-height: 36px;
//   }
//   .row-bg {
//     padding: 10px 0;
//     background-color: #f9fafc;
//   }
//   .bottomp
//     text-align center
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
.footer
  width 100%
  padding 50px 18.75% 23px 18.75%
  box-sizing border-box
  overflow hidden
  background #25242A
  position relative
  p
    color #ffffff
    font-size 16px
  .hotline
    margin-bottom 2%
  .partner
   font-size 26px
  .partner_english
    margin-bottom 5px
    color #616162
    font-size 14px
  .partnered 
    margin-bottom 4%
    a
      display inline-block
      margin-right 10px
      padding-right 10px
      border-right 1px solid #ffffff
      color #ffffff
  .erweima
    width 20%
    // height 135px
    position absolute
    left 70%
    top 21%
    overflow hidden
    div
      float left
      width 46%    
    .dtcf  
      float left     
      img 
        width 100%
        height 135px           
    .dtcf_service
      float right
      img 
        width 100%         
        height 135px
  
</style>
