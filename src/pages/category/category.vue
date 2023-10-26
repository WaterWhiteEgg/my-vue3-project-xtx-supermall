<template>
  <categorySkeleton v-if="showing().isSkeleton"></categorySkeleton>
  <search></search>
  <view class="category">
    <categoryLeft :categoryitem="categoryitem" @activeItem="activeItem"></categoryLeft>
    <categoryShow :categoryActiveItem="categoryActiveItem" :categoryActivePic="categoryActivePic"></categoryShow>
  </view>
</template>
<script setup>
import { onMounted, ref } from "vue";

import categoryLeft from "./child/categoryLeft.vue";
import categoryShow from "./child/categoryShow.vue";
import search from "../../components/search/search.vue";
import categorySkeleton from "../../components/Content/skeleton/categorySkeleton.vue";

// 控制骨架屏
// 控制骨架屏开关
import { showing } from "../../store/show";
const { closeSkeleton, openSkeleton } = showing();
// 挂载时执行
import { category } from "../../network/category";
// 分离值
const categoryitem = ref([]);
const categoryActiveItem = ref([]);
const categoryActiveItemGoods = ref([]);
const categoryActivePic = ref("");

onMounted(() => {
  // 开启骨架图
  openSkeleton();
  // 进行分页的网路请求
  category()
    .then((res) => {
      // console.log(res.data.result);
      // 初始的赋值数据
      categoryitem.value = res.data.result;
      categoryActiveItem.value = categoryitem.value[0].children;
      categoryActiveItemGoods.value = categoryActiveItem.value.goods;
      categoryActivePic.value = categoryitem.value[0].picture;
    })
    .finally(() => {
      //   关闭骨架图
      closeSkeleton();
    });
});

// 获取categoryLeft的活跃点击
const activeItem = (index) => {
  // 重新渲染需要出示的数组
  categoryActiveItem.value = categoryitem.value[index].children;
};
</script>
<style scoped>
.category {
  display: flex;
}
</style>