<template>
	<view>
		<view class="bt2-houseApply-card">
			<p class="bt2-houseApply-card-title">门店基础信息</p>
			<ul class="bt2-houseApply-card-cnt">
				<li class="bt2-houseApply-card-item">
					<b-item :required="true" title="筑家负责人" :right="false" :rightClick="chooseLeader"><template v-slot:middle><input
							 class="uni-input" placeholder-style="color:#999999;line-height:56upx" @blur="nameEnd()" v-model="choosedLeader.name"
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
				<li class="bt2-houseApply-card-item">
					<radio-group @change="radioChange" class="bt2-houseApply-card-radioGroup"><label class="bt2-houseApply-card-radioItem"
						 v-for="(item, index) in items1" :key="item.value">
							<radio :value="item.value" :checked="index === current" /><text class="bt2-houseApply-card-radioText">
								{{item.name}}</text></label></radio-group>
				</li>
				<li class="bt2-houseApply-card-item">
					<radio-group @change="radioChange" class="bt2-houseApply-card-radioGroup"><label class="bt2-houseApply-card-radioItem"
						 v-for="(item, index) in items2" :key="item.value">
							<radio :value="item.value" :checked="index === current" /><text class="bt2-houseApply-card-radioText">
								{{item.name}}
							</text></label></radio-group>
				</li>
				<li class="bt2-houseApply-card-item uni-column"><span class="bt2-houseApply-card-item-star">*</span><text class="bt2-houseApply-card-item-name">样板间面积</text><input
					 class="uni-input" placeholder-style="color:#999999;line-height:56upx" placeholder="请输入" v-model="roomArea" />
					<p class="bt2-houseApply-card-item-unit">平米</p>
				</li>
				<li class="bt2-houseApply-card-item uni-column"><span class="bt2-houseApply-card-item-star">*</span>
				<text class="bt2-houseApply-card-item-name">详细地址</text>
				<input class="uni-input" placeholder-style="color:#999999;line-height:56upx" placeholder="请输入" v-model="address" /></li>
				<li class="bt2-houseApply-card-item uni-column"><span class="bt2-houseApply-card-item-star">*</span>
				<text class="bt2-houseApply-card-item-name">样板间租金</text>
				<input class="uni-input" placeholder-style="color:#999999;line-height:56upx" placeholder="请输入" v-model="rent" />
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
					<ss-upload-image :url="url" :file-list="fileMap[industry.id]" :name="imgName" @on-success="onSuccess" @on-error="onError"
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
	</view>
</template>
<script>
	import ssUploadImage from '@/components/ss-upload-image/ss-upload-image.vue';
	import UniIcon from '@/components/uni-icon/uni-icon.vue';
	import calendar from "@/components/uni-calendar/uni-calendar"
	import uniPopup from "@/components/uni-popup/uni-popup"
	import wPicker from "@/components/w-picker/w-picker.vue";
	import BMultrowCheckbox from "../../components/common/BMultrowCheckbox";
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
				industryIds: [],
				industryList: [],
				dataItem: [],
				items1: [{
						value: 'USA',
						name: '毛坯房'
					}

					,
					{
						value: 'CHN',
						name: '精装房',
						checked: 'true'
					}

					,
					{
						value: 'BRA',
						name: '品牌联盟'
					}

				],
				items2: [{
						value: 'JPN',
						name: '底商门脸房'
					}],
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

			this.genFileMap();
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
				//模拟延时请求,动态添加上传数据保存的list
				setTimeout(() => {
						this.items3.forEach(v => {
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
						 console.log(this.items3)
          }
        })
			},
			radioChange() {},
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
						id: '0',
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
				fileList.push(data.wechatRightsCardImageUrl);
			},
			onError() {},
			onRemove({
					index,
					fileList
				}

			) {
				fileList.splice(index, 1);
			},
			telEnd() {},
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
					}
					this.endTime = '';
				},
			CompareDate(d1, d2) {
				return ((new Date(d1.replace(/-/g, "\/"))) > (new Date(d2.replace(/-/g, "\/"))));
			},
			hidePopup() {
				this.middle = false;
			},
			nextPage() {
				const LIST = []
				for (var i = 0; i < this.checkedIndustry.length; i++) {
					for (var key in this.fileMap) {
						if (this.checkedIndustry[i].id == key) {
							let aa = {
								id:key,
								imgs:this.fileMap[Key]
							}
							// this.checkedIndustry[i].imgs = this.fileMap[key]
							LIST.push(aa)
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
		width: 160upx
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
