<template>
    <view class="login-box">
        <button class="login-quick" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
            <text class="login-quick-ico">&#xe8a0;</text>手机号快捷登录
        </button>
    <loginOther :code="code"></loginOther>
    </view>
</template>
<script setup>
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

import loginOther from "./loginOther.vue";


import { login } from "../../../network/login";

// 加载时获取query
// 获取code
const code = ref();
onLoad(async (query) => {
    // 获取微信验证需要的token，5分钟内有效
    // 调用wx.login()会返回一个code，由于没有promise所以用异步函数接收
    code.value = await wx.login();
});


// 尝试登录
const doLogin = () => {
    login(loginData.value).then((res) => {
        console.log(res);
    });
};
// 获取必要提交数据，必须是在button里面通过open-type="getPhoneNumber" @getphonenumber="xxx"获取
const loginData = ref({});
const getPhoneNumber = (e) => {
    // console.log(e);
    // 获取加密数据,用短路防止没有数据时报错
    let encryptedData = e.detail.encryptedData;
    // 获取手机号码,用短路防止没有数据时报错
    let iv = e.detail.iv;
    //   赋值,注意code过期

    loginData.value = {
        code: code.value.code,
        encryptedData,
        iv,
    };
    //   执行登录
    doLogin();
};
</script>
<style scoped>
.login-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.login-quick {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "iconfont";
    width: 80%;
    height: 6vh;
    padding: 1.5vh 1vw;
    border-radius: 35rpx;
    font-size: 25rpx;
    color: #fff;
    background-color: #12c1a7;
}

.login-quick-ico {
    font-size: 35rpx;
    padding: 0 0.5vw;
}

</style>