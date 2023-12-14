import { ref } from "vue"
// 控制焦点失去的值
export const inputFlag = ref(false)

// 获得与失去焦点
export const focus = () => {
    inputFlag.value = true
};
export const blur = () => {
    inputFlag.value = false
    

};

