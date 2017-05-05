<template>
  <div id="app">
    <!-- 头部 -->
    <mt-header fixed title="传智播客11111"></mt-header>
    <!-- 返回按钮-->
    <div class="goback">
      <a @click="goback" v-if="backShow">
        <
      </a>
    </div>
    <!-- 路由占位 -->
    <router-view></router-view>
    <!-- 底部 -->
      <div id="btom">
        <ul>
          <li>
            <router-link to="/Home" >首页</router-link>
          </li>
           <li>
            <router-link to="/news">新闻</router-link>
          </li>
           <li>
            <router-link to="/Shopping">购物</router-link>
          </li>
           <li>
            <router-link to="/Setting">设置</router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      App:'app',
      backShow : false
    }
  },
  methods : {
    goback(){
      this.$router.go(-1)
    }
  },
  watch:{
    //坚挺路由
    '$route':function(newValue,old){
//      console.log(newValue.path)
      if(newValue.path == '/Home'){
        this.backShow = false
      }else{
        this.backShow = true
      }
    }
  }
}
</script>

<style>
#btom{
  width: 100%;
  height: 50px;
  border-top:1px solid #ccc;
  position: fixed;
  bottom: 0
}
#btom ul{
  width: 100%;
  height: 100%;
  display: flex;
  list-style: none;
}
#btom ul li{
  /*float: left;*/
  text-align: center;
  flex:1;
}
.goback{
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 50;
}
.goback a{
  font-size: 18px;
  color: #fff;
  text-decoration: none;
}
</style>
