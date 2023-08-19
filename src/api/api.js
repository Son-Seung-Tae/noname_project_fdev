import useAxios from '@/compositions/useAxios';

const { fetchData, postData } = useAxios();

export function recommendWord(params) {
   // 메뉴 단어
    return new Promise((resolve, reject) => {
        fetchData(
            `/recommendWord`,
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

export function getMainFood(params) {
    // 메인 음식
     return new Promise((resolve, reject) => {
         fetchData(
             `/getMainFood`,
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

export function getFoodDetail(params) {
    // 음식 상세
     return new Promise((resolve, reject) => {
         fetchData(
             `/getFoodDetail`,
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