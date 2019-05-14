<template>
  <view>
    <view class="bt2-houseApply-card">
      <p class="bt2-houseApply-card-title">门店基础信息</p>
      <ul class="bt2-houseApply-card-cnt">
        <li class="bt2-houseApply-card-item">
          <text class="bt2-houseApply-card-item-name">筑家负责人</text>
        </li>
        <li class="bt2-houseApply-card-item">
          <text class="bt2-houseApply-card-item-name">手机号码</text>
        </li>
      </ul>
    </view>
    <view class="bt2-houseApply-card">
      <p class="bt2-houseApply-card-title">一站筑家信息</p>
      <ul class="bt2-houseApply-card-cnt">
        <li class="bt2-houseApply-card-item">
          <text class="bt2-houseApply-card-item-name">样板间类型</text>
        </li>
        <li class="bt2-houseApply-card-item">
          <radio-group @change="radioChange" class="bt2-houseApply-card-radioGroup">
            <label class="bt2-houseApply-card-radioItem" v-for="(item, index) in items1" :key="item.value">
              <radio :value="item.value" :checked="index === current"/>
              <text class="bt2-houseApply-card-radioText">{{item.name}}</text>
            </label>
          </radio-group>
        </li>
        <li class="bt2-houseApply-card-item">
          <radio-group @change="radioChange" class="bt2-houseApply-card-radioGroup">
            <label class="bt2-houseApply-card-radioItem" v-for="(item, index) in items2" :key="item.value">
              <radio :value="item.value" :checked="index === current"/>
              <text class="bt2-houseApply-card-radioText">{{item.name}}</text>
            </label>
          </radio-group>
        </li>
        <li class="bt2-houseApply-card-item">
          <text class="bt2-houseApply-card-item-name">入驻产业</text>
        </li>
        <li class="bt2-houseApply-card-item">
          <checkbox-group @change="checkboxChange" class="bt2-houseApply-card-checkboxGroup">
            <label class="bt2-houseApply-card-checkboxItem" v-for="item in items1" :key="item.value">
              <checkbox :value="item.value" :checked="item.checked"/>
              <text class="bt2-houseApply-card-checkboxText">{{item.name}}</text>
            </label>
          </checkbox-group>
        </li>
        <li class="bt2-houseApply-card-item">
          <checkbox-group @change="checkboxChange" class="bt2-houseApply-card-checkboxGroup">
            <label class="bt2-houseApply-card-checkboxItem" v-for="item in items1" :key="item.value">
              <checkbox :value="item.value" :checked="item.checked"/>
              <text class="bt2-houseApply-card-checkboxText">{{item.name}}</text>
            </label>
          </checkbox-group>
        </li>
      </ul>
      <view class="mt16">
        <ul class="bt2-houseApply-card-cnt">
          <li class="bt2-houseApply-card-item">
            样板间照片
          </li>
          <ss-upload-image :url="url" :file-list="fileList" :name="imgName" @on-success="onSuccess" @on-error=""
                           @on-remove="onRemove"/>
        </ul>
      </view>
    </view>
  </view>
</template>

<script>
  import ssUploadImage from '@/components/ss-upload-image/ss-upload-image.vue';
  import UniIcon from '@/components/uni-icon/uni-icon.vue';

  export default {
    name: "HaierHouseApply",
    components: {
      ssUploadImage,
      UniIcon
    },
    data() {
      return {
        imgName: 'test',
        url: '',
        fileList: [],
        current: 1,
        items1: [
          {
            value: 'USA',
            name: '毛配方'
          },
          {
            value: 'CHN',
            name: '精装房',
            checked: 'true'
          },
          {
            value: 'BRA',
            name: '品牌联盟'
          }
        ],
        items2: [
          {
            value: 'JPN',
            name: '底商门脸房'
          }
        ]
      };
    },
    methods: {
      radioChange() {

      },
      checkboxChange() {

      },
      onSuccess() {

      },
      onRemove() {

      }
    }
  }
</script>

<style scoped>

</style>
