<template>
    <view class="navber" :style="{ 'padding-top': safeAreaInsets.top + 'px' }">
        <view class="profile-title"> <text class="profile-title-back">{{ '<' }} </text><text>个人信息</text></view>
        <view class="profile-image">
            <view class="profile-image-box">
                <image :src="image" mode="scaleToFill" />
            </view>
            <view class="profile-image-text">点击修改头像</view>
        </view>
    </view>
</template>
<script setup>
import { watch, ref } from "vue";
// 头像信息
const image = ref("")


const props = defineProps({
    userdatas: {
        type: Object,
        default: function () {
            return {}
        }
    }
})
// 观察userdatas的值变化
watch(() => {
    return props.userdatas
}, (newVal) => {
    // 将头像的值赋值到image
    image.value = newVal.avatar

})

// 通过安全距离的获取可以动态的适配各种机型的头部距离
const { safeAreaInsets } = uni.getSystemInfoSync();

</script>
<style scoped>
.navber {
    background-color: #00ca76;
    color: #fff;
}

.profile-title {
    display: flex;
    position: relative;
    padding: 2vh 0;
    justify-content: center;
    align-items: center;
}

.profile-title-back {
    position: absolute;
    left: 2vw;
    font-size: 40rpx;
    font-weight: 900;
}

.profile-image {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    font-size: 28rpx;
}

.profile-image .profile-image-box {
    padding: 1vh 0;
    padding-bottom: 0;
}

.profile-image .profile-image-box image {
    width: 19vw;
    height: 10vh;
    border-radius: 50%;

}

.profile-image-text {
    padding: 1vh 0;
}
</style>