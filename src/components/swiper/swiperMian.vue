<template>
    <view>
        <uni-swiper-dot
            :info="swiperData"
            :current="current"
            field="content"
            :mode="mode"
            :dotsStyles="{
                width: 20,
                backgroundColor: 'rgba(255,255,255,.3)',
                border: '0px',
                selectedBackgroundColor: 'rgba(255,255,255,.6)',
                selectedBorder: '0px',
            }"
            class="uni-swiper-dot"
        >
            <swiper class="swiper-box" @change="change" :circular="true">
                <swiper-item v-for="(item, index) in swiperData" :key="item.id" 
                >
                    <view class="swiper-item">
                        <image :src="item.imgUrl" mode="scaleToFill" />
                    </view>
                </swiper-item>
            </swiper>
        </uni-swiper-dot>
    </view>
</template>

<script setup>
import { ref } from "vue";


const props = defineProps({
    swiperData: {
        type: Array,
        default: () => {
            return [];
        },
    },
});
// 控制轮播图点的属性值
const current = ref(0);
const mode = "dot";
// 控制轮播图的点的位移
const change = (e) => {
    current.value = e.detail.current;
};


</script>

<style>
.uni-swiper-dot view view {
    border-radius: 0;
}
.swiper-box {
    background-color: rgb(240, 240, 240);
    height: 20vh;
}
.swiper-item {
    height: 100%;
}
.swiper-item image {
    height: 100%;
    width: 100%;
}
</style>