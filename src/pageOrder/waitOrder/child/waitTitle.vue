<template>
    <view class="navber">
        <navber background="#12c1a7" color="#fff">
            <template #title>
                <view>◷ 等待付款</view>
            </template>
        </navber>
        <view class="navber-time">
            <view>总支付：{{ waitPayTime && waitPayTime.payMoney }}￥</view>
            <view>销毁剩余时间：{{ timer }}</view>

        </view>
        <view class="navber-commit">
            <view class="navber-commit-button">
                去支付
            </view>
        </view>
    </view>
</template>
<style scoped>
.navber {

    font-size: 30rpx;
    background-color: #12c1a7;
    color: #fff;
}

.navber-time {
    display: flex;
    justify-content: space-around;
}

.navber-commit {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5vh 0;
    font-size: 28rpx;
    color: #096658;

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
const props = defineProps({
    // 等待时间数组
    waitPayTime: {
        type: Object,
        default: function () {
            return {}
        }
    }
})
const emits = defineEmits([""])

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
</script>