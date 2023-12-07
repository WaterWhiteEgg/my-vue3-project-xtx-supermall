// 发送数据事件
export const pushItemClick = (emits, value, id) => {
    emits("itemSkusPush", {
        value,
        id,
    });

}
// 发送数量事件
export const pushQuantity = (emits, quantity, id) => {
    emits("pushQuantity", {
        quantity,
        id,
    });

}
// 发送地址事件
export const pushAddress = (emits, address, id) => {
    emits("pushAddress", {
        address,
        id,
    });

}