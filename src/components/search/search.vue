<template>
    <view class="search-bgc">
        <view class="search-container">
            <span class="search-icon">&#xe86e;</span>
            <input type="text" placeholder="搜索内容" class="search" @focus="focus" @blur="blur" />
        </view>
    </view>
</template>

<script setup>
import { ref } from 'vue'
// 输入的文字
const value = ref("")

</script>
<style scoped>

.search-container {
    display: flex;
    align-items: center;
    margin: 1vh 1vw;
    width: 98vw;
    border-radius: 35px;
    background-color: #f5f5f5;

}

.search-icon {
    font-family: "iconfont";
    font-size: 25rpx;
    padding: 0 2vw;
}

.search {
    flex: 1 0 auto;
    font-size: 25rpx;
    font-weight: 100;
    color: #000;
    border: none;
    outline: none;
}
</style>