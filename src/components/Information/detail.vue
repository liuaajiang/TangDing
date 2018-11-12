<template>
    <div class="index">
        <Navheader></Navheader>
        <div class="Mess_content">
                <div class="mes_title clearfloat"><p class="M_tit">{{title}}</p><p class="M_date">{{date}}</p></div>
            <div class="trem_M">
                <p class="item_con">{{content}}</p>
                <p class="item_con">{{content2}}</p>
                <p class="item_con">{{content3}}</p>
                <p class="item_con">{{content4}}</p>
                <!-- <p class="item_con">说到云计算这种高大上的东西，很多人可能被吓到云里雾里，其实简单来看，我们可以把它类比成为酒店。</p>
                <p class="item_con">从定义上来看，云计算是一种利用互联网实现随时随地、按需、便捷地使用共享计算设施、存储设备、应用程序资源的计算模式，代表了IT届的共享经济，就好像你有了一张VIP会员卡，可以…</p> -->
                <!-- <p class="item_date">2018-11-02</p> -->
            </div>
            <p class="see_btn" >付费6元查看完整内容</p>
        </div>
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
import axios from 'axios'
import Navheader from '@/components/Navheader'
export default {
  name: 'Index',
  data () {
    return {
      title:'',
      date:'',
      content:'',
      content2:'',
      content3:'',
      content4:''
    }
  },
  components:{Navheader},
  mounted () {
    this.loginShow()
    this.closing() 
    //this.changeCai() 
    //this.enterJin()     
  },
  methods: { 
    loginShow(){
            $(".see_btn").on('click',function(){
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
    changeCai (){
      $(".caifu_lists").hover(function(){
          $(this).find(".lists_title").hide();
           $(this).find(".lists_detail").show();
      },function(){
          $(this).find(".lists_title").show();
           $(this).find(".lists_detail").hide();
      })
    }       
  },
  created(){
     // this.getData()
    // console.log(this.$route.query.Data.F_CONTENT)
     this.title = decodeURIComponent(this.$route.query.title)
     this.date = decodeURIComponent(this.$route.query.date)
     this.content = decodeURIComponent(this.$route.query.content)
     if(!this.$route.query.content2 == false){
        this.content2 = decodeURIComponent(this.$route.query.content2)
        this.content3 = decodeURIComponent(this.$route.query.content3)
        this.content4 = decodeURIComponent(this.$route.query.content4)
     }else{
        this.content2 = ""
        this.content3 = ""
        this.content4 = ""
     }
  }
}
</script>
<style scoped lang="stylus">
#zhichiBtnBox{
    display: none;
}
.index{
  width:100%;
  overflow:hidden;
  min-width:1200px;
 // position relative
}
.Mess_content
    padding 45px 18.75% 23px
    box-sizing border-box
    .mes_title
        border-bottom 1px solid #CCCCCC
        padding 16px 0
        .M_tit
            color #B09A7D
            font-size 30px
            font-weight 600
            float left
            width 88%
        .M_date
            width 10%
            float right
            padding-top 20px
            color #383838
.trem_M
    padding-bottom 12px
    padding-top 20px
    text-indent 2em
    .trem_tit
        overflow hidden
        padding 25px 0 20px
        img
            float left
            height 19px
        .item_tit
            color #383838
            font-size 18px
            font-weight 600
            padding-left 8px
            float left
            width 80%
            display -webkit-box
            overflow hidden
            white-space normal !important
            text-overflow ellipsis
            word-wrap break-word
            -webkit-line-clamp 1
            -webkit-box-orient vertical
    .item_con
        color #383838
        font-size 15px
        line-height 2
    .item_date    
        text-align right
        color #888888
        font-size 14px
        padding-top 20px
.see_btn
    width 160px
    height 40px
    line-height 40px
    border 1px solid #b09a7d
    margin 50px auto 30px
    color #333
    border-radius 40px
    text-align center
    font-size 14px
.see_btn:hover
    cursor pointer
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