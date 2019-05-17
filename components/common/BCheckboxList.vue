<template>
  <view class="bt2-houseApply-card">
    <p class="bt2-houseApply-card-title">{{title}}</p>
    <checkbox-group @change="checkboxChange" class="">
      <ul class="bt2-houseApply-card-cnt">
        <li class="bt2-houseApply-card-item BCheckboxList-item" v-for="(item) in list" :key="item.id">
          <text class="bt2-houseApply-card-item-name">{{item.val}}</text>
          <checkbox :value="item.id" :checked="checkedIdObj[item.id]"/>
        </li>
      </ul>
    </checkbox-group>
  </view>
</template>

<script>
  export default {
    name: "BCheckboxList",
    props: {
      //选中的id
      checkedId: {
        type: Array,
        required: true,
        default: []
      },
      type: {
        type: String,
        default: 'single'//single:单选，mult：多选
      },
      //标题的内容
      title: {
        type: String
      },
      //多选单选列表
      list: {
        type: Array
      },
      //选中后的事件
      handleChange: {
        type: Function,
        default: function () {
        }
      }
    },
    data() {
      return {
        checkboxChange({detail}) {
          this.$emit('update:checkedId', detail.value);
          this.handleChange && (this.handleChange(detail.value));
        }
      }
    },
    computed: {
      checkedIdObj() {
        const checkedIdTemp = {};
        this.checkedId.forEach(v => {
          checkedIdTemp[v] = true;
        });
        return checkedIdTemp;
      }
    }
  }
</script>

<style lang="scss">
  .BCheckboxList-item {
    display: flex;
    justify-content: space-between;
  }
</style>
