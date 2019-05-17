<template>
  <view>
    <view class="bt2-houseApply-card">
      <p class="bt2-houseApply-card-title">小区信息</p>
      <ul class="bt2-houseApply-card-cnt">
        <li class="bt2-houseApply-card-item">
			<text class="bt2-houseApply-card-item-name">筑家店名</text>
			<input class="uni-input" placeholder-style="color:#999999;line-height:56upx" maxlength="20" @blur="nameEnd()" v-model="storeName" placeholder="请输入筑家小区名称"/>
        </li>
        <li class="bt2-houseApply-card-item uni-column">
			<text class="bt2-houseApply-card-item-name">详细地址</text>
			<input class="uni-input-address" placeholder-style="color:#999999;line-height:56upx" maxlength="20" @blur="addressEnd()" v-model="address" placeholder="请输入详细地址"/>
			<view class="bt2-myhouse-card-cnt-opt-location" @click="locationAddress()">
              <img src="@/static/img/haierHouse/Icons／location@2x.png">
            </view>
		</li>
		<li class="bt2-houseApply-card-item uni-column">
			<text class="bt2-houseApply-card-item-name">覆盖小区</text>
			<input class="uni-input" placeholder-style="color:#999999;line-height:56upx" maxlength="20" @blur="coverEnd()" v-model="areaName" placeholder="请输入小区名称"/>
        </li>
		<li class="bt2-houseApply-card-item uni-column" v-for="(x,index) in coverArea" :key="index">
			<text class="bt2-houseApply-card-item-name">覆盖小区</text>
			<input class="uni-input" placeholder-style="color:#999999;line-height:56upx" maxlength="20" @blur="coverAddEnd(x)" v-model="x.name" placeholder="请输入小区名称"/>
        </li>
		<li class="bt2-houseApply-card-item uni-column" @click="addCover()">
		<img src="@/static/img/haierHouse/Icons／add@2x.png" style="width:36upx;">
          <p class="add-p">添加覆盖小区</p>
        </li>
      </ul>
    </view>
    <view class="bt2-houseApply-card">
      <p class="bt2-houseApply-card-title"></p>
      <ul class="bt2-houseApply-card-cnt">
        <li class="bt2-houseApply-card-item">
			<text class="bt2-houseApply-card-item-name">小区户型</text>
        </li>
       
	   <li class="bt2-houseApply-card-item-mult bt2-houseApply-card-item">
          <b-multrow-checkbox :list="items" :checkedIds.sync="apartmentIds" :checkboxChange="checkboxChange"></b-multrow-checkbox>
        </li>
		
		<li class="bt2-houseApply-card-item uni-column">
			<text class="bt2-houseApply-card-item-name">小区面积</text>
			<input class="uni-input-area" placeholder-style="color:#999999;line-height:56upx"  placeholder="请输入" v-model="startArea" type="digit"/>
			<p>至</p>
			<input class="uni-input-area" placeholder-style="color:#999999;line-height:56upx"  placeholder="请输入" v-model="endArea" type="digit"/>
			<p class="bt2-houseApply-card-item-unit">平米</p>
		</li>
        <li class="bt2-houseApply-card-item uni-column">
			<text class="bt2-houseApply-card-item-name">均价</text>
			<input class="uni-input" placeholder-style="color:#999999;line-height:56upx"  placeholder="请输入小区均价" v-model="avePrice" type="digit"/>
			<p class="bt2-houseApply-card-item-unit">元/平米</p>
			 </li>
      </ul>
      <view class="mt16">
        <ul class="bt2-houseApply-card-cnt">
          <li class="bt2-houseApply-card-item">
            小区照片
          </li>
          <ss-upload-image :url="url" :file-list="fileList" :name="imgName" @on-success="onSuccess" @on-error="onError" @on-remove="onRemove"/>
        </ul>
      </view>
	  <view class="mt16" v-for="(area,index) in addList" :key="index">
        <ul class="bt2-houseApply-card-cnt">
          <li class="bt2-houseApply-card-item">
            {{area.name}}照片
          </li>
          <ss-upload-image :url="url" :file-list="fileList" :name="imgName" @on-success="onSuccess" @on-error="onError" @on-remove="onRemove"/>
        </ul>
      </view>
    </view>
	<view class="bt2-houseApply-btn">
			<p class="bt2-houseApply-btn-p" @click="submitInfo()">提交</p>
	</view>
  </view>
