<script>
import home from '@/components/Home.vue';
import category from '@/components/Category.vue';
import gallery from '@/components/Gallery.vue';
import review from '@/components/Review.vue';
import order from '@/components/Order.vue';
export default {
    components:{
        home,
        category,
        gallery,
        review,
        order
    }
}
</script>

<template>
    <home />
    <category />
    <section class="menu" id="menu">
        <h1 class="title">稻此一遊 <span>菜單</span></h1>
        <div class="box-container">
            <!-- 1 -->
            <div class="box">
                <span class="price">$65</span>
                <img src="../assets/menu8.jpg" alt="" />
                <h3>營養貝果</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <a href="#" class="btn">訂購</a>
            </div>

            <!-- 2 -->
            <div class="box">
                <span class="price">$75</span>
                <img src="../assets/menu9.jpg" alt="" />
                <h3>酪梨吐司</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <a href="#" class="btn">訂購</a>
            </div>
            
            <!-- 3 -->
            <div class="box">
                <span class="price">$75</span>
                <img src="../assets/menu10.jpg" alt="" />
                <h3>營養蔬菜吐司</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <a href="#" class="btn">訂購</a>

            </div>
        </div>
    </section>
    <gallery />
    <review />
    <order />
</template>

<style lang="scss" scoped>
    .title{
        margin-top: 8px;
        text-align: center;
        font-size: 30px;
        padding: 30px;
        color:rgb(9,152,152);
        >span{
            color:chocolate;
            font-size: 28px;
        }
    }
    .menu{ 
        > .box-container{
            display: flex;
            flex-wrap: wrap;
            gap:10px;
            > .box{
                flex:1 1 30px;
                padding: 10px;
                box-shadow: 5px 5px 5px rgb(140,140,140);
                border: 1px solid rgb(118,118,118);
                background: url(../assets/background2.jpg) no-repeat;
                background-size: cover;
                border-radius: 20px;
                padding-bottom: 30px;
                height: 500px;
                @media(max-width:600px){
                    flex:1 1 auto;
                }
                >img{
                    height: 300px;
                    object-fit: cover;
                    width: 100%;
                    border-radius: 20px;
                    z-index: 1;
                }
                >.price {
                    font-weight: bold;
                    font-size: 40px;
                    color:rgb(255,255,255);
                    background-color: chocolate;
                    padding: 10px 60px;
                    position: absolute;
                    opacity: 0.8;
                }
                >h3{
                    color:rgb(255,255,255);
                    font-size: 30px;
                    padding: 10px 40px;
                    text-align: center;
                    letter-spacing: 2px;
                    background: rgb(1,6,1);
                    background: linear-gradient(90deg, rgba(1,6,1,0.9632002459186799) 0%, rgba(1,10,1,0.20129548401391806) 52%, rgba(13,20,4,0.4533963243500525) 68%, rgba(1,11,1,0.593452346759016) 100%);
                }
                > .stars {
                    font-size: 24px;
                    color:rgb(245, 245, 26);
                    padding: 10px;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                }
                > .btn {
                    font-weight: bold;
                    font-size: 30px;
                    padding: 10px;
                    color: snow;
                    border:5px solid chocolate;
                    border-radius: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                > .btn:hover {
                    background-color: chocolate;
                    color:#fff;
                    box-shadow: inset 400px 0 0 chocolate;
                    transition: 1s all;
                }
            }
        }
    }
</style>