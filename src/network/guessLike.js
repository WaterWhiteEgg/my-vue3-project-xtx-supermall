
import { uniReq } from "./request";

// 猜你喜欢
export function guesslike(page = 1, pageSize = 10) {
    return uniReq({
        url: "/home/goods/guessLike",
        header: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
        data: {
            page,
            pageSize
        },
        method: "GET",

    })
}