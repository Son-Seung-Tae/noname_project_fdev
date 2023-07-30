import axios from 'axios';
import router from '../router';

export default function useAxios() {
    function postData(url, payload, callback = () => {}, failCallback = () => {}) {
        axios
            .post(url, payload, {
                headers: {
                //    ClientSecret: 'WeroU1wqXZF2zyr8H0U2pDAOOCetxKdJn2SsQpL3PrpkbJ4FWfOu3iEO15VfJNeI',
                },
            })
            .then((res) => {
                callback(res);
                // if (res.data.success) {
                //     if (callback) {
                //         callback(res.data);
                //     }
                // } else {
                //     // post에 대한 응답으로 success가 false일 경우 실행할 로직(서버와 통신은 성공한 상태)
                //     failCallback(res.data);
                // }
            })
            // 서버와 통신자체가 실패한 상태
            .catch((error) => {
                console.error(error);
            });
    }

    function fetchData(url, params = {}, callback = () => {}, failCallback = () => {}) {
        axios
            .get(url, {
                headers: {
                //    ClientSecret: 'WeroU1wqXZF2zyr8H0U2pDAOOCetxKdJn2SsQpL3PrpkbJ4FWfOu3iEO15VfJNeI',
                },
                params: params,
            })
            .then((res) => {
                callback(res);
                // if (res.data.success) {
                //     callback(res.data);
                // } else {
                //     failCallback(res.data);
                // }
            })
            .catch((error) => {
                // 서버랑 통신 자체가 안 된 경우
                const status = error?.message.slice(-3);
                if (status === '500' || status === '404') {
                    router.push('/404');
                } else {
                    window.alert('오류가 발생했습니다. 페이지를 새로고침 해주세요.');
                }
            });
    }

    return {
        postData,
        fetchData,
    };
}