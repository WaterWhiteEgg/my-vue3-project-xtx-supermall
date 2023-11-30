<template>
  <view>
    <view v-for="item in address" class="item" :key="item.key">
      <text class="item-key">{{ item.key }}</text>
      <input type="text" :placeholder="item.placeholder" v-model="item.value" v-if="!item.switchButton && !item.city" />
      <!-- 特殊的city选择 -->
      <citySelect v-if="item.city" :values="item.value" @selectCity="selectCity" @findCode="findCode"></citySelect>

      <!-- 特殊的switchButton -->
      <view class="switch" v-if="item.switchButton">
        <switch class="switch-button" :checked="item.value" @change="switchChange" style="transform: scale(0.7)" />
      </view>
    </view>
  </view>
  <view class="save" @tap="save">保存并使用</view>
</template>
<script setup>
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

import { inAddress, addAddress, changeAddress } from "../../network/address"
import { back } from "../../utils/back"

import citySelect from "../../components/citySelect/citySelect.vue";
// 加载时触发
// 保存query数据
const querys = ref("")

onLoad((query) => {
  // 记录query
  querys.value = query
  // 如果要进入修改页面的话
  if (query.id === "2") {
    // 修改地址的内容网络请求
    inAddress(query.uid).then((res) => {
      // res的数据同步至address
      let result = res.data.result
      address.value[0].value = result.receiver
      address.value[1].value = result.contact
      address.value[2].value = result.fullLocation
      address.value[3].value = result.address
      address.value[4].value = result.isDefault

    })
    // 根据id修改标题
    uni.setNavigationBarTitle({
      title: query.id === "2" ? "修改地址" : "新建地址",
    });
  }

});

// 地址数据
const address = ref([
  { key: "收货人", value: "", placeholder: "请输入收件人信息" },
  { key: "手机号码", value: "", placeholder: "请输入手机号码" },
  { key: "所在地区", value: "", placeholder: "请选择城市", city: true },
  { key: "详细地址", value: "", placeholder: "请输入详细地址" },
  { key: "设为默认地址", value: 0, switchButton: true },
]);

// 同步code子传父事件
const findCode = (code) => {
  console.log(code);
  cityCodeIndex.value = code
}

// 选择完城市后触发
// code记录
const cityCodeIndex = ref([])
const selectCity = (e) => {
  console.log(e);
  // 同步修改地址数据
  address.value[
    address.value.findIndex((item) => item.key === "所在地区")
  ].value = e.cityActiveText;
  // 获取code
  cityCodeIndex.value = e.cityCodeIndex;
}
// 切换switch按钮触发
const switchChange = (e) => {
  // 同步address里 value 的数据,布尔值变为字符串数字表示
  address.value[
    address.value.findIndex((item) => item.key === "设为默认地址")
  ].value = e.detail.value ? 1 : 0

}
// 保存或修改地址
// 数据结构
// const addressModel = ref(
//   {
//     receiver: address.value[0].value,
//     contact: address.value[1].value,
//     provinceCode: cityCodeIndex.value[0].code + "0000",
//     cityCode: cityCodeIndex.value[1].code + "00",
//     countyCode: cityCodeIndex.value[2].code,
//     address: address.value[3].value,
//     isDefault: address.value[4].value

//   }
// )
const save = () => {
  // 假设拥有uid的话，改为修改地址请求
  if (querys.value.uid) {
    changeAddress(querys.value.uid, {
      receiver: address.value[0].value,
      contact: address.value[1].value,
      provinceCode: cityCodeIndex.value[0].code + "0000",
      cityCode: cityCodeIndex.value[1].code + "00",
      countyCode: cityCodeIndex.value[2].code,
      address: address.value[3].value,
      isDefault: address.value[4].value
    }).then((res) => {
      // 保存后返回上一页
      back()
      console.log(res);
    })
  } else {
    // 否则改为新建请求
    // 发送保存记录请求
    addAddress({
      receiver: address.value[0].value,
      contact: address.value[1].value,
      provinceCode: cityCodeIndex.value[0].code + "0000",
      cityCode: cityCodeIndex.value[1].code + "00",
      countyCode: cityCodeIndex.value[2].code,
      address: address.value[3].value,
      postalCode: cityCodeIndex.value[2].code,
      addressTags: "",
      isDefault: address.value[4].value,
    }).then((res) => {
      // 保存后返回上一页
      back()
      console.log(res);
    })

  }

}
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