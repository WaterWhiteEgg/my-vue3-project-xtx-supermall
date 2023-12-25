<template>
    <view class="navber">
        <navber background="#12c1a7" color="#fff">
            <template #title>
                <view>◷ 等待付款</view>
            </template>
        </navber>
        <view class="navber-time">
            <view>创建时间：{{ waitPayTime && waitPayTime.createTime }}</view>
            <view>订单销毁时间：{{ waitPayTime && waitPayTime.payLatestTime }}</view>

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
.navber-commit-button{    
    padding: .5vh 8vw;
    border-radius: 35rpx;
    background-color: #fff;

}
</style>
<script setup>
import navber from '../../../components/navbar/navber.vue';

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
</script>