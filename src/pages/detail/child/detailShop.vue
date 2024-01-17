<template>
  <view class="shop">
    <view class="shop-fn">
      <view class="shop-fn-item"><button> <text>&#xe666;</text></button>
        <text>收藏</text>
      </view>
      <!-- #ifdef MP-WEIXIN -->
      <view class="shop-fn-item"><button open-type="contact" @contact="contact"><text>&#xe8a0;</text> </button>
        <text>客服</text>
      </view>
      <!-- #endif -->
      <view class="shop-fn-item" @tap="toNavShopcar"><button><text>&#xe63f;</text> </button>
        <text>购物车</text>
      </view>
    </view>
    <view class="shop-button">
      <view class="shopcar" @tap="shopcarJoin">添加购物车</view>
      <view class="buying" @tap="buying">立即购买</view>
    </view>
  </view>
</template>
<script setup>
import { joinShopcar } from "../../../network/shopcar";
import { globalSkuItem } from "../../../store/skus";
import { globalDetail } from "../../../store/toDetail";
import { useRequest } from "../../../store/modules/request";

const props = defineProps({

})

// 检测全局规格是否添加
const hasSkuItem = (callback) => {
  // 如果没有提交的数组，则提示无法提交
  if (Object.keys(globalSkuItem().skuItem).length === 0) {
    // 弹窗提示
    uni.showToast({
      title: "请选择产品规格！",
      icon: "error",
    });
  }
  // 如果有则执行回调
  else {
    callback && callback()
  }
}
// 加入购物车
const shopcarJoin = () => {
  // 检测token
  if (!toWellLogin()) {
    // 如果没有提交的数组，则提示无法提交
    hasSkuItem(() => {
      // 如果有则提交购物车
      joinShopcar({
        skuId: globalSkuItem().skuItem.id,
        count: globalSkuItem().quantity,
      }).then(() => {
        // 提交成功则提示弹窗
        uni.showToast({
          title: "提交成功！",
        });
      });
    })
  }



}
// 前往购物车
const toNavShopcar = () => {
  // 检测token
  if (!toWellLogin()) {
    uni.navigateTo({
      url: "/pages/shopcar/other/navShopcar"
    })


  }

}
// 前往立即购买,收集好需要的数据query传输
const buying = () => {
  // 检测token
  if (!toWellLogin()) {
    hasSkuItem(() => {
      uni.navigateTo({
        url: `/pageOrder/completeOrder/completeOrder?mode=buy&skuId=${globalSkuItem().skuItem.id}&count=${globalSkuItem().quantity}&addressId=${globalDetail().addressId}`
      })
    })
  }
}
// 没有登录就跳转登录
const toWellLogin = () => {
  if (useRequest().token === "") {
    uni.navigateTo({
      url: "/pages/login/login"
    })
  }
  return useRequest().token === ""
}

// 客服信息回调
const contact = (value) => {
  console.log(value);
}
</script>
<style scoped>
.shop {
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  z-index: 999;
  height: 10vh;
  font-family: "iconfont";
  display: flex;
  justify-content: space-between;
  font-size: 30rpx;
  background-color: #f1f1f1;
}

.shop-fn {
  display: flex;
  font-size: 30rpx;
}

.shop-fn:first-child {
  margin-left: 1vw;
}

.shop-button {
  display: flex;
}

.shop-button view {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1vh 4vw;
  margin: 2vh 1vw;
  font-size: 35rpx;
  border-radius: 40rpx;
  background-color: #12c1a7;
  color: #fff;
}

.shop-fn-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2vw;
}

.shop-fn-item button {
  box-sizing: border-box;
  background-color: #ffffff00;

}

.shop-fn-item button::after {
  content: "";
  border: 0px solid #00000000;

}

.shopcar {
  background-color: #fe9539 !important;
}
</style>