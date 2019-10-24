<template >
<div class="" style="">
        <ul>
        <li><a class="active" href="#" @click="index()">首页</a></li>
        <li><a href="#" @click="recognition()">识别</a></li>
        <li><a href="#" @click="searchbread()">狗狗画廊</a></li>
        <li><a href="#" @click="community()">狗狗社区</a></li>
        <li style="margin-left:30px;display:inline"><img src="./../assets/2.jpg">
        <span style="">退出</span></li>
        </ul>
</div>
</template>

<script>
export default {
  name: 'menu',
  data(){
    return{
    
    }
    },
    methods:{
        index(){
            setTimeout (() => {
            this.$router.replace({
            path: '/index'
            })}, 500)
        },
        searchbread(){
            setTimeout (() => {
            this.$router.replace({
            path: '/searchbread'
            })}, 500)
        },
        recognition(){
            setTimeout (() => {
            this.$router.replace({
            path: '/recognition'
            })}, 500)
        },
        community(){
            setTimeout (() => {
            this.$router.replace({
            path: '/community'
            })}, 500)
        },
    
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
  cursor: pointer;  
}
li span:hover {
    color: blue; 
}
li a:hover {
    background-color: #111;
    color: blue;
}
li a:active{
    background-color: #111;
    color: rgb(12, 252, 4);
}

</style>