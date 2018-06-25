<template>
	<div class="container">
		<div class="banner">
	<swiper :list="demo03_list" auto style="width:80%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
		</div>
		<div class="advert"></div>
		<section class="hot-movie">
			<header class="title">
				<h3>热映影片</h3>
				<span>全部<b>76</b>部<i class="icon iconfont icon-up"></i></span>
			</header>
		</section>
		<t-menu></t-menu>
	</div>
</template>
<script>
	import TMenu from './common/Menu.vue'
	import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
	export default {
		 components: {
	    TMenu,
	    Swiper,
	  },
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
  	}
	}
</script>
<style>

</style>