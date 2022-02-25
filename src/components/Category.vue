<script>
export default {

}
</script>

<template>
    <section class="category" id="category">
        <h1 class="title"><span>料理食材來源</span></h1>
        <div class="box-container">
            <!-- 第一道 -->
            <div class="box">
                <img src="../assets/taiwanrice.jpg" alt="" >
                <div class="content">
                    <img src="../assets/rice.png" alt="" srcset="">
                    <h3>米飯類</h3>
                    <p>全部採用台梗27號米，山泉水自然種植而成，口感扎實，無與倫比</p>
                </div>
            </div>
            <!-- 第二道 -->
            <div class="box">
                <img src="../assets/chicken2.jpg" alt="" >
                <div class="content">
                    <img src="../assets/ckicken_adobespark.png" alt="" srcset="">
                    <h3>肉類</h3>
                    <p>採用台灣全天然養殖土雞，滿滿的蛋白質，給身體滿滿的能量</p>
                </div>
            </div>
            <!-- 第三道 -->
            <div class="box">
                <img src="../assets/vegetable2.jpg" alt="" >
                <div class="content">
                    <img src="../assets/vegetableicon_adobespark.png" alt="" srcset="">
                    <h3>蔬菜類</h3>
                    <p>100%台灣天然摘種，不添加任何農藥，輕鬆無負擔</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .title{
        text-align: center;
        font-size: 30px;
        padding: 30px;
        color:rgb(9,152,152);
        > span{
        color:chocolate;
        font-size: 28px;
        }
    }   
    .category{
        > .box-container{
            display: flex;
            flex-wrap: wrap;
            gap: 10;
            > .box{
                flex: 1 1 30px;
                position: relative;
                overflow: hidden;
                box-shadow: 0 10px 10px #000;
                border:1px solid #000;
                border-radius:20px;
                cursor: pointer;
                @media(max-width:600px) {
                    flex: 1 1 auto;
                    margin-top: 8px;
                }
                > img{
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    position: absolute;
                    top:0;
                    left:-100%;
                }
                > .content{
                    text-align: center;
                    background-color: rgb(65, 46, 46);
                    background-color:rgb(255, 208,0);
                    padding: 10px;
                    height: 250px;
                    >img{
                        width: 180px;
                        height: 120px;
                        margin: 10px;
                    }
                    >h3{
                        font-size: 20px;
                        color:rgb(9,152,152);
                        margin-bottom: 8px;
                    }
                    >p{
                        font-size: 18px;
                        color:chocolate;
                        font-weight:bold;
                        letter-spacing: 3px;
                    }
                }
            }
            > .box:hover {
                >img{
                    left: 0;
                }
                >.content{
                    transform: translateX(100%);
                }
            }
        }
    } 

</style>