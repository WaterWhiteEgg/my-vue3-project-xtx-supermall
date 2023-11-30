<template>
  <view class="">
    <picker mode="multiSelector" @change="bindPickerChange" @columnchange="columnchange" :value="cityIndex"
      :range="[city, area, county]">
      <view class="uni-input">{{ cityActiveText }}</view>
    </picker>
  </view>
</template>

<script setup>
import CITYDATA from "@/network/json/pca-code.json";

import { ref, watch } from "vue";
// 获取父组件的默认城市
const props = defineProps({
  values: { type: String, default: "" },
});
// 在切换完数据后提供 城市的名字以及城市编号
// 切换活跃值时也需要提供新的code
const emits = defineEmits(["selectCity", "findCode"]);

// 城市信息,反正是根据对应的对象渲染数据，逻辑嵌套的很复杂
const cityIndex = ref([0, 0, 0]);
const cityCodeIndex = ref([{ code: "" }, { code: "" }, { code: "" }]);

const cityActiveText = ref("请输入城市");

// 观察props里面value的变化同步变化cityActiveText
watch(
  () => {
    return props.values;
  },
  (newVal) => {
    // 活跃文字改变
    cityActiveText.value = newVal;
    // 同时寻找相同的code
    findCode(newVal)
  }
);

// 省
const city = ref(
  CITYDATA.map((item) => {
    return item.name;
  })
);
// 市
const area = ref(
  CITYDATA[cityIndex.value[0]].children.map((item) => {
    return item.name;
  })
);
// 区
const county = ref(
  CITYDATA[cityIndex.value[0]].children[cityIndex.value[1]].children.map(
    (item) => {
      return item.name;
    }
  )
);

// 当决定了点击切换城市时
const bindPickerChange = (e) => {
  // 记录index
  cityIndex.value = e.detail.value;
  // 记录code
  cityCodeIndex.value[0].code = CITYDATA[cityIndex.value[0]].code;
  cityCodeIndex.value[1].code =
    CITYDATA[cityIndex.value[0]].children[cityIndex.value[1]].code;
  cityCodeIndex.value[2].code =
    CITYDATA[cityIndex.value[0]].children[cityIndex.value[1]].children[
      cityIndex.value[2]
    ].code;

  // 将当前对应的index内容的对象呈字符串显示出来
  cityActiveText.value = `${city.value[cityIndex.value[0]]} ${area.value[cityIndex.value[1]]
    } ${county.value[cityIndex.value[2]]}`;

  // 发送事件提供数据
  emits("selectCity", {
    cityActiveText: cityActiveText.value,
    cityCodeIndex: cityCodeIndex.value,
  });
};
// 城市数据切换时
const columnchange = (e) => {
  // 记录当前改变的index
  cityIndex.value[e.detail.column] = e.detail.value;
  // 改变area的数组
  area.value = CITYDATA[cityIndex.value[0]].children.map((item) => {
    return item.name;
  });
  // 改变county的数组
  county.value = CITYDATA[cityIndex.value[0]].children[
    cityIndex.value[1]
  ].children.map((item) => {
    return item.name;
  });
};
// 通过字符串寻找城市code
const findCode = (newVal) => {

  // 将字符串数据整理回数组
  let array = newVal.split(" ")
  let cityItem = CITYDATA.find((item) => { return item.name === array[0] })
  let areaItem = cityItem.children.find((item) => { return item.name === array[1] })
  let countyItem = areaItem.children.find((item) => { return item.name === array[2] })
  // 整理code到cityCodeIndex
  cityCodeIndex.value[0].code = cityItem.code
  cityCodeIndex.value[1].code = areaItem.code
  cityCodeIndex.value[2].code = countyItem.code
  // 修改完后发送事件
  emits("findCode", cityCodeIndex.value)

}
</script>

<style scoped></style>