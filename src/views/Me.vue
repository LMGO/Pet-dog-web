<template>
  <div class="" >
	    <div>
			<m></m>
		</div>	
	<!------个人信息展示及大背景---->
		<div class="ban">
			<div class="ban-image">
				<div class="backstretch">
					<img src="../assets/dog11.jpg" >
				</div>
				</div>
				<div class="ban-caption">
					<img :src="user_head" class="headPhoto" @click="toshow()" style="border:1px solid black;z-index：999"  />
					<p style="font-size: 22px;margin: 15px;">{{myInfo.user_name}}</p>
					<p style="font-size: 15px;margin-top: 15px;">我的个性签名：&nbsp;{{myInfo.user_sign}}</p>
					<div>
						<span>33关注</span> &nbsp;
						<span>0粉丝</span>
					</div>
					<!-- <div style="margin-top:15px">
						<ul>
							<li>我要发帖</li>
						</ul>
					</div>				 -->
				</div>
		</div>	
	<!---查看个人资料及修改---->
    <div class="login-lay" v-show="showchange">
		    <span style="float:right;margin:10px 20px;color:black;cursor: pointer;" @click="esc">取消</span>	
			<p>修改个人信息</p>
			<input type="button" id="btn1" value="修改基础信息" @click="changedetail()" style="margin-bottom:10px">
			<input type="button" id="btn1" value="修改密码"  @click="changecode()" style="margin-bottom:10px">
			<div v-show="showchangeInfo">
				<div style="width: 350px;margin: 0 auto;text-align: left;">
					<img :src="user_headchange" class="user-image2" width="50px" style="border: 1px solid #dddddd;">
					<label>
						<input type="button" id="btn" value="选择图片" style="margin-bottom:10px">
						<input type="button" id="btn" value="修改" style="margin-bottom:10px" @click="change()">
						
						<input type="file" id="fileinp" value=""  @change="uploadFile($event)" accept=".jpg"> 
					</label>
				</div>
				<input type="text"  value="" placeholder="用户名" v-model="user_namechange">
				<input type="text"  placeholder="个性签名" v-model="user_signchange">
				<form>
					性别：
					<label>保密<input type="radio" v-model="user_sexchange" value="保密"/></label> &nbsp; 	
					<label>男<input type="radio" v-model="user_sexchange" value="男"/></label> &nbsp; 
					<label>女<input type="radio" v-model="user_sexchange" value="女"/></label> 
				</form>
				<input type="button" class="bgc-orange"  @click="surechange()"  value="确认">
			</div>
			<div v-show="showchangecode">
				<input type="password"  placeholder="原密码" v-model="user_codechange" @blur="code()">
				<input type="password"  placeholder="新密码" v-model="user_codeagain1" @blur="code1()">
				<input type="password"  placeholder="再次新密码" v-model="user_codeagain2">
				<input type="button" class="bgc-orange"  @click="surechange()"  value="确认">
			</div>
			
	</div>
			<!-----帖子及猜你喜欢--->
	<div class="box">		
	 <div class="tiezi">
				<div class="tiezilf" >
					<!-- <div class="sousuo"><span>搜索</span><input type="text" placeholder="快速搜索你的狗狗" value=""></div> -->
					<div>
						<h3 style="text-align: center;margin:10px auto">我的发布</h3>
							<ul>
							<li v-for="(pub,index) in posting" :key="index"> 
							    <div class="blogtitle1">
								  <img class="user-image" :src="pub.userHead" />
								  <span>{{pub.userName}}</span>
								  <span class="dogtype">{{pub.petName}}</span>
								  <span class="ttime">{{pub.postingTime}}</span>
								</div>
								<!---帖子内容--->	
								<div>	
									<p>{{pub.postingContent}}</p>
									<img v-for="(image,index1) in pub.postingpic" :key="index1" style="margin-right:15px" width="150px" height="150px" :src="image.postingPic"/>
									<div class="autor">
										<img :src="pub.islike" height="20px" alt="" @click="tolike(index)">
										<span style="margin-left: 10px;font-size:18px">{{pub.likecount}}</span>	
										<img src="../static/talk.png" height="20px" style="margin-left: 10px" alt="" @click="totalk(index)">				
										<span style="margin-left: 10px;font-size:18px">{{pub.talkcount}}</span>
									</div>
								</div>
								<!---帖子评论--->	
							    <div>
									<ul>
										<li v-for="(comment,index2) in pub.comment" :key="index2"> 
											<img class="user-image2" height="20px" width="20px" :src="comment.userHead">
											<span style="font-size:15px">{{comment.userName}}&nbsp;:&nbsp;&nbsp;</span>
											<span>{{comment.commentContent}}</span>
											<!--&nbsp; &nbsp;回复&nbsp;&nbsp;
											 <img class="user-image" src="../assets/dog1.jpg">
											<span>小狗狗</span>-->
											<span style="float:right;margin-right:15%;color:gray">{{comment.commentDate}}</span> 
												<!-- <div class="bloginfo">
													<span>{{comment.comment_content}}</span>
												</div> -->
										</li>
									</ul>
									 <!-- 评论框 -->
									<div class="coment" v-show="talk">
										<textarea autofocus="autofocus" rows="3" v-model="pubcomment_content" maxlength="200"></textarea>
										<button @click="toPubtalk()">发表</button>
										<button @click="quxiaototalk()">取消</button>
									</div>
							  </div>
							</li>
						</ul>
					</div>
						
				</div>
				<div class="youlike" >
					   <h3>猜你喜欢</h3>
					   <ul>
							<li> 
							  <div class="maybelike"><img src="../assets/dog1.jpg"></div>
							  <div class="bloginfo">
								<h4 style="padding: 10px 20px ;">狗子</h4>
							  </div>
							</li>
							<li> 
							    <div class="maybelike">
								   <img src="../assets/dog1.jpg">
							    </div>
								<div class="bloginfo">
									<h4 style="padding: 10px 20px ;">狗子</h4>
								</div>
							</li>
					   </ul>
				</div> 
			</div>
		</div>	
  </div>
