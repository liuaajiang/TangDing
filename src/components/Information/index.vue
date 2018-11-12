<template>
    <div class="index">
       <Navheader></Navheader>
        <div class="Mess_content">
            <div class="mes_title">收费资讯 PROFESSIONAL INFORMATION</div>
            <!-- <div class="trem_M" @click="jump_detail()">
                <div class="trem_tit">
                    <img src="@/assets/index/shoufei.png" alt=""/>     
                    <p class="item_tit">拨开云雾，聊聊云计算</p>    
                </div>
                <p class="item_con">云计算已被提升至国家战略的层面、工信部发布规划明确提出：到2019年，我国云计算产业规模达到4300亿元。</p>
                <p class="item_date">2018-11-02</p>
            </div> -->
            <div class="trem_M" v-for="(item,index) in inforList" @click="jump_detail($event)" :index='index'>
                    <div class="trem_tit">
                        <img src="@/assets/index/shoufei.png" alt=""/>     
                        <p class="item_tit">{{item.F_DATASOURCE}}</p>    
                    </div>
                <p class="item_con item_con_M">{{item.F_CONTENT}}</p>
                <p class="item_date">{{item.F_DATE}}</p>
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
      msg: 'Welcome to Your  A1',
      inforList:[
          {F_DATASOURCE: "拨开云雾，聊聊云计算", F_DATE: '2018-11-02',F_CONTENT: "云计算已被提升至国家战略的层面、工信部发布规划明确提出：到2019年，我国云计算产业规模达到4300亿元。说到云计算这种高大上的东西，很多人可能被吓到云里雾里，其实简单来看，我们可以把它类比成为酒店。从定义上来看，云计算是一种利用互联网实现随时随地、按需、便捷地使用共享计算设施、存储设备、应用程序资源的计算模式，代表了IT届的共享经济，就好像你有了一张VIP会员卡，可以…"},
          {F_DATASOURCE: "私募资管行业的纲领性文件下发，A股会有最后一跌吗？", F_DATE: '2018-10-26',F_CONTENT: "说投资决策之前，先来解读一下私募行业的纲领性文件。22日晚间，证监会发布了《证券期货经营机构私募资产管理业务管理办法》及《证券期货经营机构私募资产管理计划运作管理规定》（以下合称《资管细则》），作为资管新规配套实施细则，自公布之日起施行。展业限制：",F_CONTENT2:"1、放宽私募资管展业条件，投资经理、投研人数均由5人降为3人；",F_CONTENT3:"2、明确了管理人的主动管理职责，彻底去通道化；",F_CONTENT4:"3、超额业绩报酬最高提60%，最多6个月提取一次，因赎回提取的不…"},
          {F_DATASOURCE: "你买的银行理财变成这样了......", F_DATE: '2018-10-18',F_CONTENT: "作为资管行业中体量最大的一个子行业，银行理财5月份以来发行数量持续下降，很多新产品处于停摆状态。银行理财的收益率也连续六个月下跌，且创年内最大跌幅。8月份理财产品的平均预期收益率为4.67%，较7月份下降了0.08个百分点，是去年12月以来的最低收益水平。这也意味着老百姓的投资收益…"},
          {F_DATASOURCE: "ODI、QDII、QDLP、QDIE，海外投资渠道全解读算", F_DATE: '2018-10-09',F_CONTENT: "当前特朗普向全球发难，世界资本市场格局生变，新兴市场货币贬值，美元升值，在这一升一贬间，人民币资产相对美元资产的吸引力也日渐式微，海外投资再成金融圈最热的话题。从配置层面看，国内投资者海外资产配置的比例相对较低，大概只有4-5%，因为我们还是一个资本管制的国家，发达市场家庭海外资产配置的比例在15%上下，某些国家甚至更高，比如新加坡，这一比例高达37%。过去15-20年财富等级的跃升主要靠房地产，未来15-20年不会…"},
          {F_DATASOURCE: "银行理财新规落地，21万亿资产怎么办？", F_DATE: '2018-09-30',F_CONTENT: "自4月27日资管新规出台后，银行理财规模一路下滑。银保监会数据显示，2018年5月末银行理财产品余额为22.28万亿元，而6月末余额为21万亿元，同业理财规模和占比持续下降。7月20日，银保监会发布《商业银行理财业务监督管理办法(征求意见稿)》（以下简称“征求意见稿”）。经过两个月的征求意见，9月28日，《商业银行理财业务监督管理办法》正式落地，为银行理财续了一口真气…"},
          {F_DATASOURCE: "大数据——私募证券基金市场扫描", F_DATE: '2018-09-29',F_CONTENT: "私募的业绩更新慢，所以9月底才能看全8月份的数据。 数据显示，8月份进入大唐财富白名单观察池中共68家，覆盖五大策略：股票多头/指数增强/中性策略/宏观对冲/量化CTA。2018年以来私募行业平均收益为-7.18%；大唐财富观察池中私募平均收益为-0.80%。8月份私募行业平均收益为-2.83%，除CTA策略、债券策略，本月其余策略均未获得正收益，大唐财富观察池中私募平均收益为…"}
        ]
    }
  },
  components:{Navheader},
  mounted () {
    //this.changeCai() 
    //this.enterJin()     
  },
  methods: {    
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