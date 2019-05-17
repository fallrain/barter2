<template>
	<radio-group @change="radioChange" class="bt2-houseApply-card-radioGroup">
            <label class="bt2-houseApply-card-radioItem" v-for="item in list" :key="item.id">
              <radio :value="item.value" :checked="index === current"/>
              <text class="bt2-houseApply-card-radioText">{{item.name}}</text>
            </label>
     </radio-group>
</template>
<script>
  export default {
    name: "BRadioCheckList",
    props: {
      //选中的id
      checkedId: {
        type: String,
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
    }
  }
</script>

<style lang="scss">
  .BCheckboxList-item {
    display: flex;
    justify-content: space-between;
  }
</style>

