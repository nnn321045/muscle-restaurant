<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { ref } from '@vue/reactivity'

library.add(faUserSecret)

export default {
    components:{
        
    },
    setup() {
        const isOpen = ref(false);

        const menuClickFn = () =>{
            isOpen.value = !isOpen.value;
        };

        return{
            menuClickFn,
            isOpen
        }
    }
}
</script>

<template>
    <header>
        <a href="#" class="logo"><img src="../assets/logo_adobespark.png" alt=""></a>
        <h3>肌肉鮮生</h3>
        <!-- RWD  -->
        <div id="menu-bar" @click="menuClickFn">
            <i class="fas fa-bars"></i>
        </div>
            
            <nav :class="['navbar', {active:isOpen}]">
                <a href="">本周主打</a>
                <a href="">食材</a>
                <a href="">菜單</a>
                <a href="">美食圖片</a>
                <a href="">評論</a>
                <a href="">訂購</a>
            </nav>
    </header>
</template>

<style lang="scss" scoped>
    header{
        font-size: 20px;
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        z-index: 100;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        background: rgba(255, 208, 0, 0.808);
        box-shadow: 10px 1rem 1rem rgba(0,0,0,0.1);
        opacity: 0.9;
        @media (max-width:600px){
            height: 80px;
            display: flex;
            justify-content: center;
        }
        >h3{
            display:none;
            @media (max-width:600px){
                font-size: 30px;
                font-weight: bolder;
                color:rgb(9,152,152);
                display: block;
            }
        }
        >.navbar{
            @media (max-width:600px){
                position: absolute;
                top:80px;
                left: 0;
                right: 0;
                background-color: rgba(255, 250, 250, 0.479);
                border-top:3px solid gray;
                /* 隱藏下拉選單 */
                clip-path:polygon(0 0 , 100% 0 , 100% 0 , 0 0 );
                &.active{
                /* 顯示下拉選單 */
                clip-path:polygon(0 0 , 100% 0 , 100% 100% , 0 100%);
                padding: 10px;
                }
            }
            >a{
                font-size: 22px;
                font-weight: bold;
                color:rgba(49, 161, 226, 0.925);
                padding-left: 12px;  
                @media (max-width:600px){
                    display: block;
                    font-size: 22px;
                    font-weight: normal;
                    color:rgb(20,80, 80);
                    margin: 10px;
                    padding: 6px;
                    border-left: 3px solid gray;
                    background-color: #fff;
                }
            }
            >a:hover{
                font-size: 22px;
                font-weight: 900;
                color:rgb(0,157,50);
                background-color: #fff;
                opacity: 0.7;
                border-radius: 20px;
                margin-left: 10px;
                transition: 1s;
                padding: 12px 10px;
            }
        }
        >.logo{
        font-size: 25px;
        font-weight: normal;
        line-height: 50px;
            >img{
                width: 100px;
                height: 50px;
                filter: saturate(8);
                margin-right: 8px;
                margin-top: 8px;
                @media (max-width:600px){
                    display: none;
                }
            }
        }
        > #menu-bar{
        display: none;
        font-size: 24px;
        cursor: pointer;
        color: rgb(9,152,152);
        border: 1px solid rgb(9,152,152);
        border-radius: 5px;
        padding: 8px;
        @media (max-width:600px){
            display: inherit;
            position: absolute;
            top: 20px;
            right: 10px;
        }
    }
}

</style>