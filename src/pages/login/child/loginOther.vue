<template>
    <view class="login-other">
        <view class="login-other-text">
            <text class="login-other-text-data">其他登录方式</text>
        </view>
        <view class="login-other-fn">
            <view>
                <view class="login-other-fn-ico" @tap="dologinTest">
                    <image src="@/static/color/iphone.png" />
                </view>
                <view>模拟登录</view>
            </view>
            <view>
                <view class="login-other-fn-ico">ico</view>
                <view>模拟登录</view>
            </view>
            <view>
                <view class="login-other-fn-ico">ico</view>
                <view>模拟登录</view>
            </view>
            <view>
                <view class="login-other-fn-ico">ico</view>
                <view>模拟登录</view>
            </view>
        </view>
    </view>
</template>
<script setup>
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

import { back } from "../../../utils/back"
import { logintest } from "../../../network/loginTEST";
import { useRequest } from "../../../store/modules/request"

// 获取code，现在不知道有什么用
const props = defineProps({
    code: {
        type: String,
        default: ""
    }
})

// 状态管理
const request = useRequest()

// 模拟登录，同样是提交给服务器，但是没有经过微信端
// 由于是静态的，所以直接给个固定的手机号码不需要判断号码的准确性
const dologinTest = () => {
    logintest(
        {
            phoneNumber: 99999999999
        }
    ).then(
        (res) => {
            // 用pinia持久化储存数据
            request.addUserData(res.data.result)
            request.addToken(res.data.result.token)
            // 登录后返回
            back()
            // 显示成功弹窗
            uni.showToast({
                title: '登录成功',
                icon: 'success',
            })

        })
        .catch((err) => {
            console.log(err);
            uni.showToast({
                title: 'err',
                icon: 'error',
            })
        })
}
</script>
<style scoped>
.login-other {
    margin-top: 2vh;
}

.login-other-text {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2vh 0;
}

.login-other-text-data {
    position: relative;
    color: rgba(102, 102, 102, 0.795);
    font-size: 30rpx;
}

.login-other-text text:before,
.login-other-text text:after {
    content: "";
    position: absolute;
    /*定位背景横线的位置*/
    top: 50%;
    background: #8c8c8c;
    /*背景横线颜色*/
    width: 50%;
    /*单侧横线的长度*/
    height: 1px;
}

.login-other-text text:before {
    left: -55%;
}

.login-other-text text:after {
    right: -55%;
}

.login-other-fn {
    display: flex;
    font-size: 20rpx;
}

.login-other-fn view {
    margin: 1vh 0.5vw;
}

.login-other-fn-ico {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80rpx;
    height: 80rpx;
    background-color: #ffffffec;
    border: 1px solid #8b8b8b;
    border-radius: 50%;
}

.login-other-fn-ico image {
    width: 8vw;
    height: 4vh;
}
</style>