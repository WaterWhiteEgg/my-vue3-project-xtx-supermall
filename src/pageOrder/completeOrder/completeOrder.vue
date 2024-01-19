<template>
  <orderAddress @getAddressId="getAddressId"></orderAddress>
  <payItemScroll :selectedShopcar="selectedShopcar"></payItemScroll>
  <orderSet @changeTime="changeTime" @changeText="changeText"></orderSet>
  <orderPrice :postFee="summary.postFee" :totalPrice="summary.totalPrice" @changePayType="changePayType"></orderPrice>
  <orderBottom :totalPayPrice="summary.totalPayPrice" @completeOrder="completeOrder"></orderBottom>
</template>
<script setup>
import payItemScroll from "../../components/Content/payItemScroll/payItemScroll.vue";

import { order, orderPre, orderPreNow, orderRepurchase } from "@/network/purchaseOrder";
import { getShopcar } from "@/network/shopcar";
import { onLoad, onShow } from "@dcloudio/uni-app";
import { ref } from "vue";
import orderAddress from "./child/orderAddress.vue";
import orderBottom from "./child/orderBottom.vue";
import orderPrice from "./child/orderPrice.vue";
import orderSet from "./child/orderSet.vue";

// 记录购物车列表
const selectedShopcar = ref([]);
// 记录购物车列表的id count
const goods = ref([]);
// 记录购物车的综合数据
const summary = ref({});

// 加载时触发
onLoad((query) => {
  // 如果是购物车模式，则请求购物车列表并筛选出数据准备提交表单
  switch (query.mode) {
    case "shopcar": {
      // 请求购物车的预交付数据
      orderPre().then((res) => {
        autoValue(res)
      });

      break;
    }
    case "buy": {
      // 请求立即购买的预交付数据
      orderPreNow({
        skuId: query.skuId,
        count: query.count,
        addressId: query.addressId
      }).then((res) => {
        autoValue(res)
      })
      break;
    }
    case "repeatBuy": {
      // 请求再次购买的数据
      orderRepurchase(query.id).then((res) => {
        autoValue(res)
      })
      break;

    }
  }

  // 相同的函数执行
  function autoValue(res) {
    // console.log(res);
    // 获取整个预交付商品列表
    selectedShopcar.value = res.data.result.goods;
    //   获取购物车的综合数据
    summary.value = res.data.result.summary;
    // 筛选出提交数据
    for (let item of res.data.result.goods) {
      goods.value.push({
        skuId: item.skuId,
        count: item.count,
      });
    }

  }

});

// 订单的默认设置值
const timeIntervalIndex = ref(1);
// 切换timeIntervalIndex;
const changeTime = (index) => {
  timeIntervalIndex.value = index;
};
// 用户备注的文本
const setText = ref("");
// 切换用户备注文本
const changeText = (val) => {
  setText.value = val;
};
// 记录以及获取首选地址id
const addressId = ref("");
const getAddressId = (id) => {
  addressId.value = id;
};

// 记录交易类型 ,传过来的值里2代表微信支付,0代表货到付款
const payType = ref({ payType: 1, payChannel: 2 })
// 切换交易类型
const changePayType = (type) => {
  switch (type) {
    case 0: {
      // 货到付款
      payType.value = {
        payType: 2,
        payChannel: null
      }
      break;
    }
    case 1: {
      // 支付宝
      payType.value = {
        payType: 1,
        payChannel: 1
      }
      break;
    }
    case 2: {
      // 微信
      payType.value = {
        payType: 1,
        payChannel: 2
      }
      break;
    }
  }
}
// 提交购物车表单
const completeOrder = () => {
  // 加载动画
  uni.showLoading({
    title: "提交中..."
  })
  // 整理数据提交表格
  order(
    {
      goods: goods.value,
      addressId: addressId.value,
      deliveryTimeType: timeIntervalIndex.value,
      buyerMessage: setText.value,
      payType: payType.value.payType,
      payChannel: payType.value.payChannel
    }

  ).then((res) => {
    // 关闭加载动画
    uni.hideLoading();
    // 跳转等待界面,并传入id

    uni.navigateTo({
      url: "/pageOrder/waitOrder/waitOrder?id=" + res.data.result.id
    })
  })
}


</script>
<style scoped>
.scroll {
  height: 40vh;
  border-radius: 10rpx;
}

.shopcar {
  display: flex;
  width: 96vw;
  margin: 1vh 2vw;
  padding: 2vh 0;
  padding-bottom: 1vh;
  font-size: 25rpx;
  background-color: #fff;
}

.shopcar-image image {
  width: 17vw;
  height: 12vh;
  padding: 0 1vw;
  margin-right: 1vw;
  border-radius: 20rpx;
}

.shopcar-text-title {
  width: 60vw;
  margin: 1vh 0 3.5vh 0;
  font-weight: 900;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.shopcar-text {
  width: 70vw;
}

.shopcar-text-attrstext {
  padding: 0.2vh 1vw;
  font-size: 23rpx;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #ededed;
  color: #595959;
}

.shopcar-text-price {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.shopcar-text-price-item {
  margin: 1vh 0;
  font-size: 25rpx;
  color: #d10000;
}

.shopcar-text-price-item-old {
  text-decoration: line-through;
  font-size: 23rpx;
  color: #3b3b3b77;
}

.count {
  font-weight: 900;
}
</style>