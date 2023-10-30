  
  
<template>
    <!-- 轮播图 -->
    <view class="swiper">

        <swiper class="swiper-box" @change="change" :circular="true">
            <swiper-item v-for="(item, index) in detailDataPic" :key="item">
                <view class="swiper-item">
                    <image :src="item" mode="scaleToFill" />
                </view>

            </swiper-item>

        </swiper>
        <text class="swiper-nav">
            {{ acticeIndex + 1 }}/{{ detailDataPic.length }}
        </text>
    </view>
</template>
<script setup>
import { ref } from "vue";

// 获取数据
const props = defineProps({
    detailDataPic: {
        type: Array,
        default: function () {
            return []
        }
    }
})

// 轮播图切换时触发
const acticeIndex = ref(0)
const change = function (e) {
    // e.detail.current能拿到具体几页
    // console.log(e.detail.current);
    acticeIndex.value = e.detail.current
}
</script>
<style scoped>
.swiper {
    position: relative;

}

.swiper-box {
    background-color: rgb(240, 240, 240);
    height: 50vh;
}

.swiper-nav {
    position: absolute;
    bottom: 1vh;
    right: 3vw;
    padding: .5vh 3vw;
    font-size: 30rpx;
    border-radius: 35rpx;
    background-color: #0707072d;
}

.swiper-item {
    height: 100%;
}

.swiper-item image {
    height: 100%;
    width: 100%;
}
</style>
  