</template>

<script>
  import ssUploadImage from '@/components/ss-upload-image/ss-upload-image.vue';
  import UniIcon from '@/components/uni-icon/uni-icon.vue';
  import BMultrowCheckbox from "../../components/common/BMultrowCheckbox";
  export default {
    name: "HaierHouseApplySecondPage",
    components: {
      ssUploadImage,
      UniIcon,
	  BMultrowCheckbox
    },
    data() {
      return {
        imgName: 'test',
        url: '',
        fileList: [],
        current: 1,
		address:'',
		areaName:'',
		areaAddName:'',
		storeName:'',
		startArea:'',
		endArea:'',
		avePrice:'',
		nums:1,
		apartmentIds:[],
		coverArea:[],
		coverAS:[],
		addList:[],
		addPromation:false,
        items: [
          {
            id: '1',
            name: '一室一厅'
          },
          {
            id: '2',
            name: '两室一厅',
          },
          {
            id: '3',
            name: '三室一厅'
          },
		  {
            id: '4',
            name: '四室一厅'
          },
		  {
            id: '5',
            name: '三室二厅'
          },
		  
        ]
       
      };
    },
    methods: {
      radioChange() {

      },
      checkboxChange(data) {
		  this.apartmentIds = data.value
		  console.log(this.apartmentIds)
		debugger
      },
      onSuccess() {

      },
		onError(){
				
			},
      onRemove() {

      },
	  addressEnd(){
		  
	  },
	  nameEnd(){
		  
	  },
	  coverEnd(){
		if(this.areaName != ''){
			var item = {
				id:0,
				name:this.areaName,
				imgs:[]
				}
				this.addList.push(item)
				this.addPromation = true;
		}
	  },
	  coverAddEnd(x){	  
		if(x.name != ''){
			if(this.addList.length = this.coverArea.length){
				var temp = [];
				temp = this.addList.concat(this.coverArea);
				this.addList = temp
				}else{		
			for(var i = 0; i < this.coverArea.length ;i ++){
				if(this.coverArea[i].id == x.id){
					this.coverArea[i].name = x.name
					this.coverArea[i].imgs = []
					return
				}
			}
			}
		}
	  },
	  addCover(){
		  if(this.addPromation){
			 this.nums ++;
			 var item = {
				id:this.nums,
				name:'',
				imgs:[]
				}			
			 this.coverArea.push(item);
			 debugger
		  }
	  },
	  locationAddress(){
		  uni.getLocation({
		  type: 'gcj02', //返回可以用于uni.openLocation的经纬度
			success: function (res) {
			const latitude = res.latitude;
			const longitude = res.longitude;
			uni.chooseLocation({
			success: function (res) {
				console.log('位置名称：' + res.name);
				console.log('详细地址：' + res.address);
				this.address = res.address;
				}
					});
						}
			});
	  },
		submitInfo(){
			this.hGet('/buildHouse/saveAreaInfo',{
				shopId:"8a9f9228e4bd4fc4ab350a5146021415",
				createBy:"李柏",
				buildFamilyName:this.storeName,
				detailAddress:this.address,
				coverageArea:"覆盖小区",
				communityFamily:JSON.stringify(this.apartmentIds),
				areaBegin:this.startArea,
				areaEnd:this.endArea,
				averagePrice:this.avePrice,
				communityPic:["www.haier.com",  "www.xuemao.com/xuemao.jpg"],
				coverageAreaPic:JSON.stringify(this.addList)
				}).then(data=>{
				if(data){
					console.log(data)
					}
				})
				}	
		}
  }
</script>

<style scoped lang="scss">
	.uni-input-address{
		margin-left: 50upx !important;
		font-size: 28upx;
		height: 56upx;
		line-height: 56upx;
		width: 430upx
	}
	.uni-input-area{
		margin-left: 50upx !important;
		font-size: 28upx;
		width: 140upx;
	}
	.add-p{
		color: #1969C6;
		font-size: 28upx;
	}
	.bt2-myhouse-card-cnt-opt-location{
		img{
			 width: 40upx;
             height: 40upx;
		}
	}
</style>

