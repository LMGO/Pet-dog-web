<template >
<div class="banner">
        <ul>
        <li></li>
        <li><router-link to="/index">首页</router-link></li>
        <li><router-link to="/recognition">识别</router-link></li>
        <li><router-link to="/searchbread">狗狗画廊</router-link></li>
        <li><router-link to="/community">社区</router-link></li>
        <li><router-link to="/me">我的</router-link></li>
        <li style="margin-left:30px;display:inline"><img :src="user_head">
        <span @click="unlogin()">退出</span></li>
        <li></li>
        </ul>
</div>
</template>

<script>
export default {
  name: 'navbar',
  data(){
    return{
      user_head:this.url+this.$store.state.myInfo.user_head
    }
    },
    methods:{   
    unlogin(){
        this.$message({
          showClose: true,
             message: '退出登录！',
                type: 'success'
                });
                setTimeout (() => {
                this.$router.replace({
                 path: '/'
                      })
                }, 500)
                this.$store.commit('setmyInfo','');//更新myInfo
    }
 }
}
</script>
<style lang="less" scoped>
.banner{
  position: fixed;
  width: 100vw;
  background-color: rgb(88, 87, 87);
  height:50px;
  margin-top: 0;
  top: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.782);
  box-shadow: 5px 5px 5px #888888;
  z-index:2;
}
 .banner ul {
    list-style-type: none;
    margin-top: 0;
    overflow: hidden;
    background-color: #333;
    position: fixed;
    width: 100%;
    display: flex;
    height: 50px;
    box-shadow: 5px 5px 5px #888888;
    z-index:9999;
}

li {
    flex: 1;
    display:inline-block
}

li a{
    font-size: 20px;
    top:15px;
    display: block;
    color: white;
    text-align: center;
    padding: 15px 10px;
    text-decoration: none;
}
.router-link-active{
      color: blue;
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
  cursor: pointer;  
}
li span:hover {
    color: blue; 
}
li a:hover {
    background-color: #111;
    color: rgb(12, 252, 4);
}
li a:active{
    background-color: #111;
    color: rgb(4, 29, 252);
}

</style>