<template>
    <view class="box">
        <view class="item" v-for="item in addressData" :key="item.address">
            <view class="item-detail">
                <view class="item-detail-name">
                    <view>{{ item.receiver }} {{ item.contact }}</view>
                    <text v-if="item.isDefault" class="cloose">默认</text>
                </view>
                <view class="item-detail-address">{{ item.address }}</view>
            </view>
            <view class="item-fn">
                <uni-swipe-action>
                    <view class="item-fn-box">
                        <uni-swipe-action-item>
                            <view class="modify" @tap="goNewaddress('id=2&uid=' + item.id)">修改</view>
                            <template #right>
                                <view class="del" @tap="delItem(item.id)">删除</view>
                            </template>

                        </uni-swipe-action-item>
                    </view>

                </uni-swipe-action>
            </view>
        </view>
        <view class="additem">
            <view class="additem-button" @tap="goNewaddress()">新建按钮</view>
        </view>
    </view>
</template>
<script setup>
import { debounce } from "../../utils/debounce"

import { onLoad, onShow, onUnload } from "@dcloudio/uni-app";
import { ref } from "vue";

import { back } from "../../utils/back"
import { address, delAddress } from "../../network/address"
import { useMember } from "../../store/modules/member"
import { useRequest } from "../../store/modules/request"


// 渲染地址栏的数据
const addressData = ref([])
// 记录query
const query = ref({})
// 加载页面时触发
onLoad((q) => {
    query.value = q
})

// 每次进入页面时触发
onShow(() => {
    // 如果没有token则直接跳转登录
    if (useRequest().token === "") {
        uni.navigateTo({
            url: '/pages/login/login'
        });
        // 获取所有地址列表
    } else {
        address().then((res) => {
            addressData.value = res.data.result
            // console.log(res);
        })

    }


});
// 销毁时触发
onUnload(() => {
    // 退出时直接同步本地的数据
    address().then((res) => {
        useMember().changeAaddressData(res.data.result)

    })

}
)
// 前往新建/修改地址栏
const goNewaddress = (query) => {
    uni.navigateTo({
        url: "/pageMember/newaddress/newaddress?" + query
    })
}
// 删除选择的当前组件
const delItem = (uid) => {
    // 删除请求
    delAddress(uid).then((res) => {
        // 删除成功后刷新
        uni.reLaunch({
            url: "/pageMember/address/address",
        });
    })

}
</script>
<style scoped>
.box {
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: 0 auto;
    overflow: hidden;

}

.item {
    display: flex;
    justify-content: space-between;
    /* 根据删除盒子的width加上原本长度出现的拖动效果 */
    height: 13vh;
    width: calc(90vw + 1px);
    border-bottom: 1px solid #6161612d;
    font-size: 35rpx;
}


.item-detail-name {
    display: flex;
    margin-top: 2vh;

}

.item-detail-address {
    padding: 1vh 0;
}

.item-fn {
    box-sizing: border-box;
    display: flex;

}

.additem {
    position: absolute;
    bottom: 0;
    height: 6vh;
    width: 100%;
}

.additem .additem-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 5vh;
    padding: .1vh 0;
    border-radius: 35rpx;
    font-size: 30rpx;
    color: #fff;
    background-color: #12c1a7;
}

.del {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12vw;
    background-color: #e91a1a;
    color: #fff;
    font-size: 30rpx;
}

.modify {
    position: relative;
    padding: 0 3vw;
    padding-top: 2vh;
    height: 11vh;
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

.cloose {
    margin: 0 2vw;
    padding: 0 1.5vw;
    font-size: 25rpx;

    border: 1px solid #16d17a;
    color: #16d17a;
}
</style>