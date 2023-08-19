<template>
   <div id="random">
        <img class="random_img" src="/assets/css/images/randombox.png" @click="openModalFoodDetail()">
        <h1 class=random_text>랜덤 메뉴 추첨을 위해 박스를 눌러주세요</h1>
   </div>
   <TeleportModal v-if="modalOpen">
		<ModalFoodDetail @closeModal="closeModal"></ModalFoodDetail>
	</TeleportModal>
</template>
    
<script setup>
       

        // 컴포넌트
	import TeleportModal from '@/components/modal/TeleportModal';
	import ModalFoodDetail from '@/components/modal/ModalFoodDetail';
	// 내장 라이브러리
	import { onMounted, ref } from 'vue';
	// api
	import { recommendWord } from '@/api/api';

	// v-model
	const recommend1 = ref();
	const recommend2 = ref();
	const recommend3 = ref();
	const recommend4 = ref();
	// 추천 검색어
	const fetchRecommendWord = () => {
		recommendWord(

		)
		.then((res) => {
			console.log(res.data);
			recommend1.value = res.data[0].rcmd_word;
			recommend2.value = res.data[1].rcmd_word;
			recommend3.value = res.data[2].rcmd_word;
			recommend4.value = res.data[3].rcmd_word;
		})
		.catch((err) => {
			window.alert('오류가 발생했습니다.');
			console(err);
		})
	}

	const modalOpen = ref(false);

	// 음식 상세 모달
	const openModalFoodDetail = () => {
		modalOpen.value = true;
	};
	
	// 음식 모달 닫기
	const closeModal = () => {
		modalOpen.value = false;
	}

	// 넓이
	const innerWidth = ref();

	// 페이지 접속
	onMounted(() => {
		fetchRecommendWord();
		innerWidth.value = window.innerWidth;
		window.addEventListener('resize', () => {
			innerWidth.value = window.innerWidth;
		})
	});
        
</script>

 <style>
    .random_img {
        width: 250px;
       
    }
    
    #random {
        text-align: center;
        margin-top: 20rem;
    }

    .random_text {
        text-align: center;
        font-size: x-large;
        line-height: 5rem;
    }
    
	@media screen and (max-width: 1680px) {
        
		.random_img {
        width: 220px;
       
    	}

    }

	@media screen and (max-width: 1440px) {

		#random {
			text-align: center;
			
		}


		.random_img {
			width: 180px;
		}


		.random_text {
			text-align: center;
			font-size: large;
			line-height: 5rem;
		}

		
}


</style>
