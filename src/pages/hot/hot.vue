<template>
    <view class="hot">




    </view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { hotNetwork, Hot } from "../../network/hot"
import { ref, toRaw } from 'vue';

const hotArray = ref([])
const hotData = ref({})
// 加载时触发，能获取quary
onLoad((query) => {
    // console.log(query);
    // 对比query与Hot类里面的的ID，来决定进行什么网络请求
    // 获取数据
    hotArray.value = new Hot().hotArray
    // 找到相同id
    let hotUrls = toRaw(hotArray.value)
        .find((value) => {
            return Number(value.id) === Number(query.id)
        })
    // 找到时hotUrls没有undefined
    if (hotUrls !== undefined) {
        // 进行网络请求
        hotNetwork(hotUrls.url).then((res) => {
            // 赋值
            hotData.value = res.data.result
            // console.log(res.data.result);
            // 动态设置标题
            uni.setNavigationBarTitle({ title: res.data.result.title })
        })
    }

})
</script>

<style scoped>
.hot {}
</style>