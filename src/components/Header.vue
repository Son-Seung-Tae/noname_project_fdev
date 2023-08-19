<template>
    <header id="header">
        <div id="header_box">
                    <h2 id="title_name"><a class="title_n" href="/">오 밥 무 ?</a></h2>
                <div id="header_icon">
                    <a id=header_i href="/">홈</a>
                    <a id=header_i href="/Search">검색 메뉴 추천</a>
                    <a id=header_i href="/Random">랜덤 메뉴 추천</a>
                    <a id=header_i href="/Making">만든 사람들</a>
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
        font-weight: 500;
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

    @media screen and (max-width: 1440px) {

        .row {
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
            align-items: stretch;
        }

        #title_name {
            width: 30%;
            line-height: 60px;
            background-color: #FFEADD;
            font-family: "dongle";
            position: fixed;
            left: 0;
            text-align: center;
            height: 60px;
        }

        .title_n {
            font-family: 'Dongle';
            font-style: normal;
            font-weight: 300;
            font-size: 35px;
            color: black;
            letter-spacing: 10px;
        }

        #header {
            background: #FCAEAE;
            box-shadow: 0 0 0.25em 0 rgba(0, 0, 0, 0.25);
            cursor: default;
            height: 60px;
            line-height: 4.5em;
            position: fixed;
            top: 0;
            right: 0;
            width: 70%;
            z-index: 100;
            border-top-left-radius: 50px;
            border-bottom-left-radius: 50px;
        }

        #header_icon {
            display: flex;
            position: fixed;
            font-size: medium;
            line-height: 60px;
            right: 0;
            width: 60%;
        }
}
 </style>