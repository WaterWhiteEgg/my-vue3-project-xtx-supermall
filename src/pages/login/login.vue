<template>
  <view class="image-box">
    <image src="@/static/color/logo.png" />
  </view>
  <view class="login-box">
    <button class="login-quick" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
      <text class="login-quick-ico">&#xe8a0;</text>手机号快捷登录
    </button>
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
  </view>
</template>

<script setup>
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

import { login } from "../../network/login";
import { logintest } from "../../network/loginTEST";
import { useRequest } from "../../store/modules/request"
const request = useRequest()

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

// 模拟登录，同样是提交给服务器，但是没有经过微信端
// 由于是静态的，所以直接给个固定的手机号码不需要判断号码的准确性
const dologinTest = () => {
  logintest(
    {
      phoneNumber: 15603061560
    }
  ).then(
    (res) => {
      // 用pinia持久化储存数据
      request.addUserData(res.data.result)
      request.addToken(res.data.result.token)
      // 成功后跳转
      uni.switchTab({ url: "/pages/user/user" })
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

// 获取必要提交数据，必须是在button里面通过open-type="getPhoneNumber" @getphonenumber="xxx"获取
const loginData = ref({});
const getPhoneNumber = (e) => {
  console.log(e);
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
.image-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 35vh;
  margin-top: 10vh;
}

.image-box image {
  width: 45vw;
  height: 10vh;
}

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