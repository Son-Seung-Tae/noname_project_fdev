<template>    
        <div>
            <h1 id="search_list">오 밥 무?</h1>
        </div>
        <div id="search_fn">
            <input id=search_css type="text" v-model="search" @keyup.enter="openModalFoodDetail()">
        </div>    
    <TeleportModal v-if="modalOpen">
		<ModalFoodDetail @closeModal="closeModal" :search="search" mode="search"></ModalFoodDetail>
	</TeleportModal>
</template>
    
<script setup>
    // 컴포넌트
    import TeleportModal from '@/components/modal/TeleportModal';
	import ModalFoodDetail from '@/components/modal/ModalFoodDetail';
	// 내장 라이브러리
	import { onMounted, ref } from 'vue';

    const search = ref();

    // 음식 상세 모달
	const openModalFoodDetail = () => {
		modalOpen.value = true;
	};

    const modalOpen = ref(false);

    // 음식 모달 닫기
	const closeModal = () => {
		modalOpen.value = false;
	}

</script>

 <style>
 #search_list {
    padding-top:80px;
    text-align: center;
    height: 300px;
    line-height: 500px;
    /* 오 밥 무? */
    font-family: 'dongle';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    
    
    /* identical to box height */

    color: #000000;
    }

    #search_css {
        /* Rectangle 8 */

box-sizing: border-box;


width: 900px;
height:50px;


border: 1px solid #D9D9D9;
border-radius: 100px;


/* Rectangle 8 */

box-sizing: border-box;




background: #FFFFFF;
border: 1px solid #D9D9D9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;


/* image 10 */



/* 오늘 하루 어땠나요? */

margin-left: auto;
margin-right: auto;


font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;

color: black;


}

@media screen and (max-width: 1440px) {

        #search_css {
            box-sizing: border-box;
            width: 700px;
            height: 40px;
            border: 1px solid #D9D9D9;
            border-radius: 100px;
            box-sizing: border-box;
            background: #FFFFFF;
            border: 1px solid #D9D9D9;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;      
            margin-left: auto;
            margin-right: auto;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            line-height: 19px;
            display: flex;
            align-items: center;
            color: black;


        }

        #search_list {
            padding-top: 10px;
            text-align: center;
            height: 300px;
            line-height: 530px;
            font-family: 'dongle';
            font-style: normal;
            font-weight: 400;
            font-size: 37px;
            color: #000000;
        }    
}

    @media screen and (max-width: 1024px) {
        
        #search_list {
        padding-top: 200px;
        text-align: center;
        height: 300px;
        line-height: 530px;
        font-family: 'dongle';
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        color: #000000;
    }

        #search_css {
        box-sizing: border-box;
        width: 700px;
        height: 50px;
        border: 1px solid #D9D9D9;
        border-radius: 100px;
        box-sizing: border-box;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin-left: auto;
        margin-right: auto;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 19px;
        display: flex;
        align-items: center;
        color: black;
    }


    }

    @media screen and (max-width: 480px) {
        #search_list {
        padding-top: 300px;
        text-align: center;
        line-height: 0px;
        font-family: 'dongle';
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        color: #000000;
        height: 0px;
    }

        #search_fn {
        padding-top: 30px;
    }

        #search_css {
        box-sizing: border-box;
        width: 347px;
        height: 50px;
        border: 1px solid #D9D9D9;
        border-radius: 100px;
        box-sizing: border-box;
        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin-left: auto;
        margin-right: auto;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 19px;
        display: flex;
        align-items: center;
        color: black;
    }

    }


 </style>
 