<template>
   <div id="random">
        <img class="random_img" src="/assets/css/images/randombox.png" @click="openModalFoodDetail()">
        <h1 class=random_text>랜덤 메뉴 추첨을 위해 박스를 눌러주세요</h1>
   </div>
   <TeleportModal v-if="modalOpen">
		<ModalFoodDetail @closeModal="closeModal" mode="random"></ModalFoodDetail>
	</TeleportModal>
</template>
    
<script setup>
    // 컴포넌트
    import TeleportModal from '@/components/modal/TeleportModal';
	import ModalFoodDetail from '@/components/modal/ModalFoodDetail';
	// 내장 라이브러리
	import { onMounted, ref } from 'vue';

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
	@media screen and (max-width: 1024px) {
		#random {
		text-align: center;
		margin-top: 500px;
	}

		.random_img {
		width: 250px;
	}

		.random_text {
		text-align: center;
		font-size: 25px;
		line-height: 5rem;
	}


	}


	@media screen and (max-width: 480px) {
		#random {
		text-align: center;
		margin-top: 18rem;
	}

		.random_text {
		text-align: center;
		font-size: 15px;
		line-height: 5rem;
	}

		.random_img {
		width: 150px;
	}

	}


</style>
