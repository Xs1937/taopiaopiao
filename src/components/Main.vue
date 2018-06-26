<template>
	<div class="container">
		<div class="banner">
			<swiper :list="demo03_list" style="width:100%;margin:0 auto;" :aspect-ratio="295/720" dots-position="center"></swiper>
		</div>
		<div class="advert">
			<img src="../../static/img/0.png"/>
		</div>
		<section class="hot-movie">
			<header class="title clearfix">
				<h3 class="classify-name">热映影片</h3>
				<a href="javascript:;" class="classify-num">全部<b>76</b>部<i class="icon iconfont icon-jiantou"></i></a>
			</header>
			 <scroller lock-y :scrollbar-x=false>
	      <ul class="movie-list">
					<li class="list-item" v-for="i in 7">
						<div class="item-box">
							<img src="/static/img/movie-pic.jpg" alt="" class="pic"/>
							<span class="tigs">3DMAX</span>
							<p class="score">观众评分9.5</p>
						</div>
						<p class="movie-name">侏罗纪世界2</p>
						<div class="btn-box">
							<a class="buy-movie">购票</a>
						</div>
					</li>
				</ul>
    </scroller>
		</section>
		
		<t-menu></t-menu>
	</div>
</template>
<script>
	import TMenu from './common/Menu.vue'
	import { Swiper, Scroller } from 'vux'
	export default {
		 components: {
	    TMenu,
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
  	}
	}
</script>
<style>

</style>