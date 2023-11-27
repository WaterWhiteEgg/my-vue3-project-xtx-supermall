<template>
    <view>
        <scroll-view scroll-x v-for="item in data" class="scroll">
            <view class="item">
                <view class="item-detail">
                    <view class="item-detail-name">
                        <view>{{ item.name }} {{ item.number }}</view>
                        <text>选择</text>
                    </view>
                    <view class="item-detail-address">{{ item.address }}</view>
                </view>
                <view class="item-fn">
                    <view class="modify">修改</view>
                    <view class="del">删除</view>
                </view>
            </view>
        </scroll-view>
    </view>
</template>
<script setup>
// 测试用的数据
const data = [{ name: 'zc', number: '11111111111', address: '存储池' }]
</script>
<style scoped>
.scroll {
    width: 90vw;
    max-height: 200rpx;
    margin: 0 auto;

}

.item {
    display: flex;
    justify-content: space-between;
    /* 根据删除盒子的width加上原本长度出现的拖动效果 */
    width: 103vw;
    height: 13vh;
    font-size: 35rpx;
    border-bottom: 1px solid #6161612d;
}


.item-detail-name {
    display: flex;
    margin-top: 2vh;

}

.item-detail-address {
    padding: 1vh 0;
}

.item-fn {
    display: flex;
    height: 100%;
}

.del {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 13vw;
    background-color: #e91a1a;
    color: #fff;
    font-size: 30rpx;
}

.modify {
    position: relative;
    padding: 0 3vw;
    padding-top: 2vh;
    font-size: 27rpx;
    color: #797979;
}

.modify::before {
    content: "";
    position: absolute;
    top: 2.50vh;
    /* 距离盒子底部的距离 */
    left: 0%;
    width: 1px;
    /* 下划线的粗细，可以根据需要进行调整 */
    height: 17%;
    /* 下划线的高度，可以根据需要进行调整 */
    background-color: #797979;
}
</style>