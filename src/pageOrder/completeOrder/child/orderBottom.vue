<template>
  <view class="bottom">
    <view class="all-price"><text class="all-price-ico">￥</text>{{ totalPayPrice }}</view>
    <view class="commit" @tap="commit">提交订单</view>
  </view>
</template>
<script setup>
const props = defineProps({
  // 总价格
  totalPayPrice: {
    type: Number,
    default: 0,
  },
});
const emits = defineEmits(["completeOrder"])
// 提交给父组件
const commit = () => {
  emits("completeOrder")
}
</script>
<style scoped>
.bottom {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 10vh;
  padding: 1vh 2vw;
  padding-top: 2vh;
  font-size: 35rpx;
  border-radius: 35rpx 35rpx 0 0;
  background-color: #fff;
}

.all-price {
  font-size: 40rpx;
  color: rgb(232, 0, 0);
}

.all-price-ico {
  font-size: 28rpx;
}

.commit {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  padding: 0 6vw;
  border-radius: 55rpx;
  font-size: 30rpx;
  background-color: rgb(18, 191, 165);
  color: #fff;
}
</style>