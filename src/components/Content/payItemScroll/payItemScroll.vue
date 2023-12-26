<template>
    <scroll-view scroll-y class="scroll">
        <view class="shopcar" v-for="(item, index) in selectedShopcar" :key="item.skuId">
            <view class="shopcar-image">
                <image :src="item.picture ||item.image " mode="scaleToFill" />
            </view>

            <view class="shopcar-text">
                <view class="shopcar-text-title">{{ item.name }}</view>
                <text class="shopcar-text-attrstext">{{ item.attrsText }}</text>
                <view class="shopcar-text-price">
                    <view class="shopcar-text-price-item">￥{{ item.totalPayPrice || item.realPay }}
                        <text class="shopcar-text-price-item-old" v-if="item.totalPayPrice !== item.totalPrice">￥{{
                            item.totalPrice
                        }}</text>
                    </view>

                    <view class="count"> x{{ item.count || item.quantity }} </view>
                </view>
            </view>
        </view>
    </scroll-view>
</template>
<style scoped>
.scroll {
    height: 40vh;
    border-radius: 10rpx;
    background-color: #fff;
}

.shopcar {
    display: flex;
    width: 96vw;
    margin: .5vh 2vw;
    padding: 2vh 0;
    padding-bottom: 1vh;
    border-bottom: .1rpx solid #6c6c6c35;
    font-size: 25rpx;
    background-color: #fff;
}

.shopcar-image image {
    width: 18vw;
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
<script setup>
const props = defineProps({
    selectedShopcar: {
        type: Array,
        default: function () {
            return []
        }
    }
})
</script>