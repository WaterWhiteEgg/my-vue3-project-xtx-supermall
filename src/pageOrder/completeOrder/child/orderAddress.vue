<template>
  <view class="address" @tap="toAddress">
    <view class="address-box">
      <view class="address-box-title-ico">
        <image src="../../../static/color/positioning.png" mode="scaleToFill" />
      </view>
      <view class="address-box-title">
        <view class="address-box-title-name">{{ payAddress && payAddress.receiver }}
          {{ payAddress && payAddress.contact }}
        </view>
        <view>
          {{ payAddress && payAddress.fullLocation }}
          {{ payAddress && payAddress.address }}
        </view>
      </view>
    </view>
    <view class="address-button"> ➢ </view>
  </view>
</template>
<script setup>
import { ref, watchEffect } from "vue";

import { onLoad, onShow, onUnload } from "@dcloudio/uni-app";
import { address } from "@/network/address";
import { useMember } from "../../../store/modules/member"

const emits = defineEmits(["getAddressId"]);
// 储存用户地址
const payAddress = ref({});
// 用户地址为空时显示
const nullAddress = ref({ receiver: "你还没有地址", contact: "", fullLocation: "", address: "" })
onShow(() => {
  //获取用户地址
  payAddress.value = useMember().addressData[useMember().activeRadio] || []
  // console.log(useMember().addressData[useMember().activeRadio]);
  // 如果payAddress没有任何值，则去直接请求地址,将第一个默认值渲染
  if (payAddress.value.length === 0) {
    address().then((res) => {
      payAddress.value = res.data.result[0] || nullAddress.value;
      // 将顶端的地址id发送
      emits("getAddressId", payAddress.id);
    });
  }
  // 已经记录则直接提交id
  else {
    // 将顶端的地址id发送
    emits("getAddressId", payAddress.id);
  }



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

.address-box-title {
  display: flex;
  flex-direction: column;
}

.address-box-title-name {
  padding: .5vh 0;
  font-weight: 900;
  font-size: 30rpx;

}

.address-box-title-ico {
  margin: 0 2vw;
}

.address-box-title-ico image {
  width: 6vw;
  height: 4vh;
}

.address-button {
  margin-right: 2vw;
  font-size: 35rpx;
}
</style>