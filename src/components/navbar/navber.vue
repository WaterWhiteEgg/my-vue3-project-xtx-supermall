<template>
    <view class="navber" :style="{ 'padding-top': safeAreaInsets.top + 'px' }">
        <view class="navber-ico">
            <slot name="left">
                <view @tap="back()">
                    ＜
                </view>
            </slot>

        </view>
        <view class="navber-text">
            <slot name="title">
            </slot>
        </view>

    </view>
</template>

<style scoped>
.navber {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4vh 0;
    font-size: 32rpx;
    background-color: #fff;
}

.navber-text {
    margin-top: 2vh;
}

.navber-ico {
    position: absolute;
    left: 0vw;
    margin-top: 2vh;
    font-size: 30px;
    font-weight: 400;
}
</style>
<script setup>
import { back } from "../../utils/back"
// 通过安全距离的获取可以动态的适配各种机型的头部距离
const { safeAreaInsets } = uni.getSystemInfoSync();
</script>