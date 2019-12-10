<template>
  <div class="">
    品种详情页
  </div>
</template>

<script>
export default {
  name: 'Index',
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
