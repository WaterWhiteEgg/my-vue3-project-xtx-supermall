
import { uniReq } from "./request";

// 前台好物
export function mutli() {
    return uniReq({
        url: "/home/category/mutli",
        header: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
        method: "GET",
    })
}
// 热门推荐
export function hotMutli() {
    return uniReq({

        url: "/home/hot/mutli",
        header: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
        method: "GET",
    })
}
// 新鲜好物
export function newMutli() {
    return uniReq({
        url: "/home/new",
        header: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
        method: "GET",
    })
}
