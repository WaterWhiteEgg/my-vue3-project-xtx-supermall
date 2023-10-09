<template>
    <navber></navber>
    <swiper-mian :swiperData="swiperData"></swiper-mian>
    <view class="content"> </view>
</template>

<script setup>
import navber from "../../components/navber/navber.vue";
import "../../network/interceptor";
import { bannerData } from "./js/bannerData";
import { hotMutli } from "../../network/home";

import swiperMian from "../../components/swiper/swiperMian.vue";
import { onMounted, ref } from "vue";

const swiperData = ref();
// 首页渲染时触发
onMounted(() => {
    // 请求广告数据
    bannerData().then((res) => {
        // 利用res.status返回成功或错误的结果
        if (!res.status) {
            // 成功获取数据
            swiperData.value = res.data;
        } else {
            // 失败目前啥也不干，不是一定要用这个地方的可以去doBanner里面
            // 写逻辑
        }
        // console.log(swiperData.value);
    });
    // 测试
    hotMutli().then((res) => {
        console.log(res);
    });
});
</script>

<style>
@import url("../../static/icon/iconfont.css");

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
