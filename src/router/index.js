import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home/Home.vue'
import Shopping from '@/components/Shopping/shopping.vue'
import news from '@/components/news/news.vue'
import Setting from '@/components/Setting/setting.vue'
import newsList from '@/components/news/newsList.vue'
import newsListCon from '../components/news/newsListCon.vue'

Vue.use(Router);

export default new Router({
	linkActiveClass : 'mui-active',
  routes: [
  	{
      path: '/',
      name: '',
      redirect : '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/Shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/newsList',
      name: 'newsList',
      component: newsList
    },
    {
      path: '/newsListCon/:id',
      name: 'newsListCon',
      component: newsListCon
    }
  ]
})
