<template>
  <div class="header">
    <nav>
        <ul class="topLeft">
            <li >
                <img src="@/assets/index/telephone.png" class="telephone"/>
                <p>客服电话：400-819-9868</p>
            </li>
            <li>
            <el-popover
                placement="top-start"
                title="标题"
                width="200"
                trigger="hover"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                <el-button slot="reference">hover 激活</el-button>
            </el-popover>
            </li>
            <el-tooltip placement="top">
                <div slot="content">多行信息<br/>
                    <img src="@/assets/logo.png">
                </div>
                <el-button>Top center</el-button>
            </el-tooltip>
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
            color #3E3E3E
            float left
            line-height 20px
            margin-top 19px
          img
            float left
            width 20px
            height 20px
            margin 19px 10px 15px 0
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
