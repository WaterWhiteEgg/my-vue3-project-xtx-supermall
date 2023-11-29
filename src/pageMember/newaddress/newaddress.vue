<template>
  <view>
    <view v-for="item in address" class="item" :key="item.key">
      <text class="item-key">{{ item.key }}</text>
      <input
        type="text"
        :placeholder="item.placeholder"
        v-if="!item.switchButton && !item.city"
      />
      <!-- 特殊的city选择 -->
      <citySelect
        v-if="item.city"
        values=""
        @selectCity="selectCity"
      ></citySelect>

      <!-- 特殊的switchButton -->
      <view class="switch" v-if="item.switchButton">
        <switch class="switch-button" style="transform: scale(0.7)" />
      </view>
    </view>
  </view>
  <view class="save">保存并使用</view>
</template>
<script setup>
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

import citySelect from "../../components/citySelect/citySelect.vue";
// 加载时触发
onLoad((query) => {
  console.log(query);
  // 根据id修改标题
  uni.setNavigationBarTitle({
    title: query.id === "2" ? "修改地址" : "新建地址",
  });
});

// 地址数据
const address = ref([
  { key: "收货人", value: "", placeholder: "请输入收件人信息" },
  { key: "手机号码", value: "", placeholder: "请输入手机号码" },
  { key: "所在地区", value: "", placeholder: "请选择城市", city: true },
  { key: "详细地址", value: "", placeholder: "请输入详细地址" },
  { key: "设为默认地址", value: "", switchButton: true },
]);
</script>
<style scoped>
.item {
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 2vw;
  padding: 1vh 0;
  border-bottom: 1px solid #9797971f;
  font-size: 30rpx;
}

.item-key {
  width: 25vw;
  padding: 0 1vw;
}

.switch {
  width: 80%;
  height: 5vh;
}

.switch-button {
  position: absolute;
  right: 0;
  top: 10%;
}

.save {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96%;
  height: 5vh;
  margin: 2vh auto;
  padding: 0.1vh 0;
  border-radius: 35rpx;
  font-size: 30rpx;
  color: #fff;
  background-color: #12c1a7;
}
</style>