<template>
	<div class="video-wrapper">
		<header class="video-menu">
			<tab :line-width="2" custom-bar-width="30px" v-model="index">
			<tab-item :selected="actived === index" v-for="(item, index) in navTab" @click="actived = index" :key="index">{{item}}</tab-item>
		</tab>
		</header>
		<section>
			<div class="tab-swiper vux-center" v-show="index===0">
				<ul class="video-list clearfix">
					<li class="video-item" v-for=" i in 8">
						<div class="video-box">
							<video width="100%" height="211" controls="controls">
							  <source src="http://bizcommon.alicdn.com/KM596pxVraOsnEmgAP7/TAkYGi1FMi7sub718Gh%40%40hd.mp4" type="video/mp4">
							</video>
						</div>
						<h2 class="video-name">《快把我哥带走》特辑番外 彭益畅孙泽阳变情侣</h2>
						<div class="video-other">
							<div class="tigs">影片速递</div>
							<div class="">
								<span><i class="icon iconfont icon-dianzan"></i> 赞</span>
								<span><i class="icon iconfont icon-comment"></i> 3</span>
								<span><i class="icon iconfont icon-share"></i></span>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<!--tab2-->
			<div class="tab-swiper vux-center" v-show="index===1">
				<ul class="video-list clearfix">
					<li class="video-item" v-for=" i in 8">
						<div class="video-box">
							<video width="100%" height="211" controls="controls">
							  <source src="http://bizcommon.alicdn.com/KM596pxVraOsnEmgAP7/TAkYGi1FMi7sub718Gh%40%40hd.mp4" type="video/mp4">
							</video>
						</div>
						<h2 class="video-name">《我不是药神》特辑番外 徐峥王传君领衔主演</h2>
						<div class="video-other">
							<div class="tigs">影片速递</div>
							<div class="">
								<span><i class="icon iconfont icon-dianzan"></i> 赞</span>
								<span><i class="icon iconfont icon-comment"></i> 3</span>
								<span><i class="icon iconfont icon-share"></i></span>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<!--tab3-->
			<div class="tab-swiper vux-center" v-show="index===2">
				<ul class="video-list clearfix">
					<li class="video-item" v-for=" i in 8">
						<div class="video-box">
							<video width="100%" height="211" controls="controls">
							  <source src="http://bizcommon.alicdn.com/KM596pxVraOsnEmgAP7/TAkYGi1FMi7sub718Gh%40%40hd.mp4" type="video/mp4">
							</video>
						</div>
						<h2 class="video-name">新大头儿子和小头爸爸3：俄罗斯奇遇记</h2>
						<div class="video-other">
							<div class="tigs">影片速递</div>
							<div class="">
								<span><i class="icon iconfont icon-dianzan"></i> 赞</span>
								<span><i class="icon iconfont icon-comment"></i> 3</span>
								<span><i class="icon iconfont icon-share"></i></span>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<!--tab4-->
			<div class="tab-swiper vux-center" v-show="index===3">
				<ul class="video-list clearfix">
					<li class="video-item" v-for=" i in 8">
						<div class="video-box">
							<video width="100%" height="211" controls="controls">
							  <source src="http://bizcommon.alicdn.com/KM596pxVraOsnEmgAP7/TAkYGi1FMi7sub718Gh%40%40hd.mp4" type="video/mp4">
							</video>
						</div>
						<h2 class="video-name">《超人总动员2》特辑番外 </h2>
						<div class="video-other">
							<div class="tigs">影片速递</div>
							<div class="">
								<span><i class="icon iconfont icon-dianzan"></i> 赞</span>
								<span><i class="icon iconfont icon-comment"></i> 3</span>
								<span><i class="icon iconfont icon-share"></i></span>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<!--tab5-->
			<div class="tab-swiper vux-center" v-show="index===4">
				<ul class="video-list clearfix">
					<li class="video-item" v-for=" i in 8">
						<div class="video-box">
							<video width="100%" height="211" controls="controls">
							  <source src="http://bizcommon.alicdn.com/KM596pxVraOsnEmgAP7/TAkYGi1FMi7sub718Gh%40%40hd.mp4" type="video/mp4">
							</video>
						</div>
						<h2 class="video-name">《快把我哥带走》特辑番外 彭益畅孙泽阳变情侣</h2>
						<div class="video-other">
							<div class="tigs">影片速递</div>
							<div class="">
								<span><i class="icon iconfont icon-dianzan"></i> 赞</span>
								<span><i class="icon iconfont icon-comment"></i> 3</span>
								<span><i class="icon iconfont icon-share"></i></span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>
<script>
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
	const list = () => ['推荐', '速看','新片上映','剧集','综艺']
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
			Scroller
		},
		data() {
			return {
				actived: '推荐',
				index: 0,
				navTab: list(),
				film: 0
			}
		},
		methods: {
			consoleIndex(){
			}
		}
	}
</script>

<style scoped="scoped">
.movie-pic{
	margin-bottom: 0.25rem;
}
</style>
<style>
	
</style>