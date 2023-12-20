<template>
  <view class="box">
    <view class="set">
      <view class="set-title">配送时间</view>
      <view class="set-desc">
        <picker :range="timeIntervalArray" @change="changeTimeInterval">
          <view class="set-desc-time">{{
            timeIntervalArray[timeIntervalIndex - 1]
          }}</view>
        </picker>
        <text> ＞ </text></view
      >
    </view>
    <view class="set">
      <view class="set-title">订单备注</view>
      <view class="set-desc"
        ><input
          type="text"
          placeholder="选填，建议与商家沟通后确认"
          class="set-desc-notes"
          v-model="setText"
      /></view>
    </view>
  </view>
</template>
<script setup>
import { ref, watch } from "vue";

const emits = defineEmits(["changeTime", "changeText"]);

// 储存timeIntervalArray的活跃选择，默认1
const timeIntervalIndex = ref(1);

// 可选的时间段
const timeIntervalArray = ref([
  "时间不限(周一到周日) ",
  "工作日送(周一到周五)",
  "周末配送（周六到周日）",
]);
//  切换timeIntervalIndex活跃index
const changeTimeInterval = (e) => {
  // index要从1开始
  timeIntervalIndex.value = ++e.detail.value;
  //   console.log(timeIntervalIndex.value);
  // 将新数据提交父组件
  emits("changeTime", timeIntervalIndex.value);
};

// 储存用户备注的文本
const setText = ref("");
// 监听文本变化
watch(setText, (newVal) => {
  // 同步给父组件内容
  emits("changeText",newVal)
//   console.log(newVal);
});
</script>
<style scoped>
.box {
  margin-top: 1.5vh;
  border-radius: 10rpx;
}
.set {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.1vh 2vw;
  padding: 1.5vh 1vw;
  font-size: 28rpx;
  background-color: #fff;
}
.set-title {
  font-size: 30rpx;
}
.set-desc {
  display: flex;
  align-items: center;
  color: #696969;
}

.set-desc-notes {
  width: 50vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>