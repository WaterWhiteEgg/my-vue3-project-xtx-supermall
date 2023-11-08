// 点击发送事件
export const pushItemClick = (emits, value, childIndex, id) => {
    emits("itemClick", {
        value,
        childIndex,
        id,
    });

}