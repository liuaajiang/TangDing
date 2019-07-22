<template>
    <div class="index">
       <Navheader></Navheader>
        <div class="Mess_content">
            <!-- <div class="mes_title">收费资讯 PROFESSIONAL INFORMATION</div> -->
            <div class="mes_title">行业报告 INDUSTRY REPORT</div>
            <!-- <div class="trem_M" @click="jump_detail()">
                <div class="trem_tit">
                    <img src="@/assets/index/shoufei.png" alt=""/>     
                    <p class="item_tit">拨开云雾，聊聊云计算</p>    
                </div>
                <p class="item_con">云计算已被提升至国家战略的层面、工信部发布规划明确提出：到2019年，我国云计算产业规模达到4300亿元。</p>
                <p class="item_date">2018-11-02</p>
            </div> -->
            <!-- <div class="trem_M" v-for="(item,index) in inforList" @click="jump_detail($event)" :index='index'> -->
             <div class="trem_M" v-for="(item,index) in inforList" >
                    <div class="trem_tit"  @click="openLogin">
                        <img src="@/assets/index/shoufei.png" alt=""/>     
                        <p class="item_tit">{{item.F_DATASOURCE}}</p>    
                    </div>
                <p class="item_con item_con_M">{{item.F_CONTENT}}</p>
                <p class="item_date">{{item.F_DATE}}</p>
            </div>
           <!-- <p class="seemore"> <i class="el-icon-arrow-down"></i><span>查看更多</span></p> -->
           <p class="see_btn" @click="openLogin">查看更多</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Navheader from '@/components/Navheader'
import { MessageBox } from 'element-ui';
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your  A1',
      inforList:[
          {F_DATASOURCE: "券商的投资管理能力", F_DATE: '2019.03.27',F_CONTENT: "正如今年政府工作报告所强调的：“今年我国发展面临的环境更复杂更严峻，可以预料和难以预料的风险挑战更多更大，要做好打硬仗的充分准备。”在3月15日的国务院总理李克强回答中外记者提问新闻发布会上，李克强强调：“我们一定能够保持经济运行在合理区间。”"},
          {F_DATASOURCE: "2019年券商的最新投研能力报告分析", F_DATE: '2019.03.26',F_CONTENT: "去年确实让很多人始料未及，不光小老百姓、资本小佬入了坑，大佬也同样入坑，你看贾跃亭把孙宏斌、王健林这样的顶级资本大佬也拉入了坑。有人说这是因为国人不理性、赌性大，很多人碰上了个姑娘就掏心掏肺、碰上了个项目就倾家荡产、碰上了个股票就梭哈。"},
          {F_DATASOURCE: "在券商行业里，投资管理能力与投研能力的区别分析", F_DATE: '2019.03.22',F_CONTENT: "随着2019年全国两会结束，会上传出的一系列重磅政策开始陆续落地。除政府工作报告提出的实施更大规模的减税、确保减税降费等政策外，财政、货币政策的变化也备受市场关注..."},
          //{F_DATASOURCE: "智能媒体时代来临，“多牛”有多牛？", F_DATE: '2019.03.08',F_CONTENT: "近几年，以技术驱动产业变革的力量开始波及传媒产业，在内容产业的生产、分发、变现等各个环节发生了彻底颠覆，在这个过程中，通过技术聚合了大量媒体资产的新型传媒产业开始出现。多牛传媒就是一个典型代表。提起多牛传媒，很多人会想到去年那场让无数8090后唏嘘不已的人人网并购。"},
          //{F_DATASOURCE: "大唐元一乐德芳：2019，你必须要配置一款股权母基金", F_DATE: '2019.02.21',F_CONTENT: "2019.2.20，雪后放晴，北京千禧大酒店，知名行业媒体“GPLP”的第三届投资产业峰会正在召开。大唐财富大唐元一股权母基金管理合伙人乐德芳女士从容登台，她是这场“2019年投资策略”panel的主持人，在座的都是行业内的知名大咖，每个人谈起自家基金来都是信心满满，骄傲满满。乐德芳则穿针引线，巧妙的在不断抛出问题的同时，也娓娓道来了她的骄傲——大唐元一。"},
         // {F_DATASOURCE: "1月CPI数据出炉，万亿春节消费凸显新亮点", F_DATE: '2019.02.15',F_CONTENT: "其中，从环比看，CPI上涨0.5%，主要受到了春节节日因素影响。在食品中，受天气寒冷和临近春节等因素影响，鲜菜、鲜果和水产品价格分别上涨9.1%、2.3%和2.0%；羊肉、牛肉和鸡蛋价格分别上涨1.8%、1.7%和0.5%，上述六项合计影响CPI上涨约0.32个百分点。"}
        ]
    }
  },
  components:{Navheader},
  mounted () {
    //this.changeCai() 
    //this.enterJin()     
  },
  methods: {   
    openLogin (){
        const h = this.$createElement;
        this.$msgbox({
          title: '登录',
          message: h('div', null, [
            h('span', null, '用户名 '),
            h('input', { style: 'color: #666',class:'span_inp' }),
            h('span', { style: 'padding-right: 13px',class:'span_p'}, '密码 '),
            h('input', { style: 'margin-bottom: 13px',class:'span_inp' }),
            h('p', { style: 'margin-top: 15px' ,class:'p_l'}, '行业报告需付费观看，会员/月10元 '),
          ]),
          showCancelButton: true,
          showConfirmButton: false,
          confirmButtonText: '登录',
          cancelButtonText: '登录',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
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
    jump_detail(event){
       // console.log(this.inforList[0].F_CONTENT)
        var index=event.currentTarget.getAttribute('index');//绑定事件的元素
       // console.log(index)
        //console.log(this.inforList[index].F_CONTENT)
        if(!this.inforList[index].F_CONTENT2 == false){
            this.$router.push({
                path:'/detail',
                name:'detail',
                query:{
                    title:encodeURIComponent(this.inforList[index].F_DATASOURCE),
                    date: encodeURIComponent(this.inforList[index].F_DATE),
                    content:encodeURIComponent(this.inforList[index].F_CONTENT),
                    content2:encodeURIComponent(this.inforList[index].F_CONTENT2),
                    content3:encodeURIComponent(this.inforList[index].F_CONTENT3),
                    content4:encodeURIComponent(this.inforList[index].F_CONTENT4)
                }
            })    
        }else{
            this.$router.push({
                path:'/detail',
                name:'detail',
                query:{
                    title:encodeURIComponent(this.inforList[index].F_DATASOURCE),
                    date: encodeURIComponent(this.inforList[index].F_DATE),
                    content:encodeURIComponent(this.inforList[index].F_CONTENT)
                }
            }) 
        }
        
    }       
  },
  created(){
     // this.getData()
  }
}
</script>
<style scoped lang="stylus">
.Mess_content .seemore{
  color: rgb(176, 154, 125);
  text-align: center;
  cursor: pointer;
}
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
.span_inp{
  width: 85%;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  margin-top: 23px;
  padding: 8px 0;
  color: #666
}
.p_l{
  opacity: 0.5;
}
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
        line-height 1.8
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
</style>