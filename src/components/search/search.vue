<template>
    <view class="search-bgc">
        <view class="search-container">
            <span class="search-icon">&#xe86e;</span>
            <input type="text" placeholder="搜索内容" v-model="textValue" class="search" @focus="focus" @blur="blur"
                @input="inputText" />
            <slot name="right"></slot>
            <view class="search-box" v-show="isSearch" :class="{ 'search-box-live': isSearch }">后端接口没做好ing。。。</view>
        </view>
    </view>
</template>

<script setup>
import { ref } from 'vue'

import { easySearch,search } from "../../network/search"
import { debounce } from "../../utils/debounce"
// 输入的文字
const textValue = ref("")


// 防抖后的简易搜索请求
const debounceInputText = debounce((e) => {
    // 显示加载
    uni.showLoading()
    // console.log(e.detail.value);
    easySearch(e.detail.value).then((res) => {
        console.log(res);
        // 隐藏加载
        uni.hideLoading();
    })
}, 300)

// 输入文本后
const inputText = (e) => {
    console.log(e);
    // 防抖处理
    debounceInputText(e)

}

// 决定搜索框盒子显示
const isSearch = ref(false)
// 获取焦点触发
const focus = (e) => {
    isSearch.value = true



}
// 失去焦点触发
const blur = (e) => {
    isSearch.value = false
}
</script>
<style scoped>
.search-bgc {
    position: relative;
}

.search-container {
    position: relative;

    height: 5vh;
    display: flex;
    align-items: center;
    margin: 1vh 1vw;
    width: 98vw;
    border-radius: 35px;
    background-color: #fbfbfb;

}

.search-icon {
    font-family: "iconfont";
    font-size: 25rpx;
    padding: 0 2vw;
    color: #000;
}

.search {
    margin: 0;
    flex: 1 0 auto;
    font-size: 25rpx;
    font-weight: 100;
    color: #000;
}

.search-box {
    position: absolute;
    height: 0;
    left: -1vw;
    width: 100vw;
    top: 5vh;
    z-index: 99999;
}

.search-box-live {
    height: 90vh;
    background-color: #f3ffed;
    color: #000;



}
</style>