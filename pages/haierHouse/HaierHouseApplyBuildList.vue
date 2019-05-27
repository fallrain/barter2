<template>
  <view class="content">
		<view class="bt2-myhouse mt16">
		  <b-title cnt="我的一站筑家"></b-title>
		  <view class="bt2-myhouse-card" v-for="(item,index) in listData" :key=index>
		    <img :src="myInfoImg" class="bt2-myhouse-card-portrait">
		    <view class="bt2-myhouse-card-cnt">
		      <p class="title">{{myAreaList.buildAreaName}}</p>
		      <p class="cnt">入驻产业：{{industry}}</p>
		      <view class="bt2-myhouse-card-cnt-opt">
		        <button class="bt2-myhouse-card-cnt-opt-btn mr24">补充信息</button>
		        <button class="bt2-myhouse-card-cnt-opt-btn mr24">配置活动</button>
		        <view class="bt2-myhouse-card-cnt-opt-status">
		          <img src="@/static/img/haierHouse/Icons／Complete@2x.png">
		          <text>{{myAreaList.status}}</text>
		        </view>
		      </view>
		    </view>
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
		  listData:[]
		}
    },
    onLoad(option) {
			this.listData = option
			this.listData.forEach(item => {
				if(item.inIndustryPic){
				item.picList = JSON.parse(item.inIndustryPic)	
				}
					
				})
			picList = JSON.parse(this.myAreaList.inIndustryPic)
		},
    methods: {
    
    }
  }
</script>

<style>
</style>
