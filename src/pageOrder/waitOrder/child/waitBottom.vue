<template>
    <view class="bottom">
        <text v-if="orderState === 1">取消订单{{ waitPayTime }}</text>
        <text class="bottom-pay" @tap="netPay" v-if="orderState === 1">去购买</text>
        <text @tap="buyAgain" v-if="orderState !== 1">再次购买</text>
    </view>
</template>
<style scoped>
.bottom {
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 3vh 2vw;
    font-size: 30rpx;
    background-color: #fff;
}



.bottom text {
    padding: .6vh 6vw;
    margin: 0 1vw;
    border-radius: 35rpx;
    border: .1px solid #0000006e;
    color: #000000;
}

.bottom-pay {
    border: .1px solid #12c1a7 !important;
    background-color: #12c1a7 !important;
    color: #fff !important;

}
</style>
<script setup>
const props = defineProps({
    // 订单id
    id: {
        type: String,
        default: ""
    },
    orderState: {
        type: Number,
        default: 1
    }
})
const emits = defineEmits([""])

// 提交模拟支付请求,改变支付状态
const netPay = () => {
    emits("netPay", props.id)
}
// 请求再次购买
const buyAgain = () => {
    uni.navigateTo({
        url: "/pageOrder/completeOrder/completeOrder?mode=repeatBuy&id=" + props.id
    })
}
</script>