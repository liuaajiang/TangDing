<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-form :model="loginForm" status-icon :rules="rules2" ref="loginForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="营业执照" prop="BusiCode">
        <el-input v-model.number="loginForm.BusiCode"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model.number="loginForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
    <ul>
      <router-link tag="li" to="/register">企业注册</router-link>
      <router-link tag="li" to="/forgetpass">忘记密码</router-link>
    </ul>
  </div>
</template>

<script>
import { isValidMobile, isValidBusiCode } from '@/util/extends.js'
export default {
    data() {
      var validPhone=(rule, value,callback)=>{
        if (!value){
            callback(new Error('请输入电话号码'))
        }else  if (!isValidMobile(value)){
          callback(new Error('请输入正确的11位手机号码'))
        }else {
            callback()
        }
      }
      var validBusiCode=(rule, value,callback)=>{
          if (!value){
              callback(new Error('请输入营业执照'))
          }else  if (!isValidBusiCode(value)){
            callback(new Error('请输入正确的营业执照'))
          }else {
              callback()
          }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }  else{
          callback();
        }
      }
      return {
        msg: '企业客户登录',
        loginForm: {
          pass: '',
          phone: '',
          BusiCode: ''
        },
        rules2: {
          pass: [
            {required: true, min: 8, message: '登录密码至少8位'},
            { validator: validatePass, trigger: 'blur' }
          ],
          phone: [
            { validator: validPhone, trigger: 'blur' }
          ],
          BusiCode: [
            { validator: validBusiCode, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        
        this.$refs[formName].validate((valid) => {
          
          if (valid) {
            // dispatch采用Promise链式调用                         
                this.$store.dispatch('login', this.loginForm.phone).then(() => {
                    this.$notify({
                        type: 'success',
                        message: '欢迎你,' + this.loginForm.phone + '!',
                        duration: 3000
                    })
                   
                })
            this.$router.replace({
              name: 'Index'
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-form-item.is-required >>> .el-form-item__label:before {
    content: '';
}
</style>
