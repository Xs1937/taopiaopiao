<template>
	<div class="show-wrapper">
		<header class="show-header">
			<h2 class="show-title">演出</h2>
			<div class="loaction-search">
				<span class="loaction">上海<i class="icon iconfont icon-down"></i></span>
				<div class="search">
					<i class="icon iconfont icon-search"></i>
					<input type="text" placeholder="搜索明星、演出" class="control" @focus="goSearch"/>
				</div>
		</div>
		</header>
		
		<section class="show-content">
			<div class="swiper-box">
				<tab :line-width="2" custom-bar-width="30px" v-model="index">
				<tab-item :selected="actived === index" v-for="(item, index) in navTab" @click="actived = index" :key="index">{{item}}</tab-item>
			</tab>
			</div>
			<div class="recommend" v-show="index===0">
				<swiper :list="demo03_list" style="width:100%;margin:0 auto;" :aspect-ratio="295/720"></swiper>
				<div class="must-see">
					<h2 class="box-title">必看清单</h2>
					<ul class="menu-list">
						<li class="must-item" v-for="i in 6">
							<div class="item-pic">
								<img src="../../../static/img/movie-pic2.jpg" alt="" />
								<span class="num">{{i}}</span>
							</div>
							<h3 class="item-name">陈佩斯戏剧作品展：戏台</h3>
							<p class="item-info">10月·当代舞台喜剧的有一座高峰</p>
						</li>
					</ul>
				</div>
				<div class="hot-recommend">
					<div class="hot-header">
					<h2 class="box-title">热门推荐</h2>
					<span class="order-filter">推荐排序<i class="icon iconfont icon-down"></i></span>
					</div>
					<ul class="hot-list">
						<li class="hot-item" v-for="i in 6">
							<div class="item-pic">
								<img src="../../../static/img/movie-pic.jpg" alt="" />
								<span class="num">￥298起</span>
							</div>
							<h3 class="item-name">陈佩斯戏剧作品展：戏台</h3>
							<p class="item-info">10月·当代舞台喜剧的有一座高峰</p>
						</li>
					</ul>
				</div>
			</div>
		<!--演唱会-->
		<div class="recommend" v-show="index===1">
				<div class="hot-recommend concert-list">
					<div class="hot-header concert-header">
					<span class="loaction">全部时间<i class="icon iconfont icon-down"></i></span>
					<span class="loaction">推荐排序<i class="icon iconfont icon-down"></i></span>
					</div>
					<ul class="hot-list">
						<li class="hot-item" v-for="i in 6">
							<div class="item-pic">
								<img src="../../../static/img/movie-pic3.jpg" alt="" />
								<span class="num">￥298起</span>
							</div>
							<h3 class="item-name">陈佩斯戏剧作品展：戏台</h3>
							<p class="item-info">10月·当代舞台喜剧的有一座高峰</p>
						</li>
					</ul>
				</div>
			</div>
			<!--歌剧话剧-->
			<div class="recommend" v-show="index===2">
				<div class="hot-recommend concert-list">
					<div class="hot-header concert-header">
					<span class="loaction">全部时间<i class="icon iconfont icon-down"></i></span>
					<span class="loaction">推荐排序<i class="icon iconfont icon-down"></i></span>
					</div>
					<ul class="hot-list">
						<li class="hot-item" v-for="i in 6">
							<div class="item-pic">
								<img src="../../../static/img/movie-pic4.jpg" alt="" />
								<span class="num">￥298起</span>
							</div>
							<h3 class="item-name">陈佩斯戏剧作品展：戏台</h3>
							<p class="item-info">10月·当代舞台喜剧的有一座高峰</p>
						</li>
					</ul>
				</div>
			</div>
			<!--歌剧话剧-->
			<div class="recommend" v-show="index===3">
				<div class="hot-recommend concert-list">
					<div class="hot-header concert-header">
					<span class="loaction">全部时间<i class="icon iconfont icon-down"></i></span>
					<span class="loaction">推荐排序<i class="icon iconfont icon-down"></i></span>
					</div>
					<ul class="hot-list">
						<li class="hot-item" v-for="i in 6">
							<div class="item-pic">
								<img src="../../../static/img/movie-pic.jpg" alt="" />
								<span class="num">￥298起</span>
							</div>
							<h3 class="item-name">陈佩斯戏剧作品展：戏台</h3>
							<p class="item-info">10月·当代舞台喜剧的有一座高峰</p>
						</li>
					</ul>
				</div>
			</div>
			<!--歌剧话剧-->
			<div class="recommend" v-show="index===4">
				<div class="hot-recommend concert-list">
					<div class="hot-header concert-header">
					<span class="loaction">全部时间<i class="icon iconfont icon-down"></i></span>
					<span class="loaction">推荐排序<i class="icon iconfont icon-down"></i></span>
					</div>
					<ul class="hot-list">
						<li class="hot-item" v-for="i in 6">
							<div class="item-pic">
								<img src="../../../static/img/movie-pic2.jpg" alt="" />
								<span class="num">￥298起</span>
							</div>
							<h3 class="item-name">陈佩斯戏剧作品展：戏台</h3>
							<p class="item-info">10月·当代舞台喜剧的有一座高峰</p>
						</li>
					</ul>
				</div>
			</div>
			<!--歌剧话剧-->
			<div class="recommend" v-show="index===5">
				<div class="hot-recommend concert-list">
					<div class="hot-header concert-header">
					<span class="loaction">全部时间<i class="icon iconfont icon-down"></i></span>
					<span class="loaction">推荐排序<i class="icon iconfont icon-down"></i></span>
					</div>
					<ul class="hot-list">
						<li class="hot-item" v-for="i in 6">
							<div class="item-pic">
								<img src="../../../static/img/movie-pic3.jpg" alt="" />
								<span class="num">￥298起</span>
							</div>
							<h3 class="item-name">陈佩斯戏剧作品展：戏台</h3>
							<p class="item-info">10月·当代舞台喜剧的有一座高峰</p>
						</li>
					</ul>
				</div>
			</div>
			<!--歌剧话剧-->
		</section>
		<div class="filter-panel">
			<dl>
				<dt>排序</dt>
				<dd><span>推荐排序</span><i class="icon iconfont icon-selected"></i></dd>
				<dd class="actived"><span>最近开演</span><i class="icon iconfont icon-selected"></i></dd>
				<dd><span>附近演出</span><i class="icon iconfont icon-selected"></i></dd>
			</dl>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'
	import {
		Tab,
		TabItem,
		Swiper,
		SwiperItem,
		ButtonTab, 
		ButtonTabItem, 
		Divider,
		Scroller
	} from 'vux'

	const list = () => ['推荐', '演唱会','歌剧话剧', '亲子演出','音乐会', '戏曲艺术']
	export default {
		name: "Movie",
		components: {
			Tab,
			TabItem,
			Swiper,
			SwiperItem,
			ButtonTab, 
			ButtonTabItem, 
			Divider,
			Scroller,
		},
		data() {
			return {
				actived: '推荐',
				index: 0,
				navTab: list(),
				demo03_list:[{
				  url: 'javascript:',
				  img: '/static/img/banner1.png',
				  title: '看大牌演出，首选大麦网',
				},{
				  url: 'javascript:',
				  img: '/static/img/banner2.png',
				  title: '看大牌演出，首选大麦网',
				},{
				  url: 'javascript:',
				  img: '/static/img/banner3.png',
				  title: '看大牌演出，首选大麦网',
				}]
			}
		},
		mounted(){
  		this.$nextTick(() => {
  			this.domHandel();
  		})
  	},
		methods: {
			goSearch(){
  				this.$router.push('/search')
  		},
  		domHandel(){
  			$(".order-filter").on("click",function(){
  				$(".filter-panel").slideDown(500);
  			})
  		},
		}
	}
</script>

<style>
</style>