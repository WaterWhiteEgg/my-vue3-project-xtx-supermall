<template>
  <view class="properties">
    <view v-for="item in serveItem" :key="item.id" class="serveitem" @click="activePopup(item.id)">

      <view class="serveitem-text">
        <text class="serveitem-name">
          {{ item.name }}
        </text>
        <text class="serveitem-desc">
          {{ item.desc }}
        </text>
      </view>
    </view>
    <uni-popup ref="popup" type="bottom" background-color="#ffffff" class="popup" :mask-click="false"
      @maskClick="maskClick">
      <propertiesAddress v-if="isActiveId('address')"></propertiesAddress>
      <propertiesAgreement v-if="isActiveId('agreement')"></propertiesAgreement>
      <propertiesData v-if="isActiveId('select')"></propertiesData>
    </uni-popup>
  </view>
</template>

<script setup>
import { computed, ref, watch } from "vue";
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
import { popupShow } from "../../../store/popup";
const { closePopup, openPopup } = popupShow();
// 观察isOpen的变化控制弹窗开关
watch(() => popupShow().isOpen, (newVal) => {
  if (newVal) {
    // 弹窗打开时的操作
    // 启用uniapp-ui弹窗
    popup.value.open();
  } else {
    // 弹窗关闭时的操作
    // 关闭uniapp-ui弹窗
    popup.value.close();
  }
});
// 切换活跃的视图，会根据id对比
const activePopup = (id) => {
  // 切换活跃id显示
  activeId.value = id
  // 开启弹窗
  openPopup()

};
// 点击到遮罩外
const maskClick = () => {
  // 关闭弹窗
  closePopup()

}

// 判断活跃是否id对应并返回值
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