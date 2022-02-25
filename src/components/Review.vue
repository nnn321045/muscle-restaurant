<script>
export default {

}
</script>

<template>
    <section class="review" id="review">
        <h1 class="title"><span>評論</span></h1>
        <div class="box-container">
            <!-- 1 -->
            <div class="box">
                <img src="../assets/boy.jpg" alt="" />
                <h3>陳大衛</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <p>食材新鮮，美味好吃</p>
            </div>
            <!-- 2 -->
            <div class="box">
                <img src="../assets/girl.jpg" alt="" />
                <h3>王小美</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p>服務態度好，餐點美味</p>
            </div>
            <!-- 3 -->
            <div class="box">
                <img src="../assets/boy2.jpg" alt="" />
                <h3>Jason chen</h3>
                <div class="stars">
                    <i id="star" class="fas fa-star"></i>
                    <i id="star" class="fas fa-star"></i>
                    <i id="star" class="fas fa-star"></i>
                    <i id="star" class="fas fa-star"></i>
                    <i id="star" class="fas fa-star"></i>
                </div>
                <p>對於正在運動減肥的我非常適合!!!</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .review{
        >.title{
        text-align: center;
        font-size: 30px;
        padding: 30px;
        color:rgb(9,152,152);
            > span{
                color:chocolate;
                font-size: 28px;
            }
        }
        >.box-container{
            display: flex;
            flex-wrap: wrap;
            gap: 10;
            >.box{
                text-align: center;
                padding: 10px;
                border:8px solid rgb(255,255,255);
                box-shadow:5px 5px 5px #000;
                border-radius: 20px;
                flex: 1 1 20px;
                background: rgb(255,217,0);
                margin-top: 80px;
                @media(max-width:600px){
                    flex:1 1 auto;
                }
                >img{
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    border:8px solid rgb(9 , 152 , 152);
                    object-fit: cover;
                    margin-top: -100px;
                }
                > h3{
                    font-size: 30px;
                    color:gray;
                    padding: 10px;
                }
                >.stars{
                    font-size: 24px;
                    color:chocolate;
                    padding: 10px;
                    display: flex;
                    justify-content:space-evenly;
                }
                >p{
                    font-size: 20px;
                    font-weight: bold;
                    color:rgb(11,11,11);
                    margin-top: 10px;
                    padding: 10px;
                    letter-spacing: 3px;
                }
            }
        }
    }
    
</style>