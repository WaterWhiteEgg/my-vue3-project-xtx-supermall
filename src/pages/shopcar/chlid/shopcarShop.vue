<template>
  <scroll-view scroll-y class="scroll">
    <view class="shopcar" v-for="(item, index) in shopcarDatas" :key="item.skuId">
      <view class="shopcar-radio">

        <radio style="transform: scale(0.6)" color="#12c1a7" :checked="item.selected" :disabled="isDisabled"
          @tap="changeRadio(item.skuId, item.selected)" />
      </view>
      <view class="shopcar-image">
        <image :src="item.picture" mode="scaleToFill" />
      </view>

      <uni-swipe-action>
        <uni-swipe-action-item>
          <view class="shopcar-text">
            <view class="shopcar-text-title">{{ item.name }}</view>
            <text class="shopcar-text-attrstext">{{ item.attrsText }}</text>
            <view class="shopcar-text-price">
              <view class="shopcar-text-price-item">￥{{ item.count * item.nowPrice }}</view>
              <view>
                <counter @changeQuantity="changeQuantity($event, item.skuId)" :count="item.count"></counter>
              </view>
            </view>
          </view>
          <template #right>
            <view class="del" @tap="delItem(item.skuId)">删除</view>
          </template>
        </uni-swipe-action-item>
      </uni-swipe-action>
    </view>
    <guessLike></guessLike>
  </scroll-view>
  <view class="all-shopcar">
    <view class="all-shopcar-box">
      <view class="all-radio">
        <radio style="transform: scale(0.6)" color="#12c1a7" :checked="isAllSelect" :disabled="isDisabled"
          @tap="changeAllRadio(isAllSelect)" />
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
    <view class="settlement">去结算({{ allSelectItem }})</view>
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
  width: 60vw;
  margin-bottom: 1vh;
  font-weight: 900;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.shopcar-text {
  width: 62vw;
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

.del {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12vw;
  background-color: #e91a1a;
  color: #fff;
  font-size: 30rpx;
}
</style>
<script setup>
import { computed, ref, watch, onMounted } from "vue";

import { changeShopcar, getShopcar, allSelectShopcar, delShopcar } from "../../../network/shopcar"
import { onLoad, onShow } from "@dcloudio/uni-app";

import guessLike from "../../../components/Content/guessLike/guessLike.vue";
import counter from "@/components/counter/counter.vue";


// 记录购物车数据
const shopcarDatas = ref([])
// 挂载时触发
onMounted(() => {
  // 尝试请求购物车
  netGetShopcar()
})

// 展示时触发
onShow(() => {
  // 尝试请求购物车
  netGetShopcar()

})

// 请求getShopcar并赋值
const netGetShopcar = (callback) => {
  getShopcar().then((res) => {
    // 购物车的数据储存赋值
    shopcarDatas.value = res.data.result;
    // 回调函数执行,一开始找不出要短路算法
    callback && callback()
  });
}

// 根据购物车的selected决定是否全选
const isAllSelect = computed(() => {
  for (let item of shopcarDatas.value) {
    // 如果有一次等于false代表没有全选
    if (!item.selected) {
      return item.selected
    }
  }
  // 如果都通过则表示全选
  return true
})
// 切换单选按钮状态，需要网络请求
const changeRadio = (skuId, selected) => {
  netChangeShopcar(skuId, !selected)
}

// 切换全选按钮，需要网络请求
const changeAllRadio = (selected) => {
  // 点击后禁止所有点击
  isDisabled.value = true
  // 显示加载弹窗
  uni.showLoading({
    title: '加载中'
  })
  // 根据计算属性获得的selected取反决定所有item的选择状态
  allSelectShopcar(!selected).then((res) => {
    //  重新请求购物车赋值
    netGetShopcar(() => {
      // 开启所有点击
      isDisabled.value = false
      // 关闭加载弹窗
      uni.hideLoading()
    })


  })
}
// 切换单个item的数量时触发
const changeQuantity = (data, skuId) => {
  netChangeShopcar(skuId, null, data.quantity)
  // console.log(data, skuId);

};
// 控制所有禁止点击
const isDisabled = ref(false)

// 修改单个item的数量或者选中状态网络提交
const netChangeShopcar = (skuId, selected, count) => {
  // 由于可能频繁，所以禁止所有单选框再次点击以及显示加载
  uni.showLoading({
    title: '加载中'
  });
  isDisabled.value = true
  // 网络请求
  changeShopcar(skuId, {
    selected,
    count
  }).then(() => {
    // 请求成功则刷新数据,同时要求其成功后控制加载页面
    let callback = () => {
      // 可以继续点击
      isDisabled.value = false
      // 隐藏加载
      uni.hideLoading();

    }
    netGetShopcar(callback)
  })
}
// 删除一个对象
const delItem = (skuId) => {
  // 弹窗确认
  uni.showModal({
    content: '是否删除购物车',
    success: () => {
      // 添加加载
      uni.showLoading({ title: "正在删除" })
      delShopcar([skuId]).then(() => {
        // 重新加载购物车
        netGetShopcar(() => {
          // 关闭加载
          uni.hideLoading()
        })
      })
    }
  })

}
// 计算购物车钱的总和
const allPrice = computed(() => {
  const allPriceItem = ref(0);
  for (let item of shopcarDatas.value) {
    // 如果有选择才计算
    if (item.selected) {
      allPriceItem.value += item.count * Number(item.nowPrice);
    }
  }
  //   console.log(allPriceItem.value.toFixed(2));
  return allPriceItem.value.toFixed(2);
});
// 计算选择数量的总和
const allSelectItem = computed(() => {
  const allSelectArray = ref([]);
  for (let item of shopcarDatas.value) {
    // 如果有选择就quch
    if (item.selected) {
      allSelectArray.value.push(item)
    }
  }
  return allSelectArray.value.length
})


</script>