<template>
  <view class="box">
    <view class="price">
      <view class="price-title">商品总价：</view>
      <view class="price-text"><text class="price-text-ico">￥</text>{{totalPrice}}</view>
    </view>
    <view class="price">
      <view class="price-title">运费：</view>
      <view class="price-text"><text class="price-text-ico">￥</text>{{postFee}}</view>
    </view>
  </view>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
    // 邮费
  postFee: {
    type: Number,
    default: 0,
  },
//   商品总价格
  totalPrice: {
    type: Number,
    default: 0,
  },
});
</script>
<style scoped>
.box {
  margin-top: 1vh;
  border-radius: 10rpx;
}
.price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.1vh 2vw;
  padding: 1.5vh 1vw;
  font-size: 28rpx;
  background-color: #fff;
}
.price-title {
  font-size: 30rpx;
}
.price-text {
  margin-right: 1vw;
}

.price-text-ico {
  font-size: 20rpx;
}
</style>