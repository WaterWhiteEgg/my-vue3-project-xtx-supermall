<template>
  <popupTitle title="配送至"></popupTitle>
  <scroll-view scroll-y class="scroll-item">
    <view v-for="(item, index) in useMember().addressData" :key="item.id" class="item">
      <view class="item-address">
        <image src="@/static/color/positioning.png" mode="scaleToFill" class="item-ico" />
        <view class="item-address-text">
          <text class="item-address-text-name">
            {{ item.receiver }}
            {{ item.contact }}
          </text>
          <text class="item-address-text-address">
            {{ item.address }}
          </text>
        </view>
      </view>
      <view>
        <radio :checked="index === useMember().activeRadio" @tap="
          useMember().changeRadio(index);
        itemClick(item);
        " style="transform: scale(0.7)" color="#12c1a7" />
      </view>
    </view>
  </scroll-view>
  <view class="add-button">
    <view class="add-button-text" @tap="toAddress">管理地址</view>
  </view>
</template>

<script setup>
import popupTitle from "./title/popupTitle.vue";

import { pushAddress } from "./js/pushItemClick"
import { address } from "../../../../network/address"
import { onLoad, onShow, onHide, onBackPress } from '@dcloudio/uni-app';
import { useMember } from "../../../../store/modules/member"
import { onMounted, onUpdated, ref } from "vue";

const emits = defineEmits(["pushAddress"]);


// 挂载时触发
onMounted(() => {

  // 获取地址的所有数据
  address().then((res) => {
    useMember().changeAaddressData(res.data.result)
    // 初始化默认选择值给父组件
    pushAddress(emits, useMember().addressData[useMember().activeRadio], "address")
  }).catch((err) => {
    // 若未授权则跳转登录
    if (err.statusCode === 401) {
      uni.navigateTo({
        url: '/pages/login/login'
      });
    }
  })




});

// item点击发送事件
const itemClick = (item) => {
  // 将itemValue的内容发送到父元素渲染
  pushAddress(emits, item, "address")

};
// 前往地址管理
const toAddress = () => {
  uni.navigateTo({
    url: '/pageMember/address/address?id=address'
  });
}
</script>

<style scoped>
.scroll-item {
  margin-top: 2vw;
  max-height: 82.5vh;
}

.item-ico {
  width: 6vw;
  height: 4vh;
  padding: 0 2vw;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2vh 5vw;
}

.item-address {
  display: flex;
  align-items: center;
}

.item-address-text {
  display: flex;
  flex-direction: column;
  width: 60vw;
}

.add-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2vh 5vw;
}

.add-button-text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: 6vh;
  border-radius: 40rpx;
  background-color: #12c1a7;
  color: #ffffff;
}

.item-address-text-name {
  font-size: 35rpx;
}

.item-address-text-address {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 32rpx;
  color: #323232c7;
}
</style>