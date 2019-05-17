<template>
  <view>
    <b-checkbox-list
      title="选择一站筑家负责人"
      :list="list"
      :checkedId.sync="checkedId"
      :handleChange="change"
    ></b-checkbox-list>
  </view>
</template>

<script>
  import {mapMutations, mapState} from 'vuex';
  import BCheckboxList from "../../components/common/BCheckboxList";

  export default {
    name: "ChooseLeader",
    components: {
      BCheckboxList
    },
    data() {
      return {
        checkedId: [this.choosedLeader.id],
        list: [
          {
            id: '1',
            val: '张亮'
          },
          {
            id: '2',
            val: '刘宏伟'
          },
          {
            id: '3',
            val: '孙大壮'
          },
          {
            id: '4',
            val: '王志欢'
          },
          {
            id: '5',
            val: '孙代'
          }
        ]
      };
    },
    onLoad() {
      // POST用hPost,默认传json
      this.hGet('barter-builthouse/buildHouse/areaBuildHouse/1', {
        name: 1//此处为参数
      }).then(data => {
        if (data) {
          console.log(data)
        }
      })
    },
    computed: {
      ...mapState('haierHouse', ['choosedLeader']),
      checkedId() {
        return [this.choosedLeader.id]
      }
    },
    methods: {
      ...mapMutations('haierHouse', [
        'changeChoosedLeader'
      ]),
      change(ids) {
        const checkedLeader = this.list.find(v => v.id === ids[0]);
        this.changeChoosedLeader(checkedLeader);
        uni.navigateTo({
          url: '/pages/haierHouse/HaierHouseApply'
        });
      }
    }
  }
</script>

<style scoped>

</style>
