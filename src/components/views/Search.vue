<template>
		<section class="content-wrapper search-wrapper">
		<div class="search-form">
				<div class="search">
					<i class="icon iconfont icon-search"></i>
					<input type="text" placeholder="搜索明星、演出" class="control"/>
				</div>
				<span @click="goBack">取消</span>
		</div>
		</section>
</template>

<script>
	import { Swiper, Scroller } from 'vux'
	import $ from 'jquery'
	export default {
		name:"Search",
		components: {
	    Swiper,
	    Scroller
	  },
	  data () {
	    return {
	      demo03_list:[{
			  url: 'javascript:',
			  img: '/static/img/banner1.png',
			},{
			  url: 'javascript:',
			  img: '/static/img/banner2.png',
			},{
			  url: 'javascript:',
			  img: '/static/img/banner3.png',
			}]
	    }
  	},
  	mounted(){
  		this.$nextTick(() => {
  			this.domHandel();
  		})
  	},
  	methods: {
  		goBack(){
  			window.history.length > 1
	        ? this.$router.go(-1)
	        : this.$router.push('/')
  		},
  	}
	}
</script>

<style>
</style>