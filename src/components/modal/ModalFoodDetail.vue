<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <!-- <div class="row modal-header">
                    <div class="cursor">
                        <p class="cursor_icon" style="cursor: pointer;" @click="$emit('closeModal')">X</p>
                    </div>
                </div> -->
                <!-- 웹 -->
                <div v-if="innerWidth > 980" class="row modal-body">
                    <div class="col-6">
                        <div class="modal-image">
                            <img v-if="image" :src="image">
                            <img v-else src="/assets/css/images/noImage.svg">
                        </div>
                    </div>
                    <div class="modal_text">
                        <div class="modal-info">
                            <div class="modal-info-title">
                                <h2 class="text_1">{{ title }}</h2>
                            </div>
                            <div class="modal-info-content">
                                <h2 class="text_2" v-for="item in content">{{ item.tag_comment }}</h2>
                            </div>
                            <div class="modal-info-graph">
                                <RadarChart :options="radarOptions" :chartData="chartData"></RadarChart>
                            </div>                         
                        </div>
                    </div>
                    <div></div>
                    <div class="research" v-if="props.mode != 'food_id'">
                        <img style="cursor: pointer;" src="/assets/css/images/researchIcon.png" @click="researchBtn">
                    </div>
                </div>
                <!-- 엡 -->
                <div v-else class="modal-body">
                    <h2 class="text_1">{{ title }}</h2>
                    <div class="modal-image">
                        <img v-if="image" :src="image">
                        <img v-else src="/assets/css/images/noImage.svg">
                    </div>
                    <div>
                        <h2 class="text_2" v-for="item in content">{{ item.tag_comment }}</h2>
                    </div>
                    <div class="modal-info-graph">
                        <RadarChart :options="radarOptions" :chartData="chartData" style="height: 10rem;"></RadarChart>
                    </div>
                </div>
            </div>
            <div class="research" v-if="innerWidth <= 980 && props.mode != 'food_id'">
                <button class="research-btn">
                    <p class="research-text" @click="emit('closeModal')">다시검색</p>
                </button>
                <button class="research-btn" @click="researchBtn">
                    <p class="research-text">재검색</p>
                </button>
            </div>
        </div>
    </div>
 </template>
 
 <script setup>
    //chart.js 
    import { Chart, registerables } from 'chart.js';
    // import { Radar } from 'vue3-charts';
    import { RadarChart } from 'vue-chart-3';
    // uitl 스크립트 라이브러리
    import { ref, computed, defineEmits, defineProps, onMounted } from 'vue';
    import { useModalStore } from '@/stores/modal';
    // api
	import { getFoodDetail, getSearch, getFoodRandom } from '@/api/api';
    
    // pinia
    // import { useViewStore } from '@/stores/view';
    
    Chart.register(...registerables);
 
    // const viewStore = useViewStore();
    const props = defineProps(['mode', 'food_id', 'search']); 
    const emit = defineEmits(['closeModal']);
    const store = useModalStore();

    // param
    const food_id = ref(0);
    const search = ref();
    const image = ref();
    const title = ref();
    const content = ref([]);
    const flavor = ref(0);
    const price = ref(0);
    const famous = ref(0);

    const chartData = ref([]);
    const radarOptions = ref([]);

    // 상품 상세api 추천id
    const fetchFoodDetailId = () => {
        // validate
        if (!food_id.value) {
            return;
        }

        getFoodDetail({
            id: food_id.value
        })
		.then((res) => {
            image.value = res.data.image;
            title.value = res.data.name;
            flavor.value = Number(res.data.flavor);
            price.value = Number(res.data.price);
            famous.value = Number(res.data.famous);
            
            content.value = res.data.food_tag; // 내용

            // chart data
            chartData.value = {
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
            radarOptions.value = {
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
                        max:5
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                },
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
            };
		})
		.catch((err) => {
			window.alert('오류가 발생했습니다.');
			console(err);
		})
    }

    // 상품 상세api 검색
    const fetchFoodDetailSearch = () => {
        // validate
        if (!search.value) {
            return;
        }

        getSearch({
            search: search.value
        })
		.then((res) => {
            image.value = res.data.image;
            title.value = res.data.name;
            flavor.value = Number(res.data.flavor);
            price.value = Number(res.data.price);
            famous.value = Number(res.data.famous);
            
            content.value = res.data.food_tag; // 내용

            // chart data
            chartData.value = {
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
            radarOptions.value = {
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
                        max:5
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                },
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
            };
		})
		.catch((err) => {
			window.alert('오류가 발생했습니다.');
			console(err);
		})
    }

    // 상품 상세api 랜덤
    const fetchFoodDetailRandom = () => {
        // validate
        if (!props.mode == "random") {
            return;
        }

        getFoodRandom({
            
        })
		.then((res) => {
            image.value = res.data.image;
            title.value = res.data.name;
            flavor.value = Number(res.data.flavor);
            price.value = Number(res.data.price);
            famous.value = Number(res.data.famous);
            
            content.value = res.data.food_tag; // 내용

            // chart data
            chartData.value = {
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
            radarOptions.value = {
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
                        max:5
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                },
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
            };
		})
		.catch((err) => {
			window.alert('오류가 발생했습니다.');
			console(err);
		})
    }

    // 재검색
    const researchBtn = () => {
        if (props.mode == "search") {
            search.value = props.search;
            fetchFoodDetailSearch();
        } else if (props.mode == "random") {
            fetchFoodDetailRandom();
        }
    }

    //Hide modal
    window.addEventListener('click', (e) => {
        e.target === document.querySelector('.modal-wrapper') ?  emit("closeModal") : false
    });

    // 넓이
	const innerWidth = ref();
    
    onMounted(() => {
        innerWidth.value = window.innerWidth;
		window.addEventListener('resize', () => {
			innerWidth.value = window.innerWidth;
		});

        if (props.mode == "food_id") {   
            food_id.value = props.food_id;
            fetchFoodDetailId();
        } else if (props.mode == "search") {
            search.value = props.search;
            fetchFoodDetailSearch();
        } else if (props.mode == "random") {
            fetchFoodDetailRandom();
        }
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
        width: 28rem;
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
        font-weight: 700;
        padding-top: 0.3em;
        font-size: 1.5em;
    }

    .text_2 {
        margin-left: 60px;
        font-weight: normal;
        font-size: 1.2em;
        height: 3.5em;
    }

    .text_3 {
        margin-left:2rem;
    }
    
    .modal-info-graph {
        margin-left:4rem;  
    }

    .research {
        display: flex;
        padding: 1rem;
        justify-content: flex-end;
        align-content: flex-end;
    }

    /* @media screen and (max-width: 1440px) {
        
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
    
	} */

    @media screen and (max-width: 980px) {
        
        .modal-mask {
            z-index: 1;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: table;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .modal-wrapper {
            display: table-cell;
            vertical-align: middle;
            text-align: center;
        }

        .modal-container {
            width: 62%;
            height: 60%;
            margin: 0rem auto;
            display: inline-block;
            background-color: #F9FBE7;
            border-radius: 2rem;
            box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.33);
            transition: all 0.3s ease;
            font-family: Helvetica, Arial, sans-serif;
        }

        .cursor_icon {
            margin: 0 0 0 0;
            color: #110303;
            font-size: medium;
        }

        .modal-body {
            display: block;
        }

        .modal-image img{
            height: 30%;
            width: 11rem;
            padding-left: 0.1rem;
        }

        .text_1 {
            margin-left: 23%;
            font-weight: 600;
            padding-top: 0.3em;
            font-size: 1.3em;
            height: 1.2rem;
        }

        .text_2 {
            margin-left: 0;
            font-weight: normal;
            font-size: 1em;
            height: 0.2rem;
            margin-bottom: 1rem;
        }

        .modal-info-graph {
            margin-left:1em;
            height: 8rem;
            padding-top: 2rem;
        }

        .research {
            display: inline-block;
            padding: 1rem;
        }

        .research-btn {
            width: 7.5rem;
            height: 3rem;
            flex-shrink: 0;
            background: #FEA1A1;
            border-radius: 1rem;
            margin: 1rem;
        }

        .research-text {
            display: flex;
            width: 100%;
            height: 50%;
            flex-direction: column;
            justify-content: center;
            flex-shrink: 0;
            color: #000;
            text-align: center;
            font-family: Inter;
            font-size: 1rem;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin: 0rem;
        }
        
    }

    
 </style>