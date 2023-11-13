<template>
    <view class="image-box">
        <image src="@/static/color/logo.png" />
    </view>
</template>
<script setup>
const props = defineProps({

})
</script>
<style scoped>
.image-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 35vh;
    margin-top: 10vh;
}

.image-box image {
    width: 45vw;
    height: 10vh;
}
</style>