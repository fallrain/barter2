<template>
  <view>
    <view class="bt2-houseApply-card">
      <p class="bt2-houseApply-card-title">小区信息</p>
      <ul class="bt2-houseApply-card-cnt">
        <li class="bt2-houseApply-card-item">
			<text class="bt2-houseApply-card-item-name">筑家店名</text>
			<input class="uni-input" placeholder-style="color:#999999;line-height:56upx" maxlength="20" @blur="nameEnd()" v-model="tel" placeholder="请输入筑家小区名称"/>
        </li>
        <li class="bt2-houseApply-card-item uni-column">
			<text class="bt2-houseApply-card-item-name">详细地址</text>
			<input class="uni-input" placeholder-style="color:#999999;line-height:56upx" maxlength="20" @blur="addressEnd()" v-model="tel" placeholder="请输入详细地址"/>
        </li>
		<li class="bt2-houseApply-card-item uni-column">
			<text class="bt2-houseApply-card-item-name">覆盖小区</text>
			<input class="uni-input" placeholder-style="color:#999999;line-height:56upx" maxlength="20" @blur="coverEnd()" v-model="tel" placeholder="请输入小区名称"/>
        </li>
		<li class="bt2-houseApply-card-item uni-column">
          <p class="add-p">+添加覆盖小区</p>
        </li>
      </ul>
    </view>
    <view class="bt2-houseApply-card">
      <p class="bt2-houseApply-card-title"></p>
      <ul class="bt2-houseApply-card-cnt">
        <li class="bt2-houseApply-card-item">
			<text class="bt2-houseApply-card-item-name">小区户型</text>
        </li>
        <li class="bt2-houseApply-card-item-checkBox ">
			<checkbox-group @change="checkboxChange" class="bt2-houseApply-card-checkboxGroup ">
			<label class="bt2-houseApply-card-checkboxItem" v-for="item in items1" :key="item.value">
            <checkbox :value="item.value" :checked="item.checked"/>
            <text class="bt2-houseApply-card-checkboxText">{{item.name}}</text>
          </label>
        </checkbox-group>
        </li>
		<li class="bt2-houseApply-card-item-checkBox">
			<checkbox-group @change="checkboxChange" class="bt2-houseApply-card-checkboxGroup ">
			<label class="bt2-houseApply-card-checkboxItem" v-for="item in items2" :key="item.value">
            <checkbox :value="item.value" :checked="item.checked"/>
            <text class="bt2-houseApply-card-checkboxText">{{item.name}}</text>
          </label>
        </checkbox-group>
        </li>
		<li class="bt2-houseApply-card-item uni-column">
			<text class="bt2-houseApply-card-item-name">小区面积</text>
			<input class="uni-input-area" placeholder-style="color:#999999;line-height:56upx"  placeholder="请输入"/>
			<p>至</p>
			<input class="uni-input-area" placeholder-style="color:#999999;line-height:56upx"  placeholder="请输入"/>
			<p class="bt2-houseApply-card-item-unit">平米</p>
		</li>
        <li class="bt2-houseApply-card-item uni-column">
			<text class="bt2-houseApply-card-item-name">均价</text>
			<input class="uni-input" placeholder-style="color:#999999;line-height:56upx"  placeholder="请输入小区均价"/>
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
	  <view class="mt16">
        <ul class="bt2-houseApply-card-cnt">
          <li class="bt2-houseApply-card-item">
            覆盖小区照片
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
	import calendar from "@/components/uni-calendar/uni-calendar"

  export default {
    name: "HaierHouseApply",
    components: {
      ssUploadImage,
      UniIcon,
			calendar
    },
    data() {
      return {
        imgName: 'test',
        url: '',
        fileList: [],
        current: 1,
				tel:'',
        items1: [
          {
            value: 'USA',
            name: '一室一厅'
          },
          {
            value: 'CHN',
            name: '两室一厅',
            checked: 'true'
          },
          {
            value: 'BRA',
            name: '三室一厅'
          }
        ],
        items2: [
           {
            value: 'BRA',
            name: '四室一厅'
          },
		  {
            value: 'BRA',
            name: '三室两厅'
          },
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
	  addressEnd(){
		  
	  },
	  nameEnd(){
		  
	  },
	  coverEnd(){
		  
	  },
		submitInfo(){
			
		}
			
    }
  }
</script>

<style scoped lang="scss">
	.uni-input{
		// background-color: aquamarine;
		margin-left: 50upx !important;
		font-size: 28upx;
		height: 56upx;
		line-height: 56upx;
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
</style>

