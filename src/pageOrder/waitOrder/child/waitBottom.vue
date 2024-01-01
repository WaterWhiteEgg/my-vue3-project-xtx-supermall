<template>
    <view class="bottom">
        <text class="bottom-comment">取消订单</text>
        <text class="bottom-pay" @tap="netPay">去购买</text>
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
import { pay } from "../../../network/pay"
const props = defineProps({
    // 订单id
    id: {
        type: String,
        default: ""
    }
})
const emits = defineEmits([""])

// 提交模拟支付请求,改变支付状态
const netPay = () => {
    pay(props.id).then((res) => {
        console.log(res);
    })
} 
</script>