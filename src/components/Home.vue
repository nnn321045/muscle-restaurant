<script>
import Navbar from './Navbar.vue'
export default {
    components: { Navbar },

}
</script>

<template>
    <section class="home" id="home">
        <div class="content">
            <h3>水煮雞肉蔬菜飯</h3>
            <p>採用台灣稻米，營養Q彈口感，搭上水煮雞胸肉以及營養新鮮蔬菜，給你滿滿的『肌肉能量』</p>
            <a href="#" class="btn">立即訂購</a>
        </div>
        <img src="../assets/healthrice_adobespark.png" alt="" />
    </section>
</template>

<style lang="scss" scoped>

    section{
        padding: 10px;
    }
    .home{
        display: flex;
        flex-wrap: wrap;
        gap: 10px; 
        min-height: 500px;
        align-items: center;
        background: url(../assets/background.jpg) no-repeat;
        background-size: cover;
        background-position: center;
        >.content{
            flex: 1 1 30px;
            margin-top: 60px;
            padding: 50px; 
            background: rgb(1,6,1);
            background: linear-gradient(90deg, rgba(1,6,1,0.9632002459186799) 0%, rgba(13,20,4,0.4533963243500525) 38%, rgba(1,10,1,0.20129548401391806) 81%, rgba(1,11,1,0.06404058205313379) 100%);
            @media(max-width:600px){
                text-align: center;
                margin-top: 70px;
                padding-top: 20px;
            }
            > h3{
                font-size: 53px;
                color: rgb(255,208,0);
            }
            > p{
                font-size: 20px;
                color:rgb(255, 255, 255);
                padding: 10px;
                margin-bottom: 20px;
                font-weight: bold;
                letter-spacing: 5px;
            }
            > .btn{
                border: 3px solid rgb(255 , 205 ,0);
                border-radius: 10px;
                color:rgb(255 , 205 ,0);
                padding: 10px;
                z-index: 0;
                font-size: 25px;
                @media(max-width:600px) {
                    width: 100%;
                    z-index: 4;
                }
            }
            > .btn:hover{
                background-color:chocolate;
                color:#fff;
                box-shadow: inset 200px 0 0 chocolate;
                transition: 1.2s all;
            }
        }
        >img{
            flex: 1 1 20px;
            width: 200px;
            height: 500px;
            animation: moving 3s linear infinite; 
            margin-top: 20px;
            @media(max-width:600px){
                width: 400px;
                margin-top: -80px;
                margin-left: -30px;
            }
        }
    }

    @keyframes moving{
        0%{transform: translateX(0rem)}
        50%{transform: translateX(1rem)}
        100%{transform: translateX(0rem)}
    }

</style>