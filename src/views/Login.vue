<template>
 <div style="width:100%; min-width:800px; width:expression_r(document.body.clientWidth < 800 ? 800:801);">
    <!-- banner- -->
    <div class="banner">
      <span class="name">识汪君</span>
       <div class="login-register">
          <span class="login" @click="showlogin()">登录</span>
            &nbsp;/
          <span class="register" @click="showreg()">注册</span>
        </div> 
    </div>
   <!-- <div class="home">
      <span>欢迎来到识汪君狗狗社区！</span>
      登录
      <el-dialog custom-class="custom-class" title="登录" :visible.sync="loginVisible" center :append-to-body='true' :lock-scroll="false" width="25%">
          <el-container width="25%">
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
            还没账号去？  <a href="#" @click="showreg">注册</a>
          </span>
        </el-form>
 
    </el-container>
    <div slot="footer" class="dialog-footer">
      <el-button @click="esc()">取 消</el-button>
      <el-button type="primary" @click="login()">登 录</el-button>
    </div>
    </el-dialog>
   注册
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
            已有账号？去  <a href="#" @click="showlogin">登录</a>
          </span>
        </el-form>
 
    </el-container>
    <div slot="footer" class="dialog-footer">
      <el-button @click="esc()">取 消</el-button>
      <el-button type="primary" @click="register()">注册</el-button>
    </div>
    </el-dialog>

    </div>
