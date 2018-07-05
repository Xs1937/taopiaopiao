<template>
	<div class="movie-wrapper">
		<header>
			<p class="location-search">
				<span class="loaction">上海<i class="icon iconfont icon-down"></i></span>
				<span class="module-name">
					<button-tab v-model="film">
				        <button-tab-item  @on-item-click="consoleIndex()">电影</button-tab-item>
				        <button-tab-item selected @on-item-click="consoleIndex()">影院</button-tab-item>
			        </button-tab>
				</span>
				<span class="search"><i class="icon iconfont icon-search"></i></span>
			</p>
		</header>
		<!--电影-->
		<div id="film" v-show="this.film === 0">
			<tab :line-width="2" custom-bar-width="30px" v-model="index">
			<tab-item :selected="actived === index" v-for="(item, index) in navTab" @click="actived = index" :key="index">{{item}}</tab-item>
		</tab>
		<!--tab1-->
		<div class="tab-swiper vux-center" v-show="index===0">
			<hot-film></hot-film>
		</div>
		<!--tab2-->
		<div class="tab-swiper vux-center" v-show="index===1">
			<right-show></right-show>
		</div>
		</div>
		<!--影院-->
		<div id="cinema" v-show="this.film === 1">
			<t-cinema></t-cinema>
		</div>
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
	import TCinema from './subPage/Cinema.vue'
	import HotFilm from './subPage/HotFilm.vue'
	import RightShow from './subPage/RightShow.vue'
	const list = () => ['正在热映', '即将上映']
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
			TCinema,
			HotFilm,
			RightShow
		},
		data() {
			return {
				actived: '正在热映',
				index: 1,
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