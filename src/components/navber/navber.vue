<template>
    <view class="navber" :style="{ 'padding-top': safeAreaInsets.top + 'px' }">
        <view class="navber-title">
            <text class="navber-title-main">小兔仙儿</text>
            <text class="navber-title-sign">|</text>
            <text class="navber-title-p">新鲜 · 亲民 · 便捷</text>
        </view>
        <view class="search">
            <!-- 基本用法 -->
            <uni-search-bar
                @confirm="search"
                @input="input"
                placeholder="搜索"
                v-model="searchValue"
                :radius="35"
            >
            二维码  </uni-search-bar>
            
        </view>
    </view>
</template>
<script setup>
// uni.getSystemInfoSync获取同步信息，这里用于获取屏幕适配的数值

import { ref } from "vue";

// 通过安全距离的获取可以动态的适配各种机型的头部距离
const { safeAreaInsets } = uni.getSystemInfoSync();
const searchValue = ref("");
const input = () => {};
const search = () => {};
</script>
<style >
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
.search {
    margin-top: 1vh;
}
</style>