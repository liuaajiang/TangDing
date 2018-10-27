<template>
  <div class="footer">
    <el-row>
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
    </el-row>
  
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
ul
    list-style-type none
    padding 0
    margin 0
    li
        display inline-block
        margin 0 10px  
p
  margin 0
.footer
  width 100%
  overflow hidden
  background #25242A
.el-row {
    width:1200px;
    margin: 0 auto;
    padding-top:80px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    color: #FFFFFF;
  }
  .bg-purple-dark {
    /* background: #ccc; */
  }
  .bg-purple {
    /* background: #ccc; */
  }
  .bg-purple-light {
    /* background: #e5e9f2; */
  }
  .grid-content {
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .bottomp
    text-align center
</style>
