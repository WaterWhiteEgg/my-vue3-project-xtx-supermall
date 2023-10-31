
<template>
    <view class="title-box">
        <text class="title">{{ name }}</text>
        <text class="desc">{{ desc }}</text>
    </view>
</template>
<script setup>
import { ref } from "vue";

// 获取数据
const props = defineProps({
    name: {
        type: String,
        default: ""
    },
    desc: {
        type: String,
        default: ""
    },

})

</script>
<style scoped>
.title-box {
    position: relative;
    min-height: 5vh;
    font-size: 35rpx;

}

.title-box::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 96vw;
    height: 1px;
    background-color: #adacac35;



}

.title {
    display: block;
    margin: 2vh 1vw;
}

.desc {
    display: block;
    margin: 1vh 1vw;
    padding-bottom: 2vh;
    font-size: 25rpx;
    color: red;
}
</style>  