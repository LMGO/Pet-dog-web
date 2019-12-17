<template>
  <div class="" >
	    <div>
			<m></m>
		</div>	
	    <!------发布入口---->
		<div class="publish">
			<img src="../assets/publish.png" @click="showpubform">
		</div>
		<!------发布输入页面---->
		<div class="pubform" v-show="showpub">
			<span class="tuichu" @click="esc">取消</span>
			<div style="margin:2.5%  45% 0 ;">
				<h4>发贴</h4>
			</div>
			<div class="vue-uploader"  v-show="showpub">
				<!-- <input placeholder="选择帖子类型吧" v-model="type"/> -->
				<select style="width:71%;" name="public-choice" v-model="couponSelected" @change="getCouponSelected">                                        
    				<option :value="coupon.name" v-for="(coupon,index) in couponList" :key="index" >{{coupon.name}}</option>                                    
				</select>
				<textarea placeholder="来说几句吧" type="text" rows="7" maxlength="200" v-model="pubposting_content"/>
				<!-- <section class="upload-func"> 
				</section> -->
				<el-upload
				class="up"
				action=""
				list-type="picture-card"
				:auto-upload="false"
				:multiple="true"
				:limit="3"
				:on-preview="handlePictureCardPreview"
				:on-remove="handleRemove"
				:http-request="uploadFile"
				ref="upload"
				accept="image/jpg"
				>
				<i class="el-icon-plus"></i>
				</el-upload>
				<el-dialog :visible.sync="dialogVisible">
				<img width="80%" :src="dialogImageUrl" alt="">
				</el-dialog>
				<el-button type="primary" @click="subPicForm">发表</el-button>
  			</div>
		</div>
	<div class="box">
		<!-----帖子及猜你喜欢--->
	 <div class="tiezi">
				<div class="tiezilf" >
					<!-- <div class="sousuo"><span>搜索</span><input type="text" placeholder="快速搜索你的狗狗" value=""></div> -->
					<div>
						<h3 style="text-align: center;margin:10px auto">最新发布</h3>
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
										<span style="margin-left: 10px;font-size:18px">{{pub.likeSum}}</span>	
										<img src="../static/talk.png" height="20px" style="margin-left: 10px" alt="" @click="totalk(index)">				
										<span style="margin-left: 10px;font-size:18px">{{pub.commentCount}}</span>
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
// import axios from "axios"
import navbar from './../components/navbar'
export default {
  name: 'Community',
   components:{
    m:navbar
  },
  data(){
	  return{
		showpub:false,//控制发帖框
		myinfo: this.$store.state.myInfo,
		// user_head:this.url+this.$store.state.myInfo.user_head,
		 //发表帖子文字内容
		dialogImageUrl: '',
		dialogVisible: false,
        formDate: ""  ,
		pubposting_content:'',
	 	couponList:[
					{
						name: '金毛犬（黄金猎犬，金毛寻回犬）'
					},
					{
						name: '泰迪（贵宾犬，贵妇犬，卷毛狗）'
					},
					{
						name: '猴犬（阿芬平斯澈犬，猴面梗，艾芬品）'
					},
					{
						name: '阿富汗猎犬（喀布尔犬）'
					},
					{
						name: '万能梗（梗王，河畔犬，宾格利犬，艾里梗）'
					},
					{
						name: '秋田犬（日本秋田犬/日系秋田犬）'
					},
					{
						name: '阿拉斯加雪橇犬（阿拉斯加犬、阿拉斯加马拉缪特、阿拉斯加马拉穆）'
					},
					{
						name: '美国爱斯基摩犬'
					},
					{
						name: '美国猎狐犬'
					},
					{
						name: '美国斯塔福郡梗'
					},
					{
						name: '美国水猎犬'
					},
					{
						name: '安纳托利亚牧羊犬'
					},
					{
						name: '澳大利亚牧牛犬（澳大利亚牧牛犬、昆士兰脚跟犬）'
					},
					{
						name: '其它'
					}
				],
        couponSelected: '',//pet_id选择
		posting:[
			// {
			// 	userHead:this.url+'//images/default1.jpg',
			// 	// user_head:require("../assets/dog1.jpg"),
			// 	userName: '爱宠之家',
			// 	postingTime:'2019-12-8',
			// 	petName:'泰迪（贵宾犬，贵妇犬，卷毛狗）',
			// 	postingContent:'天气真好，适合带狗狗出去散步',
			// 	postingpic:[
			// 		{
			// 			postingPic:require("../assets/dog1.jpg")
			// 		},
			// 		{
			// 			postingPic:this.url+'//images/default1.jpg',
			// 		}

			// 	],
			// 	commentCount:50,
			// 	islike:require('../static/like.png'),//根据true或false赋值
			// 	likeSum:15,
			// 	comment:[
			// 		{
			// 			userHead:require("../assets/dog1.jpg"),
			// 			userName:'么么哒',
			// 			commentContent:'哈哈哈哈哈',
			// 			commentDate:'2019-12-31'
			// 		},
			// 		{
			// 			userHead:require("../assets/dog1.jpg"),
			// 			userName:'么么哒',
			// 			commentContent:'哈哈哈哈哈',
			// 			commentDate:'2019-12-31'
			// 		}
			// 	]
			// }
		],
		talk:false,//控制评论框
		pubcomment_content:''
	
	}
  },
  beforeMount(){
	this.getpost()
	if(!this.$store.state.myInfo.user_id){
		 setTimeout (() => {
          this.$router.replace({
		  path: '/'
        })}, 10)
	}
},
//    created(){
////如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
//             this.couponSelected = this.couponList[0].id;
//          },
  methods:{
	  tolike(i){
		let that = this
		if(that.posting[i].islike == require('../static/like.png') ){
			 that.$axios.post('that.url1',that.$qs.stringify({
              user_id: that.$store.state.myInfo.user_id,
              posting_id: that.posting[i].posting_id,
            })
          )
          .then(res => {
            console.log(res);
			console.log("点赞成功！");
			that.posting[i].islike =  require('../static/like-active.png') ;
            that.posting[i].likecount += 1;
          })
          .catch(err =>{
            console.log(err);
          });
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
				userId: that.$store.state.myInfo.user_id,
				postingId: that.posting[that.index].postingId,
				// time: that.$store.state.getTime(),
				commentContent: that.pubcomment_content
			})
			)
			.then(res =>{
			console.log(res);
			console.log("评论成功！");
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
	  //展示发帖框
	  showpubform(){
		  this.showpub = true
	  },
	  //取消发帖
	  esc(){
		  this.showpub = false;
		  this.couponSelected = ""
		  this.pubposting_content = ""
		  this.$refs.upload.clearFiles();
	  },
	   //获取选中的帖子类型
	  getCouponSelected(){
        console.log(this.couponSelected)
	  },
	  // elementUI上传
      uploadFile(file) {
        this.formDate.append('file', file.file);
	  },
	  //预览图片
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
	  },
      handleRemove(file, fileList) {
        console.log(file, fileList);
	  },
	  //获取用户帖子
	  getpost(){
		let that = this;
		that.$axios.get(that.url1+'/backend/comment/listall',that.$qs.stringify({
            userId: that.$store.state.myInfo.user_id,
		  })
		)
		.then(res => {
			console.log(res)
			that.posting = res.data.postingList
			for(let index in that.posting){
				for(let index1 in that.posting[index].postingpic){
					console.log(that.posting[index].postingpic[index1].postingPic)
					that.posting[index].postingpic[index1].postingPic = that.url+that.posting[index].postingpic[index1].postingPic
				}

				that.posting[index].userHead =  that.url+that.posting[index].userHead

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

	  },
	  //发表
      subPicForm() {
		let that = this
		// let posting_time = that.$store.state.getTime()
		// let pet_id = that.couponSelected
		// let posting_content = that.posting_content
		// console.log(that.couponSelected)
		let posting_id = that.$store.state.getPid()
		console.log(posting_id)
		// console.log(that.$store.state.getTime())
			if( !that.couponSelected){
				that.$message({
								showClose: true,
								message: '请选择帖子类别！',
								type: 'error'
						});
			}else{
				console.log(that.couponSelected)
				that.$axios.get(that.url1+"/backend/comment/chinesetoenglish", {
				params:{
						petName: that.couponSelected
					}
				})
				.then(res=>{
					console.log(res.data)
					console.log("你好呀")
					let pet_chinesename = res.data.petId
					that.$axios.post(this.url+"/post/newpost", that.$qs.stringify({
						posting_id: posting_id,
						user_id: that.$store.state.myInfo.user_id,
						pet_id : pet_chinesename,
						posting_content : that.pubposting_content,
						posting_time: that.$store.state.getTime()
						})
					)
					.then(res => {
		  				console.log(res)
		  				if(res.data.status == 2){
			  				console.log("帖子内容发表成功")
			  	    		that.formDate = new FormData();
				    		that.$refs.upload.submit();
				    		that.formDate.append('posting_id', posting_id);
				    		let config = {
				      			headers: {
				        			'Content-Type': 'multipart/form-data'
				     			}
				    		};
				   		that.$axios.post(this.url+"/post/postingpic", that.formDate, config)
				   		.then(res => {
					   	console.log(res)
					   	if(res.data.status == 2){
						   that.$message({
							showClose: true,
							message: '发表成功！',
							type: 'success'
						});
						that.getpost()
						that.showpub = false;
						that.couponSelected = ""
						that.pubposting_content = ""
						that.$refs.upload.clearFiles();
					    }
					   	else{
						    that.$message({
							showClose: true,
							message: '帖子发表异常！',
							type: 'error'
						});
					   }
					  
						})
						.catch(res => {
					  		console.log(res)
					   		that.$message({
							showClose: true,
							message: '帖子发表异常！',
							type: 'error'
						});
				    	})
					}
					else{
						that.$message({
							showClose: true,
							message: '发表失败！',
							type: 'error'
						});
					}
        		}).catch(res => {
					console.log(res)
					that.$message({
						showClose: true,
						message: '发表失败！',
						type: 'error'
					});
        		})
			})
			.catch(err=>{
				console.log(err)
			})	 
		}	
	},
  }
}
</script>
<style scoped>
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
				margin: 0 10%;
			}
			.tiezi{
				overflow-y: scroll;
				position: absolute;
				background: rgb(198, 223, 238);
				margin-top: 60px;
				padding-top: 10px;
				width: 80%;
				border: 1px solid black;
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
				margin: 0 20px ;
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
				right:150px;
				top: 150px;
				text-align: center;
				z-index: 999;
				border:1px solid #ddd;
				border-radius: 10px;
			}
			.login-lay>p {
				font-size: 20px;
				padding: 5px 10px ;
				color: #222;
				text-align: center;
			}
			.login-lay>input {
				height: 40px;
				/* line-height: 40px; */
				width: 350px;
				font-size: 14px;
				color: #999;
				background: #e4e5e9;
				border: 1px solid #e5e5e5;
				padding-left: 15px;
				margin-bottom: 15px;
				border-radius: 50px;
			}
			.login-lay>form {
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
				opacity: 0;
			}
			#btn{
				margin-right: 5px;
			}
			#text{
				color: red;
			}
			#btn{
				padding: 5px 10px;
				background: #00b0f0;
				color: #FFF;
				border: none;
				border-radius: 5px;
			}
			.dogtype{
				display: inline-block;
				/* width: 150px; */
				padding:0 10px; 
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
				background: rgba(212, 221, 221, 0.796);
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
				top: 170px;
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
			/* .vue-uploader .add {
				width: 80px;
				height: 80px;
				margin-left: 10px;
				float: left;
				text-align: center;
				line-height: 80px;
				border: 1px dashed #ececec;
				font-size: 30px;
				cursor: pointer;
			}


			.vue-uploader .upload-func .progress-bar {
				flex-grow: 1;
			}

			.vue-uploader .upload-func .progress-bar section {
				margin-top: 5px;
				background: #00b4aa;
				border-radius: 3px;
				text-align: center;
				color: #fff;
				font-size: 12px;
				transition: all .5s ease;
			}

			.vue-uploader .upload-func .operation-box {
				flex-grow: 0;
				padding-left: 10px;
			}

			.vue-uploader .upload-func .operation-box button {
				padding: 4px 12px;
				color: #fff;
				background: #007ACC;
				border: none;
				border-radius: 2px;
				cursor: pointer;
			}

			.vue-uploader > input[type="file"] {
				display: none;
			} */
</style>