// 请求广告
import { uniReq } from "./request";

export function banner() {
    return uniReq({
        url: "/home/banner",
        header: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
        method: "GET",
    })
}
