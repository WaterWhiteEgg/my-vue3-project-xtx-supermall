<template>
  <popupTitle title="发送至"></popupTitle>
  <scroll-view scroll-x class="scroll-item">
    <view v-for="(item, index) in data" :key="item.id" class="item">
      <view class="item-address">
        <image src="@/static/color/positioning.png" mode="scaleToFill" class="item-ico" />
        <view class="item-address-text">
          <text>
            {{ item.name }}
            {{ item.number }}
          </text>
          <text>
            {{ item.address }}
          </text>
        </view>
      </view>
      <view>
        <radio :checked="index === 0" style="transform:scale(0.7) ;" color="#12c1a7" />
      </view>
    </view>
  </scroll-view>
  <view class="add-button">
    <view class="add-button-text">新建地址</view>
  </view>
</template>

<script setup>
import popupTitle from './title/popupTitle.vue';

// 测试用的静态地址
const data = [{ name: "坤儿", number: "1145141919", address: "瓦镇德 斯尼亚 EI涯", id: "0" }]
</script>

<style scoped>
.scroll-item {
  margin-top: 2vw;
}

.item-ico {
  width: 5vw;
  height: 3vh;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-address {
  display: flex;
  align-items: center;
}

.item-address-text {
  display: flex;
  flex-direction: column;

}

.add-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
margin: 2vh 0;
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
</style>