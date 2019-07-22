<template>
    <div class="bannering">
        <div class="banner_top">
            <div class="banner_title">
            <img src="@/assets/index/top_title.png" alt="" @click="jump_index()">         
            </div>
            <!-- <ul class="navul">
                <li class="navul_list" @click="jump_index()">首页</li>
                <li class="navul_list" @click="jump_product()">产品</li>
                <li class="navul_list" @click="jump_sever()">服务</li>
                <li class="navul_list" @click="enterJin()">企业金融</li>
                <li class="navul_list" @click="jump_zixun()">收费资讯</li>
                <li class="navul_list" @click="jump_ours()">关于我们</li>
            </ul>  -->
            
         
            <ul class="navul">
                <!-- <router-link tag="li" to="/Information" class="navul_list" active-class="active">
                行业报告
                </router-link> -->
                <li class="navul_list" @click="enterJin()">企业金融</li>
                <router-link tag="li" to="/ours" class="navul_list" active-class="active">
                  关于我们
                </router-link>
                <!-- <li class="navul_list" @click="open_login()">登录</li>
                <li class="navul_list" @click="open_reg()">注册</li> -->
            </ul>
            <!-- <ul class="navul">
                <li class="navul_list" @click="enterJin()">企业金融</li>
              </ul> -->
            <ul class="navul">
                <router-link tag="li" to="/Index" class="navul_list" active-class="active">
                     首页
                </router-link>
                <router-link tag="li" to="/product" class="navul_list" active-class="active">
                  产品
                </router-link>
                <router-link tag="li" to="/sever" class="navul_list" active-class="active">
                  服务
                </router-link>
            </ul>
            
            <!-- <el-menu 
            :default-active="activeIndex" 
            class="el-menu-demo navul" 
            mode="horizontal" 
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :unique-opened="true">
              <el-menu-item index="1" style><li class="navul_list" @click="jump_index()">首页</li></el-menu-item>
              <el-menu-item index="2"  style><li class="navul_list" @click="jump_product()">产品</li></el-menu-item>
              <el-menu-item index="3" style  @click="jump_sever()">服务</el-menu-item>
              <el-menu-item index="4" style>企业金融</el-menu-item>
            </el-menu> -->

        </div>
    </div>
</template>
<script>
import { MessageBox } from 'element-ui';
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    open_login() {
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
      open_reg() {
      const h = this.$createElement;
        this.$msgbox({
          title: '注册',
          message: h('div', null, [
            h('span', null, '用户名 '),
            h('input', { style: 'color: #666',class:'span_inp' }),
            h('span', { style: 'padding-right: 13px',class:'span_p'}, '密码 '),
            h('input', { style: 'margin-bottom: 13px',class:'span_inp' }),
            //h('p', { style: 'margin-top: 15px' ,class:'p_l'}, '行业报告需付费观看，会员/月10元 '),
          ]),
          showCancelButton: true,
          showConfirmButton: false,
          confirmButtonText: '注册',
          cancelButtonText: '注册',
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
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push(keyPath)
    },
  // watch: {
  //     $route(to, from) {
  //       this.activeIndex = to.name
  //       console.log('to.name',to.name)
  //     }
  // },
    jump_index(){
      this.$router.push({
          path:'/Index',
          name:'Index'
      })
    },
    jump_product(){
      this.$router.push({
          path:'/product',
          name:'product'
      })   
    },
    jump_sever(){
      this.$router.push({
          path:'/sever',
          name:'sever'
      })
    },
    jump_zixun(){
      this.$router.push({
          path:'/Information',
          name:'Information'
      })
    },
    jump_ours(){
      this.$router.push({
          path:'/ours',
          name:'ours'
      })
    },
    enterJin (){
      window.open("https://jg.tdyhfund.com/",'_blank');
    }
  }      
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.span_inp{
  width: 85%;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  margin-top: 23px;
  padding: 8px 0;
  color: #666;
}
.p_l{
  opacity: 0.5;
}
.bannering
    width 100%
    background rgba(0,0,0,1)   
    min-height 90px
    //position absolute
    //top 0px
  .banner_top
    padding 5px 18.75% 0 18.75%
    box-sizing border-box
    overflow hidden
    .banner_title  
      width 48%  
      float left
      margin-top 19px
      img
        width 100%
    .navul
      margin-top 3.5%
      font-weight normal
      overflow hidden     
      float right
     li
      float left
      padding 0 8px 8px
      box-sizing border-box  
      text-align center 
      color #ffffff
      cursor pointer
     li:hover
        border-bottom 2px solid #B09A7D
     .active
        color #B09A7D
        font-weight 600
.banner_title img:hover
  cursor pointer
</style>
