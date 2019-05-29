<template>
	<view>
		<view class="bt2-houseApply-card">
			<p class="bt2-houseApply-card-title">一站筑家信息</p>
			<ul class="bt2-houseApply-card-cnt">
				<li class="bt2-houseApply-card-item uni-column"><span class="bt2-houseApply-card-item-star">*</span>
					<text class="bt2-houseApply-card-item-name-long">筑家店名</text>
					<input class="uni-input-areaName" placeholder-style="color:#999999;line-height:56upx;font-size:32upx" placeholder="如:一站筑家左岸风度店"
					 v-model="blockName" @blur="blockEnd()" v-reset-input />
				</li>
				<li class="bt2-houseApply-card-item"><span class="bt2-houseApply-card-item-star">*</span>
					<text class="bt2-houseApply-card-item-name-long">筑家类型</text></li>
				<li class="bt2-houseApply-card-item-mult bt2-houseApply-card-item">
					<b-multrow-radio :list="sampleRoomTypeList" :checkedId.sync="sampleRoomIds"></b-multrow-radio>
				</li>
				<li class="bt2-houseApply-card-item uni-column"><span class="bt2-houseApply-card-item-star">*</span>
					<text class="bt2-houseApply-card-item-name-long">样板间面积</text>
					<input class="uni-input" placeholder-style="color:#999999;line-height:56upx;font-size:32upx" placeholder="请输入房屋面积"
					 v-model="roomArea" @blur="areaEnd()" type="digit" v-reset-input />
					<p class="bt2-houseApply-card-item-unit">平米</p>
				</li>
				<li class="bt2-houseApply-card-item uni-column">
					<span class="bt2-houseApply-card-item-star">*</span>
					<text class="bt2-houseApply-card-item-name-long">详细地址</text>
					<input class="uni-input-local" placeholder-style="color:#999999;line-height:56upx;font-size:32upx" maxlength="20"
					 @blur="coverEnd()" v-model="localName" placeholder="请选择地区" v-reset-input />
					<view @click="toggleTab()" class="pickerClass"></view>
					<w-picker mode="region" :defaultVal="defaultVal" @confirm="onConfirm" ref="picker" themeColor="#4A90E2"></w-picker>
				</li>
				<li class="bt2-houseApply-card-item uni-column">
					<text class="bt2-houseApply-card-item-name"></text>
					<input class="uni-input-address" placeholder-style="color:#999999;line-height:56upx;font-size:32upx" placeholder="请输入详细地址,具体到门牌号"
					 v-model="address" @blur="addressEnd()" v-reset-input /></li>
				<li class="bt2-houseApply-card-item uni-column"><span class="bt2-houseApply-card-item-star">*</span>
					<text class="bt2-houseApply-card-item-name-long">样板间租金</text>
					<input class="uni-input" placeholder-style="color:#999999;line-height:56upx;font-size:32upx" placeholder="请输入租金"
					 v-model="rent" @blur="rentEnd()" type="digit" v-reset-input />
					<p class="bt2-houseApply-card-item-unit">元/月</p>
				</li>
				<li class="bt2-houseApply-card-item uni-column"><span class="bt2-houseApply-card-item-star">*</span><text class="bt2-houseApply-card-item-name-long">租赁日期</text>
					<view class="uni-list-cell-db-start">
						<picker mode="date" :value="dateS" :start="startDateS" :end="endDateS" @change="bindDateChangeS">
							<view class="uni-input-timee1"> {{dateS}}</view>
						</picker>
					</view>
					<input class="uni-input-time" placeholder-style="color:#999999;line-height:56upx;font-size:32upx" placeholder="开始日期"
					 @click="startTimeSelect()" v-model="startTime" v-reset-input />
					<p style="margin-left: 20upx;">至</p>
					<view class="uni-list-cell-db-end">
						<picker mode="date" :value="dateE" :start="startDateE" :end="endDateE" @change="bindDateChangeE">
							<view class="uni-input-timee"> {{dateE}}</view>
						</picker>
					</view><input class="uni-input-time" placeholder-style="color:#999999;line-height:56upx;font-size:32upx"
					 placeholder="结束日期" @click="endTimeSelect()" v-model="endTime" v-reset-input />
				</li>
				<li class="bt2-houseApply-card-item"><span class="bt2-houseApply-card-item-star">*</span>
					<text class="bt2-houseApply-card-item-name-long">入驻产业</text></li>
				<li class="bt2-houseApply-card-item-mult bt2-houseApply-card-item">
					<b-multrow-checkbox :list="items3" :checkedIds.sync="industryIds" :checkboxChange1="checkboxChange"></b-multrow-checkbox>
				</li>

			</ul>
			<view class="mt16" v-for="(industry,index) in checkedIndustry" :key="index">
				<ul class="bt2-houseApply-card-cnt">
					<li class="bt2-houseApply-card-item"> {{industry.name}}区域照片</li>
					<ss-upload-image :url="url" :file-list="fileMap[industry.id]" :name="imgName" :formData="industry" @on-success="onSuccess"
					 @on-error="onError" @on-remove="onRemove" />
				</ul>
			</view>
		</view>
		<view class="bt2-houseApply-btn">
			<p class="bt2-houseApply-btn-p" @click="nextPage()">下一步</p>
		</view>
		<view class="uni-list" v-show="pickerStartShow">
			<view class="uni-list-cell">
				<view class="uni-list-cell-db">
					<picker mode="date" :value="dateS" :start="startDateS" :end="endDateS" @change="bindDateChangeS">
						<view class="uni-input"> {{dateS}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="uni-list" v-show="pickerEndShow">
			<view class="uni-list-cell">
				<view class="uni-list-cell-db">
					<picker mode="date" :value="dateE" :start="startDateE" :end="endDateE" @change="bindDateChangeE">
						<view class="uni-input"> {{dateE}}</view>
					</picker>
				</view>
			</view>
		</view>
		<uni-popup :show="middle" type="middle" @hidePopup="hidePopup" button-mode="right" :h5-top="h5top">
			<view class="popupView">
				<p class="popupView-u">一站筑家负责人负责一站筑家小区客户，客户扫描活动二维码，进入筑家负责人的用户跟进</p>
				<p class="popupView-b" @click="hidePopup">知道了</p>
			</view>
		</uni-popup>
		<uni-popup :show="alert" type="middle" mode="fixed" :msg=alertMsg @hidePopup="hidePopupAlert" :h5-top="h5top"></uni-popup>
	</view>
</template>
<script>
	import ssUploadImage from '@/components/ss-upload-image/ss-upload-image.vue';
	import UniIcon from '@/components/uni-icon/uni-icon.vue';
	import calendar from "@/components/uni-calendar/uni-calendar"
	import uniPopup from "@/components/uni-popup/uni-popup"
	import wPicker from "@/components/w-picker/w-picker.vue";
	import BMultrowCheckbox from "../../components/common/BMultrowCheckbox";
	import BMultrowRadio from "../../components/common/BMultrowRadio";
	import BItem from "../../components/common/BItem";

	import {
		mapState
	}

	from 'vuex';

	export default {

		name: "HaierHouseApply",
		components: {
			BItem,
			BMultrowCheckbox,
			BMultrowRadio,
			ssUploadImage,
			UniIcon,
			calendar,
			uniPopup,
			wPicker
		}

		,
		data() {
			return {
				imgName: 'file',
				url: this.envConfig.domain + 'buildHouse/uploadImage',
				// url: 'http://hzytest.haier.com/builtHouse/buildHouse/uploadImage',
				h5top: true,
				fileList: [],
				blockName: '',
				localName: '',
				hmcid: '',
				defaultVal: [0, 0, 0],
				current: 1,
				name: '',
				tel: '',
				roomArea: '',
				rent: '',
				address: '',
				middle: false,
				alert: false,
				pickerStartShow: false,
				pickerEndShow: false,
				dateS: '',
				dateE: '',
				startDateS: '',
				startDateE: '',
				endDateS: '',
				endDateE: '',
				startTime: '',
				endTime: '',
				alertMsg: '',
				industryIds: [],
				industryList: [],
				dataItem: [],
				sampleRoomTypeList: [{
						id: 'USA',
						name: '毛坯房'
					},
					{
						id: 'CHN',
						name: '精装房',
					},
					{
						id: 'BRA',
						name: '品牌联盟'
					},
					{
						id: 'JPN',
						name: '底商门脸房'
					}
				], //样板间类型
				sampleRoomIds: '', //选中的样板间类型
				fileMap: {},
				resID: '',
				items3: [],
				// items3: [{
				// 		id: 'kt',
				// 		name: '空调',
				// 		imgs: []
				// 	}
				// 	,
				// 	{
				// 		id: 'cd',
				// 		name: '厨电',
				// 		imgs: []
				// 	}
				// 	,
				// 	{
				// 		id: 'rsq',
				// 		name: '热水器',
				// 		imgs: []
				// 	},
				// 	{
				// 		id: 'bx',
				// 		name: '冰箱',
				// 		imgs: []
				// 	},
				// 	{
				// 		id: 'lg',
				// 		name: '冷柜',
				// 		imgs: []
				// 	}
				// 	,
				// 	{
				// 		id: 'xyj',
				// 		name: '洗衣机',
				// 		imgs: []
				// 	}
				// 	,
				// 	{
				// 		id: 'cdd',
				// 		name: '彩电',
				// 		imgs: []
				// 	}
				// ]
			};
		},
		onLoad(option) {
			// alert(option.id)
			this.hmcid = option.id
			if (this.industryIds.length > 0) {
				var item = {
					id: '0',
					name: '样板间',
					imgs: []
				}
				this.industryList.push(item)
			}
			for (var i = 0; i < this.industryIds.length; i++) {
				this.items3.forEach(item => {
					if (this.industryIds[i] == item.id) {
						this.industryList.push(item)
					}
				})
			}
			this.getIndustryList();

		},
		computed: {
			...mapState('haierHouse', ['choosedLeader']),
			// 初始化产业多选框数组
			checkedIndustry() {
				const checkedIndustryTemp = this.industryIds.map(v => {
					const checkedItem = this.items3.find(item => item.id === v);
					return {
						id: v,
						name: checkedItem ? checkedItem.name : ''
					};
				});
				checkedIndustryTemp.length && (checkedIndustryTemp.unshift({
					id: 'ybj',
					name: '样板间'
				}));
				return checkedIndustryTemp;
			}
		},
		methods: {
			// chooseLeader() {
			// 	//选择负责人
			// 	uni.navigateTo({
			// 		url: '/pages/haierHouse/ChooseLeader'
			// 	});
			// },
			showMessage() {
				this.middle = true
			},
			toggleTab() {
				this.$refs.picker.show();
			},
			onConfirm(val) {
				console.log(val);
				this.localName = val.result
			},
			genFileMap() {
				var temp = [];
				let a = [{
					id: 'ybj',
					name: '样板间',
					imgs: []
				}]
				temp = a.concat(this.items3)
				//模拟延时请求,动态添加上传数据保存的list
				setTimeout(() => {
					temp.forEach(v => {
						this.$set(this.fileMap, v.id, []);
					});
				});
			},
			//获取产业列表
			getIndustryList() {
				this.hGet('buildHouse/proGrpList', {}).then(data => {
					if (data) {
						data.data.forEach(v => {
							const temp = {
								id: v.productCode,
								name: v.productName,
								imgs: []
							}
							this.items3.push(temp)

						})
					}
					this.genFileMap();
				})
			},
			radioChange(data) {},
			array_contain(array, obj) {
				for (var i = 0; i < array.length; i++) {
					if (array[i] == obj) //如果要求数据类型也一致，这里可使用恒等号===
						return true;
				}
				return false;
			},
			removeByValue(arr, val) {
				for (var i = 0; i < arr.length; i++) {
					if (arr[i] == val) {
						arr.splice(i, 1);
						break;
					}
				}
			},
			// 多选框选中
			checkboxChange(data) {
				if ((data.value.length == 1) && (this.industryList.length == 0)) {
					var item = {
						id: 'ybj',
						name: '样板间',
						imgs: []
					}
					this.industryList.push(item)
				}
				this.dataItem = this.industryList;
				this.industryList = [];
				var temp = [];
				for (var i = 0; i < data.value.length; i++) {
					this.items3.forEach(item => {
						if (data.value[i] == item.id) {
							temp.push(item)
						}
						if (!this.array_contain(this.dataItem, item)) {
							this.dataItem.push(item)
						}
					})
				}
				if (temp.length == 0) {
					return
				}

				if (data.value.length === 1) {
					this.industryList.push(this.dataItem[0]);
				}

				for (var i = 0; i < temp.length;

					i++) {
					this.dataItem.forEach(item => {
						if (temp[i].id == item.id) {
							this.industryList.push(item)
						}
					})
				}
			},
			// 图片上传
			onSuccess({
				data,
				fileList
			}) {
				if (!data) {
					this.alertMsg = data.msg
					this.alert = true
				} else {
					console.log(data)
					fileList.push(data.data.imageUrl);
				}
			},
			onError(err) {
				this.toastShow(err)
			},
			onRemove({
				index,
				fileList
			}) {
				fileList.splice(index, 1);
			},

			telEnd() {
				if (!/^1[34578]\d{9}$/.test(this.tel)) {
					this.alert = true
					this.tel = ''
					this.alertMsg = '请输入正确的手机号'
				}
			},
			nameEnd() {},
			blockEnd() {},
			areaEnd() {},
			addressEnd() {},
			rentEnd() {},
			startTimeSelect() {
				this.pickerStartShow = true;
			},
			endTimeSelect() {},
			bindDateChangeS: function(e) {
				this.startTime = e.target.value
				if (this.endTime == '') {
					return
				}
				if (this.CompareDate(this.startTime, this.endTime)) {
					uni.showModal({
						title: '提示',
						content: '结束日期必须大于开始日期',
						success: function(res) {
							if (res.confirm) {} else if (res.cancel) {}
						}
					});
					this.endTime = '';
				}
			},
			bindDateChangeE: function(e) {
				this.endTime = e.target.value
				if (this.CompareDate(this.startTime, this.endTime)) {
					uni.showModal({
						title: '提示',
						content: '结束日期必须大于开始日期',
						success: function(res) {
							if (res.confirm) {} else if (res.cancel) {}
						}
					});
					this.endTime = '';
				}
			},
			CompareDate(d1, d2) {
				return ((new Date(d1.replace(/-/g, "\/"))) >= (new Date(d2.replace(/-/g, "\/"))));
			},
			hidePopup() {
				this.middle = false;
			},
			hidePopupAlert() {
				this.alert = false;
			},
			// 显示弹窗
			toastShow(title) {
				uni.showToast({
					title: title,
					duration: 3000,
					icon: 'none'
				});
			},
			// 下一步
			nextPage() {
				// 非空判断
				if (this.blockName === '') {
					this.toastShow('请输入筑家店名')
					return
				}
				if (this.sampleRoomIds.length === 0) {
					this.toastShow('请选择筑家类型')
					return
				}
				if (this.roomArea === '') {
					this.toastShow('请输入样板间面积')
					return
				}
				if (this.localName === '') {
					this.toastShow('请选择地区')
					return
				}
				if (this.address === '') {
					this.toastShow('请输入详细地址')
					return
				}
				if (this.rent === '') {
					this.toastShow('请输入租金')
					return
				}
				if (this.startTime === '') {
					this.toastShow('请选择开始日期')
					return
				}
				if (this.endTime === '') {
					this.toastShow('请选择结束日期')
					return
				}
				if (this.industryIds.length === 0) {
					this.toastShow('请选择产业')
					return
				}
				
				const LIST = []
				if (this.fileMap !== {}) {
					for (var i = 0; i < this.checkedIndustry.length; i++) {
						for (var key in this.fileMap) {
							if (this.checkedIndustry[i].id == key) {
								let aa = {
									id: key,
									name: this.checkedIndustry[i].name,
									imgs: this.fileMap[key]
								}
								// this.checkedIndustry[i].imgs = this.fileMap[key]
								LIST.push(aa)
							}
						}
					}
				}
				this.hPost('buildHouse/saveShopInfo', {
						createBy: this.hmcid,
						// createBy: 'Z0000001',
						constructionDirector: this.name,
						provinces: this.localName,
						buildAreaName: this.blockName,
						phoneNumber: this.tel,
						templateType: this.sampleRoomIds,
						area: this.roomArea,
						address: this.address,
						rent: this.rent,
						leaseBegin: this.startTime,
						leaseEnd: this.endTime,
						inIndustryPic: JSON.stringify(LIST)
					}

				).then(data => {
					if (data.code === 1) {
						uni.showToast({
							title: '信息上传成功',
							duration: 3000,
						});
					} else {
						uni.showToast({
							title: data.data,
							duration: 3000,
							icon: 'none'
						});
						return
					}
					uni.navigateTo({
						url: '/pages/haierHouse/HaierHouseApplySecondPage?id=' + data.data + '&hmcid=' + this.hmcid,
					});

				})


			}
		}
	}
</script>
<style scoped lang="scss">
	.uni-input {
		// background-color: aquamarine;
		margin-left: 50upx !important;
		font-size: 32upx;
		width: 300upx !important;
	}

	.uni-input-time {
		margin-left: 50upx !important;
		font-size: 28upx;
		width: 162upx;
	}

	.uni-input-time1 {
		margin-left: 50upx !important;
		font-size: 28upx;
		width: 200upx !important;
	}

	.uni-input-picker {
		margin-left: 10upx !important;
		font-size: 32upx;
		width: 150upx
	}

	.popupView {
		height: 250upx;
		width: 500upx;
		border-radius: 8upx;
		background-color: #FFFFFF;
	}

	.popupView-u {
		text-align: left;
		width: 420upx;
		margin-left: 40upx;
		margin-top: 24upx;
		color: #000000;
		font-size: 32upx;
		height: 120upx;
		margin-bottom: 16upx;
	}

	.popupView-b {
		text-align: center;
		width: 500upx;
		margin-top: 24upx;
		color: #4A90E2;
		font-size: 30upx;
		height: 88upx;
		line-height: 88upx;
		margin-bottom: 0;
		border-top: 1upx solid #DFDFDF;
	}

	.uni-list-cell-db-start {
		position: absolute;
		left: 150upx;
		width: 100upx;
		z-index: 100;
	}

	.uni-list-cell-db-end {
		position: absolute;
		right: 150upx;
		width: 100upx;
		z-index: 100;
	}

	.pickerClass {
		position: absolute;
		width: 450upx;
		margin-left: 160upx;
		height: 80upx;
		z-index: 10
	}
</style>
