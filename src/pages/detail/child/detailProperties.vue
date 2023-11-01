<template>
  <view class="properties">
    <view v-for="item in serveItem" :key="item.id" class="serveitem" @click="openPopup(item.id)">

      <view class="serveitem-text">
        <text class="serveitem-name">
          {{ item.name }}
        </text>
        <text class="serveitem-desc">
          {{ item.desc }}
        </text>
      </view>
    </view>
    <uni-popup ref="popup" type="bottom" background-color="#ffffff" class="popup">
      <propertiesAddress v-if="isActiveId('address')"></propertiesAddress>
      <propertiesAgreement v-if="isActiveId('agreement')"></propertiesAgreement>
      <propertiesData v-if="isActiveId('select')"></propertiesData>
    </uni-popup>
  </view>
</template>

<script setup>
import { computed, ref } from "vue";

import propertiesAddress from "./childProperties/propertiesAddress.vue";
import propertiesAgreement from "./childProperties/propertiesAgreement.vue";
import propertiesData from "./childProperties/propertiesData.vue";

// 进入专门的弹窗
const activeId = ref("")
// 获取节点,绑定uniappui提供的组件
const popup = ref(null);
// 由于后端没有提供数据，所以属性是静态的，需要改变文字类数据则要手动写入且自己定义id
const serveItem = ref([
  {
    name: "选择",
    desc: "请选择商品规格",
    id: "select",
  },
  {
    name: "送至",
    desc: "请选择收获地址",
    id: "address",
  },
  {
    name: "服务",
    desc: "无优退 快速提款 免费包邮",
    id: "agreement",
  },
]);
// 使用弹窗
const openPopup = (id) => {
  // 切换活跃id显示
  activeId.value = id
  // 启用uniapp-ui弹窗
  popup.value.open();

};
// 活跃id对应
const isActiveId = computed(() => {
  return (id) => {
    return activeId.value === id
  }
})
</script>

<style  scoped>
.properties {
  font-size: 30rpx;
}

.serveitem {
  display: flex;
  position: relative;
  width: 100vw;
  margin: 3vh 0;
}

.serveItem-text {
  display: flex;
}

.serveitem-name {
  padding: 0 2vw;
  color: rgb(117, 117, 117);
}

.serveitem-desc {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.serveitem::before {
  content: ">";
  position: absolute;
  bottom: 0px;
  /* 距离盒子底部的距离 */
  right: 8vw;
  width: 2px;
  transform: translateX(-50%);
  color: rgb(195, 195, 195);
  font-size: 35rpx;
  font-weight: 900;
}

</style>