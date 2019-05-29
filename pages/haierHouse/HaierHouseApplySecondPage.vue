<template>
	<view>
		<view class="bt2-houseApply-card">
			<li class="bt2-houseApply-card-item uni-column">
				<p class="bt2-houseApply-card-title">覆盖小区信息</p>
			</li>
			<ul class="bt2-houseApply-card-cnt">
				<li class="bt2-houseApply-card-item">
					<text class="bt2-houseApply-card-item-name">小区名称</text>
					<input class="uni-input-areaName" placeholder-style="color:#999999;line-height:56upx;font-size:32upx" maxlength="20"
					 @blur="coverEnd()" v-model="areaName" placeholder="请输入小区名称" v-reset-input />
				</li>
				<view class="uni-list">
				</view>
				<li class="bt2-houseApply-card-item uni-column">
					<text class="bt2-houseApply-card-item-name">选择地区</text>
					<input class="uni-input-areaName" placeholder-style="color:#999999;line-height:56upx;font-size:32upx" maxlength="20"
					 v-model="areaLocalName.result" placeholder="请选择地区" v-reset-input />
					<view @click="toggleTab('B')" class="pickerClass"></view>
					<w-picker mode="region" :defaultVal="defaultVal" @confirm="onConfirm" ref="pickerB" themeColor="#4A90E2"
					 :choosedVal.sync="areaLocalName"></w-picker>
				</li>
				<li class="bt2-houseApply-card-item uni-column">
					<text class="bt2-houseApply-card-item-name">小区地址</text>
					<input class="uni-input-address" placeholder-style="color:#999999;line-height:56upx;font-size:32upx" maxlength="20"
					 @blur="addressEnd(0)" v-model="areaAddress" placeholder="请输入详细地址" v-reset-input />
					<!-- <view class="bt2-myhouse-card-cnt-opt-location" @click="locationAddress(0)">
						<img src="@/static/img/haierHouse/Icons／location@2x.png">
					</view> -->
				</li>
				<li class="bt2-houseApply-card-item">
					<text class="bt2-houseApply-card-item-name">小区户型</text>
				</li>

				<li class="bt2-houseApply-card-item-mult bt2-houseApply-card-item">
					<b-multrow-checkbox :list="items" :checkedIds.sync="areaApartmentIds" :checkboxChange="checkboxChangeArea"></b-multrow-checkbox>
				</li>

	<!-- 			<li class="bt2-houseApply-card-item uni-column">
					<text class="bt2-houseApply-card-item-name">小区规模</text>
					<input class="uni-input-area" placeholder-style="color:#999999;line-height:56upx;font-size:32upx;margin-top:1upx"
					 placeholder="请输入" v-model="areaStartArea" type="digit" @blur="areaStart(0)" v-reset-input />
					<p>至</p>
					<input class="uni-input-area" placeholder-style="color:#999999;line-height:56upx;font-size:32upx;margin-top:1upx"
					 placeholder="请输入" v-model="areaEndArea" type="digit" @blur="areaEnd(0)" v-reset-input />
					<p class="bt2-houseApply-card-item-unit">户</p>
				</li> -->
				<li class="bt2-houseApply-card-item uni-column">
					<text class="bt2-houseApply-card-item-name">小区规模</text>
					<input class="uni-input" placeholder-style="color:#999999;line-height:56upx;font-size:32upx" placeholder="请输入小区规模"
					 @click="sizeEnd(0)" v-model="areaSize" type="digit" v-reset-input />
					<p class="bt2-houseApply-card-item-unit">户</p>
				</li>
				<li class="bt2-houseApply-card-item uni-column">
					<text class="bt2-houseApply-card-item-name">均价</text>
					<input class="uni-input" placeholder-style="color:#999999;line-height:56upx;font-size:32upx" placeholder="请输入小区均价"
					 v-model="areaAvePrice" type="digit" v-reset-input />
					<p class="bt2-houseApply-card-item-unit">元/平米</p>
				</li>
			</ul>
		</view>

		<view class="bt2-houseApply-card" v-for="(x,index) in coverArea" :key="index">
			<li class="bt2-houseApply-card-item uni-column">
				<p class="bt2-houseApply-card-title">覆盖小区信息</p>
				<p class="bt2-houseApply-card-delete" @click="deleteCover(index)">删除</p>
			</li>
			<ul class="bt2-houseApply-card-cnt">
				<li class="bt2-houseApply-card-item">
					<text class="bt2-houseApply-card-item-name">小区名称</text>
					<input class="uni-input" placeholder-style="color:#999999;line-height:56upx;font-size:32upx" maxlength="20" @blur="coverAddEnd(x)"
					 v-model="x.name" placeholder="请输入小区名称" v-reset-input />
				</li>
				<view class="uni-list">
				</view>
				<li class="bt2-houseApply-card-item uni-column">
					<text class="bt2-houseApply-card-item-name">选择地区</text>
					<input class="uni-input" placeholder-style="color:#999999;line-height:56upx;font-size:32upx" maxlength="20"
					 v-model="x.localName.result" placeholder="请选择地区" v-reset-input />
					<view @click="toggleTab(index)" class="pickerClass"></view>
					<w-picker mode="region" :defaultVal="defaultVal" :choosedVal.sync="x.localName" @confirm="onConfirm" :ref="'picker'+index"
					 themeColor="#4A90E2"></w-picker>
				</li>
				<li class="bt2-houseApply-card-item uni-column">
					<text class="bt2-houseApply-card-item-name">小区地址</text>
					<input class="uni-input-address" placeholder-style="color:#999999;line-height:56upx;font-size:32upx" maxlength="20"
					 @blur="addressEnd(x.id)" v-model="x.address" placeholder="请输入详细地址" v-reset-input />
					<!-- 	<view class="bt2-myhouse-card-cnt-opt-location" @click="locationAddress(x.id)">
						<img src="@/static/img/haierHouse/Icons／location@2x.png">
					</view> -->
				</li>
				<li class="bt2-houseApply-card-item">
					<text class="bt2-houseApply-card-item-name">小区户型</text>
				</li>

				<li class="bt2-houseApply-card-item-mult bt2-houseApply-card-item">
					<b-multrow-checkbox :list="items" :checkedIds.sync="x.apartmentIds" :checkboxChange="checkboxChangeAdd"></b-multrow-checkbox>
				</li>

				<!-- <li class="bt2-houseApply-card-item uni-column">
					<text class="bt2-houseApply-card-item-name">小区规模</text>
					<input class="uni-input-area" placeholder-style="color:#999999;line-height:56upx;margin-top:1upx;font-size:32upx"
					 placeholder="请输入" v-model="x.startArea" type="digit" @blur="areaStart(x.id)" v-reset-input />
					<p>至</p>
					<input class="uni-input-area" placeholder-style="color:#999999;line-height:56upx;margin-top:1upx;font-size:32upx"
					 placeholder="请输入" v-model="x.endArea" type="digit" @blur="areaEnd(x.id)" v-reset-input />
					<p class="bt2-houseApply-card-item-unit">户</p>
				</li> -->
				<li class="bt2-houseApply-card-item uni-column">
					<text class="bt2-houseApply-card-item-name">小区规模</text>
					<input class="uni-input" placeholder-style="color:#999999;line-height:56upx;font-size:32upx" placeholder="请输入小区规模"
					 @click="sizeEnd(1)" v-model="x.size" type="digit" v-reset-input />
					<p class="bt2-houseApply-card-item-unit">户</p>
				</li>
				<li class="bt2-houseApply-card-item uni-column">
					<text class="bt2-houseApply-card-item-name">均价</text>
					<input class="uni-input" placeholder-style="color:#999999;line-height:56upx;font-size:32upx" placeholder="请输入小区均价"
					 v-model="x.avePrice" type="digit" v-reset-input />
					<p class="bt2-houseApply-card-item-unit">元/平米</p>
				</li>
			</ul>
		</view>
		<ul class="bt2-houseApply-card-cnt-add">
			<li class="bt2-houseApply-card-item uni-column" @click="addCover()">
				<!-- <img src="@/static/img/haierHouse/Icons／add@2x.png" style="width:36upx;"> -->
				<p class="bt2-houseApply-card-add">新增小区</p>
			</li>
		</ul>
		<view class="bt2-houseApply-card">
			<view class="mt16" v-for="(area,index) in coverList" :key="index">
				<ul class="bt2-houseApply-card-cnt">
					<li class="bt2-houseApply-card-item">
						{{area.name}}照片
					</li>
					<ss-upload-image :url="url" :file-list="fileMap[area.id]" :name="imgName" :formData="area" @on-success="onSuccess"
					 @on-error="onError" @on-remove="onRemove" />
				</ul>
			</view>
		</view>
		<view class="bt2-houseApply-btn">
			<p class="bt2-houseApply-btn-p" @click="submitInfo()">提交</p>
		</view>
		<uni-popup :show="alert" type="middle" mode="fixed" :msg=alertMsg @hidePopup="hidePopupAlert" :h5-top="h5top"></uni-popup>
	</view>
