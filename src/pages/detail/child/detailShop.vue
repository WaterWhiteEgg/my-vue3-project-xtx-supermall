<template>
    <view class="shop">
        <view class="shop-fn">
            <view class="shop-fn-item"><text>ico</text>
                <text>收藏</text>
            </view>
            <view class="shop-fn-item"><text>ico</text>
                <text>客服</text>
            </view>
            <view class="shop-fn-item"><text>ico</text>
                <text>购物车</text>
            </view>
        </view>
        <view class="shop-buy">
            <view>添加购物车</view>
            <view>立即购买</view>
        </view>
    </view>
</template>
<script setup>

const options = [{
    icon: 'headphones',
    text: '客服'
}, {
    icon: 'shop',
    text: '店铺',
    info: 2,
    infoBackgroundColor: '#007aff',
    infoColor: "red"
}, {
    icon: 'cart',
    text: '购物车',
    info: 2
}]
const buttonGroup = [{
    text: '加入购物车',
    backgroundColor: '#ff0000',
    color: '#fff'
},
{
    text: '立即购买',
    backgroundColor: '#ffa200',
    color: '#fff'
}
]
const onClick = (e) => {
    uni.showToast({
        title: `点击${e.content.text}`,
        icon: 'none'
    })
}
const buttonClick = (e) => {
    console.log(e)
    options[2].info++
}
</script>
<style scoped>
.shop {
    display: flex;
}

.shop-fn {
    display: flex;
}

.shop-buy {
    display: flex;
}

.shop-fn-item {
    display: flex;
    flex-direction: column;
}
</style>