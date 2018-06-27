import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Movie from '@/components/views/Movie'
import Index from '@/components/views/Index'
import Cinema from '@/components/views/Cinema'
import Show from '@/components/views/Show'
import User from '@/components/views/User'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        { 
        	path: '/', 
        	name: 'Index', 
        	component: Index 
        },
        { 
        	path: '/index', 
        	name: 'Index', 
        	component: Index 
        },
        { 
        	path: '/movie', 
        	name: 'Movie', 
        	component: Movie 
        },
        { 
        	path: '/cinema', 
        	name: 'Cinema', 
        	component: Cinema 
        },
        { 
        	path: '/show', 
        	name: 'Show', 
        	component: Show 
        },
        { 
        	path: '/user', 
        	name: 'User', 
        	component: User 
        },
      ]
    },
  ]
})
