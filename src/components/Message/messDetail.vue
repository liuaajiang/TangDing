<template>
    <div class="index">
        <Navheader></Navheader>
        <div class="Mess_content">
            <div class="mes_title clearfloat"><p class="M_tit">{{title}}</p><p class="M_date">{{dateinit(date)}}</p></div>
            <div class="trem_M">
                <p class="item_con">{{content}}</p>
            </div>
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
      content:'',
      infoId:'',
      date:''
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
    },
    getData:function(){
        let that = this;
      // console.log(that.pageNum)
        axios({
            method:'get',
            url:'https://funddata.tdyhfund.com/fundDataManage/fundInfo/NoticeContent/123456',
            params: {
                contentId: that.infoId
            }
        })
        .then(function(res) {//成功之后
            //console.log(res.data.data.F_CONTENT)
            //that.fullscreenLoading = false
            var retCode=res.data.retCode
            var retMsg=res.data.retMsg;
            if(retCode == 0){
                that.content = res.data.data.F_CONTENT
                //that.totalCount = Number(res.data.data.TOTAL_NUM)
                
            }
        });
    },
    dateinit (da){  
        var date = da.toString()
        var Date = date.substring(0, 4) + '-' + date.substring(4, 6)+ '-' + date.substring(6, 8)
        return Date
    },        
  },
  created(){
     // console.log(this.$route.query.contentId)
     this.infoId = this.$route.query.contentId
     this.title = decodeURIComponent(this.$route.query.title)
     this.date = decodeURIComponent(this.$route.query.date)
     this.getData()
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
</style>