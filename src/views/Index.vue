<template>
<div>
      <m></m>
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
									<img src="../assets/dog4.jpg"   alt="" name="0">
									<img src="../assets/dog5.jpg"   alt="" name="1">
									<img src="../assets/dog6.jpg"   alt="" name="2">
									<img src="../assets/dog7.jpg"   alt="" name="3">
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
									<img src="../assets/dog9.jpg"   width="100%" height="400px" />
								</div>
								<div>
									<div style="float: left;width: 50%;">
										<img src="../assets/dog7.jpg"   width="100%"  height="400px" />
									</div>
									<div style="float: right;width: 50%;">
										<img src="../assets/dog8.jpg"   width="100%"  height="400px" />
									</div>
								</div>
							</div>
							<div style="width: 30%;float: right;">
								<img src="../assets/dog3.jpg"   width="100%" height="800px" />
							</div>
						</div>
						<div >
							<div style="width: 70%;float: left;">
								<img src="../assets/dog5.jpg"   width="100%" height="300px" />
							</div>
					<div style="width: 30%;float: left;margin: 0 0 30px;">
					<img src="../assets/dog13.jpg"   width="100%" height="300px"  />
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
import navbar from './../components/navbar'
export default {
  name: 'Index',
  components:{
    m:navbar
  },
  data(){
    return{

 }
},
beforeMount(){
	if(!this.$store.state.myInfo.user_id){
		 setTimeout (() => {
          this.$router.replace({
		  path: '/'
        })}, 10)
	}
},
 methods:{
    index(){
        setTimeout (() => {
          this.$router.replace({
          path: '/index'
        })}, 1500)
    },
    searchbread(){
        setTimeout (() => {
          this.$router.replace({
          path: '/searchbread'
        })}, 1500)
    }
    
 }
}
</script>
<style lang="less" scoped>
ul {
    list-style-type: none;
    top: 0;
    overflow: hidden;
    background-color: #333;
    position: fixed;
    width: 100%;
    display: flex;
    height: 50px;
}

li {
    flex: 1;
    display:inline-block
}

li a {
    font-size: 20px;
    top:15px;
    display: block;
    color: white;
    text-align: center;
    padding: 15px 15px;
    text-decoration: none;
}

li img{
  width:40px;
  height:40px;
  margin-top:5px;
  margin-left: 20px;
  border-radius: 20px;
}
li span{
  font-size: 15px;
  color: white;
  margin-left: 20px;  
}
li a:hover {
    background-color: #111;
}

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