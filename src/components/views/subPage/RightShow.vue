<template>
	<div class="wrapper">
		<section class="hot-movie">
			<div class="box"></div>
				<header class="title clearfix">
					<h3 class="classify-name">热门预告片</h3>
				</header>
				<scroller lock-y :scrollbar-x=false>
					<ul class="movie-list">
						<li class="list-item" v-for="i in 7">
							<div class="video">
								<img src="../../../../static/img/video8.png"/>
								<span class="video-intro">《动物世界》</span>
							</div>
						</li>
					</ul>
				</scroller>
				<div class="hr"></div>
				<header class="title clearfix">
					<h3 class="classify-name">近期最受期待</h3>
				</header>
				<scroller lock-y :scrollbar-x=false>
					<ul class="movie-list">
						<li class="list-item" v-for="i in 7">
							<div class="item-box">
								<img src="../../../../static/img/movie-pic.jpg" alt="" class="pic" />
								<span class="tigs">3DMAX</span>
								<p class="score">465656人想看</p>
							</div>
							<p class="movie-name">侏罗纪世界2</p>
							<p class="begin-time">7月19日</p>
						</li>
					</ul>
				</scroller>
				<div class="hr" style="margin-bottom: 0;"></div>
				<div class="advert">
					<img src="../../../../static/img/0.png"/>
				</div>
				<div class="hr" style="margin-bottom: 0;"></div>
				<div class="movie-list-wrapper new-film-list">
					<header class="time-box">
						<p class="week">周五</p>
						<p class="date">7月8日</p>
					</header>
					<div class="movie-item" v-for="i in 4">
						<span class="movie-pic">
	                  		<img src="../../../../static/img/movie-pic.jpg"/>
	                	</span>
						<div class="movie-message">
							<div class="movie-info">
								<h2 class="movie-name">侏罗纪世界2</h2>
								<span class="transform">3D</span>
								<span class="max">IMAX</span>
								<span class="hot point">点映</span>
							</div>
							<p class="score">点映评分<mark>&nbsp;8.5</mark></p>
							<p class="director">导演：胡安·安东尼奥·巴亚纳</p>
							<p class="actor">主演：克里斯·帕拉特,布莱丝·达拉斯·霍华德,贾斯提斯·史密斯,拉菲·斯波,托比·琼斯</p>
							<div class="btn-box">
								<a class="buy-movie pre-sale">预售</a>
							</div>
						</div>
					</div>
					<header class="time-box">
						<p class="week">周日</p>
						<p class="date">7月10日</p>
					</header>
					<div class="movie-item" v-for="i in 2">
						<span class="movie-pic">
	                  		<img src="../../../../static/img/movie-pic.jpg"/>
	                	</span>
						<div class="movie-message">
							<div class="movie-info">
								<h2 class="movie-name">侏罗纪世界2</h2>
								<span class="transform">3D</span>
								<span class="max">IMAX</span>
								<span class="hot point">点映</span>
							</div>
							<p class="score">点映评分<mark>&nbsp;8.5</mark></p>
							<p class="director">导演：胡安·安东尼奥·巴亚纳</p>
							<p class="actor">主演：克里斯·帕拉特,布莱丝·达拉斯·霍华德,贾斯提斯·史密斯,拉菲·斯波,托比·琼斯</p>
							<div class="btn-box">
								<a class="buy-movie pre-sale">预售</a>
							</div>
						</div>
					</div>
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
	export default {
		name: "HotFilm",
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
	}
</script>
<style scoped="scoped">
.title{
	margin-top: 0.6rem;
}

</style>