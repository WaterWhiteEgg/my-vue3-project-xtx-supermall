<template>
    <view class="price">
        <view>
            <view>商品总价：</view>
            <view>￥{{ payPrice && payPrice.totalMoney }}</view>
        </view>
        <view>
            <view>邮费：</view>
            <view>￥{{ payPrice && payPrice.postFee }}</view>
        </view>
        <view>
            <view>应付总额：</view>
            <view class="price-index">￥{{ payPrice && payPrice.payMoney }}</view>
        </view>

    </view>
</template>
<style scoped>
.price {
    display: flex;
    flex-direction: column;
    padding: 0 2vw;
    font-size: 28rpx;
    color: rgba(49, 49, 49, 0.829);
    background-color: #fff;
}

.price view {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .2vh 0;
}

.price-index {
    font-size: 30rpx;
    color: rgb(165, 0, 0);
}
</style>
<script setup>
const props = defineProps({
    payPrice: {
        type: Object,
        default: function () {
            return {}
        }
    }
})
const emits = defineEmits([""])
</script>