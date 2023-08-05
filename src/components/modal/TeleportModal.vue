<template>
    <teleport to="body">
        <div class="modal">
            <Transition appear>
                <slot></slot>
            </Transition>
        </div>
    </teleport>
</template>
 
<script>
    import { useModalStore } from '@/stores/modal';
    import { onMounted, onUnmounted } from '@vue/runtime-core';
    export default {
        props: {
            isSecond: {
                // 이중모달 여부
                type: Boolean,
                default: false,
            },
            transMode: {
                type: String,
                default: 'fade',
                validator: (value) => {
                    const allowed = ['fade', 'slide-up', 'overlay'];
                    return allowed.includes(value);
                },
            },
        },
        setup(props) {
            const modalStore = useModalStore();
            onMounted(() => {
                if (props.isSecond) {
                    modalStore.isSecond = true;
                }
            });
            onUnmounted(() => {
                modalStore.isSecond = false;
            });
        },
    };
</script>
<style scoped>

</style>