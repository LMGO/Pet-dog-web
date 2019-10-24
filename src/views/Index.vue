<template>
  <div class="">
    <m></m>
  </div>

  
</template>

<script>
import menu from './../components/menu'
export default {
  name: 'Index',
  components:{
    m:menu
  },
  data(){
    return{
      // activeIndex: '1',
      

// isSelect: '银行',
// footNav: [{title: '银行', url: '../../../static/baiduMap/23@2x.png', url1: '../../../static/baiduMap/22@2x.png'},
//  {title: '公交 ', url: '../../../static/baiduMap/11@2x.png', url1: '../../../static/baiduMap/10@2x.png'},
//  {title: '地铁 ', url: '../../../static/baiduMap/13@2x.png', url1: '../../../static/baiduMap/12@2x.png'},
//  {title: '教育 ', url: '../../../static/baiduMap/15@2x.png', url1: '../../../static/baiduMap/14@2x.png'},
//  {title: '医院 ', url: '../../../static/baiduMap/17@2x.png', url1: '../../../static/baiduMap/16@2x.png'},

// ]
//   }
// },
//   methods:{
//     selectMapNav (title) {
//  this.isSelect = title }

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
</style>