<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<u-button @click="change">点击</u-button>
			<u-icon name="email" custom-prefix="custom-icon" size="30"></u-icon>
		</view>
	</view>
</template>

<script>
 	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			
		},
		methods: {
			change() {
				this.$api.getIndexData().then(res => {
					console.log(1);
				})
				// this.$api.getWechatConfig().then(res => {
				// 	console.log(res)
				// });
				// this.$u.route({
				// 	url: 'pages/login/index'
				// })
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
