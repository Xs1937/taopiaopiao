<template>
	<div class="wrapper">
		<div class="filter-wrapper">
			<ul class="filter-list">
				<li class="filter-item" @click="filterArea"><span>区域</span><i class="icon iconfont icon-down"></i></li>
				<li class="filter-item" @click="filterBrand"><span>品牌</span><i class="icon iconfont icon-down"></i></li>
				<li class="filter-item" @click="filterDistance"><span>离我最近</span><i class="icon iconfont icon-down"></i></li>
				<li class="filter-item" @click="filterFeature"><span>特色</span><i class="icon iconfont icon-down"></i></li>
			</ul>
		</div>
		<div class="cinema-wrapper">
			<swiper :list="demo03_list" height="150px" dots-position="center"></swiper>
	<div class="cinema-list">
		<ul class="cinema-box">
			<li class="cinema-item" v-for="i in 5">
				<div class="item-name">
					<h2 class="name">上海百丽宫影城（协信店）</h2>
					<span class="icon-card">影城卡</span>
					<span class="price"><mark>37.5</mark><b>元</b>起</span>
				</div>
				<div class="address"><span>金山区板桥西路189号金山百联购物中心3楼</span><span class="distance">0.1km</span></div>
				<div class="tigs"><span>退票</span><span>改签</span><span>观影小食</span><span>可停车</span></div>
				<div class="info"><span class="promotion">促</span> 淘票票特价促销</div>
				<div class="info"><span class="other">卡</span> 开卡首单2张，最高立减20元</div>
				<div class="info"><span class="other">惠</span> 我不是药神等8部影片特惠 </div>
				<div class="info"><span class="other">食</span> 购票赠饮品 </div>
			</li>
		</ul>
	</div>

		</div>
	
	<!--筛选区域-->
	<div v-transfer-dom>
		<x-dialog v-model="showHideOnBlur" class="dialog-demo filter" hide-on-blur>
			<div class="filter-content" v-show="filterAreaShow">
				<ul class="area-list">
					<li class="area-item active">不限区域</li>
					<li class="area-item">宝山区</li>
					<li class="area-item">崇明区</li>
					<li class="area-item">奉贤区</li>
					<li class="area-item">虹口区</li>
					<li class="area-item">黄浦区</li>
					<li class="area-item">嘉定区</li>
					<li class="area-item">静安区</li>
					<li class="area-item">金山区</li>
					<li class="area-item">卢湾区</li>
					<li class="area-item">闵行区</li>
					<li class="area-item">浦东新区</li>
					<li class="area-item">普陀区</li>
					<li class="area-item">青浦区</li>
					<li class="area-item">松江区</li>
					<li class="area-item">徐汇区</li>
					<li class="area-item">杨浦区</li>
					<li class="area-item">闸北区</li>
					<li class="area-item">长宁区</li>
				</ul>
			</div>
			<!--品牌-->
			<div class="filter-content" v-show="filterBrandShow">
				<ul class="brand-list">
					<li class="brand-item active"><span><i class="icon iconfont icon-selected"></i>&nbsp;全部</span><b>100</b></li>
					<li class="brand-item"><span><i class="icon iconfont icon-selected"></i>&nbsp;SFC上影影城</span><b>30</b></li>
					<li class="brand-item"><span><i class="icon iconfont icon-selected"></i>&nbsp;万达影城</span><b>20</b></li>
					<li class="brand-item"><span><i class="icon iconfont icon-selected"></i>&nbsp;大地影城</span><b>21</b></li>
					<li class="brand-item"><span><i class="icon iconfont icon-selected"></i>&nbsp;星美国际影城</span><b>10</b></li>
					<li class="brand-item"><span><i class="icon iconfont icon-selected"></i>&nbsp;百丽宫影城</span><b>8</b></li>
					<li class="brand-item"><span><i class="icon iconfont icon-selected"></i>&nbsp;DFC影城</span><b>6</b></li>
					<li class="brand-item"><span><i class="icon iconfont icon-selected"></i>&nbsp;大光明电影院</span><b>5</b></li>
				</ul>
			</div>
				<!--距离-->
			<div class="filter-content" v-show="filterDistanceShow">
				<ul class="brand-list">
					<li class="brand-item active"><span><i class="icon iconfont icon-selected"></i>&nbsp;离我最近</span></li>
					<li class="brand-item"><span><i class="icon iconfont icon-selected"></i>&nbsp;价格最低</span></li>
				</ul>
			</div>
			<!--特色-->
			<div class="filter-content" v-show="filterFeatureShow">
				<ul class="area-list nolimit">
					<li class="area-item active">不限</li>
				</ul>
				<p class="feture-font">影院特色</p>
				<ul class="area-list">
					<li class="area-item">退票</li>
					<li class="area-item">改签</li>
					<li class="area-item">观影小食</li>
					<li class="area-item">IMAX厅</li>
					<li class="area-item">巨幕厅</li>
					<li class="area-item">中国巨幕</li>
					<li class="area-item">realD厅</li>
					<li class="area-item">4K厅</li>
					<li class="area-item">4DX厅</li>
					<li class="area-item">4D厅</li>
					<li class="area-item">杜比厅</li>
					<li class="area-item">双机3D</li>
					<li class="area-item">可停车</li>
					<li class="area-item">艺术影厅</li>
					<li class="area-item">激光厅</li>
					<li class="area-item">MX4D厅</li>
				</ul>
			</div>
			<div @click="showHideOnBlur=false">
				<span class="vux-close"></span>
			</div>
		</x-dialog>
	</div>
	</div>
</template>

<script>
	import { Swiper, Scroller } from 'vux'
	import { XDialog, XButton, Group, XSwitch, TransferDomDirective as TransferDom } from 'vux'
	export default {
		name: "Cinerma",
		directives: {
			TransferDom
		},
		components: {
			Swiper,
			Scroller,
			XDialog,
			XButton,
			Group,
			XSwitch
		},
		data() {
			return {
				demo03_list: [{
					url: 'javascript:',
					img: '/static/img/banner1.png',
				}, {
					url: 'javascript:',
					img: '/static/img/banner2.png',
				}, {
					url: 'javascript:',
					img: '/static/img/banner3.png',
				}],
				showHideOnBlur:false,
				filterAreaShow: false,
				filterBrandShow: false,
				filterDistanceShow: false,
				filterFeatureShow: false
			}
		},
		methods: {
			filterArea() {
				this.filterBrandShow = false;
				this.filterDistanceShow = false;
				this.filterFeatureShow = false;
				this.showHideOnBlur = true;
				this.filterAreaShow = true;
				
			},
			filterBrand() {
				this.filterAreaShow = false;
				this.filterDistanceShow = false;
				this.filterFeatureShow = false;
				this.showHideOnBlur = true;
				this.filterBrandShow = true;
			},
			filterDistance() {
				this.filterAreaShow = false;
				this.filterBrandShow = false;
				this.filterFeatureShow = false;
				this.showHideOnBlur = true;
				this.filterDistanceShow = true;
			},
			filterFeature() {
				this.filterAreaShow = false;
				this.filterBrandShow = false;
				this.filterDistanceShow = false;
				this.showHideOnBlur = true;
				this.filterFeatureShow = true;
			},
		}
	}
</script>

<style>

</style>