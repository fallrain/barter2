<template>
	<view class="content">
		<swiper class="swiper-box" :indicator-dots="true" indicator-color="#fff" indicator-active-color="#4A90E2" @change="change">
			<swiper-item v-for="(item ,index) in info" :key="index">
				<view :class="['swiper-item',item.colorClass]">
					<image :src="item.url" mode="scaleToFill" />
				</view>
			</swiper-item>
		</swiper>
		<ul class="bt2-house-menu mt16">
			<li class="bt2-house-menu-item" @click="jump('/pages/haierHouse/HaierHouseApply')">
				<img src="@/static/img/haierHouse/apply@2x.png" class="icon-class">
				<p class="bt2-house-menu-item-cnt">筑家申请</p>
			</li>
			<!--     <li class="bt2-house-menu-item">
        <img src="@/static/img/haierHouse/activity@2x.png" @click="jump('/pages/haierHouse/ChooseLeader')">
        <p class="bt2-house-menu-item-cnt">筑家活动</p>
      </li>
      <li class="bt2-house-menu-item">
        <img src="@/static/img/haierHouse/user@2x.png">
        <p class="bt2-house-menu-item-cnt">用户跟进</p>
      </li> -->
		</ul>
		<view class="bt2-myhouse mt16">
			<p @click="showMoreList()" class="bt2-myhouse-more" v-show="showMore">显示更多</p>
			<img src="@/static/img/haierHouse/Shape@2x.png" class="img-class" v-show="showMore" @click="showMoreList()"></img>
			<b-title cnt="我的一站筑家">
			</b-title>
			<view class="bt2-myhouse-card" v-show="myInfoShow">
				<img :src="myInfoImg" class="bt2-myhouse-card-portrait" v-show="!imgNull">
				<img src="@/static/img/haierHouse/Group@3x.png" class="bt2-myhouse-card-portrait" v-show="imgNull" />

				<view class="bt2-myhouse-card-cnt">
					<p class="title">{{myAreaList.buildAreaName}}</p>
					<p class="cnt">入驻产业：{{industry}}</p>
					<view class="bt2-myhouse-card-cnt-opt">
						<button class="bt2-myhouse-card-cnt-opt-btn mr24" @click="information()">补充信息</button>
						<button class="bt2-myhouse-card-cnt-opt-btn mr24" @click="activity()">配置活动</button>
						<!-- <view class="bt2-myhouse-card-cnt-opt-status">
							<img src="@/static/img/haierHouse/Icons／Complete@2x.png">
							<text>{{myAreaList.status}}</text>
						</view> -->
						<view class="bt2-myhouse-card-cnt-opt-status" v-show="middle">
							<img src="@/static/img/haierHouse/Icons／Complete@2x.png">
							<text style="margin-left: 8upx;">{{this.myAreaList.status}}</text>
						</view>
						<view class="bt2-myhouse-card-cnt-opt-status-p" v-show="pass">
							<img src="@/static/img/haierHouse/pass.png">
							<text style="margin-left: 8upx;">{{this.myAreaList.status}}</text>
						</view>
						<view class="bt2-myhouse-card-cnt-opt-status-d" v-show="deny">
							<img src="@/static/img/haierHouse/deny.png">
							<text style="margin-left: 8upx;">{{this.myAreaList.status}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bt2-myhouse mt16">
			<b-title cnt="优秀门店展示"></b-title>
			<!-- <ul class="bt2-shopShow-par">
        <li class="bt2-shopShow-item" v-for="(item,index) in shopList" :key="index">
          <img :src="item.url">
          <p class="cnt">{{item.desc}}</p>
        </li>
      </ul> -->
		</view>
		<view class="bt2-myhouse mt16">
			<b-title cnt="了解一站筑家"></b-title>
			<view class="bt2-help-inf">
				<ul class="bt2-help-inf-item-par">
					<li class="bt2-help-inf-item">
						1、一站筑家定义为面向新居成套用户的前置触点，形式包括样板间、新社区店、品牌联盟等执行模式
					</li>
					<li class="bt2-help-inf-item">
						2、围绕新社区建触点、做引流，具有高产出、高效率、高转化的特点
					</li>
					<li class="bt2-help-inf-item">
						3、对承接经销商在展示方案、交互方案、售卖方案、活动方案等予以营销指导及资源支持
					</li>
				</ul>
			</view>
		</view>
	</view>
</template>

<script>
	import BTitle from 'components/common/BTitle.vue'
	export default {
		components: {
			BTitle
		},
		data() {
			return {
				myAreaList: [],
				myInfoImg: '',
				myInfoShow: false,
				industry: '',
				hmcid: '',
				shopid: '',
				showMore: false,
				allList: [],
				imgNull: false,
				middle: false,
				deny: false,
				pass: false,

				info: [{
						colorClass: 'uni-bg-red',
						url: 'https://hzytest.haier.com/haierfile/sellerUploadImg/banner.jpeg',
						content: '内容 A'
					}
					//           {
					//             colorClass: 'uni-bg-green',
					//             url: 'https://hzytest.haier.com/haierfile/sellerUploadImg/banner.jpeg',
					// 						// url:require('@/static/img/haierHouse/WeChat6d40309ca76cc404a4a3da02b753aa71.png'),
					// 
					//             content: '内容 B'
					//           },
					//           {
					//             colorClass: 'uni-bg-blue',
					//             url: 'https://hzytest.haier.com/haierfile/sellerUploadImg/banner.jpeg',
					//             content: '内容 C'
					//           }
				],
				shopList: [
					// {
					//   url:require('@/static/img/haierHouse/48C5FB2B-5CF2-4300-91D7-C45D0C960B7E.png'),
					//   desc:'左岸风度小区'
					// },
					// {
					//   url:require('@/static/img/haierHouse/WeChat6d40309ca76cc404a4a3da02b753aa71.png'),
					//   desc:'水清木华小区'
					// },
					// {
					//   url:require('@/static/img/haierHouse/48C5FB2B-5CF2-4300-91D7-C45D0C960B7E.png'),
					//   desc:'天福苑小区'
					// },
					// {
					//   url:require('@/static/img/haierHouse/WeChat6d40309ca76cc404a4a3da02b753aa71.png'),
					//   desc:'海尔鼎世华府'
					// }
				]
			}
		},
		onLoad() {
			this.hmcid = this.getQueryString('hmcid')
			this.shopid = this.getQueryString('shopid')
			// alert('hmcid' + this.hmcid + 'shopid' + this.shopid)
			this.hGet('buildHouse/findBuiltHouseByHmcId', {
				hmcId: this.hmcid,
				// hmcId: 'Z0000001',
				// hmcId: 'a0008949',
				pageNum: 1,
				pageSize: 1
			}).then(data => {
				if (!data.data) {
					uni.showToast({
						title: '请求失败',
						duration: 4000,
						icon: 'none'
					});
					return
				}
				if (data.code == 1) {
					if (data.data.total > 1) {
						this.showMore = true
					}
				}
				if (data.data.result.length == 0) {
					uni.showToast({
						title: '一站筑家暂无信息',
						duration: 4000,
						icon: 'none'
					});
					return
				}
				this.myInfoShow = true
				this.myAreaList = data.data.result[0]
				//		TODO	状态待补充  图片上传压缩  数组长度判断  字符串过长 接口状态err
				if (this.myAreaList.status == '1') {
					this.myAreaList.status = '审核中'
					this.middle = true
				} else if (this.myAreaList.status == '2') {
					this.myAreaList.status = '审核通过'
					this.pass = true
				} else if (this.myAreaList.status == '3') {
					this.myAreaList.status = '已拒绝'
					this.deny = true
				} else {
					this.myAreaList.status = '审核通过'
					this.pass = true
				}
				if (this.myAreaList.inIndustryPic) {
					const picList = JSON.parse(this.myAreaList.inIndustryPic)
					if (picList[0].imgs.length > 0) {
						this.myInfoImg = picList[0].imgs[0];
					} else {
						this.imgNull = true
						this.myInfoImg = '@/static/img/haierHouse/Artboard.png'
					}

					var temp = []
					for (var i = 0; i < picList.length; i++) {
						temp.push(picList[i].name)
					}
					temp.shift()
					this.industry = temp.join(",")
				} else {
					uni.showToast({
						title: data.msg,
						duration: 3000,
						icon: 'none'
					})
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
			showMoreList() {
				const data = JSON.stringify(this.allList)
				uni.navigateTo({
					url: '/pages/haierHouse/HaierHouseApplyBuildList?id=' + data + '&hmcid=' + this.hmcid,
				});
			},

			jump(url) {
				const u = url + '?id=' + this.hmcid
				uni.navigateTo({
					url: u,
				});
			},
			getQueryString: function(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
				var r = window.location.search.substr(1).match(reg);
				if (r != null) {
					return decodeURIComponent(r[2]);
				}
				return null;
			},
		}
	}
</script>

<style>
	.bt2-myhouse-more {
		float: right;
		color: #4A90E2;
		position: absolute;
		right: 76upx;
		font-size: 30upx;
	}

	.img-class {
		position: absolute;
		right: 24upx;
		width: 38upx;
		height: 38upx;
		/* top:10upx; */
	}

	.icon-class {
		width: 72upx;
		height: 72upx;
	}
</style>
