<template>
  <div class="">
    <m></m>
    <div class="backimg">
      <img src="./../assets/meback.jpg" style="width:100%;">

    </div>
  </div>
</template>

<script>
import navbar from './../components/navbar'
export default {
  name: 'Community',
   components:{
    m:navbar
  }
}
</script>
<style scoped>
.backimg{
  height:30vh;
  overflow: hidden;
}
</style>