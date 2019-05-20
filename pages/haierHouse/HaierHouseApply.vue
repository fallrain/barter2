<template>
	<view>
		<view class="bt2-houseApply-card">
			<p class="bt2-houseApply-card-title">门店基础信息</p>
			<ul class="bt2-houseApply-card-cnt">
				<li class="bt2-houseApply-card-item">
					<b-item :required="true" title="筑家负责人" :right="false" :rightClick="chooseLeader"><template v-slot:middle><input
							 class="uni-input" placeholder-style="color:#999999;line-height:56upx" @blur="nameEnd()" v-model="name"
							 placeholder="请选择一站驻家负责人" /></template></b-item>
				</li>
				<li class="bt2-houseApply-card-item uni-column"><text class="bt2-houseApply-card-item-name">手机号码</text><input class="uni-input"
					 placeholder-style="color:#999999;line-height:56upx" type="number" maxlength="11" @blur="telEnd()" v-model="tel"
					 placeholder="请输入" /></li>
			</ul>
		</view>
		<view class="bt2-houseApply-card">
			<p class="bt2-houseApply-card-title">一站筑家信息</p>
			<ul class="bt2-houseApply-card-cnt">
				<li class="bt2-houseApply-card-item"><span class="bt2-houseApply-card-item-star">*</span>
				<text class="bt2-houseApply-card-item-name">样板间类型</text></li>
				<li class="bt2-houseApply-card-item-mult bt2-houseApply-card-item">
					<b-multrow-radio :list="sampleRoomTypeList" :checkedId.sync="sampleRoomIds"></b-multrow-radio>
				</li>
				<li class="bt2-houseApply-card-item uni-column"><span class="bt2-houseApply-card-item-star">*</span><text class="bt2-houseApply-card-item-name">样板间面积</text><input
					 class="uni-input" placeholder-style="color:#999999;line-height:56upx" placeholder="请输入" v-model="roomArea" @blur="areaEnd()" type="digit"/>
					<p class="bt2-houseApply-card-item-unit">平米</p>
				</li>
				<li class="bt2-houseApply-card-item uni-column"><span class="bt2-houseApply-card-item-star">*</span>
				<text class="bt2-houseApply-card-item-name">详细地址</text>
				<input class="uni-input" placeholder-style="color:#999999;line-height:56upx" placeholder="请输入" v-model="address" @blur="addressEnd()"/></li>
				<li class="bt2-houseApply-card-item uni-column"><span class="bt2-houseApply-card-item-star">*</span>
				<text class="bt2-houseApply-card-item-name">样板间租金</text>
				<input class="uni-input" placeholder-style="color:#999999;line-height:56upx" placeholder="请输入" v-model="rent" @blur="rentEnd()" type="digit"/>
					<p class="bt2-houseApply-card-item-unit">元/月</p>
				</li>
				<li class="bt2-houseApply-card-item uni-column"><span class="bt2-houseApply-card-item-star">*</span><text class="bt2-houseApply-card-item-name">租赁时间</text>
					<view class="uni-list-cell-db-start">
						<picker mode="date" :value="dateS" :start="startDateS" :end="endDateS" @change="bindDateChangeS">
							<view class="uni-input"> {{dateS}}</view>
						</picker>
					</view><input class="uni-input-time" placeholder-style="color:#999999;line-height:56upx" placeholder="开始时间" @click="startTimeSelect()"
					 v-model="startTime" />
					<p style="margin-left: 20upx;">至</p>
					<view class="uni-list-cell-db-end">
						<picker mode="date" :value="dateE" :start="startDateE" :end="endDateE" @change="bindDateChangeE">
							<view class="uni-input"> {{dateE}}</view>
						</picker>
					</view><input class="uni-input-time" placeholder-style="color:#999999;line-height:56upx" placeholder="结束时间" @click="endTimeSelect()"
					 v-model="endTime" />
				</li>
				<li class="bt2-houseApply-card-item"><span class="bt2-houseApply-card-item-star">*</span>
				<text class="bt2-houseApply-card-item-name">入驻产业</text></li>
				<li class="bt2-houseApply-card-item-mult bt2-houseApply-card-item">
					<b-multrow-checkbox :list="items3" :checkedIds.sync="industryIds" :checkboxChange1="checkboxChange"></b-multrow-checkbox>
				</li>
			</ul>
			<view class="mt16" v-for="(industry,index) in checkedIndustry" :key="index">
				<ul class="bt2-houseApply-card-cnt">
					<li class="bt2-houseApply-card-item"> {{industry.name}}</li>
					<ss-upload-image :url="url" :file-list="fileMap[industry.id]" :name="imgName" :formData="industry" @on-success="onSuccess" @on-error="onError"
					 @on-remove="onRemove" />
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
		<uni-popup :show="middle" type="middle" @hidePopup="hidePopup" button-mode="right">
			<view class="popupView">
				<p class="popupView-u">一站筑家负责人负责一站筑家小区客户，客户扫描活动二维码，进入筑家负责人的用户跟进</p>
				<p class="popupView-b" @click="hidePopup">知道了</p>
			</view>
		</uni-popup>
		<uni-popup :show="alert" type="middle" mode="fixed" :msg=alertMsg @hidePopup="hidePopupAlert"></uni-popup>
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
				url: this.envConfig.domain + 'barter-builthouse/buildHouse/uploadImage',
				fileList: [],
				current: 1,
				name: '',
				tel: '',
				roomArea: '',
				rent: '',
				address: '',
				middle: true,
				alert:false,
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
				alertMsg:'',
				industryIds: [],
				industryList: [],
				dataItem: [],
				sampleRoomTypeList: [
					{
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
				],//样板间类型
				sampleRoomIds:'',//选中的样板间类型
				fileMap: {},
				items3 : [],
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
		}	,
		onLoad() {
			if (this.industryIds.length > 0) {
				var item = {
					id: '0',
					name: '样板间',
					imgs: []
				}
				this.industryList.push(item)
			}

			for (var i = 0; i < this.industryIds.length;

				i++) {
				this.items3.forEach(item => {
					if (this.industryIds[i] == item.id) {
						this.industryList.push(item)
					}
				})
			}
			this.getIndustryList();

		}	,
		computed: {
		...mapState('haierHouse', ['choosedLeader']),
			checkedIndustry() {
				const checkedIndustryTemp = this.industryIds.map(v => {
						const checkedItem = this.items3.find(item => item.id === v);
						return {
							id: v,
							name: checkedItem ? checkedItem.name : ''
						};
					}
				);

				checkedIndustryTemp.length && (checkedIndustryTemp.unshift({
						id: 'ybj',
						name: '样板间'
					}

				));
				return checkedIndustryTemp;
			}
		}
		,
		methods: {
			chooseLeader() {
				/*选择负责人*/
				uni.navigateTo({
						url: '/pages/haierHouse/ChooseLeader'
					});
			}	,
			genFileMap() {
				var temp = [];
					let a = [{
					id:'ybj',
					name:'样板间',
					imgs:[]
				}]
				temp = a.concat(this.items3)
				//模拟延时请求,动态添加上传数据保存的list
				setTimeout(() => {
						temp.forEach(v => {
								this.$set(this.fileMap, v.id, []);
							});
					}
				);
			},
			getIndustryList(){
					this.hGet('barter-builthouse/buildHouse/proGrpList', {
        }).then(data => {
          if (data) {
						data.forEach(v => {
							const temp = {
								id:v.productCode,
								name:v.productName,
								imgs:[]
							}
							this.items3.push(temp)

						})
          }
						this.genFileMap();
        })
			},
			radioChange(data) {

			},
			array_contain(array, obj) {
				for (var i = 0; i < array.length;
					i++) {
					if (array[i] == obj) //如果要求数据类型也一致，这里可使用恒等号===
						return true;
				}
				return false;
			},
			removeByValue(arr, val) {
				for (var i = 0; i < arr.length;
					i++) {
					if (arr[i] == val) {
						arr.splice(i, 1);
						break;
					}
				}
			},
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
				for (var i = 0; i < data.value.length;
					i++) {
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
			}
			,
			onSuccess({
					data,
					fileList
				}
			) {
				console.log(data)
				fileList.push(data.data.imageUrl);
			},
			onError() {},
			onRemove({
					index,
					fileList
				}

			) {
				fileList.splice(index, 1);
			},
			telEnd() {
				if(this.tel === ''){
					this.alert = true
					this.alertMsg = '请输入手机号'
				}
				 if (!/^1[34578]\d{9}$/.test(this.tel)) {
        	this.alert = true
					this.alertMsg = '请输入正确的手机号'
      }
			},
			nameEnd(){
				if(this.name === ''){
					this.alert = true
					this.alertMsg = '请输入筑家负责人'
				}
			},
			areaEnd(){
				if(this.area === ''){
					this.alert = true
					this.alertMsg = '请输入面积'
				}
			},
			addressEnd(){
				if(this.address === ''){
					this.alert = true
					this.alertMsg = '请输入地址'
				}
			},
			rentEnd(){
				if(this.rent === ''){
					this.alert = true
					this.alertMsg = '请输入租金'
				}
			},
			startTimeSelect() {
				this.pickerStartShow = true;
			},


			endTimeSelect() {},
			bindDateChangeS: function(e) {
					this.startTime = e.target.value
				},
			bindDateChangeE: function(e) {
					this.endTime = e.target.value
					if (this.CompareDate(this.startTime, this.endTime)) {
						uni.showModal({
								title: '提示',
								content: '开始时间不能小于开始时间',
								success: function(res) {
									if (res.confirm) {} else if (res.cancel) {}
								}
							});
							this.endTime = '';
					}
				},
			CompareDate(d1, d2) {
				return ((new Date(d1.replace(/-/g, "\/"))) > (new Date(d2.replace(/-/g, "\/"))));
			},
			hidePopup() {
				this.middle = false;
			},
			hidePopupAlert(){
				this.alert = false;
			},
			nextPage() {
				if(this.name === ''){
						this.alertMsg = "请输入筑家负责人"
						this.alert = true
						return
				}
				if(this.tel === ''){
						this.alertMsg = "请输入手机号"
						this.alert = true
						return
				}
				if(this.roomArea === ''){
						this.alertMsg = "请输入房间面积"
						this.alert = true
						return
				}
				if(this.address === ''){
						this.alertMsg = "请输入详细地址"
						this.alert = true
						return
				}
				if(this.rent === ''){
						this.alertMsg = "请输入租金"
						this.alert = true
						return
				}
				if(this.startTime === ''){
					this.alertMsg = "请输入开始时间"
					this.alert = true
						return
				}
				if(this.endTime === ''){
					this.alertMsg = "请输入结束时间"
					this.alert = true
						return
				}

				const LIST = []
				if(this.fileMap !== {}){
				for (var i = 0; i < this.checkedIndustry.length; i++) {
					for (var key in this.fileMap) {
						if (this.checkedIndustry[i].id == key) {
							let aa = {
								id:key,
								imgs:this.fileMap[key]
							}
							// this.checkedIndustry[i].imgs = this.fileMap[key]
							LIST.push(aa)
						}
					}
				}
			}

				this.hGet('barter-builthouse/buildHouse/saveShopInfo', {
						createBy: this.name,
						constructionDirector: this.name,
						phoneNumber: this.tel,
						templateType: 1,
						area: this.roomArea,
						address: this.address,
						rent: this.rent,
						leaseBegin: this.startTime,
						leaseEnd: this.endTime,
						inIndustryPic: JSON.stringify(LIST)
					}

				).then(data => {
						if (data) {
							console.log(data)
						}
					})

				uni.navigateTo({
						url: '/pages/haierHouse/HaierHouseApplySecondPage'
					}

				);
			}
		}
	}
</script>
<style scoped lang="scss">
	.uni-input {
		// background-color: aquamarine;
		margin-left: 50upx !important;
		font-size: 28upx;
	}

	.uni-input-time {
		margin-left: 50upx !important;
		font-size: 28upx;
		width: 160upx;
		// background-color: red
	}

	.uni-input-picker {
		margin-left: 10upx !important;
		font-size: 28upx;
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
		font-size: 28upx;
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
		z-index: 1000;
	}

	.uni-list-cell-db-end {
		position: absolute;
		right: 150upx;
		width: 100upx;
		z-index: 1000;
	}
</style>
