<template>
    <scroll-view scroll-y class="scroll">
        <view class="shopcar" v-for="(item, index) in selectedShopcar" :key="item.skuId">

            <view class="shopcar-image">
                <image :src="item.picture" mode="scaleToFill" />
            </view>

            <view class="shopcar-text">
                <view class="shopcar-text-title">{{ item.name }}</view>
                <text class="shopcar-text-attrstext">{{ item.attrsText }}</text>
                <view class="shopcar-text-price">
                    <view class="shopcar-text-price-item">￥{{ item.count * item.nowPrice }}
                        <text class="shopcar-text-price-item-old"
                            v-if="item.count * item.price !== item.count * item.nowPrice">￥{{ item.count * item.price
                            }}</text>
                    </view>

                    <view class="count">
                        x{{ item.count }}
                    </view>
                </view>
            </view>
        </view>
    </scroll-view>
</template>
<script setup>

import { address } from "@/network/address"
import { order } from "@/network/purchaseOrder"
import { getShopcar } from "@/network/shopcar"
import { onLoad, onShow } from "@dcloudio/uni-app";
import { ref } from "vue";

// 加载时触发
// 记录购物车列表
const selectedShopcar = ref([])
// 记录购物车列表的id count
const goods = ref([])
onLoad((query) => {
    // 如果是购物车模式，则请求购物车列表并筛选出数据准备提交表单
    if (query.mode === "shopcar") {
        // 请求购物车列表
        getShopcar().then((res) => {
            // 筛选出数据
            for (let item of res.data.result) {
                // 筛选被选择的item , id以及库存
                if (item.selected && item.stock !== 0) {
                    selectedShopcar.value.push(item)
                    goods.value.push({
                        skuId: item.skuId,
                        count: item.count
                    })


                }
            }
        })
    }

})

</script>
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

.shopcar-image{

}
.shopcar-image image {
    width: 17vw;
    height: 12vh;
    padding: 0 1vw;
    margin-right: 1vw;
    border-radius:20rpx;

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