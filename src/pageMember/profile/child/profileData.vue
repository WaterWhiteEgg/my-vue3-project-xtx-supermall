<template>
    <view v-for="(item, index) in datas" :key="datas.id">
        {{ item.value }}


    </view>
</template>
<script setup>
import { reactive, onMounted, ref, watch, toRaw, computed } from "vue";

// 整理后的userdatas
const datas = ref([{ key: "账号", value: "", id: "account" },
{ key: "昵称", value: "", id: "nickname" },
{ key: "性别", value: "", id: "gender" },
{ key: "出生日期", value: "", id: "birthday" },
{ key: "城市", value: "", id: "fullLocation" },
{ key: "职业", value: "", id: "profession" }])

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

</script>
<style scoped></style>