<script>
export default {

}
</script>

<template>
    <secrion class="gallery" id="gallery">
        <div class="menu-page">
            <router-link to='/'>1</router-link>
            <router-link to='/Menupage'>2</router-link>
            <router-link to='/thirdMenu'>3</router-link>
            <router-link to='/lastMenu'>4</router-link><span>頁</span>
        </div>
        <h1 class="title"><span>美食排行</span></h1>
        <div class="box-container">
            <!-- 1 -->
            <div class="box">
                <span class="rank">TOP1</span>
                <img src="../assets/healthrice.jpg" alt="" />
                
                <div class="content">
                    <h3>水煮雞肉蔬菜飯</h3>
                    <p>採用台灣稻米，營養Q彈口感，搭上水煮雞胸肉以及營養新鮮蔬菜，給你滿滿的『肌肉能量』</p>
                </div>
            </div>
            <!-- 2 -->
            <div class="box">
                <span class="rank">TOP2</span>
                <img src="../assets/menu3.jpg" alt="" />
                
                <div class="content">
                    <h3>低脂牛肉水煮餐</h3>
                    <p>非常適合喜歡吃牛肉的你，q彈軟嫩，不添加多餘的調味料，非常適合正在減肥中的你 !</p>
                </div>
            </div>
            <!-- 3 -->
            <div class="box">
                <span class="rank">TOP3</span>
                <img src="../assets/menu5.jpg" alt="" />
                
                <div class="content">
                    <h3>乾煎雞肉減脂餐</h3>
                    <p>完全乾煎，不添加任何調味料，吃完清爽無負擔</p>
                </div>
            </div>
        </div>
    </secrion>
</template>

<style lang="scss" scoped>
    .title{
        text-align: center;
        font-size: 30px;
        padding: 30px;
        color:rgb(9,152,152);
        >span{
            color:chocolate;
            font-size: 28px;
        }
    }
    .gallery{ 
        > .box-container{
            display: flex;
            flex-wrap: wrap;
            gap: 10;
            > .box{
                flex: 1 1 30px;
                height: 300px;
                background-color:rgb(255 , 208 , 0);
                box-shadow: 5px 5px 5px rgb(140,140,140);
                border-radius: 20px;
                position: relative;
                overflow: hidden;
                @media(max-width:600px){
                    flex:1 1 auto;
                    margin-top: 10px;
                }
                >img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 20px;
                    z-index:1;
                }
                >.content{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    position: absolute;
                    top:-100%;
                    left:0;
                    height: 100%;
                    width: 100%;
                    background: #fff;
                    padding: 10px;
                    padding-top: 20px;
                    text-align: center;
                    >h3{
                        font-size: 40px;
                        margin-bottom: 10px; 
                    }
                    >p{
                        font-size: 20px;
                        font-weight: 900;
                        letter-spacing: 3px;
                        color: chocolate;
                    }
                } 
                >.rank{
                    font-weight: bold;
                    font-size: 36px;
                    color:rgb(255, 241, 43);
                    background-color: red;
                    padding: 10px 30px;
                    position: absolute;
                    opacity: 0.8;
                }
            }
            > .box:hover {
                > .content{
                    top:0;
                    opacity: 0.8;
                }
            }
        }
        >.menu-page{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px;
            >a{
                font-size: 20px;
                font-weight: bold;
                color:chocolate;
                border:3px solid rgba(102, 155, 50, 0.829);
                border-radius: 10px;
                margin: 10px;
                padding: 0 10px;
            }
            >a:hover{
                color:#fff;
                background-color: chocolate;
                box-shadow: inset 400px 0 0 chocolate;
                transition: 1s all;
            }
            >span{
                font-size: 14px;
                font-weight: 700;
            }
        }
    }

    .gallery > .box-container > .box:hover > .content{
        top:0;
        opacity: 0.8;
    }
</style>