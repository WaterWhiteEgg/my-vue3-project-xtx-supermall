<template>
    <view class="navber" :style="{
        'padding-top': safeAreaInsets.top  + 'px',
        'background-color': props.background,
        'color': props.color,
    }">
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
    background-color: transparent;
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

const props = defineProps({
    background: {
        type: String,
        default: "#fdfdfd"
    },
    color: {
        type: String,
        default: "#000000"
    },
})

// 通过安全距离的获取可以动态的适配各种机型的头部距离
const { safeAreaInsets } = uni.getSystemInfoSync();


</script>