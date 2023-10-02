<template>
    <view class="navber" :style="{ 'padding-top': safeAreaInsets.top + 'px' }"
        >首页</view
    >
</template>
<script setup>
// uni.getSystemInfoSync获取同步信息，这里用于获取屏幕适配的数值
// 通过安全距离的获取可以动态的适配各种机型的头部距离
const { safeAreaInsets } = uni.getSystemInfoSync();
</script>
<style >
.navber {
    padding-top: 20px;
    text-align: center;
}
</style>