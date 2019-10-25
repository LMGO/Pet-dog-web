<template>
<div style="width:100%; min-width:800px; width:expression_r(document.body.clientWidth < 800 ? 800:801);">
    <!--banner-->
    <div class="banner">
      <span class="name">识汪君</span>
       <div class="login-register">
          <span class="login" @click="loginForm()">登录</span>
            &nbsp;/
          <span class="register" @click="registerForm()">注册</span>
        </div> 
    </div>
    <div class="home">
      <span>欢迎来到识汪君狗狗社区！</span>
      <!-----登录----->
      <el-dialog  title="登录" :visible.sync="loginVisible" center :append-to-body='true' :lock-scroll="false" width="25%">
          <el-container>
        <el-form label-width="120px">
          <el-row>
            <el-col>
              <el-form-item label="账号" prop="name">
                <el-input ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" auto-complete="new-password"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <span class="pwwd">
            还没账号去？  <a href="#" @click="registerForm">注册</a>
          </span>
        </el-form>
 
    </el-container>
    <div slot="footer" class="dialog-footer">
      <el-button @click="esc()">取 消</el-button>
      <el-button type="primary" @click="login()">登 录</el-button>
    </div>
    </el-dialog>
    <!-----注册----->
    <el-dialog title="注册" :visible.sync="registerVisible" center :append-to-body='true' :lock-scroll="false" width="25%">
          <el-container>
        <el-form label-width="120px" :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
          <el-row>
            <el-col>
              <el-form-item label="手机号"  prop="phone">
                <el-input v-model.number="ruleForm.phone"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="验证码" prop="name">
                <el-input></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="用户名" prop="name">
                <el-input></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" show-password="true" auto-complete="new-password"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="确认密码" prop="name">
                <el-input type="password" auto-complete="new-password"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label="性别" prop="name">
                <template>
                  <el-radio-group v-model="radio">
                    <el-radio :label="3">男</el-radio>
                    <el-radio :label="6">女</el-radio>
                    <el-radio :label="9">保密</el-radio>
                  </el-radio-group>
                </template>
              </el-form-item>
            </el-col>
          </el-row>
          <span class="pwwd">
            已有账号？去  <a href="#" @click="loginForm">登录</a>
          </span>
        </el-form>
 
    </el-container>
    <div slot="footer" class="dialog-footer">
      <el-button @click="esc()">取 消</el-button>
      <el-button type="primary" @click="register()">注册</el-button>
    </div>
    </el-dialog>

    </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else {
          const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
          // console.log(reg.test(value));
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的手机号'));
          }
        }
      };
    return{
      ruleForm: {
          phone: ''
        },
        rules: {
          phone: [
            {validator: checkPhone, trigger: 'blur'}
          ]
        },
      phone:'',
      radio:3,
      loginVisible: false,
      registerVisible: false
    }
  },
  methods:{
    loginForm(){
        this.registerVisible=false
        this.loginVisible=true//默认页面不显示为false,点击按钮将这个属性变成true
    },
    registerForm(){
        this.loginVisible=false
        this.registerVisible=true
    },
    esc(){
      this.registerVisible=false
      this.loginVisible=false
    },
      login(){
        //表单验证，登录提示
          this.$message({
            showClose: true,
            message: '登录成功！',
            type: 'success'
         });             
        setTimeout (() => {
          this.$router.replace({
          path: '/index'
        })}, 500)
    },
    register(){
      //表单验证，注册提示
      this.$message({
            showClose: true,
            message: '注册成功请登录！',
            type: 'success'
         });
        this.registerVisible=false
        this.loginVisible=true
    }
  },
}
</script>
<style scoped>
.banner{
  position: fixed;
  width: 100vw;
  background-color: #333;
  height:50px;
  margin-top: 0;
  border-bottom: 1px solid black;
  box-shadow: 5px 5px 5px #888888;
}
.banner .name{
  position: absolute;
  font-family: 'Courier New', Courier, monospace;
  top:10px;
  font-size: 30px;
  left:80px ;
  color:white; 
}
.banner .login-register {
  position: absolute;
  right: 80px;
  top:15px;
  font-size: 20px;
  cursor: pointer; 
  color: white;
}
.banner .login-register .login:hover {
  /* position: absolute;
  right: 80px;
  top:10px;
  font-size: 15px;
  cursor: pointer;  */
  color: blue;
}
.banner .login-register .register:hover {
  /* position: absolute;
  right: 80px;
  top:10px;
  font-size: 15px;
  cursor: pointer;  */
  color: blue;
}
.home{
  position: absolute;
  background:url("../assets/back.jpg");
  min-width:800px;
  background-Repeat: no-repeat;
  background-Size: 100%;
  margin-top: 50px;
  height:95vh;
  width: 100%;
  text-align:center;
  opacity:1;
}
.home span{
  position: relative;
  padding:0; 
  /* margin:50vh auto; */
  padding-top: 20vh;
  line-height:50vh;
  font-size:50px;
  opacity:1;
  color:black;
  }
  .pwwd{
    margin-left:30px;
  }
</style>
