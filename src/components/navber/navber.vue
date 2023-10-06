<template>
    <view class="navber" :style="{ 'padding-top': safeAreaInsets.top + 'px' }">
        <view class="navber-title">
            <text class="navber-title-main">小兔仙儿</text>
            <text class="navber-title-sign">|</text>
            <text class="navber-title-p">新鲜 · 亲民 · 便捷</text>
        </view>
        <view class="search">
            <view class="search-box">
                <input
                    type="text"
                    placeholder="搜索商品"
                    class="search-input iconfont"
                />
                <text class="search-QR iconfont icon-erweima"></text>
            </view>
        </view>
    </view>
</template>
<script setup>
// uni.getSystemInfoSync获取同步信息，这里用于获取屏幕适配的数值

import { computed, ref } from "vue";

// 通过安全距离的获取可以动态的适配各种机型的头部距离
const { safeAreaInsets } = uni.getSystemInfoSync();
const searchValue = ref("");
const input = () => {};
const search = () => {};
</script>
<style >
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
.search {
    padding: 1vh;
}
.search-box {
    display: flex;
    margin: 1vh 0 1vh 0;
    border-radius: 35rpx;
    background-color: #fff;
}
.search-input {
    margin: auto 1vw;
    display: flex;
    width: 90vw;
    height: 3vh;
    font-size: 25rpx;
    font-weight: 100;
    border-radius: 35rpx;
    color: #000;
    background-color: #fff;
}
.search-input::before {
    content: "\e86e"; /* 字体图标的 Unicode 编码 */
    font-family: "iconfont"; /* 字体图标所在的字体库 */
    display: flex;
    align-items: center;
    padding: 0 3vw;
    font-size: 35rpx;
    pointer-events: none; /* 避免伪元素干扰交互 */
}
.search-QR {
    width: 10vw;
    padding: 1vh 0;
    font-size: 35rpx;
    border-radius: 35rpx;
}
</style>