<template>
    <div class="index">
        <Navheader></Navheader>
        <div class="Mess_content">
            <div class="mes_title clearfloat"><p class="M_tit" v-html="title"></p><p class="M_date">{{date}}</p></div>
            <div class="trem_M">
                <p class="item_con" v-html="content"></p>
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
  },
  methods: { 
    getData:function(){
        let that = this;
        var param=Base64.encode('{"id":"'+that.infoId+'"}');
        axios({
            method:'get',
            url:that.host+'/olmgweb/TDAPIController/getInvestoEeducationArticleDetail',//07-18
            params: {
                param:param,
                osFlag:'3'
            }
        })
        .then(function(res) {//成功之后
            var data=Base64.decode(res.data);
            data=jQuery.parseJSON(data);
            console.log(data)
            var retCode=data.retCode
            var retMsg=data.retMsg;
            if(retCode == 0){
                that.content = data.content
                that.title = data.title
                that.date = data.publishDate
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
    console.log(this.$route.query.Id)
    this.infoId = this.$route.query.Id
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