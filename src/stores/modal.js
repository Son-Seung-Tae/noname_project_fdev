import { defineStore, createPinia } from 'pinia';
import { createApp } from 'vue';
import App from '@/App.vue';
// import { modalOpenScrollFix, modalCloseScrollRestore } from '@/compositions/useModalScrollControl';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);

export const useModalStore = defineStore('modal', {
    state: () => {
        return {
            isOpen: false, // 모달 열렸는지 여부
            isSecond: false, // 이중 모달 여부
            modal: {
                ModalFoodDetail: false, // 음식 상세 모달
            },
        };
    },
    actions: {
        openModal(modalName) {
            if (this.modal[modalName] !== undefined) {
                this.modal[modalName] = true;
                // this.isOpen = true;
                // this.modal[modalName] = true;
                // const modalEl = document.querySelector('.c_modal_container');
                // modalEl.classList.remove('hide');
                // modalOpenScrollFix();
            } else {
                console.error('no modal', modalName);
            }
        },
        closeModal(modalName) {
            if (this.modal[modalName] !== undefined) {
                // const modalEl = document.querySelector('.c_modal_container');
                // modalEl.classList.add('hide');
                // console.log('hide');
                // const toId = setTimeout(() => {
                //    this.modal[modalName] = false;
                //    clearTimeout(toId);
                // }, 200);
                this.modal[modalName] = false;
                // modalCloseScrollRestore();
            } else {
                console.error(this.modal[modalName], modalName);
            }
        },
        closeAll() {
            //  modalCloseScrollRestore();
            this.$reset();
        },
    },
});