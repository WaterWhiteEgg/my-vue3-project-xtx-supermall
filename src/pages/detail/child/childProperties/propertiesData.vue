<template>
  <popupTitle title="商品规格"></popupTitle>
  <view class="show">
    <image :src="skusItem.picture" mode="aspectFit"> </image>
    <view class="show-desc">
      <view class="show-desc-price"><text class="show-desc-price-ico">￥</text>
        {{ Number(skusItem.price) * quantity }}</view>
      <view class="show-desc-inventory">库存：{{ skusItem.inventory }}</view>
      <view class="show-desc-select">已选：{{ skusArrayItem }}</view>
    </view>
  </view>
  <scroll-view scroll-y class="scroll">
    <view v-for="(item, index) in detailSpecs" :key="item.id" class="detailspecs">
      <text class="name">{{ item.name }}</text>
      <scroll-view scroll-x class="scroll-item">
        <view v-for="(itemValue, itemIndex) in item.values" class="item" :key="itemValue.name" @tap="
          changeActiveItem(index, itemIndex);
        itemSkusPush();
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
    <view class="quantity-count">
      <text @tap="addQuantity(); quantityPush()">+</text>
      <view class="quantity-count-number"><input type="text" v-model.number="quantity"
          @input="inputQuantity($event); quantityPush()">
      </view>
      <text @tap=" reduceQuantity(); quantityPush()">-</text>

    </view>

  </view>
</template>

<script setup>
import popupTitle from "./title/popupTitle.vue";

import { pushItemClick, pushQuantity } from "./js/pushItemClick";

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

const emits = defineEmits(["itemSkusPush", "pushQuantity"]);

// sku对应的数组
const skusArray = ref([])
// 将sku对应的数组数据拼接成字符串
const skusArrayItem = computed(() => {
  const str = ref("")
  skusArray.value.forEach((item) => {
    str.value += ` ${item.name}`
  })
  return str.value
})
// sku的item对象
const skusItem = ref({})
// 初始化skusArray的初始值
onMounted(() => {
  // 使skusArray初始化第一个值
  props.detailSpecs.forEach((item) => {
    skusArray.value.push(item.values[0])
  })
  // 使skusItem初始化第一个值
  // 决定skus里面的哪个对象
  selectDetailSkus()
  // 将默认选择提交到父组件
  itemSkusPush()
  // 将默认数量提交到父组件
  quantityPush()

})


// 切换活跃点击
const activeItem = ref([]);
// 因为循环的层级有两极，要准确找到的话，得需要数组才可以
// 通过数组的index决定 detailSpecs 的循环里的 item.values
// 再决定谁是活跃点击
const changeActiveItem = (index, itemIndex) => {
  // 将对应活跃的index切换
  activeItem.value[index] = itemIndex;
  // 切换skusArray对应对象的数据
  skusArray.value[index] = props.detailSpecs[index].values[itemIndex]
  // 切换完后决定skus里面的哪个对象
  selectDetailSkus()

};
// 样式切换的布尔值函数
const isActiveItem = (index, itemIndex) => {
  // 如果activeItem是空的，则初始化它都为0
  if (!activeItem.value.length) {
    props.detailSpecs.forEach(() => {
      activeItem.value.push(0)
    })
  }
  return activeItem.value[index] === itemIndex;
};
// 将提供的数据渲染到父组件
const itemSkusPush = () => {
  // 将itemValue的内容发送到父元素渲染
  pushItemClick(emits, skusArrayItem.value, "select");
};

// 选择决定skus里的对象
const selectDetailSkus = () => {
  // 遍历detailSkus，寻找相同型号
  for (let item of props.detailSkus) {
    // 记录所有条件正确的值，判断skus的关系
    const isAllItem = ref(true)
    // 再次循环，将specs里面的值进行对比
    for (let index = 0; index < item.specs.length; index++) {
      // 对比值
      // console.log(item.specs[index].valueName === skusArray.value[index].name);
      // 假如这次循环有条件不过关则修改isAllItem的值
      if (item.specs[index].valueName !== skusArray.value[index].name) {
        isAllItem.value = false
        break;
      }
    }
    // 根据isAllItem的值判断是否全都正确
    if (isAllItem.value) {
      // 若全都正确则将这个sku记录
      skusItem.value = item
      // console.log(skusItem.value);
    }
  }
}
// 数量记录,范围在1-根据库存
const quantity = ref(1);
// 增加quantity,注意控制范围
const addQuantity = () => {
  if (quantity.value < skusItem.value.inventory) {
    quantity.value++

  }
}
// 减少quantity,注意控制范围
const reduceQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}
// 输入quantity的值
const inputQuantity = (e) => {
  // console.log(e);
  // 如果没超过特定的值则能输入
  if (Number(e.detail.value) > 1 && Number(e.detail.value) < skusItem.value.inventory) {
    // 转化数字型并同步给quantity
    quantity.value = Number(e.detail.value)
  }
  // 如果条件不达标,则不能将1放入
  else {
    quantity.value = 1
  }

}
// 提供数量渲染到父组件
const quantityPush = () => {
  pushQuantity(emits, quantity.value, "select")
}
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

.show-desc-select {
  width: 60vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

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

.quantity-count {
  display: flex;
}

.quantity-count text {
  padding: .5vh 2vw;
  margin: 0 1vw;
  background-color: rgb(245, 245, 245);
}

.quantity-count-number {
  display: inline-block;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5vh 2vw;
  margin: 0 1vw;
  background-color: rgb(245, 245, 245);

}

.quantity-count-number input {
  width: 5vw;
  min-width: 20px;
  text-align: center;

}
</style>