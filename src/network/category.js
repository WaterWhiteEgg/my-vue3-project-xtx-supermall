// 请求分类列表
import { uniReq } from "./request";

export function category() {
    return uniReq({
        url: "/category/top",
        method: "GET",
    })
}
