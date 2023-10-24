<template>
    <view class="navber" :style="{ 'padding-top': safeAreaInsets.top + 'px' }">
        <view class="navber-title">
            <text class="navber-title-main">小兔仙儿</text>
            <text class="navber-title-sign">|</text>
            <text class="navber-title-p">新鲜 · 亲民 · 便捷</text>
        </view>
        <view class="search">

            <search class="search-index"></search>
            <text class="search-QR iconfont icon-erweima" @click="searchQR"></text>
        </view>
    </view>
</template>
<script setup>
// uni.getSystemInfoSync获取同步信息，这里用于获取屏幕适配的数值

import { computed, ref } from "vue";
import { scanCodePr } from "@/utils/promise/scanCode.js";

import search from "../../components/search/search.vue"

// 通过安全距离的获取可以动态的适配各种机型的头部距离
const { safeAreaInsets } = uni.getSystemInfoSync();
// 获得与失去焦点
import { inputFlag, focus, blur } from "./js/input.js";
const searchValue = ref("");
const input = () => { };

// 扫码提供
const searchQR = () => {
    scanCodePr()
        //   成功后返回
        .then((res) => {
            console.log(res);
        })
        //   扫码失败
        .catch((error) => {
            console.log(error);
        });
};
</script>
<style>
@import url("../../static/icon/iconfont.css");

.navber {
    font-size: 35rpx;
    padding-top: 20px;
    color: #f0f0f0;
    background-color: #00db80;
    font-weight: 900;
}

.navber-title {
    margin-left: 5vw;
    letter-spacing: 3rpx;
}

.navber-title-main {
    font-family: "Courier New", Courier, monospace;
}

.navber-title-p {
    padding: 0 2vw;
    font-size: 30rpx;
    font-weight: normal;
    letter-spacing: 0rpx;
}

.navber-title-sign {
    padding: 0 3vw;
    font-weight: normal;
}


.search{
    position: relative;
    margin-top: 2vh;
    padding-bottom:.1vh ;
}

.search-QR {
    position: absolute;
    top: 0;
    right: 5vw;
    padding: 1vh 0;
    z-index: 9999;
    font-size: 35rpx;
    border-radius: 35rpx;
}
</style>
