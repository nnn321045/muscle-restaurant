<script>
import navbar from '@/components/Navbar.vue';
import footerBar from '@/components/Footer.vue';
import { ref } from '@vue/reactivity';

export default {
    components: {
        navbar,
        footerBar
    },
    setup() {
        const pictureTop = ref(0);
        
        window.addEventListener("scroll", function(){
            pictureTop.value = window.scrollY;
        });

        const clickTop = () =>{
            window.scrollTop = 0;
        };

        return{
            pictureTop,
            clickTop
        }
    }
}
</script>

<template>
    <navbar />
    <router-view></router-view>
    <footerBar />
    <a href="" id="scroll-up" :class="{active: pictureTop > 60}" @click="clickTop"><i class="fas fa-angle-up"></i></a>
</template>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        transition: 0.4s all linear;
        font-size: 22px;
    }
    #scroll-up{
        position: fixed;
        top: -120%;
        right: 20px;
        padding: 10px 15px;
        font-size: 25px;
        background: chocolate;
        color:#fff;
        border-radius: 10px;
        opacity: 0.8;
        transition: 1s linear;
        &.active{
            top:80%;
        }
    }

</style>
