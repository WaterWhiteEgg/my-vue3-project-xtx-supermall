<template>
    <view class="ad">
        <view class="ad-tag">满减</view>
        <view class="ad-desc">满5件，即可享受9折优惠！</view>
    </view>
</template>
<style scoped>
.ad {
    display: flex;
    align-items: center;
    height: 5vh;
    font-size: 25rpx;
    background-color: #fff;
}

.ad-tag {
    height: 3vh;
    padding: 0 1vw;
    margin: 0 1vw;
    background-color: #0bb39a;
    color: #ffffff;
}

.ad-desc {
    color: #1b1b1b;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
<script setup></script>