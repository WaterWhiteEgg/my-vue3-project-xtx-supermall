<template>
    user
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';

onLoad((query) => {
    uni.navigateTo({ url: "/pages/login/login" })
})
</script>

<style></style>