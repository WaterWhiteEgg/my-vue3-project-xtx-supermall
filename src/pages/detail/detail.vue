<template>
<detailSwiper :detailDataPic="detailDataPic"></detailSwiper>  
    <!-- {{ detailData }} -->
</template>
<script setup>
import { onMounted, ref } from "vue";
import { onLoad } from '@dcloudio/uni-app';

import detailSwiper from "./child/detailSwiper.vue";

// 获取id
// 加载时触发
import { detail } from "../../network/detail"
// 初始化数据
const detailData = ref({})
const detailDataPic = ref([])
onLoad((query) => {
    // 获取详情页的数据,query需要传递id
    detail(query.id).then((res) => {
        console.log(res);
        detailData.value = res.data.result
        detailDataPic.value = detailData.value.mainPictures
    })

})


</script>
<style scoped>

</style>