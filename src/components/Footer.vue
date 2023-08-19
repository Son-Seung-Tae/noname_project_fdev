<template>
    <!-- footer -->
    <footer id="footer">
        <ul class="icons">
            <li><a href="/Search" class="col-3"><img src="/assets/css/images/serchIcon.png"></a></li>
            <li><a href="/" class="col-3"><img src="/assets/css/images/randomIcon.png"></a></li>
            <li><a href="/Random" class="col-3"><img src="/assets/css/images/homeIcon.png"></a></li>
        </ul>
    </footer>
    <!-- script -->
</template>

<script>
    export default {
        
    }
</script>

<style>
    .bottom_menu { 
        position: fixed; 
        bottom: 0px; 
        left: 0px; 
        width: 100%; 
        height: 50px; 
        z-index:100; 
        border-top: 1px solid black; 
        background-color: white 
    }

    .bottom_menu > div { 
        float: left; 
        width: 20%; 
        height: 100%; 
        text-align: center; 
        padding-top: 13px; 
    }

    @media screen and (max-width: 1024px) {
        #footer {
            display:block;
        }

}
</style>