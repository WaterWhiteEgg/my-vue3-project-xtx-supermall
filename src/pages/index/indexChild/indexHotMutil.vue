<template>
    <view class="hotmutil">
        <view
            v-for="(item, index) in hotMutilData"
            :key="item.id"
            class="hotmutil-item"
        >
            <navigator
                :url="'/pages/hot/hot?id=' + item.id"
                hover-class="none"
                class="cards"
            >
                <view class="hotmutil-textbox">
                    <text>{{ item.title }}</text>
                    <text class="hotmutil-alt">{{ item.alt }}</text>
                </view>
                <view class="hotmutil-imagebox">
                    <image :src="item.pictures[0]" mode="scaleToFill" />
                    <image :src="item.pictures[1]" mode="scaleToFill" />
                </view>
            </navigator>
        </view>
    </view>
</template>
<script setup>
const props = defineProps({
    hotMutilData: {
        type: Array,
        default: function () {
            return [];
        },
    },
});
</script>

<style scoped>
.hotmutil {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #ffffff92;
}

.hotmutil-textbox {
    font-size: 35rpx;
}

.hotmutil-alt {
    padding-left: 2vw;
    font-size: 20rpx;
}

.hotmutil-item {
    display: flex;
    flex-direction: column;
    margin: 1vh 4vw 0 4vw;
}

.hotmutil-imagebox image {
    text-align: center;
    padding: 1vh 1vw;
    width: 17vw;
    height: 10vh;
}
</style>