<template>
    <profileNavber :userdatas="userDatas"></profileNavber>
    <profileData :userdatas="userDatas"></profileData>
</template>
<script setup>

import { ref } from "vue";
import { onLoad, onShow } from '@dcloudio/uni-app';

import { getProfile } from "../../network/profile"


import profileNavber from './child/profileNavber.vue';
import profileData from './child/profileData.vue';


const userDatas = ref({})
// 加载时触发
onLoad(() => {
    getProfile().then((res) => {
        // console.log(res);
        // 赋值
        userDatas.value = res.data.result
    })
})

</script>
<style scoped></style>