</template>

<script>
	import ssUploadImage from '@/components/ss-upload-image/ss-upload-image.vue';
	import UniIcon from '@/components/uni-icon/uni-icon.vue';
	import BMultrowCheckbox from "../../components/common/BMultrowCheckbox";
	import uniPopup from "@/components/uni-popup/uni-popup"
	import wPicker from "@/components/w-picker/w-picker.vue";

	export default {
		name: "HaierHouseApplySecondPage",
		components: {
			ssUploadImage,
			UniIcon,
			BMultrowCheckbox,
			uniPopup,
			wPicker
		},
		//todo 小区照片显示  添加小区提示  图片为空
		data() {
			return {
				localName: [],
				url: this.envConfig.domain + 'buildHouse/uploadImage',
				// url: 'http://hzytest.haier.com/builtHouse/buildHouse/uploadImage',
				imgName: 'file',
				ID: '',
				h5top: true,
				areaSize:'',
				fileList: [],
				alert: false,
				alertMsg: '',
				address: '',
				areaName: '',
				areaApartmentIds: [],
				areaAddress: '',
				areaEndArea: '',
				areaLocalName: [],
				areaStartArea: '',
				areaAvePrice: '',
				storeName: '',
				startArea: '',
				endArea: '',
				avePrice: '',
				pickerShow: false,
				nums: 0,
				apartmentIds: [],
				coverArea: [],
				coverAS: [],
				tempAreaName: '',
				hmcid: '',
				coverList: [{
					id: 0,
					name: '',
					imgs: [],
					localName: [],
					address: '',
					apartmentIds: '',
					startArea: '',
					endArea: '',
					avePrice: '',
					size:''
				}],
				fileMap: {},
				addPromation: false,
				items: [{
						id: '1',
						name: '一居室'
					},
					{
						id: '2',
						name: '两居室',
					},
					{
						id: '3',
						name: '三居室'
					},
					{
						id: '4',
						name: '四室及以上'
					},
					{
						id: '5',
						name: '别墅'
					},
					{
						id: '6',
						name: '复式LOFT'
					},
					{
						id: '7',
						name: '其他'
					}
				]

			};
		},
		onLoad(option) {
			// alert(option.id + option.hmcid)
			this.ID = option.id
			this.hmcid = option.hmcid
			this.genFileMap()
		},
		computed: {
			defaultVal() {
				return [0, 0, 0]
			}
		},
		methods: {
			//picker
			toggleTab(index) {
				let ref;
				if (typeof index === 'number') {
					ref = this.$refs['picker' + index][0];
				} else {
					ref = this.$refs['picker' + index];
				}
				ref.show();
			},
			onConfirm(val, b) {
				console.log(val);
			},
			//初始化存储map
			genFileMap() {
				const LIST = [];
				for (var i = 0; i < 100; i++) {
					const aa = {
						id: i,
						name: '',
						imgs: [],
						localName: [],
						address: '',
						apartmentIds: [],
						startArea: '',
						endArea: '',
						avePrice: '',
						size:''
					}
					LIST.push(aa);
				}
				//模拟延时请求,动态添加上传数据保存的list
				setTimeout(() => {
					LIST.forEach(v => {
						this.$set(this.fileMap, v.id, []);
					});
				});
			},
			//复选框选择
			checkboxChange(data) {},
			checkboxChangeArea(data) {},
			checkboxChangeAdd(data) {},
			//图片上传
			onSuccess({
				data,
				fileList
			}) {
				if (data.code === 0) {
					this.alertMsg = data.msg
					this.alert = true
				} else {
					console.log(data)
					fileList.push(data.data.imageUrl);
				}
			},
			onRemove({
				index,
				fileList
			}) {
				fileList.splice(index, 1);
			},
			onError() {
				this.toastShow(err)
			},
			// 弹窗显示
			hidePopupAlert() {
				this.alert = false;
			},

			//input输入*************************************
			addressEnd(index) {
				if (index === 0) {
					this.coverList[0].address = this.areaAddress
				}
			},
			sizeEnd(index){
				if(index === 0){
					this.coverList[0].size = this.areaSize
				}
			},
// 			areaStart(index) {
// 				if (index === 0) {
// 					this.coverList[0].startArea = this.areaStartArea
// 				}
// 				if (parseFloat(this.coverList[index].startArea) > parseFloat(this.coverList[index].endArea)) {
// 					this.toastShow('小区规模户数输入有误')
// 					if (index === 0) {
// 						this.areaStartArea = ''
// 					}
// 					this.coverList[index].startArea = ''
// 				} else if (parseFloat(this.coverList[index].startArea) === parseFloat(this.coverList[index].endArea)) {
// 					this.toastShow('小区规模户数输入有误')
// 					if (index === 0) {
// 						this.areaStartArea = ''
// 					}
// 					this.coverList[index].startArea = ''
// 				} else {
// 
// 				}
// 			},
// 
// 			areaEnd(index) {
// 				if (index === 0) {
// 					this.coverList[0].endArea = this.areaEndArea
// 				}
// 				if (parseFloat(this.coverList[index].startArea) > parseFloat(this.coverList[index].endArea)) {
// 					this.toastShow('小区规模户数输入有误')
// 					if (index === 0) {
// 						this.areaEndArea = ''
// 					}
// 					this.coverList[index].endArea = ''
// 				} else if (parseFloat(this.coverList[index].startArea) === parseFloat(this.coverList[index].endArea)) {
// 					this.toastShow('小区规模户数输入有误')
// 					if (index === 0) {
// 						this.areaEndArea = ''
// 					}
// 					this.coverList[index].endArea = ''
// 				} else {
// 
// 				}
// 			},
			coverEnd() {
				if (this.areaName != '') {
					if (this.tempAreaName === this.areaName) {
						return
					}else{		
					this.coverList[0].name = this.areaName
					this.tempAreaName = this.areaName
					this.addPromation = true;
					}
				}else{
					this.addPromation = false;
				}

			},
			coverAddEnd(x) {
				if (x.name != '') {
					const leng = this.coverList.length
					if (leng == this.coverArea.length) {
						let temp = this.coverArea[this.coverArea.length - 1]
						this.coverList.push(temp)
						this.addPromation = true
					} else {
						for (var i = 0; i < this.coverArea.length; i++) {
							if (this.coverArea[i].id == x.id) {
								this.coverArea[i].name = x.name
								this.coverArea[i].imgs = []
								this.coverArea[i].localName = x.localName
								this.coverArea[i].apartmentIds = x.apartmentIds
								this.coverArea[i].address = x.address
								this.coverArea[i].avePrice = x.avePrice
								this.coverArea[i].endArea = x.endArea
								this.coverArea[i].startArea = x.startArea
								this.coverArea[i].size = x.size
								return
							}
						}
					}
				}
			},
			// 添加小区
			addCover() {
				if (this.addPromation) {
					this.nums++;
					var item = {
						id: this.nums,
						name: '',
						imgs: [],
						localName: [],
						address: '',
						apartmentIds: [],
						startArea: '',
						endArea: '',
						avePrice: '',
						size:''
					}
					this.coverArea.push(item);
					this.addPromation = false;
				} else {
						this.toastShow("小区名不能为空")
				}
			},
			removeByValue(arr, val) {
				for (var i = 0; i < arr.length; i++) {
					if (arr[i] == val) {
						arr.splice(i, 1);
						break;
					}
				}
			},
			// 删除添加的小区
			deleteCover(index) {
				var delItem = {}
				this.coverList.forEach(item => {
					if (this.coverArea[index].name == item.name) {
						delItem = item
						return
					}
				})
				this.coverArea.splice(index, 1)
				this.removeByValue(this.coverList, delItem)
				this.addPromation = true;
			},
			// locationAddress(index) {
			// 	if(index == 0){
			// 		this.areaAddress = '青岛市崂山区海尔工业园'
			// 	}else{
			// 		this.coverList[index].address = '青岛市崂山区海尔工业园'
			// 	}

			// const longitude = ''
			// const latitude = ''
			// 		// 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
			// 		uni.getLocation({
			// 			type: 'wgs84',
			// 			success: function(res) {
			// 				this.hGet('buildHouse/getLocationByBaiduMap', {
			// 					longitude: longitude,
			// 					latitude: latitude,
			// 				}).then(data => {
			// 					if (data.code === '1') {
			// 						// this.areaAddress = data.data
			// 						this.coverList[index].address = data.data
			// 					}
			// 				})
			// 			}
			// 		})
			// },
			toastShow(title) {
				uni.showToast({
					title: title,
					duration: 3000,
					icon: 'none'
				});
			},
			// 提交信息
			submitInfo() {
				// 非空判断
				if (this.areaName === '') {
					this.toastShow('请输入小区名称')
					return
				}
				if (this.areaLocalName === '') {
					this.toastShow('请选择地区')
					return
				}
				if (this.areaAddress === '') {
					this.toastShow('请输入详细地址')
					return
				}
				// if (this.areaStartArea === '') {
				// 	this.toastShow('请输入最少户数')
				// 	return
				// }
				// if (this.areaEndArea === '') {
				// 	this.toastShow('请输入最多户数')
				// 	return
				// }
				if(this.areaSize == ''){
						this.toastShow('请输入小区规模')
					return
				}
				if (this.areaApartmentIds.length == 0) {
					this.toastShow('请选择户型')
					return
				}
				if (this.areaAvePrice === '') {
					this.toastShow('请输入均价')
					return
				}
				this.coverList[0].apartmentIds = this.areaApartmentIds
				this.coverList[0].localName = this.areaLocalName.result
				this.coverList[0].address = this.areaAddress
				this.coverList[0].startArea = this.areaStartArea
				this.coverList[0].endArea = this.areaEndArea
				this.coverList[0].avePrice = this.areaAvePrice
				this.coverList[0].size = this.areaSize
				const nameList = []
				const COVER = []
				for (var i = 0; i < this.coverList.length; i++) {
					if (this.coverList[i].address == '') {
						this.toastShow("请输入详细地址")
						return
					}
					if (this.coverList[i].localName == '') {
						this.toastShow("请选择地区")
						return
					}
					if (this.coverList[i].name == '') {
						this.toastShow("请输入小区名")
						return
					}
					if (this.coverList[i].rent == '') {
						this.toastShow("请输入租金")
						return
					}
					// if (this.coverList[i].startArea == '') {
					// 	this.toastShow("请输入最少户数")
					// 	return
					// }
					// if (this.coverList[i].endArea == '') {
					// 	this.toastShow("请输入最多户数")
					// 	return
					// }
					if (this.coverList[i].size == '') {
						this.toastShow("请输入小区规模")
						return
					}
					
					if (this.coverList[i].apartmentIds.length == 0) {
						this.toastShow("请选择户型")
						return
					}
					if (this.coverList[i].avePrice == '') {
						this.toastShow("请输入均价")
						return
					}
					for (var key in this.fileMap) {
						this.coverList[i].imgs = this.fileMap[key]
						if (this.coverList[i].id == key) {
							const templocal = this.coverList[i].localName.result
							this.coverList[i].localName = templocal
							this.coverList[i].imgs = this.fileMap[key]
							nameList.push(this.coverList[i].name);
						}
					}
				}
				const areaImg = this.coverList[0].imgs
				this.hPost('buildHouse/saveAreaInfo', {
					shopId: this.ID,
					createBy: this.hmcid,
					// createBy: 'Z0000001',
					buildFamilyName: this.storeName,
					detailAddress: this.address,
					coverageArea: JSON.stringify(nameList),
					communityFamily: JSON.stringify(this.apartmentIds),
					areaBegin: this.startArea,
					areaEnd: this.endArea,
					averagePrice: this.avePrice,
					communityPic: JSON.stringify(areaImg),
					coverageAreaPic: JSON.stringify(this.coverList),
					provinces: this.localName.result
				}).then(data => {
					console.log(data)
					if (data.msg === 'success') {
						uni.showToast({
							title: '信息上传成功',
							duration: 4000,
						});
						uni.reLaunch({
							url: '/pages/haierHouse/index'
						})
					} else {
						uni.showToast({
							title: data.msg,
							duration: 4000,
							icon: 'none'
						});
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.uni-input-address {
		margin-left: 50upx !important;
		font-size: 32upx;
		height: 56upx;
		line-height: 56upx;
		width: 430upx
	}

	.uni-input-area {
		margin-left: 50upx !important;
		font-size: 32upx;
		width: 140upx;
	}

	.uni-input-area1 {
		margin-left: 20upx !important;
		font-size: 32upx;
		width: 140upx;
	}

	.add-p {
		color: #1969C6;
		font-size: 28upx;
	}

	.bt2-myhouse-card-cnt-opt-location {
		img {
			width: 40upx;
			height: 40upx;
		}
	}

	.bt2-myhouse-card-cnt-opt-del {
		position: absolute;
		right: 30upx;

		img {
			width: 36upx;
			height: 36upx;
		}
	}

	.uni-input {
		width: 300upx;
	}

	.pickerClass {
		position: absolute;
		// background-color: red;
		width: 450upx;
		margin-left: 160upx;
		height: 80upx;
		z-index: 10
	}
</style>