</template>

<script>
import navbar from './../components/navbar'
export default {
  name: 'Me',
   components:{
    m:navbar
  },
  data(){
	  return{
		myInfo: this.$store.state.myInfo,
		user_head:this.url+this.$store.state.myInfo.user_head,
		//展示个人信息修改框
		showchange:false,
		user_headchange:this.url+this.$store.state.myInfo.user_head,
		user_namechange:this.$store.state.myInfo.user_name,
		//基础信息修改
		showchangeInfo:true,
		user_signchange:this.$store.state.myInfo.user_sign,
		user_sexchange:this.$store.state.myInfo.user_sex,
		//密码修改
		showchangecode:false,
		user_codechange:'',
		user_codeagain1:'',
		user_codeagain2:'',
		
		formdata:"",
	 	posting:[
			{
				userHead:this.url+'//images/default1.jpg',
				// user_head:require("../assets/dog1.jpg"),
				userName: '爱宠之家',
				postingTime:'2019-12-8',
				petName:'泰迪',
				postingContent:'天气真好，适合带狗狗出去散步',
				postingpic:[
					{
						postingPic:require("../assets/dog1.jpg")
					},
					{
						postingPic:this.url+'//images/default1.jpg',
					}

				],
				talkcount:50,
				islike:require('../static/like.png'),//根据true或false赋值
				likecount:15,
				comment:[
					{
						userHead:require("../assets/dog1.jpg"),
						userName:'么么哒',
						commentContent:'哈哈哈哈哈',
						commentDate:'2019-12-31'
					},
					{
						userHead:require("../assets/dog1.jpg"),
						userName:'么么哒',
						commentContent:'哈哈哈哈哈',
						commentDate:'2019-12-31'
					}
				]
			}
		],
		talk:false,//控制评论框
		pubcomment_content:''
	
	}
  },
  beforeMount(){
	// this.getmypost()
	if(!this.$store.state.myInfo.user_id){
		 setTimeout (() => {
          this.$router.replace({
		  path: '/'
        })}, 10)
	}
},
  methods:{
	//控制个人信息修改显示
	changedetail(){
		this.showchangecode = false
		this.showchangeInfo = true
	},
	//控制密码修改显示
	changecode(){
		this.showchangecode = true
		this.showchangeInfo = false
	},
	esc(){
		this.showchange = false
		this.user_headchange = this.url+this.$store.state.myInfo.user_head
		this.user_namechange = this.$store.state.myInfo.user_name
		this.user_codechange = ''
		this.user_codeagain1 = ''
		this.user_codeagain2 = ''
		this.user_sign = ''
		this.showchangecode = false
		this.showchangeInfo = true
	},
	//控制显示基础信息框
	toshow(){
		this.showchange = true
	},
	//选择头像
	uploadFile (el) {
      if (!el.target.files[0].size) return; // 如果文件大小为0，则返回
      if (el.target.files[0].type.indexOf('image/jpeg') === -1) { //如果不是图片格式
		// this.$dialog.toast({ mes: '请选择图片文件' });
		this.$message({
					showClose: true,
					message: '抱歉，系统目前只支持.jpg格式图片！',
					type: 'error'
				});
        console.log('请选择图片文件');
      } else {
        const that = this;
        const reader = new FileReader(); // 创建读取文件对象
        reader.readAsDataURL(el.target.files[0]); // 发起异步请求，读取文件
        reader.onload = function () {  // 文件读取完成后
          // 读取完成后，将结果赋值给img的src
          that.user_headchange = this.result;
        //   console.log(that.result);
        };
        const user_id = that.$store.state.myInfo.user_id; //后台需要的参数
        const formData = new FormData();  // 创建一个formdata对象
        formData.append("file", el.target.files[0],el.target.files[0].name); 
		formData.append('user_id', user_id)
		console.log(that.formdata)
		that.formdata = formData
      }
	},
	//确认修改头像
	change(){
		let that = this
		let config = {
				headers: {'Content-Type': 'multipart/form-data'}
				}

			that.$axios.post(that.url+'/users/updateUserhead',this.formdata,config)
				.then((res) => {
					console.log(res.data)
					console.log(res.data.data) //返回的数据
					// console.log( that.user_headchange)
					that.myInfo.user_head = res.data.data
					that.$store.commit("setmyInfo", that.myInfo);//更新本地用户信息
					that.user_head = that.url+this.$store.state.myInfo.user_head
				})
				.catch((err) => {
					console.log(err) //错误信息
				})
	},
	//自动判断原密码
	code(){
		if(this.user_codechange!=this.myInfo.user_code){
			this.$message({
						showClose: true,
						message: '原密码错误！',
						type: 'error'
				});
		}
	},
	//判新密码与旧密码
	code1(){
		if(this.user_codeagain1 == this.myInfo.user_code){
			this.$message({
						showClose: true,
						message: '输入的新密码和原密码一致！',
						type: 'error'
				});
		}
	},
	//修改基础信息
	surechange(){
		let that = this
		if(that.showchangeInfo){//修改基础信息
			if(!that.user_namechange||!that.user_signchange){
				setTimeout(function(){
					that.$message({
						showClose: true,
						message: '用户名或者用户签名为空！',
						type: 'error'
					});
				},500)	
			}
			else{//发请求修改
				that.$axios.post(that.url+"/users/update",that.$qs.stringify({
							user_id : that.$store.state.myInfo.user_id,
						  user_code : that.$store.state.myInfo.user_code,//不变
						  user_name : that.user_namechange,
						   user_sex : that.user_sexchange,
					      user_sign : that.user_signchange
			   })
			)
			.then(res => {
				if(res.data.status==1){
						that.$message({
							showClose: true,
							message: '修改成功！',
							type: 'success'
						});
				//更新本地存储
				that.myInfo.user_name = that.user_namechange
				that.myInfo.user_sign = that.user_signchange
				that.myInfo.user_sex = that.user_sexchange
				that.$store.commit("setmyInfo", that.myInfo)
				console.log(that.myInfo.user_sex)
				}
				else if(res.data.status==2){
						that.$message({
					showClose: true,
					message: '数据无变化！',
					type: 'success'
				});
				}
				else{
					that.$message({
					showClose: true,
					message: '修改失败！',
					type: 'error'
				});
				}
				}).catch(err => {
				console.log(err)
					that.$message({
						showClose: true,
						message: '修改失败！',
						type: 'error'
					});
				})
			}
		}
		else{//修改密码信息
			if(!that.user_codechange||!that.user_codeagain1||!that.user_codeagain2){
				that.$message({
					showClose: true,
					message: '请填写密码信息！',
					type: 'error'
				});
			}
			else if(that.user_codeagain1!= that.user_codeagain2){
					this.$message({
						showClose: true,
						message: '输入的新密码和原密码一致！',
						type: 'error'
				});
			}
			else{
				that.$axios.post(that.url+"/users/update",that.$qs.stringify({
							user_id : that.$store.state.myInfo.user_id,
						  user_code : that.user_codeagain1,//不变
						  user_name :  that.$store.state.myInfo.user_name,//不变
						   user_sex :  that.$store.state.myInfo.user_sex,//不变
					      user_sign :  that.$store.state.myInfo.user_sign//不变
			   })
			)
			.then(res => {
				if(res.data.status==1){
						that.$message({
							showClose: true,
							message: '修改成功！',
							type: 'success'
						});
				//更新本地存储
				that.myInfo.user_code = that.user_codeagain1
				that.$store.commit("setmyInfo", that.myInfo)
				}
				else if(res.data.status==2){
						that.$message({
					showClose: true,
					message: '数据无变化！',
					type: 'success'
				});
				}
				else{
					that.$message({
					showClose: true,
					message: '修改失败！',
					type: 'error'
				});
				}
				}).catch(err => {
				console.log(err)
					that.$message({
						showClose: true,
						message: '修改失败！',
						type: 'error'
					});
				})
			}
		}
	},
	//点赞
	tolike(i){
		let that = this
		if(that.posting[i].islike == require('../static/like.png') ){
		// 	 that.$axios.post('',that.$qs.stringify({
        //       user_id: that.$store.state.myInfo.user_id,
        //       posting_id: that.posting[i].posting_id,
        //     })
        //   )
        //   .then(res => {
        //     console.log(res);
		// 	console.log("点赞成功！");
		// 	that.posting[i].islike =  require('../static/like-active.png') ;
        //     that.posting[i].likecount += 1;
        //   })
        //   .catch(err =>{
        //     console.log(err);
        //   });
          that.posting[i].islike =  require('../static/like-active.png') ;
          that.posting[i].likecount += 1;
		}
		else{
          // 取消点赞
        console.log(that.posting[i].posting_id);
        //   that.$axios.post('',that.$qs.stringify({
        //       user_id: that.$store.state.myInfo.user_id,
        //       posting_id: that.posting[i].posting_id,
        //     })
        //   )
        //   .then(res => {
        //     console.log(res);
		// 	console.log("取消点赞！");
		// 	that.posting[i].islike = require('../static/like.png') ;
        //    that.posting[i].likecount -= 1;
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
          that.posting[i].islike = require('../static/like.png') ;
          that.posting[i].likecount -= 1;
        }

	  },
	  //控制评论框
	  totalk(i){
		this.index = i;
		this.talk = !this.talk;
		this.pubcomment_content="";
	  },
	  quxiaototalk(){
		  this.pubcomment_content="";
		  this.talk = !this.talk;
	  },
	  //发表评论
	  toPubtalk(){
		  let that = this;
			that.$axios.post('',that.$qs.stringify({
				user_id: that.$store.state.myInfo.user_id,
				posting_id: that.posting[that.index].posting_id,
				// time: that.$store.state.getTime(),
				comment_content: that.pubcomment_content
			})
			)
			.then(res =>{
			console.log(res);
			console.log("评论成功！");
			console.log(that.index);
			console.log(that.posting[that.index].talk_id);
			console.log(that.pubcomment_content);
			setTimeout(function(){
				that.$message({
					showClose: true,
					message: '发表成功！',
					type: 'success'
				});
			},500)
			// that.posting[i].microComm += 1;
			that.comment_content = "";
			that.getPostswespace();
			})
			.catch(function (error) {
			console.log(error);
			});
			this.talk = !this.talk;
	  },
	  //获取我的帖子
	  getmypost(){
		let that = this;
		that.$axios.get('',that.$qs.stringify({
            user_id: that.$store.state.myInfo.user_id,
		  })
		)
		.then(res => {
			console.log(res)
			that.posting = res.data.postinglist
			for(let index in that.posting){
				console.log(that.posting[index].islike)
				if(that.posting[index].islike){
					that.posting[index].islike = require('../static/like-active.png')
				}
				else{
					that.posting[index].islike = require('../static/like.png')
				}
				console.log("成功获取数据赋值给posting");
			}
		})
		.catch(err => {
			console.log(err)
			that.$message({
					showClose: true,
					message: '获取帖子列表异常！',
					type: 'error'
				});
		})

	  }  
  }
}
</script>
<style scoped>
			.ban {
				/* margin-top:50px; */
				width: 100%;
				height:300px;
				position: fixed;
				color: #fff; 
				z-index: 1;
			    box-shadow: 2px 2px 2px #888888;
			}
			.ban-image {
				vertical-align: middle;
				min-height: 100%;
				width: 100%;
				z-index: 2;
				background: none;
			}
		    .ban .backstretch{
				left: 0px;
				overflow: hidden;
				margin: 0px;
				padding: 0px;
				height: 300px;
				width: 100%;
				z-index: 2;
			}
			.backstretch img {
				margin: 0px;
				padding: 0px;
				border: none;
				width: 100%;
				height: 300px;
				max-height: none;
				max-width: none;
				z-index: 2;				
				top: 0px;
			}
			.ban-caption {
				position: absolute;
				top: 100px;
				width: 100%;
				z-index: 1;
				text-align: center;
			}
			.ban-caption ul {
				list-style-type: none;
				float: right;
				height: 50px;
				line-height: 50px;
				margin: 0 150px 0 0;
			}
			/* .ban-caption ul li {
				float: left;
        margin-right: 15%;
				text-align: center;
				line-height: 50px;
			} */
			.ban-caption ul li {
				font-size: 20px;
				display: block;
				position: relative;
				padding: 0 25px;
				color: #fff;
				cursor: pointer;
			}
			.ban-caption ul li:hover {
				color: rgb(12, 252, 4);
			}
			   .user-image{
				display: inline-block;
				width: 30px;
				height: 30px;
				border-radius: 30px;
				vertical-align: middle;
				margin-right: 10px;
			}
			.headPhoto{
				width: 70px;
				height: 70px;
				border-radius: 70px;
				display: inline-block;
			}
			.box{
				width: 100%;
				margin: 0 7.5%;
			}
			.tiezi{
				overflow-y: scroll;
				position: absolute;
				background: #e6090900;
				margin-top: 300px;
				padding-top: 10px;
				width: 85%;
			}
			.tiezi::-webkit-scrollbar {
				display: none;
			}
			.tiezilf{
				width: 80%;
				float: left;
				padding:0px 20px 40px ;
				border-right: 2px solid rgb(179, 175, 175);
				border: 1px solid rgb(179, 175, 175);
				box-sizing: border-box;
				margin: 10px 0;
			}
			.tiezilf ul{
				border-bottom: 1px solid rgb(20, 19, 19);
				border-right:1px solid rgb(179, 175, 175);
				border: 1px solid rgb(179, 175, 175);
				list-style: none;
			}
			.tiezilf li{
				padding: 10px 0;
				border-bottom: 1px solid #ddd;
			}
			.sousuo{
				margin-left: 0;
				text-align: center;
			}
			.sousuo input{
				width: 50%;
				height: 36px;
				/* line-height: 36px; */
				border: 1px solid #dddddd;
				font-size: 12px;
				color: #999999;
				background: rgb(238,238,238);
				border-radius: 15px;
				margin: 0 10px;
				padding: 0px 6px;
			}
			.blogs li {
				margin-bottom: 10px;
				overflow: hidden;
				padding: 20px;
				background: #fff;				
			}
			.blogtitle1 {
				line-height: 20px;
				height: 20px;
				margin: 5px 0;
			}
			.blogtitle {
				line-height: 15px;
				height: 15px;
				margin: 2px 0;
			}
			.bloginfo p {
				color: #888;
				line-height: 15px;
			}
			.autor {
				padding-left: 80%;
				width: 100%;
				overflow: hidden;
				clear: both;
				margin: 20px 0 0 0;
				display: inline-block;
				color: #838383;
				font-size: 12px;
			}
			.ttime {
				float: right;
				margin-right: 20%
			}
			
			/*------猜你喜欢---*/
			.youlike{
				position:fixed;
				width: 20%;
				/* float: left; */
				left: 72.5%;
				margin: 0 50px ;
				box-sizing: border-box;
				text-align: center;
				/* margin: 10px auto; */
			}
			.youlike h3{
				text-align: center;
				color: #e33c64;
			}
			.youlike ul{
				margin: 10px 0;
				list-style: none;
			}
			.youlike li{
				width:75%;
				padding: 20px 20px;
				list-style: none;
			}
			.maybelike {
				overflow: hidden;
				width: 100px;
				height: 100px;
				display: block;
				float: left;
				background: #e33c64;
				margin-right: 20px;
				border-radius: 5px;
			}
			.maybelike img {
				width: 100%;
				height: 100%;
			}
			/*------修改信息框---*/
			.login-lay {
				width: 400px;
				background-color: #fff;
				position: absolute;
				right:25%;
				top: 150px;
				text-align: center;
				z-index: 999;
				border:1px solid #ddd;
				border-radius: 10px;
			}
			.login-lay>div>p {
				font-size: 20px;
				padding: 5px 10px ;
				color: #222;
				text-align: center;
			}
			.login-lay>div>input {
				height: 40px;
				/* line-height: 40px; */
				width: 350px;
				font-size: 14px;
				color:black;
				background: #e4e5e9;
				border: 1px solid #e5e5e5;
				padding-left: 15px;
				margin-bottom: 15px;
				border-radius: 50px;
			}
			.login-lay>div>form {
				height: 40px;
				width: 350px;
			}
			.bgc-orange {
				background-color: #4aa4e2 !important;
				color: #fff !important;
				border: none !important;
				float: left;
				margin-left: 28px;
				padding: 0!important;
			}
			.user-image{
				display: inline-block;
				width: 30px;
				height: 30px;
				border-radius: 30px;
				vertical-align: middle;
				margin-right: 10px;
			}
			.user-image2{
				display: inline-block;
				width: 25px;
				height: 25px;
				border-radius: 12.5px;
				vertical-align: middle;
				margin-right: 10px;
			}
			.headPhoto{
				width: 70px;
				height: 70px;
				border-radius: 70px;
				display: inline-block;
			}
			label{
			  position: relative;
			}
			#fileinp{
				position: absolute;
				left: 0;
				top: 0;
				opacity:0;
				width: 70px;
			}
			/* #text{
				color: red;
			} */
			#btn{
				margin-right: 5px;
				padding: 5px 5px;
				background: #00b0f0;
				color: #FFF;
				border: none;
				border-radius: 5px;
				width: 70px;
			}
			#btn1{
				margin-right: 5px;
				padding: 0px 5px;
				background:  #00b0f0;
				color: #FFF;
				border: none;
				border-radius: 10px;
				width: 100px;
				height: 40px;
			}
			.dogtype{
				display: inline-block;
				width: 60px;
				height: 25px;
				line-height: 25px;
				font-size: 12px;
				border-radius: 40px;
				background: #00B0F0;
				text-align: center;
				margin-left: 30px;
			}

			.publish{
				position: fixed;
				height:85px;
				width:85px;
				top:14%;
				left: 64%;
				z-index: 2;
			}
			.publish img{
				background: #ddd;
				margin:5px;
				height: 70px;
				width:70px;
				border-radius: 10px;
			}
			.pubform{
				/* text-align: center; */
				/* padding: auto 2%; */
				top:14%;
				left: 30%;
				width: 30%;
				background: #e33c64;
				position: fixed;
				box-shadow: 5px 5px 5px #888888;
				z-index: 3;
				border-radius: 10px;
			}

			/*发帖表单页面 */
			.tuichu{
				float:right;
				margin:10px 2% 0 0;
				color:black;
				cursor: pointer;
				margin-right: 2%;
				/* float:right; */
			}
			.vue-uploader {
				border: 1px solid #e5e5e5;
				margin: 2%;
				display: flex;
				flex-direction: column;	
			}
			.vue-uploader textarea{
				width: 70%;
				margin-top: 10px;
			}
			.vue-uploader .up{
				margin-top: 5px;
				/* width: 30px ;
				height: 30px; */
			}
			.el-upload--picture-card {
				/* background-color: #fbfdff;
				border: 1px dashed #c0ccda; */
				border-radius: 6px;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				width: 100px;
				height:100px;
				line-height: 100px;
				vertical-align: top;
			}
			.el-upload--picture-card .el-upload-dragger {
				box-sizing: border-box;
				cursor: pointer;
			}

			/*评论框*/
			.coment {
				position: fixed;
				top: 420px;
				margin-left: 30vw ;
				width: 30vw;
				height: 200px;
				border: 1px solid #B2B2B2;
				border-radius: 10px;
				background-color: #fff;
				z-index: 9999999;
				box-shadow: 5px 5px 5px #888888;
			}
			.coment textarea {
				position: relative;
				width: 25vw;
				height: 100px;
				margin: 15px 2.5vw 0;
				padding: 5px 5px;
				border: 1px solid #E4E4E4;
				font-size: 15px;
				z-index: 99999999;
			}
			.coment button {
				width: 25vw;
				margin: 0px 2.5vw 0;
				height: 28px;
				margin-top: 5px;
				font-size: 14px;
				line-height: 28px;
				background-color:  rgb(209, 211, 245);
			}
			.coment button:active {
				background-color: lightblue;
			}
</style>