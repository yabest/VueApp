<template>
  <div class="tpl">
    <div class="submittitle">
      评论
    </div>
    <div class="submitarea">
      <textarea ref="postcontent" class="textarea" placeholder="请输入评论内容"></textarea>
      <mt-button type="primary" size="large" @click="postComments">发表</mt-button>
    </div>

    <div class="commenttitle">
      评论列表
    </div>
    <div class="commentlist">
      <div class="outwarp" v-for="(item,index) in commentList" :key="index">
        <div class="content" v-text="item.content"></div>
        <div class="user" v-text="item.user_name"></div>
        <div class="time">{{item.time}}</div>
      </div>
      <!--<div class="outwarp">-->
        <!--<div class="content" >这是一条评论这是一条评论</div>-->
        <!--<div class="user">匿名用户</div>-->
        <!--<div class="time">2018-292-12</div>-->
      <!--</div>-->

    </div>

    <!--加载跟多按钮-->
    <mt-button class="more" type="danger" size="large" plain @click="getmore">加载更多</mt-button>

  </div>

</template>

<script>
  import { Toast } from 'mint-ui'; //导入mint-ui中的提示组件
  export default {
      data(){
      return{
          commentList : [],
          pageindex : 1
      }
    },
  created(){
    this.getComments(this.pageindex);
  },
    methods : {
      //获取评论
      getComments(pageindex){
        let url  = 'http://webhm.top:8899/api/getcomments/'+this.articl+'?pageindex='+pageindex;
        this.$http.get(url).then(res=>{
          //由于我们要实现加载更多功能，所以这里不应该使最新数据覆盖数组，而是将最新数据追加到comments中
          //this.comments = res.body.message;
          //这种写法可能存在一个问题不会及时刷新页面
//                    this.comments = this.comments.concat(res.body.message);

            //这是给加载跟多使用的
            this.commentList = this.commentList.concat(res.body.message);

        },res=>{
          console.log('获取评论数据失败');
        });
      },
      //提交评论
      postComments(){
        let url = 'http://webhm.top:8899/api/postcomment/'+this.articl;
        let contentTxt = this.$refs.postcontent.value;
        this.$http.post(url,{content:contentTxt},{emulateJSON:true}).then(
          res=>{

            //利用mint-ui中的Toast 提示用户提交成功
            Toast('评论提交成功');

            //重新加载评论
            this.getComments(this.pageindex,true);

            //清空文本空中的值
            this.$refs.postcontent.value = '';
        },res=>{
          console.log('失败'
          )}
        )
      },
      getmore(){
        this.pageindex++;
        this.getComments(this.pageindex);

      }
    },
      props:['articl']
  }
</script>

<style>
  .tpl{
    height: 500px;
    overflow: scroll;
  }
  .textarea{
    width: 97%;
    height: 110px;
    margin: 5px;
    border: 1px solid #ccc;
    font-size: 21px;
  }
  .submittitle,.commenttitle{
    font-weight: 700;
    font-size: 21px;
    border-bottom: 1px solid rgba(92,92,92,0.4);
    padding-bottom: 15px;
  }
  .submitarea{
    margin-top: 5px;
  }
  .commenttitle{
    margin-top: 10px;
    border-top: 1px solid rgba(92,92,92,0.4);
    padding: 10px 0px 10px 0;
  }
  .outwarp{
    border-bottom: 1px solid rgba(92,92,92,0.4);
    clear: both;
    max-height:300px;
    overflow-y: auto;
    padding: 5px;
  }
  .user,.time{
    width: 50%;
    float: left;
    color: #0094ff;
  }
  .time{
    float: right;
  }
</style>
