<template>
	<view class="BItem-par">
		<view>
			<text v-if="required" class="bt2-houseApply-card-item-star">*
			</text>
			<text class="bt2-houseApply-card-item-name">{{title}}</text>
			<slot name="title"></slot>
		</view>
		<view class="BItem-middle">
			<slot name="middle"></slot>
		</view>
		<view v-if="right" class="BItem-right" @click="rightClick">
			<i class="iconfont icon-youjiantou1"></i>
		</view>
	</view>
</template>

<script>
	export default {
		name: "BItem",
		props: {
			//是否显示星号
			required: {
				type: Boolean,
				default: false
			},
			//标题
			title: {
				type: String
			},
			//是否显示右箭头
			right: {
				type: Boolean,
				default: false
			},
			// 箭头点击事件
			rightClick: {
				type: Function,
				default () {}
			}
		}
	}
</script>

<style lang="scss">
	.BItem-par {
		display: flex;
		width: 100%;
		align-items: center;
	}

	.BItem-right {}

	.BItem-middle {
		flex-grow: 1;
	}
</style>
