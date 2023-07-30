import { defineStore } from 'pinia';
import { ref } from 'vue';

// loading
export const useViewStore = defineStore('view', () => {
    const isLoading  = ref(false);
    const setLoading = (state) => {
        isLoading.value = state;
    };

    return {
        isLoading,
        setLoading,
    }
});