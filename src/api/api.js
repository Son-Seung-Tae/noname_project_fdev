import useAxios from '@/compositions/useAxios';

const { fetchData, postData } = useAxios();

export function recommendWord(params) {
   // 메뉴 추천
    return new Promise((resolve, reject) => {
        fetchData(
            `/recommend_word`,
            params,
            (res) => {
                resolve(res);
            },
            (fail) => {
                reject(fail.error);
            },
        );
    });
}