import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Trending from '@/components/Trending'
import addBlog from '@/components/addBlog'
import Article from '@/components/Article'
import Preview from '@/components/Preview'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/trending',
      name: 'Trending',
      component: Trending
    },
    {
      path: '/addstory',
      name: 'AddStory',
      component: addBlog
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    }
  ]
})
