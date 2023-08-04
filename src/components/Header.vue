<template>
    <header id="header">
        <h2 id="title_name"><a class="title_n" href="/">오 밥 무?</a></h2>
        <div id="header_icon">
            <a id=header_i href="/">홈</a>
            <a id=header_i href="/Search">검색 메뉴 추천</a>
            <a id=header_i href="/Random">랜덤 메뉴 추천</a>
            <a id=header_i>만든 사람들</a>
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
        font-size: x-large;
        font-family: 'dongle';
        position: fixed; left:0; 
        text-align: center;
    }

    #header_icon {
        display: flex; 
        position: fixed; right:50px;
        font-size: x-large;
        line-height: 80px;
        
        
    }
    #header_i {
        padding-right: 50px;
        color: black;
    }

    .title_n {
        font-family: 'Dongle';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        color: #000000;


    }

 </style>