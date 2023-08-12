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
						<td><img class=img_size src="/assets/css/images/sushi.png" @click="openModalFoodDetail()"></td>
						<td><img class=img_size src="/assets/css/images/beannoodle.png"></td>
						<td><img class=img_size src="/assets/css/images/budae.png"></td>
						<td><img class=img_size src="/assets/css/images/cake.png"></td>
					</tr>
				</table>	
				</header>
			</div>
			<div class="row_1" v-else>
				<header>
				<h2>인기메뉴</h2>
				<table>
					<tr>
						<td><img src="/assets/css/images/sushi.png" @click="openModalFoodDetail()"></td><td><img src="/assets/css/images/beannoodle.png"></td>
					</tr>
					<tr>
						<td><img src="/assets/css/images/budae.png"></td><td><img src="/assets/css/images/cake.png"></td>
					</tr>
				</table>	
				</header>
			</div>
		</div>
	</section>
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
		width: 400px;
		height: 400px;
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

    }

</style>