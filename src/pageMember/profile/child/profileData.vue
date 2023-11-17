<template>
    <view class="data-box">
        <view v-for="(item, key, index) in datas" :key="datas.id" class="list">
            <view class="list-box">
                <view class="list-name"> {{ item.key }}</view>
                <view class="list-value">
                    <input v-if="!item.selectedGender" type="text" :placeholder="item.prompt" v-model="item.value">
                    <radio-group @change="changeRadio" v-else>
                        <radio value="男" name="gender" style="transform: scale(0.7)" color="#00ca76" />男
                        <radio value="女" name="gender" style="transform: scale(0.7)" color="#00ca76" />女
                    </radio-group>
                </view>
            </view>

        </view>
    </view>
</template>
<script setup>
import { reactive, onMounted, ref, watch, toRaw, computed } from "vue";
// 整理后的userdatas
const datas = ref([{ key: "账号", value: "", id: "account", prompt: "你没有用户名你怎么来的" },
{ key: "昵称", value: "", id: "nickname", prompt: "你没有昵称你怎么来的" },
{ key: "性别", value: "", id: "gender", prompt: "请输入性别", selectedGender: true },
{ key: "出生日期", value: "", id: "birthday", prompt: "请输入出生日期" },
{ key: "城市", value: "", id: "fullLocation", prompt: "请输入城市" },
{ key: "职业", value: "", id: "profession", prompt: "请输入职业" }])

const props = defineProps({
    userdatas: {
        type: Object,
        default: function () {
            return {}
        }
    }
})
// 观察userdatas的值变化
watch(
    () => {
        return props.userdatas
    },
    (newVal) => {
        // 将对应的值一一放入
        Object.keys(newVal).forEach((key) => {
            // 这里用findIndex来获取datas与props.userdatas两个值data.id === key时的索引值
            // 如果没有，将返回-1
            const index = datas.value.findIndex((data) => {
                return data.id === key
            });
            // 如果不是-1的话，那证明是有对应的，把对应的index与值放入就行
            if (index !== -1) {
                datas.value[index].value = newVal[key];
            }
        });
    })

// 切换男女选择点击事件
const changeRadio = (event)=>{
console.log(event);
}
</script>
<style scoped>
.data-box {
    width: 96vw;
    margin: 0 auto;
    margin-top: 2vh;
    border-radius: 3%;
    font-size: 35rpx;
    background-color: #fff;
}

.list {
    padding: 0 2vw;

}

.list-box {
    display: flex;
    align-items: center;
    padding: 1vh 0;

    border-bottom: .1px solid #c7c7c7;
}

.list-name {
    width: 20vw;
    font-size: 30rpx;

}

.list-value {
    flex: 1;
    font-size: 31rpx;
}
</style>