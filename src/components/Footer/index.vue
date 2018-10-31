<template>
  <div class="footer">
    <div class="footer_content">
      <p class="hotline"><span style="margin-right:20px;">客服电话：400-819-9868</span><span>在线客服：(服务时间：08:30-17:30)</span></p>
      <p class="partner">合作伙伴</p>
      <p class="partner_english">Cooperative partner</p>
      <p class="partnered">
        <a href="http://www.zzcapital.com/" style="color:#ffffff;">中植资本</a>
        <a href="http://www.cmbc.com.cn/" style="color:#ffffff;">民生银行</a>
        <a href="http://www.zrfunds.com.cn/index.html" style="color:#ffffff;">中融基金</a>
        <a href="http://www.icbccs.com.cn/cif/signin.jsp" style="border:0;color:#ffffff;">工银基金</a>     
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
    </div>  
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
  background #25242A
  min-width 1200px
.footer_content
  width 62.5%
  margin 0 auto
  padding-top 50px
  padding-bottom 30px
  overflow hidden 
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
    width 30%
    position absolute
    left 60%
    top 21%
    overflow hidden
    div
      float left
      width 43% 
      p
        text-align center   
    .dtcf  
      float left     
      img 
        width 100%                  
    .dtcf_service
      float right
      img 
        width 100%                
  
</style>
