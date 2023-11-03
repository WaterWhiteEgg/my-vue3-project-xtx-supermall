<template>
  <popupTitle title="服务说明"></popupTitle>
  <view class="agreement">
    <view v-for="(item, index) in agreementData" :key="item.title" class="agreement-item">
      <view class="title">{{ item.title }}</view>
      <view class="desc">{{ item.desc }}</view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import popupTitle from './title/popupTitle.vue';
// 静态数据，服务协议
const agreementData = ref([
  {
    title: "无忧退货",
    desc: `自收到商品之日起的30天内，可在线申请无忧退货服务
    (食品等特殊商品除外)
    `
  },
  {
    title: "快速退款",
    desc: `收到退货包裹并确认无误后，建在18内办理退款，退款将原路返回，不同银行处理时间不同，于吉1-5工作日到账
    `
  },
  {
    title: "满88元免邮政费",
    desc: `单笔订单（不含运费）满88元可免邮费，不满88元，单笔订单收取10元邮费`
  }
])
</script>

<style scoped>
.agreement {
  margin-top: 2vh;
  font-size: 35rpx;
}
.agreement:last-child{
  margin-bottom: 10vw;
}
.agreement-item{
  margin: .5vh 2vw;
}
.title {

  padding: 1vh 0;
  font-size: 32rpx;
  color: #000;


}

.desc {
  font-size: 30rpx;
  color: #3a3939be;

}
</style>