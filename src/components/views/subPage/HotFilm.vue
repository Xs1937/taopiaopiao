<template>
	<div class="wrapper">
		<div class="box-office">
				<span class="current">实时票房</span>
				<div class="today">
					<span class="font">今日大盘</span>
					<span class="money">3577.7万</span>
				</div>
			</div>
			<ul class="movie-list-wrapper">
				<li class="movie-item" v-for="i in 5">
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
						<p class="score">观众评分<mark>&nbsp;8.5</mark></p>
						<p class="director">导演：胡安·安东尼奥·巴亚纳</p>
						<p class="actor">主演：克里斯·帕拉特,布莱丝·达拉斯·霍华德,贾斯提斯·史密斯,拉菲·斯波,托比·琼斯</p>
						<p class="tags"><span class="hot today">今日最热</span><span class="hot week">一周最热</span></p>
						<p class="other"><mark>口碑炸裂</mark>来pick你心中的最佳恐龙<i class="icon iconfont icon-right-copy"></i></p>
						<div class="btn-box">
							<a class="buy-movie">购票</a>
						</div>
					</div>
				</li>
			</ul>
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
		name:"hotFilm",
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