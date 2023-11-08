<template>
  <popupTitle title="商品规格"></popupTitle>
  <scroll-view scroll-y class="scroll">
    <view v-for="(item, index) in detailSpecs" :key="item.id" class="detailspecs">
      <text class="name">{{ item.name }}</text>
      <scroll-view scroll-x class="scroll-item">
        <view v-for="(itemValue, itemIndex) in item.values" class="item" :key="itemValue.name" @tap="
          changeActiveItem(index, itemIndex);
        itemClick(itemValue, index);
                                                                                          "
          :class="{ active: isActiveItem(index, itemIndex) }">
          <image :src="itemValue.picture" mode="scaleToFill" class="item-image" v-if="itemValue.picture" />
          <text>{{ itemValue.name }}</text>
          <text>{{ item.desc }}</text>
        </view>
      </scroll-view>
    </view>
  </scroll-view>
</template>

<script setup>
import popupTitle from "./title/popupTitle.vue";

import { pushItemClick } from "./js/pushItemClick"

import { ref, computed } from "vue";
const prop = defineProps({
  detailSpecs: {
    type: Array,
    default: function () {
      return [];
    },
  },
});

const emits = defineEmits(["itemClick"]);

// 切换活跃点击
const activeItem = ref([]);
// 因为循环的层级有两极，要准确找到的话，得需要数组才可以
// 通过数组的index决定 detailSpecs 的循环里的 item.values
// item.values 再决定谁是活跃点击
const changeActiveItem = (index, itemIndex) => {
  activeItem.value[index] = itemIndex;
};
const isActiveItem = (index, itemIndex) => {
  return activeItem.value[index] === itemIndex;
};
// 将提供的数据渲染到父组件
const itemClick = (itemValue, index) => {
  // 将itemValue的内容发送到父元素渲染
 pushItemClick(emits,itemValue.name, index, "select")

};




</script>

<style scoped>
.scroll {
  max-height: 93vh;
  min-height: 30vh;
}

.scroll-item {
  width: 100%;
}

.detailspecs {
  display: flex;
  align-items: center;
  width: 96vw;
  margin: 2vh 2vw;
}

.item {
  box-sizing: border-box;
  display: inline-flex;
  padding: 1vh 1vw;
  margin: 0.5vh 1vw;
  border: 0.5px solid rgba(255, 128, 0, 0.906);
}

.name {
  padding: 1vh 0;
  max-width: 16vw;
  min-width: 10vw;
  padding-right: 1vw;
  overflow: hidden;
  /* 超出部分隐藏 */
  white-space: normal;
  /* 自动换行 */
  word-wrap: break-word;
  /* 换行时尽量在单词之间断开 */
}

.item-image {
  width: 5vw;
  height: 3vh;
}

.active {
  background-color: rgba(255, 138, 21, 0.906);
}
</style>