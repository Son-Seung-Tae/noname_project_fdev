import axios from 'axios';
import router from '@/router';
// import { useViewStore } from '@/stores/view';

axios.defaults.baseURL = process.env.VUE_APP_API_URI;

axios.interceptors.request.use(
    // interceptor를 통해 백엔드 API로부터 받은 값을 먼저 처리함
    (request) => {
        return request;
    },
    (error) => {
        // 2xx 외의 범위에 있는 상태코드는 여기에서 실행됨
        console.log(error.response);
        return error;
    },
);

axios.interceptors.response.use(
    // interceptor를 통해 백엔드 API로부터 받은 값을 먼저 처리함
    (response) => {
        return response;
    },
    (error) => {
        window.alert('네트워크 에러. 잠시 후 시도해주세요');
        console.log(error);
        return error;
    },
);

export default axios;