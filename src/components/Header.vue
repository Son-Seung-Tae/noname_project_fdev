<template>
    <header id="header">
        <div id="header_box">
                    <h2 id="title_name"><a class="title_n" href="/">오 밥 무 ?</a></h2>
                <div id="header_icon">
                    <a id=header_i href="/">홈</a>
                    <a id=header_i href="/Search">검색 메뉴 추천</a>
                    <a id=header_i href="/Random">랜덤 메뉴 추천</a>
                    <a id=header_i href="#">만든 사람들</a>
                </div>
        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

 <style>
   #title_name {
        width: 30%;
        line-height: 80px;
		background-color: #FFEADD;
        font-family: "dongle";
        position: fixed; left:0; 
        text-align: center;
        height: 80px;
        
    }

    #header_icon {
        display: flex; 
        position: fixed;
        font-size: x-large;
        line-height: 80px;
        right:0;
        width: 60%;
        
        
    }
    
    #header_i {
        text-align: center;
        color: black;    
        font-weight: 350;
        width: 25%; 
    }

    .title_n {
        font-family: 'Dongle';
        font-style: normal;
        font-weight: 300;
        font-size: 55px;
        color: black;
        letter-spacing: 10px;

    }

 </style>