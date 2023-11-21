<template>
    <view class="data-box">
        <view v-for="(item, key, index) in datas" :key="datas.id" class="list">
            <view class="list-box">
                <view class="list-name"> {{ item.key }}</view>
                <view class="list-value">
                    <input v-if="!item.selectedGender && !item.selectedBirthday && !item.selectedCity" type="text"
                        :placeholder="item.prompt" v-model="item.value">
                    <!-- 对于性别选择的特殊情况 -->
                    <radio-group @change="changeRadio" v-else-if="item.selectedGender">
                        <radio value="男" name="gender" style="transform: scale(0.7)" color="#00ca76" />男
                        <radio value="女" name="gender" style="transform: scale(0.7)" color="#00ca76" />女
                    </radio-group>
                    <!-- 对于日期选择的特殊情况 -->
                    <view class="uni-list-cell-db" v-else-if="item.selectedBirthday">
                        <picker mode="date" :value="date" :end="getDate()" @change="bindDateChange">
                            <view class="uni-input">{{ date }}</view>
                        </picker>
                    </view>
                    <!-- 对于城市选择的特殊情况 -->
                    <view class="" v-else-if="item.selectedCity">
                        <picker mode="multiSelector" @change="bindPickerChange" @columnchange="columnchange"
                            :value="cityIndex" :range="[city, area, county]">
                            <view class="uni-input">{{ cityActiveText }}</view>
                        </picker>
                    </view>
                </view>
            </view>

        </view>
    </view>
</template>
<script setup>
import { reactive, onMounted, toRef, ref, watch, toRaw, computed } from "vue";
import CITYDATA from "../../../network/json/pca.json"

const props = defineProps({
    userdatas: {
        type: Object,
        default: function () {
            return {}
        }
    }
})

// 整理后的userdatas
const datas = ref([{ key: "账号", value: "", id: "account", prompt: "你没有用户名你怎么来的" },
{ key: "昵称", value: "", id: "nickname", prompt: "你没有昵称你怎么来的" },
{ key: "性别", value: "", id: "gender", prompt: "请输入性别", selectedGender: true },
{ key: "出生日期", value: "", id: "birthday", prompt: "请输入出生日期", selectedBirthday: true },
{ key: "城市", value: "", id: "fullLocation", prompt: "请输入城市", selectedCity: true },
{ key: "职业", value: "", id: "profession", prompt: "请输入职业" }])

// 城市信息,反正是根据对应的对象渲染数据，逻辑嵌套的很复杂
const cityIndex = ref([0, 0, 0])
const cityActiveText = ref("请输入城市")

const city = ref(Object.keys(CITYDATA))
const area = ref(Object.keys(CITYDATA[city.value[cityIndex.value[0]]]))
const county = ref(CITYDATA[city.value[cityIndex.value[0]]][area.value[cityIndex.value[1]]])
// 当决定了点击切换城市时
const bindPickerChange = (e) => {
    // 记录index
    cityIndex.value = e.detail.value
    // 将当前对应的index内容的对象呈字符串显示出来
    cityActiveText.value = `${city.value[cityIndex.value[0]]} ${area.value[cityIndex.value[1]]} ${county.value[cityIndex.value[2]]}`
    // console.log(city.value[cityIndex.value[0]],area.value[cityIndex.value[1]],county.value[cityIndex.value[2]]);
}
// 城市数据切换时
const columnchange = (e) => {
    // 记录当前改变的index
    cityIndex.value[e.detail.column] = e.detail.value
    // 改变area的数组
    area.value = Object.keys(CITYDATA[city.value[cityIndex.value[0]]])
    // 改变county的数组
    county.value = CITYDATA[city.value[cityIndex.value[0]]][area.value[cityIndex.value[1]]]

}

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
const changeRadio = (event) => {
    console.log(event);
}


// 获取出生日期,start/end属性输入当前最小/最大的可选择的时间
// 获取系统时间
const getDate = () => {
    // 初始化系统各种事件,默认的时间是现在时间
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    // 将数据转化为普通的字符串
    month = month > 9 ? month : '0' + month;
    day = day > 9 ? day : '0' + day;
    return `${year}-${month}-${day}`;
}

// 获取系统默认日期
const date = ref(getDate())

// 日期的切换事件
const bindDateChange = (e) => {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    date.value = e.detail.value
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