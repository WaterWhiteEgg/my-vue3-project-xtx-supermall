<template>
  <popupTitle title="配送至"></popupTitle>
  <scroll-view scroll-y class="scroll-item">
    <view v-for="(item, index) in data" :key="item.id" class="item">
      <view class="item-address">
        <image src="@/static/color/positioning.png" mode="scaleToFill" class="item-ico" />
        <view class="item-address-text">
          <text class="item-address-text-name">
            {{ item.name }}
            {{ item.number }}
          </text>
          <text class="item-address-text-address">
            {{ item.address }}
          </text>
        </view>
      </view>
      <view>
        <radio :checked="index === activeRadio" @tap="changeRadio(index)" style="transform:scale(0.7) ;"
          color="#12c1a7" />
      </view>
    </view>
  </scroll-view>
  <view class="add-button">
    <view class="add-button-text">新建地址</view>
  </view>
</template>

<script setup>
import popupTitle from './title/popupTitle.vue';

import { ref } from 'vue'

// 测试用的静态地址
const data = [{ name: "坤儿", number: "1145141919", address: "瓦镇德 斯尼亚 EI涯qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", id: "0" },
{ name: "坤儿", number: "1145141919", address: "瓦镇德 斯尼亚 EI涯", id: "0" },
{ name: "坤儿", number: "1145141919", address: "瓦镇德 斯尼亚 EI涯", id: "0" },
{ name: "坤儿", number: "1145141919", address: "瓦镇德 斯尼亚 EI涯", id: "0" },
{ name: "坤儿", number: "1145141919", address: "瓦镇德 斯尼亚 EI涯", id: "0" },
{ name: "坤儿", number: "1145141919", address: "瓦镇德 斯尼亚 EI涯", id: "0" },
{ name: "坤儿", number: "1145141919", address: "瓦镇德 斯尼亚 EI涯", id: "0" },
{ name: "坤儿", number: "1145141919", address: "瓦镇德 斯尼亚 EI涯", id: "0" },
{ name: "坤儿", number: "1145141919", address: "瓦镇德 斯尼亚 EI涯", id: "0" },
{ name: "坤儿", number: "1145141919", address: "瓦镇德 斯尼亚 EI涯", id: "0" },
{ name: "坤儿", number: "1145141919", address: "瓦镇德 斯尼亚 EI涯", id: "0" },]



// 切换单选按钮
const activeRadio = ref(0)
const changeRadio = (index) => {
  activeRadio.value = index
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