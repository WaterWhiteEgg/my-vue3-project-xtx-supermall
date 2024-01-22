<template>
    <view class="navber">
        <navber background="#12c1a7" color="#fff">
            <template #title>
                <view>{{ orderStateText[orderState - 1] }}</view>
            </template>
        </navber>
        <view class="navber-time">
            <view>总支付：{{ waitPayTime && waitPayTime.payMoney }}￥</view>
            <view v-if="orderState === 1">销毁剩余时间：{{ Object.keys(waitPayTime).length === 0 ? "" : timer }}</view>

        </view>
        <view class="navber-commit">
            <view class="navber-commit-button" @tap="netPay" v-if="orderState === 1">
                去支付
            </view>
            <view class="navber-commit-button" @tap="buyAgain" v-if="orderState >= 4">
                再次购买
            </view>
            <view @tap="TESTorderSend" v-if="orderState === 2 && isDEV">
                测试发货
            </view>
            <view @tap="finReceipt" class="navber-commit-button" v-if="orderState === 3">
                确认收货
            </view>
        </view>
    </view>
</template>
<style scoped>
.navber {
    box-sizing: border-box;
    height: 9vh;
    font-size: 30rpx;
    background-color: #12c1a7;
    color: #fff;
}

.navber-time {
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    height: 3vh;
    background-color: #12c1a7;

}

.navber-commit {
    box-sizing: border-box;
    height: 9vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5vh 0;
    font-size: 28rpx;
    color: #096658;
    background-color: #12c1a7;


}

.navber-commit-button {
    padding: .5vh 8vw;
    border-radius: 35rpx;
    background-color: #fff;

}
</style>
<script setup>
import navber from '../../../components/navbar/navber.vue';
import { ref, computed } from 'vue'

import { orderConsignment, orderReceipt } from "../../../network/purchaseOrder"

const props = defineProps({
    // 等待时间数组
    waitPayTime: {
        type: Object,
        default: function () {
            return {}
        }
    },
    // 订单id
    id: {
        type: String,
        default: ""
    },
    // 订单状态
    orderState: {
        type: Number,
        default: 1
    }
})
const emits = defineEmits(["netPay"])

// 状态对应的文本
const orderStateText = ref(["◷ 等待付款", "等待发货", "等待确认", "已确认收货", "已评价", "取消订单"])

// 计算剩余时间
const timer = computed(() => {
    // 获取剩余时间
    let DateRemain = new Date(
        Date.parse(props.waitPayTime && props.waitPayTime.payLatestTime) - Date.now()
    )
    // 整理时间
    let tiemrArray = [
        DateRemain.getHours() < 10 ? "0" + DateRemain.getHours() : DateRemain.getHours(),
        DateRemain.getMinutes() < 10 ? "0" + DateRemain.getMinutes() : DateRemain.getMinutes(),
        DateRemain.getSeconds() < 10 ? "0" + DateRemain.getSeconds() : DateRemain.getSeconds()]
    // console.log(tiemrArray);
    // 呈现出字符串渲染

    return `${tiemrArray[0]}时${tiemrArray[1]}分${tiemrArray[2]}秒`
})

// 提交模拟支付请求,改变支付状态
const netPay = () => {
    emits("netPay", props.id)
}

// 测试用判断变量
const isDEV = import.meta.env.DEV
// 测试模拟发货（经过物流）
const TESTorderSend = () => {
    orderConsignment(props.id).then((res) => {
        uni.showToast({
            title: "状态已修改"
        })
        console.log(res);
        // 顺便点点刷新了
        uni.navigateTo({ url: "/pageOrder/waitOrder/waitOrder?id=" + props.id })

    })
}


// 再次购买请求
const buyAgain = () => {
    uni.navigateTo({
        url: "/pageOrder/completeOrder/completeOrder?mode=repeatBuy&id=" + props.id
    })
}

// 确认收货请求
const finReceipt = () => {
    // 请求用户再次确认
    uni.showModal({
        title: '是否确认收货？',
        // 处理
        success: () => {
            orderReceipt(props.id).then((res) => {
                // 刷新
                uni.navigateTo({ url: "/pageOrder/waitOrder/waitOrder?id=" + props.id })
            })
        }
    })

}
</script>