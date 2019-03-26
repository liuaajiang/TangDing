<template>
    <div class="index">
        <Navheader></Navheader>
        <div class="Mess_content">
            <div class="mes_title">法律法规 LAWS AND REGULATIONS</div>
            <div class="law_list">
                <p class="law_tit"  @click.stop='open1'>中华人民共和国合同法（1999）</p>
                <p class="law_tit" @click.stop='open2'>中华人民共和国担保法</p> 
                <p class="law_tit" @click.stop='open3'>中华人民共和国信托法（主席令第五十号）</p>
                <p class="law_tit" @click.stop='open4'>中华人民共和国公司法（2013修正）</p>
                <p class="law_tit" @click.stop='open5'>中华人民共和国合伙企业法(2006修订)</p>
                <p class="law_tit" @click.stop='open6'>中华人民共和国证券法</p>
                <p class="law_tit" @click.stop='open7'>中华人民共和国证券投资基金法（2015修正）</p>
                <p class="law_tit" @click.stop='open8'>证券投资基金销售管理办法（中国证券监督管理委员会令第91号）</p>
                <p class="law_tit" @click.stop='open9'>证券投资基金信息披露管理办法（中国证券监督管理委员会令第19号）</p>
                <p class="law_tit" @click.stop='open10' style="border:0;">证券期货投资者适当性管理办法 </p>
            </div>
        </div>  
    </div>
</template>
<script>
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
    }
  },
  components:{Navheader},
  methods: { 
    open1:function(){
        //window.location.href='static/19991001.pdf';
        window.open("static/pdf/19991001中华人民共和国合同法（1999）.pdf",'_blank')
    },
    open2:function(){
        window.open("static/pdf/19951001中华人民共和国担保法.pdf",'_blank')
    },
    open3:function(){
        window.open("static/pdf/20011001中华人民共和国信托法.pdf",'_blank')
    },
    open4:function(){
        window.open("static/pdf/20140301中华人民共和国公司法（2013修正）.pdf",'_blank')
    },
    open5:function(){
        window.open("static/pdf/20070601中华人民共和国合伙企业法(2006修订).pdf",'_blank')
    },
    open6:function(){
        window.open("static/pdf/中华人民共和国证券法（2005-10-27修订）.pdf",'_blank')
    },
    open7:function(){
        window.open("static/pdf/20150424中华人民共和国证券投资基金法（2015修正）.pdf",'_blank')
    },
    open8:function(){
        window.open("static/pdf/20130601证券投资基金销售管理办法.pdf",'_blank')
    },
    open9:function(){
        window.open("static/pdf/20040701证券投资基金信息披露管理办法.pdf",'_blank')
    },
    open10:function(){
        window.open("static/pdf/20170701《证券期货投资者适当性管理办法》.pdf",'_blank')
    }      
  },
  created(){
    window.scroll(0,0);
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
    .law_tit
        color #383838
        font-size 18px
        padding 30px 0
        border-bottom 1px dashed #ccc
.law_tit:hover
    cursor pointer
</style>