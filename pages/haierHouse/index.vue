<template>
  <view class="content">
    <swiper class="swiper-box" :indicator-dots="true" indicator-color="#fff" indicator-active-color="#4A90E2" @change="change">
      <swiper-item v-for="(item ,index) in info" :key="index">
        <view :class="['swiper-item',item.colorClass]">
          <image :src="item.url" mode="aspectFill" />
        </view>
      </swiper-item>
    </swiper>
    <ul class="bt2-house-menu mt16">
      <li class="bt2-house-menu-item" @click="jump('/pages/haierHouse/HaierHouseApply')">
        <img src="@/static/img/haierHouse/apply@2x.png">
        <p class="bt2-house-menu-item-cnt">筑家申请</p>
      </li>
      <li class="bt2-house-menu-item">
        <img src="@/static/img/haierHouse/activity@2x.png" @click="jump('/pages/haierHouse/ChooseLeader')">
        <p class="bt2-house-menu-item-cnt">筑家活动</p>
      </li>
      <li class="bt2-house-menu-item">
        <img src="@/static/img/haierHouse/user@2x.png">
        <p class="bt2-house-menu-item-cnt">用户跟进</p>
      </li>
    </ul>
    <view class="bt2-myhouse mt16" v-show="myInfoShow">
      <b-title cnt="我的一站筑家"></b-title>
      <view class="bt2-myhouse-card">
        <img :src="myInfoImg" class="bt2-myhouse-card-portrait">
        <view class="bt2-myhouse-card-cnt">
          <p class="title">{{myAreaList.buildFamilyName}}</p>
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
    <view class="bt2-myhouse mt16">
      <b-title cnt="优秀门店展示"></b-title>
      <ul class="bt2-shopShow-par">
        <li class="bt2-shopShow-item" v-for="(item,index) in shopList" :key="index">
          <img :src="item.url">
          <p class="cnt">{{item.desc}}</p>
        </li>
      </ul>
    </view>
    <view class="bt2-myhouse mt16">
      <b-title cnt="了解一站筑家"></b-title>
      <view class="bt2-help-inf">
        <ul class="bt2-help-inf-item-par">
          <li class="bt2-help-inf-item">
            一、优秀一站筑家门店有多种奖励，如：样板间租金补贴，金牌直销员指导等
          </li>
          <li class="bt2-help-inf-item">
            二、如出现问题，请拨打400-699-9999
          </li>
        </ul>
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
				myAreaList:'',
				myInfoImg:'',
				myInfoShow:false,
				industry:'',
        info: [
          {
            colorClass: 'uni-bg-red',
            url: require('@/static/img/haierHouse/banner@2x.png'),
            content: '内容 A'
          },
          {
            colorClass: 'uni-bg-green',
            url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
            content: '内容 B'
          },
          {
            colorClass: 'uni-bg-blue',
            url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
            content: '内容 C'
          }
        ],
        shopList:[
          {
            url:require('@/static/img/haierHouse/48C5FB2B-5CF2-4300-91D7-C45D0C960B7E.png'),
            desc:'左岸风度小区'
          },
          {
            url:require('@/static/img/haierHouse/WeChat6d40309ca76cc404a4a3da02b753aa71.png'),
            desc:'水清木华小区'
          },
          {
            url:require('@/static/img/haierHouse/48C5FB2B-5CF2-4300-91D7-C45D0C960B7E.png'),
            desc:'天福苑小区'
          },
          {
            url:require('@/static/img/haierHouse/WeChat6d40309ca76cc404a4a3da02b753aa71.png'),
            desc:'随便编的小区，名字长短的无所谓，最好长一点'
          }
        ]
      }
    },
    onLoad() {
			this.hGet('barter-builthouse/buildHouse/getCreateHomeShopinfListByHmcId', {
          hmcId:'Z0000001'
        }).then(data => {
          if (data) {
						this.myAreaList = data[0]
						const picList = JSON.parse(this.myAreaList.inIndustryPic)
						this.myInfoImg = picList[0].imgs[0];
						var temp = []
						for(var i = 0; i < picList.length;i ++){
							temp.push(picList[i].name)
						}
						temp.shift()
						this.industry = temp.join(",")
						this.myInfoShow = true
          } 
        })

		},
    methods: {
      jump(url){
        uni.navigateTo({
          url: url
        });
      }
    }
  }
</script>

<style>
</style>
