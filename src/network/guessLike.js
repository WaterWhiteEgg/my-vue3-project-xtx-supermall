
import { uniReq } from "./request";

// 猜你喜欢
export function guesslike(page, pageSize) {
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