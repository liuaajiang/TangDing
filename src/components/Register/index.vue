<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-form :model="registerForm" status-icon :rules="rules2" ref="registerForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="机构名称" prop="organname">
        <el-input v-model="registerForm.organname" placeholder="请输入您所在的机构名称"></el-input>
      </el-form-item>
      <el-form-item label="统一社会信用代码" prop="xincode">
        <el-input v-model="registerForm.xincode" placeholder="请输入统一社会信息用代码"></el-input>
      </el-form-item>
      <el-form-item label="经办人姓名" prop="operatorName">
        <el-input v-model="registerForm.operatorName" placeholder="请输入经办人姓名"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" prop="IdCardN">
        <el-input v-model.number="registerForm.IdCardN" placeholder="请输入身份证号码"></el-input>
      </el-form-item>
      <el-form-item label="经办人手机号" prop="phone">
        <el-input v-model.number="registerForm.phone" placeholder="请输入经办人手机号"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verifycode">
        <el-input v-model="registerForm.verifycode" placeholder="请输入验证码" class="identifyinput"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="sendcode" @click="getvcode('registerForm')" :disabled="isDisabled">
            {{identifyCode}}
        </el-button>
      </el-form-item>
      <el-form-item label="推荐人" >
        <el-input placeholder="请输入推荐人工号，非必填"></el-input>
      </el-form-item>
       <el-form-item label="是否为全权代理人" >
        <el-input type="password" autocomplete="off" placeholder="请确认密码"></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="pass">
        <el-input type="password" v-model="registerForm.pass" autocomplete="off" placeholder="请输入8位以上登录密码"></el-input>
      </el-form-item>
      <el-form-item label="注册手机号" prop="phone">
        <el-input v-model.number="registerForm.phone" placeholder="请输入经办人手机号"></el-input>
      </el-form-item>
      <el-form-item label="营业执照" prop="phone">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item prop="checked">
        <el-checkbox v-model="checked" >我已阅读并同意 《网络服务协议》</el-checkbox>
      </el-form-item>
      <el-form-item>
        <router-link tag="li" to="/register">
           <el-button @click="resetForm('registerForm')">取消</el-button>
        </router-link>
        <el-button type="primary" @click="submitForm('registerForm')">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { isValidMobile, isValidxincode, isValidverifycode, isValidIdCardNo } from '@/util/extends.js'
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
      var validIdCardNo=(rule, value,callback)=>{
          if (!value){
              callback(new Error('请输入身份证号码'))
          }else  if (!isValidIdCardNo(value)){
            callback(new Error('请输入正确的身份证号码'))
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
          if (this.registerForm.checkPass !== '') {
            this.$refs.registerForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validatechecked = (rule, checked, callback) => {
        console.log(this.checked)
        if (this.checked == false) {
          callback(new Error('请阅读并同意 《网络服务协议》'));
        }  else {
          callback();
        }
      };
      return {
        msg: '注册',
        imageUrl: '',
        identifyCode: '获取验证码',
        isDisabled: false,
				time: 60,
        checked: true,
        registerForm: {
          organname: '',
          pass: '',
          operatorName: '',
          IdCardNo: '',
          phone: '',
          xincode: '',
          verifycode: ''
        },
        rules2: {
          organname: [
            { required: true,message: '请输入您所在的机构名称', trigger: 'blur' }
          ],
          operatorName: [
            { required: true,message: '请输入经办人姓名', trigger: 'blur' }
          ],
          xincode: [
            {  validator: validxincode, trigger: 'blur' }
          ],
          IdCardNo: [
            {  validator: validIdCardNo, trigger: 'blur' }
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
          ],
          checked: [
            { validator: validatechecked, trigger: 'change'}
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
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
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