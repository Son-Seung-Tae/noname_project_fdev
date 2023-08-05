<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="row modal-header">
                    <div>
                        <p style="cursor: pointer;" @click="$emit('closeModal')">X</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="modal-image">
                            <img class="modal-image" src="/assets/css/images/sushi.png">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="modal-info">
                            <div class="modal-info-title">
                                <h2>초밥</h2>
                            </div>
                            <div class="modal-info-content">
                                <h2>초밥 내용</h2>
                            </div>
                            <div class="modal-info-graph">
                                <h2>초밥 그래프</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </template>
 
 <script setup>
    // uitl 스크립트 라이브러리
    import { ref, computed, defineEmits, defineProps, onMounted } from 'vue';
    import { useModalStore } from '@/stores/modal';
    // pinia
    // import { useViewStore } from '@/stores/view';
    
 
    // const viewStore = useViewStore();
    const props = defineProps(['order', 'deliveryList', 'mode']); 
    const emit = defineEmits(['closeModal']);
    const store = useModalStore();
 
    onMounted(() => {
        console.log('modal11111');
        console.log(props);
        console.log('modal11111');
    });
 </script>
 
 <style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 60%;
        height: 70%;
        margin: 0rem auto;
        padding: 1rem 1rem;
        background-color: #F9FBE7;
        border-radius: 0.2rem;
        box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header {
        color: black;
        display: flex;
        justify-content: flex-end;

    }

    .modal-image img{
        height: 60%;
        weight: 60%;
    }

    .modal-default-button {
        float: right;
    }

    .modal-info-title {
        height: 10%;
    }
    .modal-info-content {
        height: 20%;
    }
    .modal-info-graph {
        height: 70%;
    }

    /*
    * The following styles are auto-applied to elements with
    * transition="modal" when their visibility is toggled
    * by Vue.js.
    *
    * You can easily play with the modal transition by editing
    * these styles.
    */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

 </style>