<template>
	<div class="tmpl">		
		<div class="box">
		<!-- 轮播图 -->
		<mt-swipe :auto="2000">
			<mt-swipe-item v-for="(item,index) in imgList" :key="index">
				<img class="imgs" :src="item.img" alt="">
			</mt-swipe-item>			
		</mt-swipe>

		<!-- 九宫格 -->
		<div class="nine">
			<ul>
				<li>
					<router-link to="/newsList" >
						<span></span>
						<p>新闻详情</p>
					</router-link>
				</li>
				<li>
					<router-link to="/newsList" >
						<span></span>
						<p>新闻详情</p>
					</router-link>
				</li>
				<li>
					<router-link to="/newsList" >
						<span></span>
						<p>新闻详情</p>
					</router-link>
				</li>
				<li>
					<router-link to="/newsList" >
						<span></span>
						<p>新闻详情</p>
					</router-link>
				</li>
				<li>
					<router-link to="/newsList" >
						<span></span>
						<p>新闻详情</p>
					</router-link>
				</li>
				<li>
					<router-link to="/newsList" >
						<span></span>
						<p>新闻详情</p>
					</router-link>
				</li>
			</ul>
		</div>
			 

		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg1 : 'Home',
				imgList : [
					{img : 'https://attachment-center.boxuegu.com/data/picture/online/2017/03/17/11/f8e61a40c400412d895f1b7d94761cac.png'},
					{img : 'https://attachment-center.boxuegu.com/data/picture/online/2017/04/14/19/085e30e6bd5a4e6ca3d44dbd94aab955.jpg'},
					{img : 'https://www.boxuegu.com/web/images/130/mystudy_bg.png'}
				]
			}
		}
	}
</script>
<style scoped>
*{
	margin: 0;
	padding: 0;
}
	.box{
		height: 300px;
	}
	.imgs{
		width: 100%;
		height: 100%
	}
	.nine ul{
		list-style: none;
		width: 100%;
		height: 300px;
		/*display: flex;*/
		/*flex-wrap:row*/
	}
	.nine ul li {
		width: 125px;
		height: 100px;
		float: left;
		text-align: center;
	}
	.nine ul li span{
		display: block;
		width:60px;
		height: 60px;
		background: #26a2ff;
		border-radius: 30px;
		margin:0 auto;
	}
</style>