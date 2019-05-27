<template>
  <view class="content">
		<view class="bt2-myhouse mt16">
		  <b-title cnt="我的一站筑家"></b-title>
		  <view class="bt2-myhouse-card"  v-show="myInfoShow">
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
		  
		}
    },
    onLoad() {
			this.hmcid = this.getQueryString('hmcid')
			this.shopid = this.getQueryString('shopid')	
			console.log(this.hcmid + this.shopid)
			this.hGet('buildHouse/getCreateHomeShopinfListByHmcId', {
          // hmcId:this.hmcid,
					hmcId:'Z0000001',
					shopid:this.shopid
        }).then(data => {
          if (data) {
						this.myAreaList = data.data[0]
						if(this.myAreaList.inIndustryPic){
							const picList = JSON.parse(this.myAreaList.inIndustryPic)
						this.myInfoImg = picList[0].imgs[0];
						var temp = []
						for(var i = 0; i < picList.length;i ++){
							temp.push(picList[i].name)
						}
						temp.shift()
						this.industry = temp.join(",")
						}
						this.myInfoShow = true
          } 
        })

		},
    methods: {
    
    }
  }
</script>

<style>
</style>
