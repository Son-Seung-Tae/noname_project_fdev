<template>
<!-- 추천 검색어 -->
	<section id="main" class="wrapper style1">
		<div class="content">
			<div class="row">
				<header>
					<h2>추천 검색어</h2>
				</header>
			</div>
			<div class="row" v-if="innerWidth > 980">
				<div class="col-2 col-12-medium">
					<input type="text" v-model="recommend1" disabled/>
				</div>
				<div class="col-2 col-12-medium">
					<input type="text" v-model="recommend2" disabled/>
				</div>
				<div class="col-2 col-12-medium">
					<input type="text" v-model="recommend3" disabled/>
				</div>
				<div class="col-2 col-12-medium">
					<input type="text" v-model="recommend4" disabled/>
				</div>
			</div>
			<div class="row" v-else>
				<div class="col-4 col-12-medium">
					<div class="col-2 col-12-xsmall">
						<input type="text" v-model="recommend1" style="width: 60%;" disabled/>
					</div>
					<div class="col-2 col-12-xsmall">
						<input type="text" v-model="recommend2" style="width: 60%;" disabled/>
					</div>
					<div class="col-2 col-12-xsmall">
						<input type="text" v-model="recommend3" style="width: 60%;" disabled/>
					</div>
					<div class="col-2 col-12-xsmall">
						<input type="text" v-model="recommend4" style="width: 60%;" disabled/>
					</div>
				</div>
			</div>
			<div class="row_1" v-if="innerWidth > 980">
				<header id="second_header">
					<h2>인기메뉴</h2>
					<table class="img_all">
						<tr>
							<td v-for="item in foodImgList">
								<img class=img_size :src="item.image" @click="openModalFoodDetail(item.food_id)">
							</td>

							<!-- <td><img class=img_size src="/assets/css/images/beannoodle.png" @click="openModalFoodDetail()"></td>
							<td><img class=img_size src="/assets/css/images/budae.png" @click="openModalFoodDetail()"></td>
							<td><img class=img_size src="/assets/css/images/cake.png" @click="openModalFoodDetail()"></td> -->
						</tr>
					</table>	
				</header>
			</div>
			<div class="row_1" v-else>
				<header>
				<h2>인기메뉴</h2>
				<table>
					<tr>
						<td><img src="/assets/css/images/sushi.png" @click="openModalFoodDetail()"></td><td><img src="/assets/css/images/beannoodle.png" @click="openModalFoodDetail()"></td>
					</tr>
					<tr>
						<td><img src="/assets/css/images/budae.png" @click="openModalFoodDetail()"></td><td><img src="/assets/css/images/cake.png" @click="openModalFoodDetail()"></td>
					</tr>
				</table>	
				</header>
			</div>
		</div>
	</section>
	<TeleportModal v-if="modalOpen">
		<ModalFoodDetail @closeModal="closeModal" :food_id="food_id"></ModalFoodDetail>
	</TeleportModal>
</template>

<script setup>
	// 컴포넌트
	import TeleportModal from '@/components/modal/TeleportModal';
	import ModalFoodDetail from '@/components/modal/ModalFoodDetail';
	// 내장 라이브러리
	import { onMounted, ref } from 'vue';
	// api
	import { recommendWord, getMainFood } from '@/api/api';

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

	const foodImgList = ref([]);
	// 메인 음식
	const fetchRMainFood = () => {
		getMainFood(

		)
		.then((res) => {
			foodImgList.value = res.data;
		})
		.catch((err) => {
			window.alert('오류가 발생했습니다.');
			console(err);
		})
	}

	const modalOpen = ref(false);

	const food_id = ref(0);
	// 음식 상세 모달
	const openModalFoodDetail = (id) => {
		food_id.value = id;
		modalOpen.value = true;
	};
	
	// 음식 모달 닫기
	const closeModal = () => {
		food_id.value = 0;
		modalOpen.value = false;
	}

	// 넓이
	const innerWidth = ref();

	// 페이지 접속
	onMounted(() => {
		fetchRecommendWord();
		fetchRMainFood();
		innerWidth.value = window.innerWidth;
		window.addEventListener('resize', () => {
			innerWidth.value = window.innerWidth;
		})
	});
</script>

<style>
	.row_1 {
		padding-top: 50px;
	}
	
	
	.content {
		padding-left: 80px;
		padding-top: 80px;
	}
	
	#bestmenu {
		width:300px;
	}

	.img_size {
		width: 370px;
		height: 370px;
		padding-top: 0.5rem;
	}

	#second_header {
		padding-top:20px;
	}

	@media screen and (max-width: 1680px) {
        
		.content {
			padding-left:60px;
			padding-top: 80px;
		}

		.img_size {
			width: 300px;
			height: 300px;
			padding-top: 0.5rem;
			padding-right: 5em;
		}

		table {
    	margin: 0 0 2em 0;
    
		}
    }

	@media screen and (max-width: 1440px) {

		h2 {
			font-size: 1.2em;
			line-height: 1.2em;
			letter-spacing: -0.025em;
		}

		#main {
			width: 100%;
			height: 100%;
			padding-top: 60px;
		}

		.content {
			padding-left: 50px;
			padding-top: 60px;
		}

		input[type="text"] {
			height: 8rem;
			color: rgba(0, 0, 0, 0.75);
			font-weight: 500;
		}

		table {
			margin: 0 0 2em 0;
			
		}

		.img_size {
			width: 260px;
			height: 260px;
			padding-top: 0.5em;
			padding-right: 4em;
		}

		.row_1 {
			padding-top: 30px;
		}
		
		#second_header {
			padding-top: 50px;
		}

}

</style>