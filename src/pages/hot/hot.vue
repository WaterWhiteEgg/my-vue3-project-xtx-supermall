<template>
    <hotSkeleton v-if="showing().isSkeleton"></hotSkeleton>
    <view class="hot">
        <hotTitle :img="hotData && hotData.bannerPicture"></hotTitle>
        <hotTabbar :hotItemArray="hotItemArray"></hotTabbar>
        <showStaticProduct :dataArray="hotItemArray && hotItemArray[0] && hotItemArray[0].goodsItems.items"></showStaticProduct>
    </view>
</template>

<script setup>
import showStaticProduct from '../../components/showStaticProduct/showStaticProduct.vue';
import hotSkeleton from '../../components/Content/skeleton/hotSkeleton.vue';
import hotTabbar from './child/hotTabbar.vue';
import hotTitle from "./child/hotTitle.vue"

import { showing } from "../../store/show"

import { onLoad } from '@dcloudio/uni-app';
import { hotNetwork, Hot } from "../../network/hot"
import { ref, toRaw, onMounted, watch } from 'vue';

// 控制骨架屏开关
const {closeSkeleton, openSkeleton } = showing()


const hotArray = ref([])
const hotData = ref({})
const hotItemArray = ref([])
const hotItemActiveArray = ref([])
// 加载时触发，能获取quary
onLoad((query) => {
    // 开启骨架屏
    openSkeleton()
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
            hotItemArray.value = res.data.result.subTypes
            // console.log(hotData.value);
            // 动态设置标题
            uni.setNavigationBarTitle({ title: res.data.result.title })
        }).finally(() => {
            // 关闭骨架屏
            closeSkeleton()

        })
    }

})



</script>

<style scoped></style>