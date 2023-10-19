<template>
    <view class="title">
        <image :src="img" mode="scaleToFill" />
    </view>
</template>

<script setup>
const props = defineProps({
    img: {
        type: String,
        default: ""
    }
})
</script>

<style scoped>
.title image {
    position: absolute;
    top: 0;
    height: 20vh;
    
    z-index: -999;

}
</style>