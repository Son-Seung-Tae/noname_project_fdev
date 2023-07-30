<template>
    <div class="random_title">
        <h1 id="random_text">추천 결과</h1>
    </div>
    <div class="random_image">
        <img class="random_img" src="/assets/css/images/chicken.png">
    </div>
    <div class="random_comment">
        <h1 class="random_cmt">치킨은 언제나 옳다!</h1>
    </div>
    <div id="random_button">
       <button class="random_bt1" v-on:click="addtodo">다시검색</button> 
       <button class="random_bt2" v-on:click="addtodo">재추천</button>
    </div>
</template>
    
<script>
        export default {
            name: 'random',
            components: {
                
            }
        }
</script>

 <style>
#random_text{
    text-align: center;
    padding-top: 150px;
    font-size: x-large;
}
.random_img {
   margin: auto;
   padding-top:30px;
   display: block; 
   width: 350px;
   height: 250px;
}
.random_cmt {
    text-align: center;
    font-size: large;
    padding-top: 0;
}
.random_bt1 {
    /* Group 1 */


width: 150px;
height: 44px;



/* Group 1 */


width: 150px;
height: 44px;



/* Rectangle 9 */


width: 150px;
height: 44px;

background: #FEA1A1;
border-radius: 13px;


/* 다시 검색 */


width: 128.78px;
height: 38px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;

align-items: center;
text-align: center;

color: #000000;
margin-right: 10px;

}

.random_bt2 {
    /* Group 1 */


width: 150px;
height: 44px;



/* Group 1 */


width: 150px;
height: 44px;



/* Rectangle 9 */


width: 150px;
height: 44px;

background: #FEA1A1;
border-radius: 13px;


/* 다시 검색 */


width: 128.78px;
height: 38px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;

align-items: center;
text-align: center;

color: #000000;


}
#random_button {
   display:flex;
   padding-top: 100px;
   width: 267.54px;
   margin: auto;
}
</style>
