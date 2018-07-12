<template>
		<section class="content-wrapper">
			<div class="banner">
			<p class="location-search">
				<span class="loaction">上海<i class="icon iconfont icon-down"></i></span>
				<span class="search">
					 <router-link to="/search"><i class="icon iconfont icon-search"></i></router-link>
				</span>
			</p>
			<swiper :list="demo03_list" style="width:100%;margin:0 auto;" :aspect-ratio="295/720" dots-position="center"></swiper>
		</div>
		<!--滚动显示-->
		<div class="loaction-search scroll-search" style="display: none;">
				<span class="loaction">上海<i class="icon iconfont icon-down"></i></span>
				<div class="search">
					<i class="icon iconfont icon-search"></i>
					<input type="text" placeholder="搜索明星、演出" class="control" @focus="goSearch"/>
				</div>
		</div>
		
		<div class="advert">
			<img src="../../../static/img/0.png"/>
		</div>
		<section class="hot-movie">
			<header class="title clearfix">
				<h3 class="classify-name">热映影片</h3>
				<a href="javascript:;" class="classify-num">全部<b>76</b>部<i class="icon iconfont icon-arrow-right"></i></a>
			</header>
			 <scroller lock-y :scrollbar-x=false>
	      <ul class="movie-list">
					<li class="list-item" v-for="item in newListShow">
						<div class="item-box">
							<img :src="item.pic" alt="" class="pic"/>
							<span class="tigs">{{item.tigs}}</span>
							<p class="score">观众评分{{item.score}}</p>
						</div>
						<p class="movie-name">{{item.title}}</p>
						<div class="btn-box">
							<a class="buy-movie">购票</a>
						</div>
					</li>
				</ul>
    </scroller>
		</section>
		<div class="hr"></div>
		<section class="hot-movie">
			<header class="title clearfix">
				<h3 class="classify-name">即将上映</h3>
				<a href="javascript:;" class="classify-num">全部<i class="icon iconfont icon-jiantou"></i></a>
			</header>
			 <scroller lock-y :scrollbar-x=false>
	      <ul class="movie-list">
					<li class="list-item" v-for="i in 7">
						<div class="item-box">
							<img src="../../../static/img/movie-pic.jpg" alt="" class="pic"/>
							<span class="tigs">3DMAX</span>
							<p class="score">465656人想看</p>
						</div>
						<p class="movie-name">侏罗纪世界2</p>
						<p class="begin-time">7月19日</p>
					</li>
				</ul>
    </scroller>
		</section>
		<div class="hr"></div>
		<section class="hot-movie hot-article">
			<header class="title clearfix">
				<h3 class="classify-name">文章精选</h3>
			</header>
			<div class="recommend">
			 	<figure>
				  <img src="../../../static/img/article2.png"  class="rec-pic"/>
				  <p class="rec-title">不怕死正面PK《侏罗纪世界2》，这部港片凭什么？</p>
			 		<p class="other"><span class="read-num">阅读&nbsp;346532</span><span class="read-time">13分钟前</span></p>
				</figure>
			 </div>
			 <ul class="movie-article">
			 	<li class="article-item" v-for=" i in 5">
			 		<div class="article-title">
			 			<p class="name">专访《侏罗纪世界2》女主角：演这部电影的时候也很吓人</p>
			 			<p class="other"><span class="read-num">阅读&nbsp;346532</span><span class="read-time">13分钟前</span></p>
			 		</div>
			 		<div class="artice-pic">
			 			<img src="../../../static/img/article1.png"/>
			 		</div>
			 	</li>
			 </ul>
		</section>
		</section>
</template>

<script>
	import { Swiper, Scroller } from 'vux'
	import $ from 'jquery'
	import api from '../../axios/api.js'
	export default {
		name:"Index",
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
			}],
	    newListShow:[]
	   }
  	},
  	mounted(){
  		this.$nextTick(() => {
  			this.domHandel();
  			this.setNewApi();
  		})
  	},
  	methods: {
  		domHandel(){
  			var bh = $(".banner").height();
  			$(window).scroll(function(){
  				var s = $(window).scrollTop();
  				if(s > bh/2){
  					$(".scroll-search").slideDown(500);
  				}else{
  					$(".scroll-search").slideUp(500);
  				}
  			})
  		},
  		goSearch(){
  			this.$router.push('/search')
  		},
  		setNewApi(){
  			api.JH_news("/news/index",'type=top&key=123456')
  				 .then(res=>{
  				 		this.newListShow = res.articles;
  				 })
  		},
  	}
	}
</script>

<style>
</style>