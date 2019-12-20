<template>
  <div class="width:100%">
       <div>
          <m></m>
       </div>
				 <!-- <h1>狗狗的画廊</h1> -->
		<div class="sousuo">
           <span>搜索</span>
           <input  type="text" placeholder="快速搜索你的狗狗" value="" >
        </div>
		<div style="width:90%；margin：0 10%">
			<div >
					<div style="float: left;width: 65%;">
						 <div class="qiutian" style="width:100%;position: relative;">
							 <img src="../../public/秋田犬.jpg" @mouseenter="enter(1)" @mouseleave="leave()" width="100%" height="500px" />
							 <span style="position: absolute; top:200px; left: 20px;z-index:2;font-size:25px;color:white" v-show="seen&&current==1"><i style="color:yellow">日本秋田犬&nbsp;:&nbsp;&nbsp;</i>日本国犬，是日本犬的一种，是日本犬中大型犬种之一。
							 在日本是家庭宠物犬。毛发颜色醒目清晰，斑点颜色和谐。毛发为双层毛，质地柔软浓密，毛发比较短。最佳的体型为：雄性犬身高在66-73厘米；雌性犬身高在60-67厘米，体重一般在34-50公斤之间。秋田犬的性格沉着温顺，感觉锐敏，身强力壮，勇敢，易
							 训练。秋田犬的身体十分的强健、健壮。秋田犬非常的勇敢，很容易被人驯服，对主人也是极为忠诚。它拥有丰富的情感，它最擅长在雪地里寻找猎物。秋田犬跑跳的步伐轻快有力，步伐长度中等，背部有力，稳定，并且保持水平。</span>
						 </div>
						 <div>
							 <div style="float: left;width: 50%;position: relative;margin-top:10px;">
								<img src="../../public/美国爱斯基摩犬.jpg" @mouseenter="enter(4)" @mouseleave="leave()" width="100%"  height="400px" />
								<span style="position: absolute; top: 15px; left: 20px;z-index:2;font-size:20px;color:white" v-show="seen&&current==4"><i style="color:yellow">美国爱斯基摩犬&nbsp;:&nbsp;</i>美国爱斯基摩犬是波美拉尼亚丝毛犬家族中的一员，也有许多养犬爱好
								者更愿意将其归属为北欧品种。美国爱斯基摩犬主要起源于欧洲波美拉尼亚犬种，包括白色德国波美拉尼亚丝毛犬，白色荷兰卷尾犬、白色波美拉尼亚犬和白色意大利波美拉尼亚丝毛犬。二战以后，西海岸的犬培育者甚至将日本波美拉尼亚犬的血统加入到爱斯基摩犬当中。
								 在19世纪的美国，德国移民社区里经常可以见到小型的白色波美拉尼亚类型的犬，它们同主人一道从欧洲迁离，在到达美国后这些犬在本国不再被认可，它们便被称作美国爱斯基摩犬。</span>
							 </div>
							 <div style="float: right;width: 49%;position: relative;margin-top:10px;margin-left:5px;">
								<img src="../../public/金毛.jpg" @mouseenter="enter(3)" @mouseleave="leave()" width="100%"  height="400px" />
								<span style="position: absolute; top: 15px; left: 20px;z-index:2;font-size:20px;color:white" v-show="seen&&current==3"><i style="color:yellow">金毛&nbsp;:&nbsp;&nbsp;</i>金毛寻回犬（英语：Golden Retriever）最初的名字是苏俄追踪
								犬，后来加入佛乐寻猎物犬种，寻血猎犬种，水猎鹬犬种的基因。配种的结果产生了此天生具备猎物取回能力，善于追踪及具有敏锐嗅觉的犬种。1908年首次展出以后，深受人们的青睐，它是最常见的家犬之一。
								金毛的独特之处在于它讨人喜欢的性格，是属于匀称、有力、活泼的一个犬种，特征是稳固、身体各部位配合合理，腿既不太长也不笨拙，表情友善，个性热情、机警、自信而且不怕生。金毛犬最早是一种寻回猎犬。现在大多作为导盲犬与宠物狗。
								金毛犬在犬类智商排行榜上排名第四。对小孩子或者婴儿十分友善。  </span> 
							 </div>
						</div>
					 </div>
					 <div style="width: 34%;float: right;position: relative;margin-left:10px;">
						<img src="../../public/哈士奇.jpg"  @mouseenter="enter(2)" @mouseleave="leave()" width="100%" height="900px" />
						<span style="position: absolute; top:300px; left: 20px;z-index:2;font-size:25px;color:white" v-show="seen&&current==2"><i style="color:yellow">哈士奇&nbsp;:&nbsp;&nbsp;</i>西伯利亚雪橇犬(俄语:Сибирский хаски，英语:Siberian husky)，常见
						别名哈士奇，昵称为二哈。西伯利亚雪橇犬体重介于雄犬20-27公斤，雌犬16-23公斤，身高大约雄犬肩高53-58厘米，雌犬51-56厘米，是一种中型犬。
						西伯利亚雪橇犬是原始的古老犬种，在西伯利亚东北部、格陵兰南部生活。哈士奇名字的由来，是源自其独特的嘶哑声，进入大陆和家庭的哈士奇，都已经没有了这种极端的性格，比较温顺，是一种流行于全球的宠物犬。与金毛犬、拉布拉多并列为三大无攻击型犬类。
						被世界各地广泛饲养，并在全球范围内组织举办大量哈士奇犬种的赛事。</span> 
					 </div>
			</div>
			<div >
				<div style="width:50%;float: left;position: relative;margin-top:10px;">
						 <img src="../../public/美国猎狐犬.jpg"  @mouseenter="enter(5)" @mouseleave="leave()" width="100%" height="500px" />
						 <span style="position: absolute; top:100px; left: 20px;z-index:2;font-size:25px;color:white" v-show="seen&&current==5"><i style="color:yellow">美国猎狐犬&nbsp;:&nbsp;&nbsp;</i>美国猎狐犬，顾名思义起源于美国，它的前腿直，具有正确的骨量。胶骨
						 短而直。美国猎狐犬足爪象狐狸。脚垫丰满而坚硬。精力旺盛，体格拥有魅力，故具有较强的破坏力，不易饲养为伴侣犬。。</span>
				</div>
				<div style="width:49%;float: right;position: relative;margin-top:10px;">
					<img src="../../public/澳洲牧牛犬.jpg"  @mouseenter="enter(6)" @mouseleave="leave()" width="100%" height="500px" />
					<span style="position: absolute; top:100px; left: 20px;z-index:2;font-size:25px;color:white" v-show="seen&&current==6"><i style="color:yellow">澳洲牧牛犬&nbsp;:&nbsp;&nbsp;</i>澳洲牧牛犬精力充沛、耐力持久且多才多艺，在澳洲内地，澳洲牧牛犬主
					要从事长距离引导牛群的用途，还需适应荒郊野外的生活环境，以最精确省力的方法控制牛群。</span>
				</div>	
			</div>
			<div >
				<div style="float: left;width: 65%;margin-top:10px;">
					<div class="qiutian" style="width:100%;position: relative;">
						<img src="../../public/阿拉斯加雪橇犬.jpg" @mouseenter="enter(1)" @mouseleave="leave()" width="100%" height="500px" />
						<span style="position: absolute; top:200px; left: 20px;z-index:2;font-size:25px;color:white" v-show="seen&&current==1"><i style="color:yellow">阿拉斯加雪橇犬&nbsp;:&nbsp;&nbsp;</i>阿拉斯加雪橇犬也叫阿拉斯加犬，是最古老的极地雪橇犬之一，它
						的名字取自爱斯基摩人的伊努伊特族的一个叫做马拉缪特的部落。这个部落生活在阿拉斯加西部一个叫做科策布(Kotzebue)的岸边。成年阿拉斯加犬有着安静、高雅的气质，对主人非常忠心。</span>
					</div>
					<div>
						<div style="float: left;width: 50%;position: relative;margin-top:10px;">
							<img src="../../public/美国水猎犬.jpg" @mouseenter="enter(4)" @mouseleave="leave()" width="100%"  height="400px" />
							<span style="position: absolute; top: 50px; left: 20px;z-index:2;font-size:25px;color:white" v-show="seen&&current==4"><i style="color:yellow">美国水猎犬&nbsp;:&nbsp;</i>美国水猎犬在何时、何地及怎样的起源依旧没有一个明确的定义。
							然而，美国许多地方的猎人早就赏识本品种的优点了。由于这一品种在中西部首先被认可并大量繁殖，所以现在认为这种犬主要是在中西部发展进化而来。尽管这一说法并非是绝对的，但结合毛色、被毛和符合品种标准的体形外构成，普遍认为爱尔兰水猎犬、
							卷毛寻猎犬以及近来的老式英国水猎犬是其祖先。</span>
							</div>
						<div style="float: right;width: 49%;position: relative;margin-top:10px;margin-left:5px;">
							<img src="../../public/万能梗.jpg" @mouseenter="enter(3)" @mouseleave="leave()" width="100%"  height="400px" />
							<span style="position: absolute; top: 20px; left: 20px;z-index:2;font-size:20px;color:white" v-show="seen&&current==3"><i style="color:yellow">万能梗&nbsp;:&nbsp;&nbsp;</i>万能梗是梗类特大型梗，名字取自其原产地约克夏郡的"Airedale"溪谷。
							强壮且具有活力，愿意游泳，尤其喜欢在水中生活。 万能梗是水獭犬与已经绝种的黑褐梗配种改良产生的品种。通常被用来猎水獭，熊，狼，山猪，雄鹿等。一次世界大战时，首次被英国陆军当作守卫及传令任务的军犬使用。曾有一只名叫杰克的万能梗， 因在战场上
							勇敢，死后荣获维多利亚十字勋章。万能梗忠诚友善，是较理想的家庭守卫犬，也有较顽固的一面，饲养者要以严格的态度来训练和关心它。 万能梗的优点是不脱毛。属于活力旺盛的狗，每日必须坚持长距离散步。</span> 
						</div>
					</div>
				</div>
				<div style="width: 34%;float: right;position: relative;margin-left:10px;margin-top:10px;">
					<img src="../../public/美国斯塔福郡梗.jpg"  @mouseenter="enter(2)" @mouseleave="leave()" width="100%" height="900px" />
					<span style="position: absolute; top:500px; left: 20px;z-index:2;font-size:20px;color:white" v-show="seen&&current==2"><i style="color:yellow">美国斯塔福郡梗&nbsp;:&nbsp;&nbsp;</i>美国斯塔福梗（American Staffordshire Terrier）斯塔福梗是
					由斗牛犬和梗杂交而来的，最初叫做斗牛犬、牛梗杂交犬，有时被称为斗犬或斗牛梗。后来，在英格兰被命名为斯塔福斗牛梗。 美国斯塔福梗的标准中体重的范围较大，但应该与体形成比例。这种犬以其体形，结实匀称，头部强壮有力，躯体肌肉发达以及勇敢坚强而
					闻名。 美国斯塔福硬给人的总体印象是：体形有力，紧凑，肌肉发达，而且活泼、热情，喜欢生活的环境。外形粗壮，但腿不宜太长，与外形不和谐。很有勇气。</span> 
				</div>
		</div>
		<div >
			<div style="width:100%;height:600px;float: left;position: relative;margin-top:10px;">
				<img src="../../public/？？.jpg"  @mouseenter="enter(6)" @mouseleave="leave()" width="100%" height="100%" />
				<span style="position: absolute; top:80px; left: 40%;z-index:2;font-size:50px;color:black" v-show="seen&&current==6">更多狗狗敬请期待！！</span>
			</div>	
		</div>
	</div>
</div>
</template>

<script>
import navbar from './../components/navbar'
export default {
  name: 'searchbread',
  components:{
    m:navbar
  },
  data(){
	return{
		seen:false,
    	current:0
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
   enter(index){
    this.seen = true;
    this.current = index;
   },
   leave(){
    this.seen = false;
    this.current = null;
   }
  }
}
</script>
<style scoped>
      		.sousuo{
        		margin: 100px 0 20px;
				text-align: center;
			}
			.sousuo input{
				width: 520px;
				height: 40px;
				line-height: 36px;
				border: 1px solid #dddddd;
				font-size: 12px;
				color: #999999;
				background: rgb(238,238,238);
				border-radius: 20px;
				margin: 0 10px 30px;
				padding: 0px 6px;
			}
</style>