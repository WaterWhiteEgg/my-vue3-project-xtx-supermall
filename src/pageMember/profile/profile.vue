<template>
    <profileNavber :userdatas="userDatas" @needUpdate="needUpdate"></profileNavber>
    <profileData :userdatas="userDatas"></profileData>
</template>
<script setup>

import { ref } from "vue";
import { onLoad, onShow } from '@dcloudio/uni-app';

import { useRequest } from "../../store/modules/request"
import { getProfile } from "../../network/profile"


import profileNavber from './child/profileNavber.vue';
import profileData from './child/profileData.vue';


const userDatas = ref({})
// 加载时触发
onLoad(() => {
    profileGet()
})

// 需要更新显示数据时触发
const needUpdate = async () => {
    await profileGet()
    // 在等待异步处理完后隐藏加载
    uni.hideLoading()
}
// 获取与同步数据
const profileGet = async () => {
    getProfile().then((res) => {
        // 赋值
        userDatas.value = res.data.result
        // 同步到全局
        useRequest().addUserData(userDatas.value)

    })
}
</script>
<style scoped></style>