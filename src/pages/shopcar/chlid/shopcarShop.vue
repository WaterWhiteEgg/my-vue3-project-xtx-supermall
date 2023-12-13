<template>
  <scroll-view scroll-y class="scroll">
    <view class="shopcar" v-for="item in shopcarDatas" :key="item.skuId">
      <view class="shopcar-radio">
        <radio style="transform: scale(0.6)" color="#12c1a7" />
      </view>
      <view class="shopcar-image">
        <image :src="item.picture" mode="scaleToFill" />
      </view>
      <view class="shopcar-text">
        <view class="shopcar-text-title">{{ item.name }}</view>
        <text class="shopcar-text-attrstext">{{ item.attrsText }}</text>
        <view class="shopcar-text-price">
          <view class="shopcar-text-price-item">￥{{ item.nowPrice }}</view>
          <view>
            <counter
              @changeQuantity="changeQuantity"
              :count="item.count"
            ></counter>
          </view>
        </view>
      </view>
    </view>
    <guessLike></guessLike>
  </scroll-view>
  <view class="all-shopcar">
    <view class="all-shopcar-box">
      <view class="all-radio">
        <radio style="transform: scale(0.6)" color="#12c1a7" />
      </view>
      <view class="all-text">
        <view>全选</view>
      </view>
    </view>
    <view class="total">
      <view>合计:</view>
      <view class="total-box">
        <text class="total-ico">￥</text>
        <text class="total-price">{{ allPrice }}</text>
      </view>
    </view>
    <view class="settlement">去结算({{ shopcarDatas.length }})</view>
  </view>
</template>
<style scoped>
.scroll {
  height: 88vh;
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
.shopcar-radio {
  display: flex;
  align-items: center;
  justify-content: center;
}
.shopcar-image image {
  width: 20vw;
  height: 15vh;
  padding: 0 1vw;
  margin-right: 1vw;
}

.shopcar-text-title {
  margin-bottom: 1vh;
  font-weight: 900;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.shopcar-text {
  width: 70%;
}

.shopcar-text-attrstext {
  padding: 0.2vh 1vw;
  font-size: 23rpx;
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

.all-shopcar {
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8vh;
  width: 100vw;
  background-color: #ffffff;
  font-size: 30rpx;
  overflow: hidden;
}

.all-shopcar-box {
  display: flex;
  text-align: center;
  justify-content: center;
  margin-left: 2vw;
}

.all-text {
  margin-left: -2vw;
  margin-top: 1vh;
}

.total {
  display: flex;
  align-items: center;
  height: 70%;
  width: 40vw;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.total-box {
  margin: 0 0.5vw;
}

.total-ico {
  font-size: 20rpx;
  color: #e98400;
}

.total-price {
  font-size: 35rpx;
  font-weight: 900;
  color: #e98400;
}

.settlement {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2vw;
  padding: 0 6vw;
  height: 70%;
  border-radius: 35rpx;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  background-color: #0bb399d7;
  color: #ffffff;
}
</style>
<script setup>
import { computed, ref } from "vue";
import guessLike from "../../../components/Content/guessLike/guessLike.vue";
import counter from "@/components/counter/counter.vue";

const props = defineProps({
  shopcarDatas: {
    type: Array,
    default: () => {
      return [];
    },
  },
});

// 切换单个item的数量时触发
const changeQuantity = (data) => {
  // console.log(data);
};

// 计算购物车钱的总和
const allPrice = computed(() => {
  const allPriceItem = ref(0);
  for (let item of props.shopcarDatas) {
    allPriceItem.value += item.count * Number(item.nowPrice);
  }
  //   console.log(allPriceItem.value.toFixed(2));
  return allPriceItem.value.toFixed(2);
});
</script>