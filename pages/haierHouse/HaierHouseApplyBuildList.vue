<template>
	<view>
		<view class="bt2-myhouse mt16 position">
			<!-- <b-title cnt="我的一站筑家" class="title-class"></b-title> -->
			<view class="BTitle-par title-class">
				<p class="title-left"></p>
				<p class="BTitle">我的一站筑家</p>
			</view>
			<mescroll-uni top="20" bottom="20" @down="downCallback" @up="upCallback" @init="mescrollInit">
				<view class="bt2-myhouse-card" v-for="(item,index) in dataList" :key=index>
					<img :src="item.myInfoImg" class="bt2-myhouse-card-portrait" v-show="!item.imgNull" />
					<img src="@/static/img/haierHouse/Group@3x.png" class="bt2-myhouse-card-portrait" v-show="item.imgNull" />
					<view class="bt2-myhouse-card-cnt">
						<p class="title">{{item.buildAreaName}}</p>
						<p class="cnt">入驻产业：{{item.industry}}</p>
						<view class="bt2-myhouse-card-cnt-opt">
							<button class="bt2-myhouse-card-cnt-opt-btn mr24" @click="information()">补充信息</button>
							<button class="bt2-myhouse-card-cnt-opt-btn mr24" @click="activity()">配置活动</button>
							<view class="bt2-myhouse-card-cnt-opt-status" v-show="item.middle">
								<img src="@/static/img/haierHouse/Icons／Complete@2x.png">
								<text style="margin-left: 8upx;">{{item.statusCode}}</text>
							</view>
							<view class="bt2-myhouse-card-cnt-opt-status-p" v-show="item.pass">
								<img src="@/static/img/haierHouse/pass.png">
								<text style="margin-left: 8upx;">{{item.statusCode}}</text>
							</view>
							<view class="bt2-myhouse-card-cnt-opt-status-d" v-show="item.deny">
								<img src="@/static/img/haierHouse/deny.png">
								<text style="margin-left: 8upx;">{{item.statusCode}}</text>
							</view>
						</view>
					</view>
				</view>
			</mescroll-uni>
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
					noMoreSize: 3, // 配置列表的总数量要大于等于3条才显示'-- END --'的提示
					empty: {
						tip: '暂无相关数据'
					}
				},
				dataList: [],
				imgNull: false,
				hmcid: '',
				tempData:[]

			}
		},
		onLoad(option) {
			this.hmcid = option.hmcid
		},
		onReachBottom() {
			this.mescroll && this.mescroll.onReachBottom();
		},
		// 必须注册列表滚动事件,使下拉刷新生效
		onPageScroll(e) {
			this.mescroll && this.mescroll.onPageScroll(e);
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
			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			/*下拉刷新的回调, 有三种处理方式: */
			downCallback(mescroll) {
				mescroll.resetUpScroll(); // 重置列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
			},
			/*上拉加载的回调*/
			upCallback(mescroll) {
				// 此时mescroll会携带page的参数:
				let pageNum = mescroll.num; // 页码, 默认从1开始
				let pageSize = mescroll.size; // 页长, 默认每页10条
				this.hGet('buildHouse/findBuiltHouseByHmcId', {
					hmcId: this.hmcid,
					// hmcId:'Z0000001',
					// hmcId: 'a0008949',
					pageNum: pageNum,
					pageSize: pageSize
				}).then(data => {
					console.log(data)
					let curPageData = data.data.result;
					// let totalPage = data.xxx;
					// 接口返回的总数据量(比如列表有26个数据,每页10条,共3页; 则totalSize值为26)
					let totalSize = data.data.total;
					// 接口返回的是否有下一页 (true/false)
					// let hasNext = data.xxx;
					mescroll.endBySize(curPageData.length, totalSize);
					if (mescroll.num == 1) this.tempData = []; //如果是第一页需手动制空列表
					this.tempData = this.tempData.concat(curPageData); //追加新数据
					this.dataList = this.tempData
					console.log('datalist' + this.dataList)		
						this.dataList.forEach(item => {
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
								item.statusCode = '审核中'
								item.middle = true
								item.deny = false
								item.pass = false
							} else if (item.status == '2') {
								item.statusCode = '审核通过'
								item.middle = false
								item.deny = false
								item.pass = true
							} else if (item.status == '3') {
								item.statusCode = '已拒绝'
								item.deny = true
								item.pass = false
								item.middle = false
							} else {
								item.statusCode = '审核通过'
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
						
					if (data.msg === 'success') {
						mescroll.endSuccess()
					} else {
						mescroll.endErr()
					}
				})
			}
		}
	}
</script>

<style>
	.title-class {
		position: fixed;
		top: 0;
		background-color: white;
		height: 70upx;
		width: 100%;
		z-index: 10;
	}

	.BTitle-par {
		display: flex;
		padding-left: 24upx;
		line-height: 70upx;
	}

	.BTitle {
		color: #333;
		font-size: 32upx;
	}
	.title-left{
		font-size: 32upx;
		line-height: 70upx;
		border-left: 6upx solid #4A90E2;
		width: 10upx;
		padding-left: 16upx;
		margin-top: 15upx;
		height: 40upx;
	}

	.position {
		position: relative;
	}
</style>
