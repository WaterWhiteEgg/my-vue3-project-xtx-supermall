// 请求详情页数据
import { uniReq } from "./request";

export function detail(id) {
    return uniReq({
        url: "/goods",
        method: "GET",
        data: {
            id
        }
    })
}
