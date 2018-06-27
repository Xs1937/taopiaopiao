<template>
	<footer class="menu-wrapper">
		<ul class="menu-list clearfix">
			<li class="menu-item">
				 <router-link to="/index">
					<p>
					<i class="icon iconfont icon-shouye"></i>
				</p>
				<p class="menu-name">首页</p>
				</router-link>
				
			</li>
			<li class="menu-item">
				<router-link to="/movie">
					<p>
					<i class="icon iconfont icon-dianyingyuan"></i>
				</p>
				<p class="menu-name">电影</p>
				</router-link>
				
			</li>
			<li class="menu-item">
				<router-link to="/cinema">
					<p>
					<i class="icon iconfont icon-yingyuana"></i>
				</p>
				<p class="menu-name">影院</p>
				</router-link>
				
			</li>
			<li class="menu-item">
				<router-link to="/show">
					<p>
					<i class="icon iconfont icon-changpian"></i>
				</p>
				<p class="menu-name">演出</p>
				</router-link>
				
			</li>
			<li class="menu-item">
				 <router-link to="/user">
					<p>
					<i class="icon iconfont icon-wode1"></i>
				</p>
				<p class="menu-name">我的</p>
				</router-link>
			</li>
		</ul>
	</footer>
</template>

<script>
	export default {
		name:"Menu"
	}
</script>