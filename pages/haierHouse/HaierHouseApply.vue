<template>
  <view>
    <view class="bt2-houseApply-card">
      <p class="bt2-houseApply-card-title">门店基础信息</p>
      <ul class="bt2-houseApply-card-cnt">
        <li class="bt2-houseApply-card-item">
					<span class="bt2-houseApply-card-item-star">*</span>
          <text class="bt2-houseApply-card-item-name">筑家负责人</text>
        </li>
        <li class="bt2-houseApply-card-item uni-column">
          <text class="bt2-houseApply-card-item-name">手机号码</text>
					<input class="uni-input" placeholder-style="color:#999999;line-height:56upx" type="number" maxlength="11" @blur="telEnd()" v-model="tel" placeholder="请输入"/>
        </li>
      </ul>
    </view>
    <view class="bt2-houseApply-card">
      <p class="bt2-houseApply-card-title">一站筑家信息</p>
      <ul class="bt2-houseApply-card-cnt">
        <li class="bt2-houseApply-card-item">
					<span class="bt2-houseApply-card-item-star">*</span>
          <text class="bt2-houseApply-card-item-name">样板间类型</text>
        </li>
        <li class="bt2-houseApply-card-item">
          <radio-group @change="radioChange" class="bt2-houseApply-card-radioGroup">
            <label class="bt2-houseApply-card-radioItem" v-for="(item, index) in items1" :key="item.value">
              <radio :value="item.value" :checked="index === current"/>
              <text class="bt2-houseApply-card-radioText">{{item.name}}</text>
            </label>
          </radio-group>
        </li>
        <li class="bt2-houseApply-card-item">
          <radio-group @change="radioChange" class="bt2-houseApply-card-radioGroup">
            <label class="bt2-houseApply-card-radioItem" v-for="(item, index) in items2" :key="item.value">
              <radio :value="item.value" :checked="index === current"/>
              <text class="bt2-houseApply-card-radioText">{{item.name}}</text>
            </label>
          </radio-group>
        </li>
				 <li class="bt2-houseApply-card-item uni-column">
					 <span class="bt2-houseApply-card-item-star">*</span>
          <text class="bt2-houseApply-card-item-name">样板间面积</text>
					<input class="uni-input" placeholder-style="color:#999999;line-height:56upx"  placeholder="请输入"/>
					<p class="bt2-houseApply-card-item-unit">平米</p>
				</li>
				<li class="bt2-houseApply-card-item uni-column">
					<span class="bt2-houseApply-card-item-star">*</span>
          <text class="bt2-houseApply-card-item-name">详细地址</text>
					<input class="uni-input" placeholder-style="color:#999999;line-height:56upx"  placeholder="请输入"/>
        </li>
				<li class="bt2-houseApply-card-item uni-column">
					<span class="bt2-houseApply-card-item-star">*</span>
          <text class="bt2-houseApply-card-item-name">样板间租金</text>
					<input class="uni-input" placeholder-style="color:#999999;line-height:56upx"  placeholder="请输入"/>
					<p class="bt2-houseApply-card-item-unit">元/月</p>
			 </li>
				<li class="bt2-houseApply-card-item uni-column">
					<span class="bt2-houseApply-card-item-star">*</span>
          <text class="bt2-houseApply-card-item-name">租赁时间</text>
					<input class="uni-input-time" placeholder-style="color:#999999;line-height:56upx"  placeholder="开始时间"/>
					<p>至</p>
					<input class="uni-input-time" placeholder-style="color:#999999;line-height:56upx"  placeholder="结束时间"/>
				</li>
        <li class="bt2-houseApply-card-item">
					<span class="bt2-houseApply-card-item-star">*</span>
          <text class="bt2-houseApply-card-item-name">入驻产业</text>
        </li>
        <li class="bt2-houseApply-card-item">
          <checkbox-group @change="checkboxChange" class="bt2-houseApply-card-checkboxGroup">
          <label class="bt2-houseApply-card-checkboxItem" v-for="item in items1" :key="item.value">
            <checkbox :value="item.value" :checked="item.checked"/>
            <text class="bt2-houseApply-card-checkboxText">{{item.name}}</text>
          </label>
        </checkbox-group>
        </li>
        <li class="bt2-houseApply-card-item">
          <checkbox-group @change="checkboxChange" class="bt2-houseApply-card-checkboxGroup">
            <label class="bt2-houseApply-card-checkboxItem" v-for="item in items1" :key="item.value">
              <checkbox :value="item.value" :checked="item.checked"/>
              <text class="bt2-houseApply-card-checkboxText">{{item.name}}</text>
            </label>
          </checkbox-group>
        </li>
      </ul>
      <view class="mt16">
        <ul class="bt2-houseApply-card-cnt">
          <li class="bt2-houseApply-card-item">
            样板间照片
          </li>
          <ss-upload-image :url="url" :file-list="fileList" :name="imgName" @on-success="onSuccess" @on-error="onError" @on-remove="onRemove"/>
        </ul>
      </view>
			<view class="mt16">
        <ul class="bt2-houseApply-card-cnt">
          <li class="bt2-houseApply-card-item">
            家中机区域照片
          </li>
          <ss-upload-image :url="url" :file-list="fileList" :name="imgName" @on-success="onSuccess" @on-error="onError" @on-remove="onRemove"/>
        </ul>
      </view>
			<view class="mt16">
        <ul class="bt2-houseApply-card-cnt">
          <li class="bt2-houseApply-card-item">
            热水器区域照片
          </li>
          <ss-upload-image :url="url" :file-list="fileList" :name="imgName" @on-success="onSuccess" @on-error="onError" @on-remove="onRemove"/>
        </ul>
      </view>
    </view>
		<view class="bt2-houseApply-btn">
			<p class="bt2-houseApply-btn-p" @click="nextPage()">下一步</p>
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
  export default {
    name: "HaierHouseApply",
    components: {
      ssUploadImage,
      UniIcon,
			calendar,
			uniPopup
    },
    data() {
      return {
        imgName: 'test',
        url: '',
        fileList: [],
        current: 1,
				tel:'',
				middle:true,
        items1: [
          {
            value: 'USA',
            name: '毛坯房'
          },
          {
            value: 'CHN',
            name: '精装房',
            checked: 'true'
          },
          {
            value: 'BRA',
            name: '品牌联盟'
          }
        ],
        items2: [
          {
            value: 'JPN',
            name: '底商门脸房'
          }
        ]
      };
    },
    methods: {
      radioChange() {

      },
      checkboxChange() {

      },
      onSuccess() {

      },
			onError(){
				
			},
      onRemove() {

      },
			telEnd(){
				
			},
			hidePopup(){
				this.middle = false;
			},
			nextPage(){
				uni.navigateTo({
          url: '/pages/haierHouse/HaierHouseApplySecondPage'
        });
			}
			
    }
  }
</script>

<style scoped lang="scss">
	.uni-input{
		// background-color: aquamarine;
		margin-left: 50upx !important;
		font-size: 28upx;
	}
	.uni-input-time{
		margin-left: 50upx !important;
		font-size: 28upx;
		width: 160upx
	}
	.popupView{
		height: 250upx;
		width: 500upx;
		border-radius: 8upx;
		background-color: #FFFFFF;
	}
 	.popupView-u{
			text-align: left;
			width: 420upx;
			margin-left: 40upx;
			margin-top: 24upx;
			color: #000000;
			font-size: 28upx;
			height: 120upx;
			margin-bottom: 16upx;
		}
	.popupView-b{
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
</style>


