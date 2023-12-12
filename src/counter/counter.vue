<template>
    <view class="quantity-count">
        <text @tap="addQuantity()">+</text>
        <view class="quantity-count-number"><input type="text" v-model.number="quantity" @input="inputQuantity($event)">
        </view>
        <text @tap="reduceQuantity()">-</text>

    </view>
</template>
<script setup>
import { ref } from "vue";

// 记录数字
const quantity = ref(1)
// 默认范围
const range = ref([1, 10000000])
// 增加数字
const addQuantity = () => {
    if (quantity.value < range.value[1]) {
        quantity.value++
    }
}
// 减少数字
const reduceQuantity = () => {
    if (quantity.value > range.value[0]) {
        quantity.value--
    }
}
// 输入quantity的值
const inputQuantity = (e) => {
    // console.log(e);
    // 如果没超过特定的值则能输入
    if (Number(e.detail.value) > range.value[0] && Number(e.detail.value) < range.value[1]) {
        // 转化数字型并同步给quantity
        quantity.value = Number(e.detail.value)
    }
    // 如果条件不达标,则不能放入,尝试改为1
    else {
        quantity.value = 1
    }
}
</script>
<style scoped>
.quantity-count {
    display: flex;
    height: 4vh;
    background-color: red;
}

.quantity-count text {
    padding: .5vh 2vw;
    margin: 0 1vw;
    background-color: rgb(245, 245, 245);
}

.quantity-count-number {
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5vh 2vw;
    margin: 0 1vw;
    background-color: rgb(245, 245, 245);

}

.quantity-count-number input {
    width: 5vw;
    min-width: 20px;
    text-align: center;

}
</style>
