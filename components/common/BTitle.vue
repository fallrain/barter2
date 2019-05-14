<template>
  <view class="BTitle-par">
    <p class="BTitle">{{cnt}}</p>
    <slot name=""></slot>
  </view>
</template>

<script>
  export default {
    name: "BTitle",
    props: {
      //标题的内容
      cnt: {
        type: String
      }
    }
  }
</script>

<style lang="scss">
  .BTitle-par {
    display: flex;
    padding-left: 24upx;
  }

  .BTitle {
    color: #333;
    font-size: 32upx;
    line-height: 40upx;
    border-left: 6upx solid #4A90E2;
    padding-left: 16upx;
  }
</style>
