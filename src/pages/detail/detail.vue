<template>
    <!-- 详情 -->
    {{ detailData }}
</template>
<script setup>
import { onMounted, ref } from "vue";
import { onLoad } from '@dcloudio/uni-app';


// 获取id
// 加载时触发
import { detail } from "../../network/detail"
// 初始化数据
const detailData = ref({})
onLoad((query) => {
    // 获取详情页的数据,query需要传递id
    detail(query.id).then((res) => {
        console.log(res);
        detailData.value = res.data.result
    })

})

</script>
<style scoped></style>