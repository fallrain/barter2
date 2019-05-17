<template>
  <view class="BItem-par">
    <view>
      <text
        v-if="required"
        class="bt2-houseApply-card-item-star"
      >*
      </text>
      <text class="bt2-houseApply-card-item-name">{{title}}</text>
      <slot name="title"></slot>
    </view>
    <slot name="middle"></slot>
  </view>
</template>

<script>
  export default {
    name: "BItem",
    props: {
      //是否显示星号
      required: {
        type: Boolean,
        default: false
      },
      title: {
        type:String
      }
    }
  }
</script>

<style lang="scss">
  .BItem-par {
    display: flex;
    align-items: center;
  }
</style>
