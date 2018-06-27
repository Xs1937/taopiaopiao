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
     <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item v-for="(item, index) in navTab" :key="index">
          <div class="tab-swiper vux-center">{{item}} Container</div>
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