<template>
  <popupTitle title="商品规格"></popupTitle>
  <view class="show">
    <image :src="detailSkus[0].picture" mode="aspectFit"> </image>
    <view class="show-desc">
      <view class="show-desc-price"><text class="show-desc-price-ico">￥</text>
        {{ detailSkus[0].price }}</view>
      <view class="show-desc-inventory">库存：{{ detailSkus[0].inventory }}</view>
      <view class="show-desc-select">已选：</view>
    </view>
  </view>
  <scroll-view scroll-y class="scroll">
    <view v-for="(item, index) in detailSpecs" :key="item.id" class="detailspecs">
      <text class="name">{{ item.name }}</text>
      <scroll-view scroll-x class="scroll-item">
        <view v-for="(itemValue, itemIndex) in item.values" class="item" :key="itemValue.name" @tap="
          changeActiveItem(index, itemIndex, itemValue, item.name);
        itemClick(itemValue, index);
        " :class="{ active: isActiveItem(index, itemIndex) }">
          <image :src="itemValue.picture" mode="scaleToFill" class="item-image" v-if="itemValue.picture" />
          <text>{{ itemValue.name }}</text>
          <text>{{ item.desc }}</text>
        </view>
      </scroll-view>
    </view>
  </scroll-view>
  <view class="quantity">
    <view class="quantity-title">数量</view>
    <view class="quantity-count"><text>+</text>
      <text class="quantity-count-number">{{ quantity }}</text>
      <text>-</text>
    </view>
  </view>
</template>

<script setup>
import popupTitle from "./title/popupTitle.vue";

import { pushItemClick } from "./js/pushItemClick";

import { onLoad, onShow } from '@dcloudio/uni-app';
import { ref, computed, watch, onMounted } from "vue";
const props = defineProps({
  detailSpecs: {
    type: Array,
    default: function () {
      return [];
    },
  },
  detailSkus: {
    type: Array,
    default: function () {
      return [];
    },
  },
});

const emits = defineEmits(["itemClick"]);

// sku对应的数组
const skusArray = ref([])
// 初始化skusArray的初始值
onMounted(() => {
  // 使skusArray初始化第一个值
  skusArray.value = props.detailSkus[0].specs

})


// 切换活跃点击
const activeItem = ref([]);
// 因为循环的层级有两极，要准确找到的话，得需要数组才可以
// 通过数组的index决定 detailSpecs 的循环里的 item.values
// 再决定谁是活跃点击
const changeActiveItem = (index, itemIndex, itemValue, name) => {
  activeItem.value[index] = itemIndex;
  // 切换完活跃点击后决定skus里面的哪个对象
  selectDetailSkus(itemValue, name)

};
const isActiveItem = (index, itemIndex) => {
  return activeItem.value[index] === itemIndex;
};
// 将提供的数据渲染到父组件
const itemClick = (itemValue, index) => {
  // 将itemValue的内容发送到父元素渲染
  pushItemClick(emits, itemValue.name, index, "select");
};

// 选择决定skus里的对象
const selectDetailSkus = (itemValue, name) => {
  // 遍历detailSkus，寻找相同型号
  for (let item of props.detailSkus) {
    console.log(skusArray.value);
  }
  // console.log(itemValue === );
  console.log(props.detailSkus);
}
// 数量记录
const quantity = ref(1);
</script>

<style scoped>
.show {
  display: flex;
  margin: 1vh 0;
  margin-top: 2vh;
}

.show image {
  width: 20vw;
  height: 10vh;
  padding: 0 3vh;
}

.show-desc-price {
  font-size: 40rpx;
  font-weight: 900;
  color: #ff7300;
}

.show-desc-price-ico {
  margin-right: -2vw;
  font-size: 25rpx;
}

.show-desc-inventory {
  padding: 1vh 0;
  color: #6b6b6b91;
}

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

.quantity {
  display: flex;
  justify-content: space-between;
  padding: 1vh 1vw;
  font-size: 35rpx;
}

.quantity-title {
  font-weight: 900;
}

.quantity-count text {
  padding: .5vh 2vw;
  margin: 0 1vw;
  background-color: rgb(245, 245, 245);
}

.quantity-count-number {
  padding: .5vh 4vw !important;

}
</style>