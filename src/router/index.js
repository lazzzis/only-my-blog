import Vue from 'vue'
import Router from 'vue-router'
import Splash from '@/views/Splash'
import Blogs from '@/views/Blogs.vue'
import Article from '@/views/Article.vue'
import Tags from '@/views/Tags.vue'
import Links from '@/views/Links.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'
import nprogress from 'nprogress'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Splash',
    component: Splash
  }, {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  }, {
    path: '/blogs/:slug',
    name: 'Article',
    component: Article,
    props: (route) => route.params
  }, {
    path: '/tags',
    name: 'Tags',
    component: Tags,
    props: (route) => ({tag: ''})
  }, {
    path: '/tags/:tag',
    name: 'Tag',
    component: Tags,
    props: (route) => route.params
  }, {
    path: '/links',
    name: 'Links',
    component: Links
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }]
})

nprogress.configure({ speed: 400 })

router.beforeEach((to, from, next) => {
  nprogress.start()
  next()
})

router.afterEach(route => {
  nprogress.done()
})

export default router
