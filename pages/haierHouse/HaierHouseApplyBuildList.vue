<template>
  <view class="content">
		<view class="bt2-myhouse mt16">
		  <b-title cnt="我的一站筑家"></b-title>
		  <view class="bt2-myhouse-card" v-for="(item,index) in listData" :key=index>
		    <img :src="item.myInfoImg" class="bt2-myhouse-card-portrait">
		    <view class="bt2-myhouse-card-cnt">
		      <p class="title">{{item.buildAreaName}}</p>
		      <p class="cnt">入驻产业：{{item.industry}}</p>
		      <view class="bt2-myhouse-card-cnt-opt">
		        <button class="bt2-myhouse-card-cnt-opt-btn mr24">补充信息</button>
		        <button class="bt2-myhouse-card-cnt-opt-btn mr24">配置活动</button>
		        <view class="bt2-myhouse-card-cnt-opt-status">
		          <img src="@/static/img/haierHouse/Icons／Complete@2x.png">
		          <text>{{item.status}}</text>
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
			debugger
			this.listData = JSON.parse(option.id)
			this.listData.shift()
			console.log(this.listData)
			this.listData.forEach(item => {
				if(item.inIndustryPic){
				item.picList = JSON.parse(item.inIndustryPic)	
				item.myInfoImg = item.picList[0].imgs[0];
				if(item.status == '1'){
					item.status = '审核中'
				}
				var temp = []
						for(var i = 0; i < item.picList.length;i ++){
							temp.push(item.picList[i].name)
						}
						temp.shift()
						item.industry = temp.join(",")
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
