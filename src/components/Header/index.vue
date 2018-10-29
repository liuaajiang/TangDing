<template>
  <div class="header">
    <nav>
        <ul class="topLeft">
            <li >
                <img src="@/assets/index/telephone.png" class="telephone"/>
                <p class="kefu">客服电话：400-819-9868</p>
            </li>
            <li>
            <!-- <el-popover
                placement="top-start"
                title="标题"
                width="200"
                trigger="hover"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                <el-button slot="reference">hover 激活</el-button>
            </el-popover> -->
                <img src="@/assets/index/datang_icon.png" class="telephone"/>
                <p class="load">大唐财富APP下载</p>
            </li>
            <li>
                 <img src="@/assets/index/weChat_icon.png" class="telephone"/>
                <el-tooltip placement="top" class="service">
                    <div slot="content">多行信息<br/>
                        <img src="@/assets/logo.png">
                     </div>
                    <el-button>微信服务号</el-button>
                </el-tooltip>
            </li>
           
        </ul>
        <ul class="topRight">
            <li >[个人登录]</li>{{user}}
            <router-link tag="li" to="/CompanyLogin">
                    [企业登录]
            </router-link>
            <li>
                <a href="https://www.datangwealth.com/" target="_blank" class="jump_tang">大唐财富官网</a>
            </li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
    computed: {
        user () {
            return this.$store.state.user
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
.header
  width 100%
  overflow hidden
  background-color #ffffff
  nav
    overflow hidden
    width 1200px
    margin 0 auto
    .topLeft
        float left
        li
          float left
          overflow hidden
          p
            font-size 16px          
            float left
            line-height 20px
            margin-top 19px
          img
            float left
            width 20px
            height 20px
            margin 19px 10px 15px 0
          .kefu
            color #2A2A2A
          .load
            color #3E3E3E
        .service          
            padding 0
            margin-top 23px
            outline none 
            border 0
            color #3E3E3E
    .topRight
        float right
        li
          cursor pointer
          font-size 16px
          color #B09A7D
          line-height 20px
          margin-top 19px
          .jump_tang
            color #2A2A2A

</style>
