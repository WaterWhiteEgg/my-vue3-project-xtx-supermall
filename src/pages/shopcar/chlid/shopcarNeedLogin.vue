<template>
    <view class="box">
        <view class="login">
            <view class="login-text">登录以查看购物车中的商品</view>
            <button class="login-button" @tap="toLogin">去登录</button>
        </view>
    </view>
</template>
<style scoped>
.box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
}

.login-text {
    font-size: 30rpx;
    color: #818181;
}

.login-button {
    width: 30vw;
    height: 5.2vh;
    padding: 0 5vw;
    margin-top: 1vh;
    font-size: 25rpx;
    border-radius: 35rpx;
    font-weight: 400;
    background-color: #0bb39a;
    color: #fff;
}
</style>
<script setup>
// 点击后登录
const toLogin = () => {
    uni.navigateTo({
        url: "/pages/login/login"

    })
}
</script>