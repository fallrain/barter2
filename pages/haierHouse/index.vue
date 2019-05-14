<template>
  <view class="content">
    <swiper
      class="swiper-box"
      :indicator-dots="true"
      indicator-color="#fff"
      indicator-active-color="#4A90E2"
      @change="change"
    >
      <swiper-item
        v-for="(item ,index) in info"
        :key="index"
      >
        <view :class="['swiper-item',item.colorClass]">
          <image :src="item.url" mode="aspectFill"/>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
  import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'

  export default {
    components: {
      uniSwiperDot
    },
    data() {
      return {
        info: [
          {
            colorClass: 'uni-bg-red',
            url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
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
        ]
      }
    },
    onLoad() {
    },
    methods: {
      change(e) {
        this.current = e.detail.current
      },
      selectStyle(index) {
        this.dotsStyles = this.dotStyle[index]
        this.styleIndex = index
      },
      selectMode(mode, index) {
        this.mode = mode
        this.modeIndex = index
        this.styleIndex = -1
        this.dotsStyles = this.dotStyle[0]
      }
    }
  }
</script>

<style>
</style>
