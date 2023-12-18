<template>
    <view class="category-show-box">
        <view v-for="item in categoryActiveItemGoods" :key="item.id" class="category-show-item" @tap="toDetail(item.id)">
            <view class="category-show-pic">
                <image :src="item.picture" mode="scaleToFill" />
            </view>
            <view class="category-show-desc">
                <text class="category-show-title">
                    {{ item.name }}

                </text>
                <view class="category-show-price">
                    ￥{{ item.price }}
                </view>

            </view>
        </view>
    </view>
</template>
<script setup>
import { globalDetail } from "../../../store/toDetail.js"


// 渲染右展示区的盒子
const props = defineProps({
    categoryActiveItemGoods: {
        type: Array,
        default: function () {
            return []
        }
    }
})
// 进入详情页，需要提供id
const { toDetail } = globalDetail()
</script>
<style scoped>
.category-show-box {
    display: flex;
    flex-wrap: wrap;
    height: 55vh;
    font-size: 30rpx;
    overflow: hidden;
}

.category-show-item {

    width: 20vw;
    margin: 1vh 3vw;
}

.category-show-pic image {
    width: 23vw;
    height: 15vh;
}

.category-show-price {
    font-size: 25rpx;
    color: rgb(126, 0, 0);
}

.category-show-title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 7vh;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>