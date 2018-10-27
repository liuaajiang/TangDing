<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="forget-ruleForm">
      <el-form-item label="统一社会信用代码" prop="xincode">
        <el-input v-model="ruleForm2.xincode" placeholder="请输入统一社会信息用代码"></el-input>
      </el-form-item>
      <el-form-item label="注册手机号" prop="phone">
        <el-input v-model.number="ruleForm2.phone" placeholder="请输入经办人手机号"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verifycode">
        <el-input v-model="ruleForm2.verifycode" placeholder="请输入验证码" class="identifyinput"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="sendcode" @click="getvcode('ruleForm2')" :disabled="isDisabled">
            <span class="txt">{{identifyCode}}</span>
        </el-button>
      </el-form-item>
      <el-form-item label="新密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入新密码"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off" placeholder="请确认密码"></el-input>
      </el-form-item>
      <el-form-item>
        <router-link tag="li" to="/register">
           <el-button @click="resetForm('ruleForm2')">取消</el-button>
        </router-link>
        <el-button type="primary" @click="submitForm('ruleForm2')">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { isValidMobile, isValidxincode, isValidverifycode } from '@/util/extends.js'
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
      var validxincode=(rule, value,callback)=>{
          if (!value){
              callback(new Error('请输入统一社会信用代码'))
          }else  if (!isValidxincode(value)){
            callback(new Error('请输入正确的18位统一社会信用代码'))
          }else {
              callback()
          }
      }
      var validverifycode=(rule, value,callback)=>{
          if (!value){
              callback(new Error('请输入验证码'))
          }else  if (!isValidverifycode(value)){
            callback(new Error('请输入4位验证码'))
          }else {
              callback()
          }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        msg: '机构客户忘记密码',
        identifyCode: '获取验证码',
        isDisabled: false,
				time: 60,
        ruleForm2: {
          pass: '',
          checkPass: '',
          phone: '',
          xincode: '',
          verifycode: ''
        },
        rules2: {
          xincode: [
            {  validator: validxincode, trigger: 'blur' }
          ],
          verifycode: [
            {validator: validverifycode, trigger: 'blur'}
          ],
          pass: [
            {required: true, min: 8, message: '登录密码至少8位'},
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          phone: [
            { validator: validPhone, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let that = this
            this.$message({
              message: '密码更新成功',
              onClose() {
                that.$router.replace({
                  name: 'CompanyLogin'
                })
              }
             });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      getvcode(formName){
         this.$refs[formName].validateField('phone',(valid) => {
           console.log(valid)
          if (valid) {
           console.log('error submit!!');
          } else {
            
            this.sendMsg()
            return false;
          }
        });
        
      },
      sendMsg() { 
					let me = this;
					me.isDisabled = true;
					let interval = window.setInterval(function() {
						me.identifyCode = + me.time + '秒后重新获取';
						--me.time;
						if(me.time < 0) {
							me.identifyCode = '获取验证码'
							me.time = 60;
							me.isDisabled = false;
							window.clearInterval(interval);
						}
					}, 1000);
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
.el-form-item.is-required >>> .el-form-item__label:before {
    content: '';
}
</style>
