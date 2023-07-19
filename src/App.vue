<template>
    <!-- Loading -->

    <Header />
    <!-- View -->
    <router-view></router-view>
    <Footer />
</template>

<script>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        mounted() {
            
        },
        components: {
            Header,
            Footer
        }
    }

</script>