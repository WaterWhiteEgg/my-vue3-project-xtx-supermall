<template>
    <shopcarAD></shopcarAD>
    <shopcarShop :shopcarDatas="shopcarDatas"></shopcarShop>
</template>
<script setup>
import shopcarAD from "./chlid/shopcarAD.vue";
import shopcarShop from "./chlid/shopcarShop.vue"

import { useRequest } from "../../store/modules/request";
import { getShopcar } from "../../network/shopcar";

import { onLoad, onShow } from "@dcloudio/uni-app";
import { ref } from "vue";

// 加载时触发
onLoad((query) => {
    // 验证token跳转
    if (useRequest().token === "") {
        uni.navigateTo({
            url: "/pages/login/login",
        });
    } else {
    }
});

// 储存购物车的数据
const shopcarDatas = ref([]);

// 进入页面时触发
onShow(() => {
    // 尝试请求购物车
    // 如果有token才请求
    if (!(useRequest().token === "")) {
        getShopcar().then((res) => {
            // 购物车的数据储存赋值
            shopcarDatas.value = res.data.result;
        });
    }
});


</script>

<style scoped></style>