</div> -->
	<!---登录注册框--->
			<div class="login-lay" v-show="showloginform">	
                        <p>Login</p>
						<input type="text" value="" placeholder="手机号" v-model="loginform.user_id">
						<input type="password" placeholder="密码" v-model="loginform.user_code">
						<el-button @click="esc()">取 消</el-button>
      					<el-button type="primary" @click="login()">登录</el-button>
			</div>
			<div class="login-lay" v-show="showregform">	
                        <p>register</p>
						<input type="text" value="" placeholder="手机号" v-model="regform.user_id">
						<input type="text" value="" placeholder="用户名" v-model="regform.user_name">
						<input type="password" placeholder="密码" v-model="regform.user_code">
						<input type="password" placeholder="再次确认密码" v-model="regform.user_codeAgain">
						<br>
						<form>
							性别：
							<label>保密<input type="radio" v-model="regform.user_sex" value="保密"/></label> &nbsp; 	
							<label>男<input type="radio" v-model="regform.user_sex" value="男"/></label> &nbsp; 
							<label>女<input type="radio" v-model="regform.user_sex" value="女"/></label> 
						</form>
						<br/>
						<el-button @click="esc()">取 消</el-button>
      					<el-button type="primary" @click="register()">注册</el-button>
			</div>
			<!---大背景--->
			<div class="ban">
				<div class="ban-image">
					<div class="backstretch">
						<img src="../assets/dog11.jpg" >
					</div>
				</div>
				<div class="ban-caption">
					<h1 style="font-size: 45px;">show me your photos!</h1>
					<p style="font-size: 35px;margin: 50px;">Dog Breed Classification</p>
				</div>
			</div>
			<div class="section">
				<h1>识别</h1>	
				<div>
					<img src="../assets/dog2.jpg"  onclick="shibieDog()" width="100%" height="754" />
				</div>				
				<div class="lubo">
								<div class="ban-inner">
									<img src="../assets/dog4.jpg"  onclick="linkDog()" alt="" name="0">
									<img src="../assets/dog5.jpg"  onclick="linkDog()" alt="" name="1">
									<img src="../assets/dog6.jpg"  onclick="linkDog()" alt="" name="2">
									<img src="../assets/dog7.jpg"  onclick="linkDog()" alt="" name="3">
								</div>
								<div class="ctrlbtn">
									<a href="javascript:;" class="prev">&gt;</a>
									<a href="javascript:;" class="next">&lt;</a>
								</div>
								<ul class="pageCtrl">
									<li class="active"></li>
									<li></li>
									<li></li>
									<li></li>
								</ul>
						</div>
						<h1>狗狗的分类</h1>
						<div style="height: 800px;">
							<div style="float: left;width: 70%;">
								<div>
									<img src="../assets/dog9.jpg"  onclick="linkDog()" width="100%" height="400px" />
								</div>
								<div>
									<div style="float: left;width: 50%;">
										<img src="../assets/dog7.jpg"  onclick="linkDog()" width="100%"  height="400px" />
									</div>
									<div style="float: right;width: 50%;">
										<img src="../assets/dog8.jpg"  onclick="linkDog()" width="100%"  height="400px" />
									</div>
								</div>
							</div>
							<div style="width: 30%;float: right;">
								<img src="../assets/dog3.jpg"  onclick="linkDog()" width="100%" height="800px" />
							</div>
						</div>
						<div >
							<div style="width: 70%;float: left;">
								<img src="../assets/dog5.jpg"  onclick="linkDog()" width="100%" height="300px" />
							</div>
					<div style="width: 30%;float: left;margin: 0 0 30px;">
					<img src="../assets/dog13.jpg"  onclick="linkDog()" width="100%" height="300px"  />
					</div>
				</div>
						<div style="border:2px solid rgb(208,124,124)">
							<h2 class="laodCon">LOAD MORE</h2>
						</div>
						<div>
							<h1>需要更多的服务吗</h1>
						</div>
				
			</div>
			
			<div class="footer">
				<div class="contact_arrive_right">
        <h2>Contact me</h2>
          <p>Claritas est etiam processus dynamicus qui sequitur</p>
          <div class="contact_table">
					<form action="/plus/diy.php" enctype="multipart/form-data" method="post">
          <table>
						<tbody><tr>
              <td><input name="chenghu" class="input" type="text" placeholder="Your Name*" value=""   ></td>
						</tr>
						<tr>
              <td><input name="qqhao" class="input" type="text" placeholder="Your E-mail address*" value=""  ></td>
						</tr>
						<tr>
              <td colspan="2"><textarea name="liuyan" cols="" rows="" >Your Message</textarea></td>
						</tr>
						<tr>
              <td colspan="2"><input type="submit" class="btn_submit" value="Send Button "></td>
						</tr>
            </tbody></table>
					</form>
          </div> 
				</div>
			</div>
			<div class="lood"><p>© Copyright 2014 Mar</p></div>
		</div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
	  showloginform:false,
	  showregform:false,	
	  loginform: {
		user_id:'',
		user_code:'',  
	  },
	  regform: {
		user_id:'',
		user_code:'',
		user_codeAgain:'',
		user_name:'',
		user_sex: '保密'  
	  },
    }
  },
 methods:{
    showlogin(){
		this.showregform=false
		this.showloginform = true
    },
    showreg(){
        this.showloginform=false
		this.showregform = true
    },
    esc(){
      this.showloginform=false
      this.showregform=false
    },
      login(){
		//表单验证，登录提示
		let that = this
		if(that.loginform.user_id==""||that.loginform.user_code==""){
			that.$message({
            showClose: true,
            message: '账号或密码为空！',
            type: 'error'
         });
		}
		else{
			that.$axios.get(that.url+"/users/login", {
				params:{
						user_id: that.loginform.user_id,
						user_code: that.loginform.user_code
					}
				})
			.then(res => {
				if(res.data.status==1){
						this.$message({
					showClose: true,
					message: '用户名或密码错误！',
					type: 'error'
				});
				}
				else if(res.data.status==2){
					this.$message({
					showClose: true,
					message: '登录成功',
					type: 'success'
				});
				 setTimeout (() => {
					this.$router.replace({
					path: '/index'
					})}, 500)
					// that.$store.state.myInfo = res.data.data[0];
					let myInfo = res.data.data[0]
					that.$store.commit("setmyInfo", myInfo);//更新userInfo
					console.log(that.$store.state.myInfo);
					// console.log(that.$store.state.myInfo.user_id);
					 that.loginform.user_id=""
					 that.loginform.user_code=""
				}
				else{
						this.$message({
					showClose: true,
					message: '登录失败！',
					type: 'error'
				});
				}
				}).catch(res => {
				console.log(res)
				})
	    }
    },
    register(){
	  //表单验证，注册提示
	  let that = this
	  let user_id = that.regform.user_id
	  let user_code = that.regform.user_code
	  let user_codeAgain = that.regform.user_codeAgain
	  let user_name = that.regform.user_name
	  if(user_id==""||user_code==""||user_codeAgain==""||user_name==""){
		    that.$message({
            showClose: true,
            message: '请填写相关信息！',
            type: 'error'
         });
	  }else if(user_code!=user_codeAgain){
		    that.$message({
            showClose: true,
            message: '两次输入的密码不一致！',
            type: 'error'
         });
	  }else{
       that.$axios.get(that.url+"/users/reg", {
		   params:{
				user_id: that.regform.user_id,
				user_code: that.regform.user_code,
				user_name: that.regform.user_name,
				user_sex: that.regform.user_sex
			}
		})
       .then(res => {
		  if(res.data.status==1){
			    this.$message({
            showClose: true,
            message: '注册成功请登录！',
            type: 'success'
		 });
		this.showregform=false
		this.showloginform = true
		that.regform.user_id=""
		that.regform.user_code=""
		that.regform.user_name=""
		that.regform.user_sex="保密"
		  }
		  else if(res.data.status==2){
			   this.$message({
            showClose: true,
            message: '该账号已注册，请登录！',
            type: 'success'
		 });
		  }
		  else{
			    this.$message({
            showClose: true,
            message: '注册失败！',
            type: 'error'
		 });
		  }
        }).catch(res => {
          console.log(res)
        })
	  }
    }
  },
}
</script>
<style scoped>
.banner{
  position: fixed;
  width: 100vw;
  background-color: rgb(88, 87, 87);
  height:50px;
  margin-top: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.782);
  box-shadow: 5px 5px 5px #888888;
  z-index: 1;
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
/* .home{
  position: absolute;
  background:url("../assets/t01e2d997be66d8555e.jpg");
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
  padding-top: 20vh;
  line-height:50vh;
  font-size:50px;
  opacity:1;
  color:black;
  }
  .pwwd{
    margin-left:30px;
  }

.el-dialog .custom-class{
  width: 500px !important;
  /* border-radius: 100px; 
} */

	/* 公共样式 */
			*{margin:0;padding:0;}
			body{font-size: 14px;color:#4d4d4d;}
			ol, ul {list-style:none}
			a {text-decoration:none;color:#4d4d4d;}
			em{font-style: normal;}
			input{border: none;}			
			input[type="button"], input[type="submit"], input[type="reset"] {-webkit-appearance: none;}
			
			/* 本页面样式  */
			/* .container{
				width: 1200px;
				margin: 0 auto;
			}
			.container a {
				float: right;
				display: block;
				width: 80px;
				height: 30px;
				z-index: 99;
				position: relative;
				background: rgb(42,130,228);
				line-height: 30px;
				text-align: center;
				color: #fff;
				border-radius: 30px;
				margin: 30px 0 0 ;
			} */
			.ban {
				position: relative;
				width: 100%;
				height:850px;
				top:0px;
				/* min-height: 100%; */
				/* position: relative; */
				color: #fff;
			}
			.ban-image {
				vertical-align: middle;
				min-height: 100%;
				width: 100%;
				top: 50px;
				position: relative;
				z-index: 0;
				background: none;
			}
			.backstretch{
				left: 0px;
				overflow: hidden;
				margin: 0px;
				padding: 0px;
				height: 850px;
				width: 100%;
				z-index: -999998;
				position: absolute;
			}
			.backstretch img {
				position: absolute;
				margin: 0px;
				padding: 0px;
				border: none;
				width: 100%;
				height: 850px;
				max-height: none;
				max-width: none;
				z-index: -999999;				
				top: 0px;
			}
			.ban-caption {
				position: absolute;
				top: 40%;
				width: 100%;
				text-align: center;
			}
			.section{
				position: relative;

			}
			.section h1{
				position: relative;
				margin-top: 50px;
				font-size: 30px;
				text-align: center;
				font-weight: inherit;
			}
			/* lubo */
			.lubo{
			width: 800px;
			height: 450px;
			margin:100px  auto;
			position: relative;
			overflow: hidden;
			}
			.ban-inner {
				width: 4000px;
				height: 450px;
				position: absolute;
				left: 0;
				top: 0;
			}
			.lubo img{
				width: 1000px;
				height: 450px;
				display: block;
				/* vertical-align: middle; */
				float: left;
			}
			.lubo .ctrlbtn a{
				display: block;
				position: absolute;
				top: 50%;
				width: 40px;
				height:100px;
				line-height: 100px;
				text-align: center;
				cursor: pointer;
				font-size: 24px;
				margin-top: -50px;
				color: white;
				background: rgba(100,100,100,.5);
			}
			.prev{ right: 0; font-family: "宋体";}
			.next{
				left: 0;font-family: "宋体";
			}
			.lubo a:hover{
				background: rgba(255,255,255,0.5)
			}
			.lubo ul{
				position: absolute;
				left: 0;
				bottom: 10px;
				width: 100%;
				text-align: center;
			}
			.lubo li{ display: inline-block; width: 10px; height: 10px; overflow: hidden; margin: 0 5px; background-color: rgba(255,255,255,.5); border-radius: 50%; z-index: 1111; cursor: pointer;}
			.lubo .active{
				background: rgba(255,255,255,1)
			}
			.laodCon{
				clear: both;
				margin: 32px auto 0;
				font-size: 30px;
				text-align: center;
				color: #fff;
				width: 250px;
				height: 60px;
				line-height: 60px;
				background: rgb(208,124,124);
			}
			.footer{
				width: 100%;
				height: 500px;
				background: url(./../assets/timg.jpg) no-repeat;
				background-size: 100% 100%;
			}
			.contact_arrive h2 {
				height: 42px;
				line-height: 42px;
				font-size: 18px;
				color: #333;
				font-weight: normal;
			}
			.contact_arrive_right{
				width: 500px;
				margin: 0 auto;
				padding: 30px 0;
			}
			.contact_table table {
				border-collapse: collapse;
				padding: 0px;
				margin: 0px;
			}
			.contact_table td {
				padding: 9px 0px;
			}
			.contact_table input {
				width: 420px;
				height: 36px;
				line-height: 36px;
				border: 1px solid #dddddd;
				font-size: 12px;
				color: #999999;
				margin-right: 7px;
				padding: 0px 6px;
			}
			.contact_table textarea {
				width: 420px;
				height: 120px;
				border: 1px solid #dddddd;
				font-size: 12px;
				color: #999999;
				padding: 5px;
				line-height: 24px;
			}
			.contact_table .btn_submit {
				border: none;
				background: rgb(208,124,124);
				width: 133px;
				height: 36px;
				cursor: pointer;
			}
			.contact_arrive_right h2,.contact_arrive_right p{
				text-align: center;
				margin: 20px 0;
			}
			.lood{
				padding: 50px 0;
				text-align: center;
			}
			.login-lay {
				width: 350px;
				background-color: #fff;
				position: absolute;
				right: 20px;
				top: 150px;
				text-align: center;
				z-index: 999;
				border:1px solid #ddd;
				border-radius: 10px;
			}
			.login-lay>p {
				font-size: 20px;
				padding: 30px ;
				color: #222;
				text-align: left;
			}
			.login-lay>input {
				height: 40px;
				line-height: 40px;
				width: 300px;
				box-sizing: border-box;
				font-size: 14px;
				color: #999;
				background: #e4e5e9;
				border: 1px solid #e5e5e5;
				padding-left: 15px;
				margin-bottom:15px;
			}
			.bgc-orange {
				background-color: #4aa4e2 !important;
				color: #fff !important;
				border: none !important;
				float: left;
				margin-left: 28px;
				padding: 0!important;
			}
			.sewv{position: relative;width: 300px;display: inline-block;vertical-align: middle;}
			.sewvtop{width:100%;height:35px;line-height: 35px;margin-bottom: 15px; border: 1px #D9D9D9 solid;cursor:pointer;border-radius: 2px;overflow: hidden;}
			.sewvtop:hover{border:1px #57c5f7 solid;}
			.sewvtop>span{text-align: left; float:left;width:70%;line-height: 35px;white-space:pre;text-overflow:ellipsis;overflow: hidden;font-size: 12px;color: #666;padding:0 5px;vertical-align: middle;}
			.sewvtop>em{float:right;width: 20px;height: 20px;vertical-align: middle;}
			.sewvbm{background: #fff;width: 100%;position: absolute;left: 0;top: 25px;display: none;border: 1px #D9D9D9 solid;border-radius: 2px;}
			.sewvbm>li{cursor:pointer;width:100%;height:30px;line-height:30px;font-size: 12px;color: #666;padding-left:5px;}
			.sewvbm>li:hover{background: #57c5f7;color: #fff;}
</style>