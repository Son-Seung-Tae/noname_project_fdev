<template>
<!-- 추천 검색어 -->
	<section id="main" class="wrapper style1">
		<div class="content">
			<div class="row">
				<header>
					<h2>추천 검색어</h2>
				</header>
			</div>
			<div class="row">
				<div class="col-4 col-12-medium">
					<div class="col-8 col-12-xsmall">
						<input type="text" v-model="recommend1" disabled/>
					</div>
					<div class="col-8 col-12-xsmall">
						<input type="text" v-model="recommend2" disabled/>
					</div>
					<div class="col-8 col-12-xsmall">
						<input type="text" v-model="recommend3" disabled/>
					</div>
					<div class="col-8 col-12-xsmall">
						<input type="text" v-model="recommend4" disabled/>
					</div>
				</div>
			</div>
			<div class="row_1">
				<header>
				<h2>인기메뉴</h2>
				<table>
				<tr>
					<td><img src="/assets/css/images/sushi.png"></td><td><img src="/assets/css/images/beannoodle.png"></td>
				</tr>
				<tr>
					<td><img src="/assets/css/images/budae.png"></td><td><img src="/assets/css/images/cake.png"></td>
				</tr>
				</table>	
				</header>
			</div>
		</div>
	</section>
</template>

<script setup>
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

	// 페이지 접속
	onMounted(() => {
		fetchRecommendWord();
	});
</script>

<style>
	.row_1 {
		padding-top: 20px;
	}
	table {
		width: 300px;
	}
	.content {
		padding-left: 30px;
		padding-top: 30px;
	}
</style>