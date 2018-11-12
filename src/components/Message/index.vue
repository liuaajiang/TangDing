<template>
    <div class="index">
        <Navheader></Navheader>
        <div class="Mess_content" v-loading.fullscreen.lock="fullscreenLoading">
            <div class="mes_title">信息披露 INFORMATION DISCLOSURE</div>
            <div class="trem_M" v-for="(item,index) in inforList" @click="jump_Detail($event)" :index='index'>
                <div class="trem_tit">   
                    <p class="item_tit">{{item.F_TITLE}}</p>    
                </div>
                <p class="item_con item_con_M">{{item.F_CONTENT}}</p>
                <p class="item_date" >{{dateinit(item.F_DATE)}}</p>
            </div>    
        </div>
        <div class="pagination">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="totalCount"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-size="pageSize"
                next-text="下一页"
                prev-text="上一页">
            </el-pagination>    
        </div>  
    </div>
</template>
<script>
import axios from 'axios';
import { Loading } from 'element-ui';
import Navheader from '@/components/Navheader'
export default {
  name: 'Index',
  data () {
    return {
      inforList: '',
      date:'',
      pageSize:20,
      pageNum:1,
      totalCount:1,
      fullscreenLoading: false
    }
  },
  components:{Navheader},
  mounted () {
    //this.changeCai() 
    //this.enterJin()     
  },
  methods: { 
    handleSizeChange: function (size) {
        this.fullscreenLoading = true;
        this.pageSize = size;
        this.getData()
        this.goTop()
    },
    handleCurrentChange: function(currentPage){
        this.fullscreenLoading = true;
        this.pageNum = currentPage;
        this.getData()
        this.goTop()
    },
    getData:function(){
        let that = this;
       // console.log(that.pageNum)
        axios({
            method:'get',
            url:'https://funddata.tdyhfund.com/fundDataManage/fundInfo/AllNoticeList',
            params: {
                pageSize: that.pageSize,
                pageNum: that.pageNum
            }
        })
        .then(function(res) {//成功之后
            //console.log(res.data.data)
            that.fullscreenLoading = false
            var retCode=res.data.retCode
            var retMsg=res.data.retMsg;
            if(retCode == 0){
                that.inforList = res.data.data.NOTICE_LIST
                that.totalCount = Number(res.data.data.TOTAL_NUM)
                
            }
        });
    }, 
    dateinit (da){  
        var date = da.toString()
        var Date = date.substring(0, 4) + '-' + date.substring(4, 6)+ '-' + date.substring(6, 8)
        return Date
    }, 
    jump_Detail(event){
       // console.log(this.inforList[0].F_CONTENT)
        var index=event.currentTarget.getAttribute('index');//绑定事件的元素
       // console.log(index)
        //console.log(this.inforList[index].F_CONTENT)
        this.$router.push({
          path:'/messDetail',
          name:'messDetail',
          query:{
            contentId:this.inforList[index].F_INFO_ID,
            title:encodeURIComponent(this.inforList[index].F_TITLE),
            date: encodeURIComponent(this.inforList[index].F_DATE)
          }
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
    goTop () {
      let self = this
      self.timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
        self.isTop = true
        if (osTop === 0) {
          clearInterval(self.timer)
        }
      }, 100)
    }       
  },
  created(){
    this.fullscreenLoading = true;
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
        color #B09A7D
        font-size 30px
        font-weight 600
        border-bottom 1px solid #CCCCCC
        padding 16px 0
    .trem_M
        border-bottom 1px dashed #ccc
        padding-bottom 12px
        .trem_tit
            overflow hidden
            padding 20px 0 10px
            img
                float left
                height 19px
            .item_tit
                color #383838
                font-size 18px
                line-height 1.8
                font-weight 600
                float left
                width 80%
        .item_con
            color #383838
            font-size 15px
            line-height 1.8
            height 60px
            display -webkit-box
            overflow hidden
            white-space normal !important
            text-overflow ellipsis
            word-wrap break-word
            -webkit-line-clamp 2
            /* autoprefixer: off */
            -webkit-box-orient vertical
            /* autoprefixer: on */
        .item_date    
            text-align right
            color #888888
            font-size 14px
            padding-top 15px
    .trem_M:last-of-type
        border none
    .trem_M:hover
        cursor pointer
.pagination
    text-align center
    padding 30px 0
</style>
<style>
.el-pager li{
    border: 1px solid #D2D2D2!important;
    background-color: #fff !important;
    color: #383838
}
.el-pager li.active{
    background-color: #25242A!important;
}
.el-pager li:hover{

}
.btn-next span{
    border: 1px solid #D2D2D2!important;
    background-color: #fff !important;
    padding: 0 5px;
}
.btn-prev span{
    border: 1px solid #D2D2D2!important;
    background-color: #fff !important;
    padding: 0 5px;
}
</style>