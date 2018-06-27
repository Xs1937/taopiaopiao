<template>
	<div class="container">
		<router-view></router-view>
		<t-menu></t-menu>
	</div>
</template>
<script>
	import TMenu from './common/Menu.vue'
	export default {
		name:"Main",
		components: {
	    TMenu,
	  },
	}
</script>
<style>

</style>