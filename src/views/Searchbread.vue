<template>
  <div class="">
    <m></m>
    <div>狗狗</div>
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

  },
  beforeMount(){
	if(!this.$store.state.myInfo.user_id){
		 setTimeout (() => {
          this.$router.replace({
		  path: '/'
        })}, 10)
	}
},
}
</script>
