<template>
<!-- 추천 검색어 -->
	<section id="main" class="wrapper style1">
		<div class="content">
			<div id=fix1>
				<div class="row">
					<header>
						<h2>추천 검색어</h2>
					</header>
				</div>
				<div class="row" v-if="innerWidth > 980">
					<div class="col-2 col-12-medium" v-for="item in recommend_word">
						<input type="text" :value="item.recommend_word" disabled/>
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
			</div>
			<div class="row_1" v-if="innerWidth > 980">
				<header id="second_header">
					<h2>인기메뉴</h2>
					<!-- <table>
						<tr>
							<td v-for="item in foodImgList">
								<img class=img_size :src="item.image" @click="openModalFoodDetail(item.food_id)">
							</td>
						</tr>
					</table>	 -->
					<div id=conatiner_vertical>
						<div class=container1 style="display:inline;" v-for="item in foodImgList">
							<img v-if="item.image" class=img_size :src="item.image" @click="openModalFoodDetail(item.food_id)">
							<img v-else class=img_size src="/assets/css/images/noImage.svg" @click="openModalFoodDetail(item.food_id)">
						</div>
					</div>
				</header>
			</div>
			<div class="row_1" v-else>
				<header>
				<h2>인기메뉴</h2>
					<div id=conatiner_vertical>
						<div class=container2 style="display:inline;" v-for="(item, index) in foodImgList">
							<img v-if="item.image" class=img_size :src="item.image" @click="openModalFoodDetail(item.food_id)">
							<img v-else class=img_size src="/assets/css/images/noImage.svg" @click="openModalFoodDetail(item.food_id)">
							<br v-if="index % 2 == 1"/>
						</div>
					</div>
				</header>
			</div>
		</div>
	</section>
	<TeleportModal v-if="modalOpen">
		<ModalFoodDetail @closeModal="closeModal" :food_id="food_id" mode="food_id"></ModalFoodDetail>
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
	const recommend_word = ref([]);
	// 추천 검색어
	const fetchRecommendWord = () => {
		recommendWord()
		.then((res) => {
			recommend_word.value = res.data;
			console.log(recommend_word.value);
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
		padding-right: 74px;
		padding-bottom: 30px;
	}

	#second_header {
		padding-top:20px;
	}

	div#conatiner_vertical {
		overflow: auto;
		padding-top: 30px;
		height: 378px;
		width: 1840px;
	}

	@media screen and (max-width: 1680px) {
        
		.row {
			display: flex;
			flex-wrap: nowrap;
			box-sizing: border-box;
			align-items: stretch;
			padding-top: 10px;
			overflow-x: auto;
		}

				.row > * {
			padding: 0 50px 0 0;
		}

		.content {
			padding-left:60px;
			padding-top: 80px;
		}

		.img_size {
			width: 350px;
			height: 350px;
			padding-top: 0.5rem;
			padding-right: 50px;
			border-radius: 10%;
		}

		table {
    	margin: 0 0 2em 0;
    
		}

		input[type="text"], input[type="password"], input[type="email"], select, textarea {
			-moz-appearance: none;
			-webkit-appearance: none;
			-ms-appearance: none;
			appearance: none;
			-moz-transition: border-color 0.2s ease-in-out;
			-webkit-transition: border-color 0.2s ease-in-out;
			-ms-transition: border-color 0.2s ease-in-out;
			transition: border-color 0.2s ease-in-out;
			background: #F9FBE7;
			border-radius: 15px;
			border: solid 1px rgba(255, 255, 255, 0.3);
			color: #0000;
			display: block;
			outline: 0;
			padding: 0 1em;
			text-decoration: none;
			width: 300px;
			height: 150px;
		}

				input[type="text"], input[type="password"], input[type="email"], select {
			color: rgba(0, 0, 0, 0.75);
			font-weight: 500;
		}

		div#conatiner_vertical {
			overflow: auto;
			padding-top: 30px;
			height: 378px;
			width: 1600px;
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
			width: 300px;
			height: 300px;
			padding-top: 0.5em;
			padding-right: 40px;
			border-radius: 10%;
		}

		.row_1 {
			padding-top: 30px;
		}
		
		#second_header {
			padding-top: 50px;
		}

		div#conatiner_vertical {
			overflow: auto;
			padding-top: 0px;
			height: 308px;
			margin-top: 30px;
			width: 1360px;
		}

}

	@media screen and (max-width: 1024px) {
		.row > * {
			padding: 0 20px 0 0;
		}

		input[type="text"], input[type="password"], input[type="email"], select, textarea {
			-moz-appearance: none;
			-webkit-appearance: none;
			appearance: none;
			transition: border-color 0.2s ease-in-out;
			background: #F9FBE7;
			border-radius: 15px;
			border: solid 1px rgba(255, 255, 255, 0.3);
			color: #0000;
			display: block;
			outline: 0;
			padding: 0 1em;
			text-decoration: none;
			width: 200px;
			height: 150px;
		}

		div#conatiner_vertical {
			overflow: auto;
			padding-top: 0px;
			height: 616px;
			margin-top: 30px;
			width: 975px;
		}

		.img_size {
			width: 270px;
			height: 270px;
			padding-top: 0.5em;
			padding-right: 55px;
			border-radius: 10%;
		}

		input[type="text"], input[type="password"], input[type="email"], select {
			color: rgba(0, 0, 0, 0.75);
			font-weight: 500;
		}

	}

	@media screen and (max-width: 480px) {
		
		#main {
		width: 100%;
		height: 100%;
		padding-top: 80px;
	}

		.content {
		padding-left: 0px;
		padding-top: 0px;
	}

		h2 {
		font-size: 1.2em;
		line-height: 1.2em;
		letter-spacing: -0.025em;
		padding-left: 24px;
		padding-top: 19px;
	}

		

		.row_1 {
		padding-top: 0px;
	}

		.img_size {
			width: 140px;
			height: 140px;
			padding-top: 0px;
			padding-right: 0px;
			padding-left: 37px;
			border-radius: 0%;
			margin-top: 10px;
			padding-bottom: 20px;
		}

	.row {
		padding-top:0px;
		 margin-left: 0px; 
	}	

	div#conatiner_vertical {
		overflow: auto;
		padding-top: 0px;
		height: 330px;
		margin-top: 0px;
		width: 480px;
	}

	
	input[type="text"], input[type="password"], input[type="email"], select, textarea {
		-moz-appearance: none;
		-webkit-appearance: none;
		appearance: none;
		transition: border-color 0.2s ease-in-out;
		background: #F9FBE7;
		border-radius: 15px;
		border: solid 1px rgba(255, 255, 255, 0.3);
		color: #0000;
		display: block;
		outline: 0;
		padding: 0 1em;
		text-decoration: none;
		width: 200px;
		height: 40px;
	}

	input[type="text"], input[type="password"], input[type="email"], select {
		color: rgba(0, 0, 0, 0.75);
		font-weight: 500;
	}

	.row > .col-12-medium {
		width: 100%;
		margin-left: 10px;
	}

	

	}
</style>