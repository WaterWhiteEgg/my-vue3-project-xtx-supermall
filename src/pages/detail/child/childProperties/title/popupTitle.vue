<template>
    <view class="title">
        <text class="title-text">{{ title }}</text>
        <text @tap="close" class="close">&times;</text>
    </view>
</template>
<script setup>
const prop = defineProps({
    title: {
        type: String,
        default: ""
    }
})

// 关闭弹窗

import { popupShow } from "@/store/popup";
const { closePopup } = popupShow();
const close = () => {
    closePopup()
}
</script>
  
<style scoped>
.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7vh;
}

.title-text {
    padding-left: 2vw;
}

.close {
    padding-right: 5vw;
    font-size: 35rpx;
    font-weight: 900;
    color: rgba(0, 0, 0, 0.377)
}
</style>