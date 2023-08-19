<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="row modal-header">
                    <div class="cursor">
                        <p  class="cursor_icon" style="cursor: pointer;" @click="$emit('closeModal')">X</p>
                    </div>
                </div>
                <div class="row modal-body">
                    <div class="col-6">
                        <div class="modal-image">
                            <img class="modal-image" :src="image">
                        </div>
                    </div>
                    <div class="modal_text">
                        <div class="modal-info">
                            <div class="modal-info-title">
                                <h2 class="text_1">{{ title }}</h2>
                            </div>
                            <div class="modal-info-content">
                                <h2 class="text_2">{{ content }}</h2>
                            </div>
                            <div class="modal-info-graph">
                                <canvas id="myChart"></canvas>
                            </div>                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </template>
 
 <script setup>
    //chart.js 
    import Chart from 'chart.js/auto';
    // import { Radar } from 'vue3-charts';
    // uitl 스크립트 라이브러리
    import { ref, computed, defineEmits, defineProps, onMounted } from 'vue';
    import { useModalStore } from '@/stores/modal';
    // api
	import { getFoodDetail } from '@/api/api';
    
    // pinia
    // import { useViewStore } from '@/stores/view';
    
 
    // const viewStore = useViewStore();
    const props = defineProps(['food_id']); 
    const emit = defineEmits(['closeModal']);
    const store = useModalStore();

    // param
    const food_id = ref(0);
    const image = ref();
    const title = ref();
    const content = ref();
    const flavor = ref(0);
    const price = ref(0);
    const famous = ref(0);

    // 상품 상세api
    const fetchFoodDetail = () => {
        // validate
        if (!food_id.value) {
            return;
        }

        getFoodDetail({
            id: food_id.value
        })
		.then((res) => {
			console.log(res.data);
            image.value = res.data.image;
            title.value = res.data.name;
            content.value = res.data.name; // 상세 정보 api에 없음
            flavor.value = Number(res.data.flavor);
            price.value = Number(res.data.price);
            famous.value = Number(res.data.famous);

            // chart
            const myChart = new Chart(
                document.getElementById('myChart'),
                config
            );
		})
		.catch((err) => {
			window.alert('오류가 발생했습니다.');
			console(err);
		})
    }
    
    //chart.js 삼각형 차트
    const data = {
        labels: [
            '맛','가격','인기도'
        ],

        datasets: [{
            label: '추천정도',
            data: [
                Number(flavor.value),
                Number(price.value),
                Number(famous.value),
            ],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',    
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, ]
    };

    //차트 타입 바꾸려면 type:?? 값 바꿔주면 됨
    const config = {
        type: 'radar',
        data: data,
        options: {
            animations: {
            tension: {
                duration: 800,
                easing: 'easeOutExpo',
                from: 1,
                to: 0,
                loop: true
            }
            },
            //scale: 척도 정하는 옵션/ r값의 최소값과 최댓값을 지정해줄수 있다.
            scales: {
                r:{
                    min:0,
                    max:10
                }
            },
            plugins: {
                    legend: {
                        
                        labels: {
                            // This more specific font property overrides the global property
                            font: {
                                size: 20
                            }
                        }
                    }
                },
            elements: {
                line: {
                    borderWidth: 3
                }
            },
        },
    };
    
    onMounted(() => {
        food_id.value = props.food_id;
        fetchFoodDetail();
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
        width: 62%;
        height: 70%;
        margin: 0rem auto;
        padding: 1rem 1rem;
        background-color: #F9FBE7;
        border-radius: 2rem;
        box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header {
        color: black;
        display: flex;
        justify-content: flex-end;
    }

    .modal-body {
        /* display: flex;
        flex-direction: column;
        justify-content: center; */
        display: grid;
        grid-template-columns: 50% 50%;
    }

    .modal-image img{
        height: 60%;
        weight: 60%;
        width: 600px;
        padding-left: 50px;
        padding-top: 12px;
    }

    .modal-default-button {
        float: right;
    }

    .temp-box {
        background: yellow;
        width: 100%;
        height: 100%;
        font-size: 40px;
        border: 1px solid #dee3eb;
        text-align: center;
    }
    .box-three {
        display: flex;
        flex-direction: column; /* 세로 정렬 */
        border: none; /* border를 지우고 3-1과 3-2에 각각 border를 적용해줍니다. */
        width: 100%;
    }
    .box-three > div:first-child {
        width: 100%;
        flex: 1; /* 공간차지비율 */
    }
    .modal-info {
        display: grid;
        flex-direction: row;
        /*grid-template-rows: 15% 25% 60%;*/
    }
    /* .modal-info > .modal-info-title {
        flex: 1;
    }
    .modal-info > .modal-info-content {
        flex: 3;
    }
    .modal-info > .modal-info-graph {
        flex: 6;
    } */

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

    .cursor {
        padding-right: 2rem;
    }

    .cursor_icon {
        margin: 0 0 0 0;
        color: #110303;
        font-size: x-large;
        
    }

    .modal_text {
        padding-left: 4rem;
    }

    .text_1 {
        margin-left: 60px;
        height: 2em;
        font-weight: 800;
        padding-top: 0.4em;
        font-size: 2.5em;
    }

    .text_2 {
        margin-left: 60px;
        font-weight: normal;
        font-size: 1.8em;
        height: 3.5em;
    }

    .text_3 {
        margin-left:2em;
    }
    
    .modal-info-graph {
        margin-left:2em;
        
    }
    
    @media screen and (max-width: 1680px) {
        
        .modal-image img{
            height: 60%;
            weight: 60%;
            width: 500px;
            padding-left: 50px;
            padding-top: 12px;
    }
		
        .text_1 {
            margin-left: 40px;
            height: 2em;
            font-weight: 800;
            padding-top: 0.4em;
            font-size: 2.2em;
        }
    
        .text_2 {
            margin-left: 40px;
            font-weight: normal;
            font-size: 1.5em;
            height: 3.5em;
        }
    
	}

    @media screen and (max-width: 1440px) {
        
        .modal-image img{
            height: 60%;
            weight: 60%;
            width: 450px;
            padding-left: 40px;
            padding-top: 12px;
    }
		
        .text_1 {
            margin-left: 30px;
            height: 2em;
            font-weight: 800;
            padding-top: 0.4em;
            font-size: 2em;
        }
    
        .text_2 {
            margin-left: 30px;
            font-weight: normal;
            font-size: 1.3em;
            height: 3.5em;
        }
    
	}
    
 </style>