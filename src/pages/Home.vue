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
						<input type="text" :value="'야식추천해줘'" disabled/>
					</div>
					<div class="col-8 col-12-xsmall">
						<input type="text" :value="'회사 회식메뉴 추천 부탁드립니다.'" disabled/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
    export default {
		name: 'home',
		components: {
			
		}
    }
</script>