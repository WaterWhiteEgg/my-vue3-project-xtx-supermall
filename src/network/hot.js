
import { uniReq } from "./request";

// 因为要用不同的url进行网络请求，所以再次导出url谁调用要给值才行
// 虽然这个代码看起来很通用，但是考虑到项目组织还是归为一个方法
export function hotNetwork(url) {
    return uniReq({
        url,
        method: "GET",
    })
}

// 特惠推荐
export function preference() {
    return uniReq({
        url: "/hot/preference",

        method: "GET",
    })
}

// 爆款推荐
export function inVogue() {
    return uniReq({
        url: "/hot/inVogue",

        method: "GET",
    })
}

// 一站买全
export function oneStop() {
    return uniReq({
        url: "/hot/oneStop",

        method: "GET",
    })
}

// 新鲜好物
export function newGoods() {
    return uniReq({
        url: "/hot/new",

        method: "GET",
    })
}

// 由于uniapp路由没有这么方便，同时这个接口两个都不搭，所以要在这里创建一个对应表，加载对应的网络请求
// 这是根据接口的id对应的标题所需要显示的数据手写的静态数组，若数据改变时
// id很有可能改变，因此请根据接口的提供方式对这个静态数组改变对应值
export class Hot {
    constructor() {
        this.hotArray = [
            { id: 5, title: "特惠推荐", url: "/hot/preference" },
            { id: 6, title: "爆款推荐", url: "/hot/inVogue" },
            { id: 7, title: "一站买全", url: "/hot/oneStop" },
            { id: 8, title: "新鲜好物", url: "/hot/new" }
        ]
    }
}
