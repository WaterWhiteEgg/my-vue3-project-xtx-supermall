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
    position: relative;
    justify-content: center;
    align-items: center;
    height: 7vh;
    font-size: 35rpx;
}

.title::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 96vw;
    height: 1px;
    background-color: #adacac35;



}
.title-text {
    padding-left: 2vw;
}

.close {
    position: absolute;
    right: 0;
    padding-right: 5vw;
    font-size: 45rpx;
    font-weight: 900;
    color: #000000b1
}
</style>