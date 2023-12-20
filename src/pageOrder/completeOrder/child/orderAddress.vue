<template>
  <view class="address" @tap="toAddress">
    <view class="address-box">
      <view class="address-box-ico">
        <image src="../../../static/color/positioning.png" mode="scaleToFill" />
      </view>
      <text
        >{{ payAddress[0] && payAddress[0].address }}
        {{ payAddress[0] && payAddress[0].fullLocation }}
      </text>
    </view>
    <view class="address-button"> ➢ </view>
  </view>
</template>
<script setup>
import { ref } from "vue";

import { onLoad, onShow, onUnload } from "@dcloudio/uni-app";
import { address } from "@/network/address";

const emits = defineEmits(["getAddressId"]);
// 储存用户地址
const payAddress = ref([]);
onShow(() => {
  //请求用户地址
  address().then((res) => {
    payAddress.value = res.data.result;
    // console.log(res.data.result);
    // 将顶端的地址id发送
    emits("getAddressId", res.data.result[0].id);
  });
});

// 前往地址栏
const toAddress = () => {
  uni.navigateTo({
    url: "/pageMember/address/address",
  });
};
</script>
<style scoped>
.address {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5vh 1vw;
  padding: 1vh 1vw;
  border-radius: 10rpx;
  font-size: 28rpx;
  color: #696969;
  background-color: #fff;
}

.address-box {
  display: flex;
  align-items: center;
}

.address-box-ico {
  margin: 0 1vw;
}

.address-box-ico image {
  width: 6vw;
  height: 4vh;
}
.address-button {
  margin-right: 2vw;
  font-size: 35rpx;
}
</style>