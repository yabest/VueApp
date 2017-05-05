<template>
	<div class="tmpl">
		<!-- 头部 -->
		<div class="header">
			<router-link  class="back" to="/Home">返回</router-link>
			<h3>图片列表</h3>
		</div>
		<!-- 内容列表 -->
		<div class="con_list">
			<ul>
				<li v-for="(item,index) in newsList" :key="index">
					<router-link v-bind="{to:'/newsListCon/'+item.id}">
            <div class="imgs"></div>
            <div class="con_text">
              <p class="title_con">{{item.title}}</p>
              <div>
                <p>{{item.data}}</p>
                <p>{{item.clicked}}</p>
              </div>
            </div>
          </router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				msg : '这里是新闻详情',
        newsList : [
          {title:'常州工程职业技术学院',data:'2017-5-4',clicked:'点击8',id:1},
          {title:'常州工程职业技术学院信息学院',data:'2017-2-4',clicked:'点击1',id:2},
          {title:'常州工程职业技术学院检核学院',data:'2017-4-4',clicked:'点击2',id:3},
          {title:'常州工程职业技术学院傻逼老师',data:'2017-7-4',clicked:'点击2423',id:4},
          {title:'常州工程职业技术学院操他妈',data:'2017-1-4',clicked:'点击4444',id:5},
          {title:'常州工程职业技术学院。。。。',data:'2017-5-4',clicked:'点击123123',id:6}
        ]
			}
		}
	}
</script>
<style scoped>
	.header{
		height: 40px;
		border-bottom: 1px solid #ccc;

	}
	.header .back{
		text-decoration: none;
		display: block;
		float: left;
		width: 100px;
		color:#26a2ff;
		height: 100%;
		padding-left: 15px;
		line-height: 40px;
	}
	h3{
		font-size: 18px;
	    font-weight: 100;
	    line-height: 40px;
	   	text-align: center;
	   	margin:0 115px;
	}

	.con_list{
    clear: both;
    width: 100%;
    height: 530px;
    overflow: scroll;
	}
	.con_list ul{
		list-style: none;
		width: 100%;
		height: 100%;
	}
	.con_list ul li{
		height: 90px;
	}
	.con_list ul li .imgs{
		width: 25%;
		height: 98%;
		float: left;
		background: #26a2ff;
	}
	.con_list ul li .con_text{
		float: right;
		width: 74%;
		height: 98%;
	}
	.con_list ul li .con_text .title_con{
		font-size: 20px;
		color:#26a2ff;
		height: 60px;
		line-height: 50px;
    width: 100%;
    overflow: hidden;
	}
	.con_list ul li .con_text div{
		display: flex
	}
	.con_list ul li .con_text div p{
		flex:1 ;

	}
</style>
