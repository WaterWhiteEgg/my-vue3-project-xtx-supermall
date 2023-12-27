<template>
    <view class="message">

        <view class="message-title">
            订单信息
        </view>
        <view class="message-desc">
            <view>订单编号：{{ payMassage && payMassage.id }} <text @tap="copy(payMassage.id)" class="copy">复制</text></view>
            <view>下单时间：{{ payMassage && payMassage.createTime }}</view>
        </view>

    </view>
</template>
<style scoped>
.message {
    display: flex;
    flex-direction: column;
    padding: 1vh 2vw;
    margin: .5vh 0;
    font-size: 25rpx;
    color: rgba(49, 49, 49, 0.829);
    background-color: #fff;
}

.message-title {
    padding: .5vh 0;
    color: #000;
    font-size: 30rpx;

}
.message-desc view{
padding: .5vh 0;
}
.copy{
    margin: 0 1vw;
    padding: .1vh 1vw;
    border-radius: 35rpx;
   font-size: 20rpx;
    border: .1rpx solid #5d5d5d58;
}
</style>
<script setup>
const props = defineProps({
    payMassage: {
        type: Object,
        default: function () {
            return {}
        }
    }
})
const emits = defineEmits([""])

// 点击后复制内容
const copy = (value) => {
    // 复制到用户粘贴板
    uni.setClipboardData({
        data: value,
        success: () => {
            uni.showToast({
                title: "复制成功",
                icon: "success"
            })

        },
        fail: (error) => { }
    })
}
</script>