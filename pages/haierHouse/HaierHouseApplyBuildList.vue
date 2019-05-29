<template>
	<view class="content">
		<view class="bt2-myhouse mt16">
			<b-title cnt="我的一站筑家"></b-title>
			<view class="bt2-myhouse-card" v-for="(item,index) in listData" :key=index>
				<img :src="item.myInfoImg" class="bt2-myhouse-card-portrait" v-show="!item.imgNull" />
				<img src="@/static/img/haierHouse/Artboard.png" class="bt2-myhouse-card-portrait" v-show="item.imgNull" />
				<view class="bt2-myhouse-card-cnt">
					<p class="title">{{item.buildAreaName}}</p>
					<p class="cnt">入驻产业：{{item.industry}}</p>
					<view class="bt2-myhouse-card-cnt-opt">
						<button class="bt2-myhouse-card-cnt-opt-btn mr24" @click="information()">补充信息</button>
						<button class="bt2-myhouse-card-cnt-opt-btn mr24" @click="activity()">配置活动</button>
						<view class="bt2-myhouse-card-cnt-opt-status" v-show="item.middle">
							<img src="@/static/img/haierHouse/Icons／Complete@2x.png">
							<text>{{item.status}}</text>
						</view>
						<view class="bt2-myhouse-card-cnt-opt-status-p" v-show="item.pass">
							<img src="@/static/img/haierHouse/pass.png">
							<text>{{item.status}}</text>
						</view>
						<view class="bt2-myhouse-card-cnt-opt-status-d" v-show="item.deny">
							<img src="@/static/img/haierHouse/pass.png">
							<text>{{item.status}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import BTitle from 'components/common/BTitle.vue'
	import MescrollUni from "@/components/wenju-mescroll/mescroll-uni.vue";
	export default {
		components: {
			BTitle,
			MescrollUni
		},
		data() {
			return {
				mescroll: null, //mescroll实例对象
				// 下拉刷新的配置
				downOption: {
					use: true, // 是否启用下拉刷新; 默认true
					auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
				},
				// 上拉加载的配置
				upOption: {
					use: true, // 是否启用上拉加载; 默认true
					auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
					isLock: false, // 是否锁定上拉加载 (可用于不触发upCallback,只保留回到顶部按钮的场景)
					page: {
						num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
						size: 10 // 每页数据的数量,默认10
					},
					noMoreSize: 3, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
					empty: {
						tip: '暂无相关数据'
					}
				},
				listData: [],
				imgNull: false,

			}
		},
		onLoad(option) {
			this.listData = JSON.parse(option.id)
			// this.listData.shift()
			console.log(this.listData)
			this.listData.forEach(item => {
				if (item.inIndustryPic) {
					item.picList = JSON.parse(item.inIndustryPic)
					if (item.picList[0].imgs.length > 0) {

						item.myInfoImg = item.picList[0].imgs[0];
						item.imgNull = false
					} else {
						item.imgNull = true
						item.myInfoImg = '@/static/img/haierHouse/Artboard.png'
					}
					if (item.status == '1') {
						item.status = '审核中'
						item.middle = true
						item.deny = false
						item.pass = false
					} else if (item.status == '2') {
						item.status = '审核通过'
						item.middle = false
						item.deny = false
						item.pass = true
					} else if (item.status == '3') {
						item.status = '已拒绝'
						item.deny = true
						item.pass = false
						item.middle = false
					} else {
						item.status = '审核通过'
						item.deny = false
						item.pass = true
						item.middle = false
					}
					var temp = []
					for (var i = 0; i < item.picList.length; i++) {
						temp.push(item.picList[i].name)
					}
					temp.shift()
					item.industry = temp.join(",")
				}
			})

		},
		methods: {
			showAl() {
				uni.showToast({
					title: '功能暂未开放，敬请期待',
					duration: 3000,
					icon: 'none'
				})
			},
			information() {
				this.showAl()
			},
			activity() {
				this.showAl()
			},
		}
	}
</script>

<style>
</style>
