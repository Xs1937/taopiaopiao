<template>
	<footer class="menu-wrapper">
		<ul class="menu-list">
			<li class="menu-item">
				<!--在给router-link-active添加完样式后在发现默认路由样式一直存在。给router-link添加exact属性-->
				 <router-link to="/" exact>
					<p>
					<i class="icon iconfont icon-index"></i>
				</p>
				<p class="menu-name">首页</p>
				</router-link>
				
			</li>
			<li class="menu-item">
				<router-link to="/movie">
					<p>
					<i class="icon iconfont icon-film"></i>
				</p>
				<p class="menu-name">电影</p>
				</router-link>
				
			</li>
			<li class="menu-item">
				<router-link to="/video">
					<p>
					<i class="icon iconfont icon-video"></i>
				</p>
				<p class="menu-name">视频</p>
				</router-link>
				
			</li>
			<li class="menu-item">
				<router-link to="/show">
					<p>
					<i class="icon iconfont icon-show"></i>
				</p>
				<p class="menu-name">演出</p>
				</router-link>
				
			</li>
			<li class="menu-item">
				 <router-link to="/user">
					<p>
					<i class="icon iconfont icon-user"></i>
				</p>
				<p class="menu-name">我的</p>
				</router-link>
			</li>
		</ul>
	</footer>
</template>

<script>
	export default {
		name:"Menu",
		data(){
			return{
			}
		}
	}
</script>