<template>
    <shopcarNeedLogin v-if="!isLogin"></shopcarNeedLogin>
    <shopcarAD v-if="isLogin"></shopcarAD>
    <shopcarShop v-if="isLogin" :isShowGuess="false"></shopcarShop>
</template>
<script setup>
import shopcarAD from "../chlid/shopcarAD.vue";
import shopcarShop from "../chlid/shopcarShop.vue"
import shopcarNeedLogin from "../chlid/shopcarNeedLogin.vue";
import navber from "../../../components/navbar/navber.vue"

import { useRequest } from "../../../store/modules/request";
import { globalDetail } from "../../../store/toDetail";

import { onLoad, onShow, onHide } from "@dcloudio/uni-app";
import { ref } from "vue";

const isLogin = ref(false)
// 加载时触发
onLoad((query) => {
});



// 进入页面时触发
onShow(() => {
    // 如果有token
    if (!(useRequest().token === "")) {
        // 切换布局
        isLogin.value = true
    }
});



</script>

<style scoped></style>
