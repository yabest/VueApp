<template>
	<div class="subtpl">
		<mt-swipe :auto="2000">
	      <mt-swipe-item v-for="(item,index) in imgList" :key="index">
	        <img class="imgs" :src="item.img" alt="">
	      </mt-swipe-item>
    	</mt-swipe>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		props:['imgList']
	}
</script>
<style scoped>
	.subtpl{
		height: 300px;
	}
	.imgs{
		width: 100%;
		height: 100%
	}
</style>