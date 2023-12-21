<template>
  <view class="box">
    <view class="price">
      <view class="price-title">商品总价：</view>
      <view class="price-text"><text class="price-text-ico">￥</text>{{ totalPrice }}</view>
    </view>
    <view class="price">
      <view class="price-title">运费：</view>
      <view class="price-text"><text class="price-text-ico">￥</text>{{ postFee }}</view>
    </view>
    <view class="price">
      <view class="price-title">支付方式：</view>

      <picker :range="payType" range-key="name" @change="changePayType">
        <view class="price-text-pay"> {{ payType[payTypeIndex].name }}<text>＞</text></view>

      </picker>
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
const emits = defineEmits(["changePayType"])
// 切换付款模式数据
const payType = ref([{ type: 2, name: "微信支付" }, { type: 1, name: "支付宝支付" }, { type: 0, name: "货到付款" }])
// 记录选择的index
const payTypeIndex = ref(0)

// 切换付款模式
const changePayType = (e) => {
  // 切换payTypeIndex
  payTypeIndex.value = e.detail.value
  // 将支付类型发送给父组件,0表示货到付款
  emits("changePayType", payType.value[e.detail.value].type)

}
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

.price-text-pay {
  font-size: 25rpx;
  color: #616161bd;
}

.price-text-ico {
  font-size: 20rpx;
}
</style>