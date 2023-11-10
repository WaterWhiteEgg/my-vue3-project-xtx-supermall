<template>
    <view>欢迎用户： {{ datas.account }} ！</view>
</template>

<script setup>
import { onLoad, onShow } from '@dcloudio/uni-app';
import { useRequest } from "../../store/modules/request"
import { ref, watch } from 'vue'

const datas = ref({})
onLoad((query) => {
    // 在一般情况下，都需要验证token是否过期，是否有错
    // 但是目前存在token就可以
    testToken()
})
// 监听request 里面的 token 变化
watch(() => {
    return useRequest().token
}, () => {
    // 变化就让他再检测一次
    testToken()
})

// 检查token存在以及执行跳转方法
const testToken = () => {
    if (useRequest().token) {
        // 赋值
        datas.value = useRequest().userData
    } else {
        // 跳转登录去搞一个token
        uni.navigateTo({ url: "/pages/login/login" })
    }
}
</script>

<style></style>