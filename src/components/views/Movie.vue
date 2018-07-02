<template>
	<div class="movie-wrapper">
		<header>
			<p class="location-search">
				<span class="loaction">上海<i class="icon iconfont icon-down"></i></span>
				<span class="module-name">电影</span>
				<span class="search"><i class="icon iconfont icon-sousuo"></i></span>
			</p>
		</header>
		<tab :line-width="2" custom-bar-width="30px" v-model="index">
      <tab-item class="vux-center" :selected="actived === item" v-for="(item, index) in navTab" @click="actived = item" :key="index">{{item}}</tab-item>
    </tab>
     <swiper v-model="index" height="1500px" :show-dots="false">
        <swiper-item>
          <div class="tab-swiper vux-center">
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
          				<img src="../../../static/img/movie-pic.jpg"/>
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
        </swiper-item>
         <swiper-item>
          <div class="tab-swiper vux-center">
          	tab2
          </div>
        </swiper-item>
        <swiper-item>
          <div class="tab-swiper vux-center">
          	tab3
          </div>
        </swiper-item>
        <swiper-item>
          <div class="tab-swiper vux-center">
          	tab4
          </div>
        </swiper-item>
      </swiper>
	</div>
</template>

<script>
	import { Tab,TabItem,Swiper, SwiperItem} from 'vux'
	const list = () => ['正在热映', '即将上映', '小视频', '排行榜']
	export default {
		name:"Movie",
	  components: {
	    Tab,
	    TabItem,
	    Swiper, 
	    SwiperItem
	  },
	  data () {
    return {
    	actived: '正在热映',
    	index:0,
    	navTab: list(),
    }
  },
 }
</script>

<style>
</style>