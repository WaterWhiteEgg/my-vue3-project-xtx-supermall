import { defineStore } from 'pinia';
import { ref } from 'vue'

export const popupShow = defineStore('popup', () => {

    const isOpen = ref(false)
    const openPopup = () => {
        isOpen.value = true;
    }
    const closePopup = () => {
        isOpen.value = false;
    }
    return { isOpen, openPopup, closePopup }
})
