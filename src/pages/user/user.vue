<template>
    <view class="information-bar" :style="{ 'padding-top': safeAreaInsets.top + 'px' }">
        <view class="information">
            <view class="information-avatar">
                <image :src="datas && datas.avatar" mode="scaleToFill" />
            </view>
            <view class="information-account">
                <text class="information-account-username" @tap="toLogin(!Object.keys(datas).length)">{{
                    datas && Object.keys(datas).length ? datas.account :
                    "无登录" }}</text>
                <text class="information-account-head" @tap="toProfile(Object.keys(datas).length)"><text> 更新头像昵称</text>
                </text>
            </view>
            <view class="information-system" @tap="toSettings">
                <text>设置</text>
            </view>
        </view>
    </view>
    <userMethod></userMethod>
    <guessLike v-if="datas && Object.keys(datas).length"></guessLike>
</template>

<script setup>
import { onLoad, onShow } from '@dcloudio/uni-app';
import { useRequest } from "../../store/modules/request"
import { ref, watch, onActivated } from 'vue'

import userMethod from "./child/userMethod.vue"
import guessLike from "../../components/Content/guessLike/guessLike.vue"
// 通过安全距离的获取可以动态的适配各种机型的头部距离
const { safeAreaInsets } = uni.getSystemInfoSync();

const datas = ref({})
onShow(() => {
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
// 在一般情况下，都需要验证token是否过期，是否有错
// 但是目前存在token就可以
const testToken = () => {
    // console.log(useRequest().userData);
    // 赋值
    datas.value = useRequest().userData
    if (useRequest().token) {
    } else {
        // 跳转登录去搞一个token
        uni.navigateTo({ url: "/pages/login/login" })
    }
}

// 前往设置
const toSettings = () => {
    uni.navigateTo({
        url: "/pageMember/settings/settings"
    })
}
// 前往登录,但是要看是不是已经登录了
const toLogin = (flag) => {
    if (flag) {
        uni.navigateTo({
            url: "/pages/login/login"
        })
    }

}
// 前往个人中心，如果没有登录则不需要跳转
const toProfile = (flag) => {
    if (flag) {

        uni.navigateTo({
            url: "/pageMember/profile/profile"
        })
    }
}
</script>

<style scoped>
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
    padding-top: 1vh;
    min-height: 65px;
    margin: 0 2vw;
}

.information-avatar image {
    width: 14vw;
    height: 9.5vh;
    min-width: 65px;
    min-height: 65px;
    border-radius: 50%;

}

.information-account {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 2vh;
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