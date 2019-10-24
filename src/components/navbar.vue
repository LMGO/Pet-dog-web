<template >
<div class="" style="">
        <ul>
        <li><router-link to="/index">首页</router-link></li>
        <li><router-link to="/recognition">识别</router-link></li>
        <!-- <li><a href="#" @click="recognition()">识别</a></li> -->
        <li><router-link to="/searchbread">狗狗画廊</router-link></li>
        <li><router-link to="/community">社区</router-link></li>
        <li style="margin-left:30px;display:inline"><img src="./../assets/2.jpg">
        <span @click="unlogin()">退出</span></li>
        </ul>
</div>
</template>

<script>
export default {
  name: 'navbar',
  data(){
    return{

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
    }
 }
}
</script>
<style lang="less" scoped>
ul {
    list-style-type: none;
    margin-top: 0;
    overflow: hidden;
    background-color: #333;
    position: fixed;
    width: 100%;
    display: flex;
    height: 50px;
    box-shadow: 5px 5px 5px #888888;
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
    padding: 15px 15px;
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