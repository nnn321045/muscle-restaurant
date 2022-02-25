<script>
export default {

}
</script>

<template>
    <section class="order" id="order">
        <h1 class="title"><span>訂購</span></h1>
        <div class="box-container">
            <div class="row">
                <div class="image">
                    <img src="../assets/background2.jpg" alt="" srcset="">
                </div>

                <form action="">
                    <div class="inputBox">
                        <input type="text" name="text" placeholder="Name">
                        <input type="email" name="email" placeholder="Email">
                    </div>
                    <div class="inputBox">
                        <input type="number" name="numbert" placeholder="Phone">
                        <input type="text" name="text" placeholder="取餐時間">
                    </div>
                    <textarea name="" id="" cols="30" rows="10">
                        
                    </textarea>
                    <input type="submit" value="訂購" class="btn" />
                </form>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .order{
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
            >.row{
            padding: 10px;
            box-shadow: 5px 5px 5px #000;
            background: #fff;
            display: flex;
            flex-wrap: wrap;
            gap:10px;
            border-radius: 20px;
                >.image{
                    flex: 1 1 30px;
                    >img{
                        height: 450px;
                        width: 100%;
                        object-fit: cover;
                        border-radius: 20px;
                    }
                }
                >form{
                    >.inputBox{
                        >input{
                            padding: 10px;
                            margin: 10px;
                            font-size: 20px;
                            color:#000;
                            text-transform: none;
                            border: 2px solid rgb(9,152,152);
                            border-radius: 20px;
                        }
                    }
                    >textarea{
                            padding: 10px;
                            margin: 10px;
                            font-size: 20px;
                            text-transform: none;
                            border: 2px solid rgb(9,152,152);
                            border-radius: 20px;
                            width: 100%;
                            resize: none;
                            height: 220px;
                            padding: 5px;
                    }
                    >.btn{
                        font-size: 30px;
                        padding: 10px;
                        border-radius: 20px;
                        width: 100%;
                        color:chocolate;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border:5px solid #eeeeee;
                    }
                    >.btn:hover{
                            background-color: chocolate;
                            color:#fff;
                            font-size: 35px;
                            font-weight: bold;
                            box-shadow: inset 400px 0 0 0 chocolate;
                            border:5px solid #666666;
                            transition: 1s all;
                    }
                }
            }
        }
    }
</style>