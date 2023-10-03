<template>
    <navber></navber>
    <swiper-mian></swiper-mian>
    <view class="content">
        <image class="logo" src="/static/logo.png"></image>
        <view class="text-area">
            <text class="title" @click="testAdd"> {{ mainDatas.count }}</text>
            <uni-badge text="dddddddddddd"></uni-badge>
        </view>
    </view>
</template>

<script setup>
import navber from "../../components/navber/navber.vue";
import { useMainDatas } from "../../store/mainDatas";
import "../../network/interceptor";
import { uniReq } from "../../network/request";
import swiperMian from "../../components/swiper/swiperMian.vue";
const mainDatas = useMainDatas();
const testAdd = () => {
    mainDatas.increment();
    // 使用请求封装
    uniReq({
        url: "/home/banner",
        data: {},
        header: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
        method: "GET",
        sslVerify: true,
    }).then((res) => {
        console.log(res);
    });
};
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
