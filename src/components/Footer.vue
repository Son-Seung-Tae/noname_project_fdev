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
            display: block;
            background: #FCAEAE;
            padding: 0;
            text-align: center;
            box-shadow: 0 0 0.25em 0 rgba(0, 0, 0, 0.25);
            position: fixed;
            bottom: 0px;
            left: 0px;
            width: 100%;
            height: 100px;
            z-index: 100;
        }
    
        ul.icons li {
            display: inline-block;
            height: 28px;
            line-height: 2.5em;
            padding: 0 0.5em;
            flex: 1;
            padding-top: 36px;
        }
        
    }

    @media screen and (max-width: 480px) {
            #footer {            
            display: block;
            background: #FCAEAE;
            padding: 0;
            text-align: center;
            box-shadow: 0 0 0.25em 0 rgba(0, 0, 0, 0.25);
            position: fixed;
            bottom: 0px;
            left: 0px;
            width: 100%;
            height: 80px;
            z-index: 100;
        }

        ul.icons li {
            display: inline-block;
            height: 28px;
            line-height: 2.5em;
            padding: 0 0.5em;
            flex: 1;
            padding-top: 26px;
        }
    }
</style>