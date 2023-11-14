<template>
    <view class="information-bar" :style="{ 'padding-top': safeAreaInsets.top + 'px' }">
        <view class="information">
            <view class="information-avatar">
                <image :src="datas.avatar" mode="scaleToFill" />
            </view>
            <view class="information-account">
                <text class="information-account-username">{{ Object.keys(datas).length  ? datas.account : "无登录" }}</text>
                <text class="information-account-head"> <text> 更新头像昵称</text> </text>
            </view>
            <view class="information-system">
                <text>设置</text>
            </view>
        </view>
    </view>

    <userMethod></userMethod>
</template>

<script setup>
import { onLoad, onShow } from '@dcloudio/uni-app';
import { useRequest } from "../../store/modules/request"
import { ref, watch } from 'vue'

import userMethod from "./child/userMethod.vue"

// 通过安全距离的获取可以动态的适配各种机型的头部距离
const { safeAreaInsets } = uni.getSystemInfoSync();

const datas = ref({})
onLoad((query) => {
    // 在一般情况下，都需要验证token是否过期，是否有错
    // 但是目前存在token就可以
    testToken()
})
// 监听request 里面的 token 变化
watch(() => {
    return useRequest().token
}, () => {
    // 变化就让他再检测一次
    testToken()
})

// 检查token存在以及执行跳转方法
const testToken = () => {
    if (useRequest().token) {
        // 赋值
        datas.value = useRequest().userData
        console.log(datas.value);

    } else {
        // 跳转登录去搞一个token
        uni.navigateTo({ url: "/pages/login/login" })
    }
}
</script>

<style scoped>
.information-box {}

.information-bar {
    padding-bottom: 10vh;
    font-size: 30rpx;
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%;
    background-color: #00c2a5;

    color: #fff;
}

.information {
    display: flex;

}

.information-avatar {
    margin: 0 2vw;
}

.information-avatar image {
    width: 14vw;
    height: 9.5vh;
    border-radius: 50%;

}

.information-account {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 1vh;
    font-size: 30rpx;
}

.information-account-head {
    margin: 1vh 0;
    font-size: 25rpx;
}

.information-account-head text {
    padding: .2vh 2vw;
    border-radius: 35rpx;
    border: .01px solid #ffffff;
}


.information-account-username {
    width: 100%;
    max-width: 60vw;
    margin: .5vh 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.information-system {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 30%;

}

.information-system text {
    padding: 0 3vw 2vh 0;
}
</style>