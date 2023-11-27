<template>
  <view class="settings">
    <view v-for="(item, index) in filterSettingsData('my')" :key="item.id" class="settings-item"
      :class="{ 'first': index === filterSettingsData('my').length - 1 }" @tap="goAddress(index)">
      <view>
        {{ item.name }}
      </view>
    </view>
    <view v-for="(item, index) in filterSettingsData('serve')" :key="item.id" class="settings-item"
      :class="{ 'first': index === filterSettingsData('serve').length - 1 }">
      <view>
        {{ item.name }}
      </view>
    </view>
    <view v-for="(item, index) in filterSettingsData('about')" :key="item.id" class="settings-item"
      :class="{ 'first': index === filterSettingsData('about').length - 1 }">
      <view>
        {{ item.name }}
      </view>
    </view>
    <view class="settings-out-login" @tap="outLogin">退出登录</view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue';

import { useRequest } from "../../store/modules/request"
import { back } from "../../utils/back"

// 设置的静态数据
const settingsData = ref([
  { name: "我的收货地址", id: "address", type: "my" },
  { name: "授权管理", id: "empower", type: "serve" },
  { name: "问题反馈", id: "feedback", type: "serve" },
  { name: "联系我们", id: "callUs", type: "serve" },
  { name: "关于小兔仙儿", id: "abbutCompany", type: "about" },
])
// 筛选静态数据
const filterSettingsData = computed(() => {
  return (type) => {
    return settingsData.value.filter((item) => {
      return item.type === type
    })
  }
})

// 尝试退出登录
const outLogin = () => {
  // 弹出框确认
  uni.showModal({
    title: '是否退出登录',
    success: function (res) {
      // 点击确定后
      if (res.confirm) {
        // 清除数据
        useRequest().clearToken()
        // 返回上一页
        back()
      }
    }
  });
}

// 前往地址栏，由于地址栏就一个元素所以不用测都行
const goAddress = () => {
uni.navigateTo({ url: '/pageMember/address/address' })
}
</script>

<style scoped>
.settings {
  font-size: 35rpx;
  height: 99vh;
  padding-top: 1vh;
  background-color: #f7f7f7;


}

.settings-item {
  display: flex;
  position: relative;
  padding: 1vh 2vw;
  margin: .25vh 2vw;
  border-radius: 15rpx;
  background-color: #fff;
}

.settings-item::after {
  content: '>';
  position: absolute;
  right: 5vw;
  color: #d0d0d0;
}

.settings-out-login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin: 2vh auto;
  padding: 1vh 2vw;
  border-radius: 15rpx;
  background-color: #fff;

}

.first {
  margin-bottom: 1vh;
}
</style>