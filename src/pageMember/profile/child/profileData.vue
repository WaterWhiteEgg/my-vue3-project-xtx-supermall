<template>
  <view class="data-box">
    <view v-for="(item, index) in datas" :key="item.id" class="list">
      <view class="list-box">
        <view class="list-name"> {{ item.key }}</view>
        <view class="list-value">
          <input v-if="!item.selectedGender &&
            !item.selectedBirthday &&
            !item.selectedCity
            " type="text" :placeholder="item.prompt" v-model="item.value" :disabled="item.disabled" />
          <!-- 对于性别选择的特殊情况 -->
          <radio-group @change="changeRadio" v-else-if="item.selectedGender">
            <radio value="男" :checked="item.value === '男'" name="gender" style="transform: scale(0.7)" color="#00ca76" />男
            <radio value="女" name="gender" :checked="item.value === '女'" style="transform: scale(0.7)" color="#00ca76" />女
          </radio-group>
          <!-- 对于日期选择的特殊情况 -->
          <view class="uni-list-cell-db" v-else-if="item.selectedBirthday">
            <picker mode="date" :value="date" :end="getDate()" @change="bindDateChange">
              <view class="uni-input">{{ item.value || "请输入日期" }}</view>
            </picker>
          </view>
          <!-- 对于城市选择的特殊情况 -->
          <citySelect v-else-if="item.selectedCity" :values="item.value" @selectCity="selectCity"></citySelect>
        </view>
      </view>
    </view>
    <view class="data-save" @tap="save">保存</view>
  </view>
</template>
<script setup>
import { reactive, onMounted, toRef, ref, watch, toRaw, computed } from "vue";
import CITYDATA from "../../../network/json/pca-code.json";
import { putProfile } from "../../../network/profile";
import { useRequest } from "../../../store/modules/request"


import citySelect from "../../../components/citySelect/citySelect.vue";

const props = defineProps({
  userdatas: {
    type: Object,
    default: function () {
      return {};
    },
  },
});

// 整理后的userdatas
const datas = ref([
  {
    key: "账号",
    value: "",
    id: "account",
    prompt: "请输入用户名",
    disabled: true,
  },
  { key: "昵称", value: "", id: "nickname", prompt: "请输入昵称" },
  {
    key: "性别",
    value: "",
    id: "gender",
    prompt: "请输入性别",
    selectedGender: true,
  },
  {
    key: "出生日期",
    value: "",
    id: "birthday",
    prompt: "请输入出生日期",
    selectedBirthday: true,
  },
  {
    key: "城市",
    value: "",
    id: "fullLocation",
    prompt: "请输入城市",
    selectedCity: true,
  },
  { key: "职业", value: "", id: "profession", prompt: "请输入职业" },
]);

// 观察userdatas的值变化，同步进datas里面的值
watch(
  () => {
    return props.userdatas;
  },
  (newVal) => {
    console.log(newVal);
    // 将对应的值一一放入
    Object.keys(newVal).forEach((key) => {
      // 这里用findIndex来获取datas与props.userdatas两个值data.id === key时的索引值
      // 如果没有，将返回-1
      const index = datas.value.findIndex((data) => {
        return data.id === key;
      });
      // 如果不是-1的话，那证明是有对应的，把对应的index与值放入就行
      if (index !== -1) {
        datas.value[index].value = newVal[key];
      }
    });
  }
);

// 城市信息,需要code上传记录
const cityCodeIndex = ref([{ code: "" }, { code: "" }, { code: "" }]);

// 当决定了点击切换城市时
const selectCity = (e) => {
  //   同时更改datas的数据
  datas.value[
    datas.value.findIndex((item) => item.id === "fullLocation")
  ].value = e.cityActiveText;
  // 获取code
  cityCodeIndex.value = e.cityCodeIndex;

};


// 切换男女选择点击事件
const changeRadio = (event) => {
  // 将数据赋给datas
  datas.value[datas.value.findIndex((item) => item.id === "gender")].value =
    event.detail.value;
  //   console.log(datas.value);
};

// 获取出生日期,start/end属性输入当前最小/最大的可选择的时间
// 获取系统时间
const getDate = () => {
  // 初始化系统各种事件,默认的时间是现在时间
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  // 将数据转化为普通的字符串
  month = month > 9 ? month : "0" + month;
  day = day > 9 ? day : "0" + day;
  return `${year}-${month}-${day}`;
};

// 获取系统默认日期
const date = ref(getDate());

// 日期的切换事件
const bindDateChange = (e) => {
  // console.log('picker发送选择改变，携带值为', e.detail.value)
  date.value = e.detail.value;
  //   同步数据
  datas.value[datas.value.findIndex((item) => item.id === "birthday")].value =
    date.value;
};

// 保存个人数据事件
const save = () => {
  // 注意，发送的对象要与datas里面的索引号一致
  // 显示加载
  uni.showLoading({title:"上传中"})
   // console.log(cityCodeIndex.value);
  putProfile({
    nickname: datas.value[1].value,
    gender: datas.value[2].value,
    birthday: datas.value[3].value,
    profession: datas.value[5].value,
    provinceCode: cityCodeIndex.value[0].code + "0000",
    cityCode: cityCodeIndex.value[1].code + "00",
    countyCode: cityCodeIndex.value[2].code,
  }).then((res) => {
    // 保存后更改信息
    useRequest().addUserData(res.data.result)
    // 隐藏加载
    uni.hideLoading()
  });
};
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

.data-save {
  width: 100%;
  margin: 1vh auto;
  padding: 1vh 0;
  text-align: center;
  border-radius: 50rpx;
  font-size: 35rpx;
  letter-spacing: 15rpx;

  color: #fff;
  background-color: #00ca76;
}

.list {
  padding: 0 2vw;
}

.list-box {
  display: flex;
  align-items: center;
  padding: 1vh 0;
  border-bottom: 0.1px solid #c7c7c7;
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