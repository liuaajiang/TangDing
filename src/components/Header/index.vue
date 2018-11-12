<template>
  <div class="header">
    <nav>
        <ul class="topLeft">
            <li style="margin-left:0;">
                <img src="@/assets/index/telephone.png" class="telephone"/>
                <p class="kefu">客服电话：400-819-9868</p>
            </li>
            <li style="cursor:pointer;">
            <!-- <el-popover
                placement="top-start"
                title="标题"
                width="200"
                trigger="hover"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                <el-button slot="reference">hover 激活</el-button>
            </el-popover> -->
                <!-- <img src="@/assets/index/datang_icon.png" class="telephone"/>
                <p class="load">大唐财富APP下载</p> -->
                <img src="@/assets/index/datang_icon.png" class="telephone" />
                <el-tooltip placement="top" class="service">
                    <div slot="content">
                        <img src="@/assets/index/saoma1.png" style="width: 160px;">
                     </div>
                    <el-button>大唐财富APP下载</el-button>
                </el-tooltip>
            </li>
            <li style="cursor:pointer;">
                 <img src="@/assets/index/weChat_icon.png" class="telephone"/>
                <el-tooltip placement="top" class="service">
                    <div slot="content">
                        <img src="@/assets/index/saoma2.png" style="width: 160px;">
                     </div>
                    <el-button>微信服务号</el-button>
                </el-tooltip>
            </li>
           
        </ul>
        <ul class="topRight">
            <li class="logining">[个人登录]</li>{{user}}
            <li to="" class="jinrong_a">
                    [企业登录]
            </li>
            <li>
                <a href="https://www.datangwealth.com/" target="_blank" class="jump_tang">大唐财富官网</a>
            </li>
        </ul>
    </nav>
    <div class="masking"></div>
    <div class="geren_wrap">
        <div class="geren">
            <div class="geren_left">
                <p class="left_content1">PC公募基金交易功能已迁移至APP<br/> 立即下载大唐财富APP体验移动交易服务吧~</p>
                <p class="left_content2">用手机号注册登录<br/>实名认证后即可绑定现有账户</p>
                <img src="@/assets/index/dtcf_login.png" alt="" style="width:60%;">
                <p class="left_content3">请扫码下载大唐财富APP</p>
            </div>
            <div class="geren_right">
                <img src="@/assets/index/login_bg.png" alt="">
            </div>
        </div>
        <div class="close"><img src="@/assets/index/close.png" alt=""></div>
    </div>
    
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
    },
     mounted () {
        this.loginShow()
        this.closing() 
        this.jinRong()

    },
    methods: {
         loginShow(){
             $(".logining").on('click',function(){
                $(".masking").show();
                $(".geren_wrap").show();                
            })
        },
        closing(){
            $(".close").on('click',function(){
                $(".geren_wrap").hide();
                $(".masking").hide();
            })
        },
        jinRong(){
            $(".jinrong_a").on('click',function(){
                window.open("https://jg.tdyhfund.com/",'_blank');
            })
        },
       
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
  height 40px
  overflow hidden
  background-color #ffffff
  min-width 1200px
  nav
    overflow hidden
    padding 0 18.75% 0 18.75%
    box-sizing border-box
    .topLeft
        float left
        li
          float left
          overflow hidden
          p
            font-size 14px          
            float left
            line-height 18px
            margin-top 12px
          img
            float left
            width 14px
            height 14px
            margin 14px 6px 15px 0
          .kefu
            color #2A2A2A
          .load
            color #3E3E3E
        .service          
            padding 0
            margin-top 14px
            outline none 
            border 0
            color #3E3E3E
    .topRight
        float right
        li
          cursor pointer
          font-size 14px
          color #B09A7D
          line-height 18px
          margin-top 12px
          .jump_tang
            color #2A2A2A
.masking
  display none
  width 100%
  height 100%
  position fixed
  top 0
  left 0
  background rgba(0,0,0,0.7)
  z-index 3000
.geren_wrap
    width 680px
    height 598px
    display none   
    box-sizing border-box 
    position fixed
    top 50%
    left 50%
    z-index 3000
    overflow hidden 
    margin -294.5px 0 0 -333.5px  
    //position relative
    .close
        width 3%
        position absolute
        top 8px
        right 0
        img 
            width 100%
.geren    
    width 667px
    height 569px
    padding-top 20px   
    .geren_left
        float left
        width 50%
        padding 48px 15px 36px
        box-sizing border-box
        text-align center
        background-color #ffffff
        .left_content1
            font-size 14px
            color #000000
            line-height 20px
        .left_content2
            margin 13px 0 5px
            font-size 13px
            color #B09A7D
            line-height 18px
        .left_content3
            font-size 15px
            color #262626
    .geren_right
        float left
        width 50%
        img 
            width 100%
</style>
