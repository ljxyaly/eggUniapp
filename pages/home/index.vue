<template>
	<view class="content">
		<u-swiper :list="banner" height="300" border-radius="0"></u-swiper>
		<!-- <u-button @click="change">点击</u-button> -->
	</view>
</template>

<script>
 	export default {
		data() {
			return {
				banner: []
			}
		},
		onLoad() {
			this.$api.getHome().then(res => {
				this.banner = res.banner
				console.log(this.banner)
			})
		},
		methods: {
			change() {
				this.$api.getHome().then(res => {
					this.banner = res.banner
					console.log(this.banner)
				})
			}
		}
	}
</script>

<style>
	
</style>
