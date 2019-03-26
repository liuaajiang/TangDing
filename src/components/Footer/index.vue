<template>
  <div class="footer">
    <div class="footer_content">
      <div class="hotline" style="overflow:hidden;font-size:14px;color:#fff;">
        <span style="margin-right:20px;float: left;font-size:16px;">客服电话：400-819-9868</span>
        <div style="float:left">
          <a href="https://www.sobot.com/chat/pc/index.html?sysNum=800fcb3a85a54c73b1cd5df006b9be0c" data-args="robotFlag=3" target="_blank">
            <img src="@/assets/index/Customer_service_img.png" style="width:20px;height:20px;float: left;padding-right: 6px;margin-top: -1px;display: block;"/>
            <span style="font-size:16px;color: #fff;">在线客服</span>
          </a>
          <span>（服务时间：工作日08:30-17:30）</span>
        </div>
      </div>
      <p style="line-height:22px;font-size:16px;padding-bottom:10px;">中植财富营销举报箱地址：jubao@zhongzhi.com.cn</p>
      <p class="partner">合作伙伴</p>
      <p class="partner_english">Cooperative partner</p>
      <p class="partnered">
        <a href="http://www.zzcapital.com/" style="color:#ffffff;" target="_blank">中植资本</a>
        <a href="http://www.cmbc.com.cn/" style="color:#ffffff;" target="_blank">民生银行</a>
        <a href="http://www.zrfunds.com.cn/index.html" style="color:#ffffff;" target="_blank">中融基金</a>
        <a href="http://www.icbccs.com.cn/cif/signin.jsp" style="border:0;color:#ffffff;" target="_blank">工银基金</a>     
      </p>
      <p class="F_p1">唐鼎耀华基金系证监会批准的基金销售机构[000000333]。唐鼎耀华网站所载文章、数据仅供参考，使用前请核实，风险自负。</p>
      <p class="F_p2">中国证监会北京监管局网址：<a href="http://www.csrc.gov.cn/pub/beijing/" target="_blank">www.csrc.gov.cn/pub/beijing/</a></p>
      
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
    <div class="p_bottom"><p>北京唐鼎耀华基金销售有限公司 版权所有 CopyRight C 2014.All Rights Reserved 京ICP备14008122号</p></div>
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
    font-size 14px
  .hotline
    margin-bottom 1.6%
  .partner
   font-size 24px
  .partner_english
    margin-bottom 5px
    color #616162
    font-size 14px
  .partnered 
    margin-bottom 3%
    a
      display inline-block
      margin-right 10px
      padding-right 10px
      border-right 1px solid #ffffff
      color #ffffff
  .erweima
    width 30%
    position absolute
    right 0
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
        width 98%                  
    .dtcf_service
      float right
      img 
        width 98%   
.footer_content .F_p1
  color #C5C5C5 
  font-size 13px
  line-height 18px   
  padding-top 5px
.footer_content .F_p2
  color #C5C5C5 
  font-size 13px
  line-height 18px   
  padding-top 5px   
.footer_content .F_p2 a
  color #C5C5C5 
.p_bottom
  background rgba(181,152,123,0.16)
  height 60px
  text-align center
.p_bottom p
  color #fff
  line-height 60px
</style>
