<script>
export default {

}
</script>

<template>
    <footer>
        <div class="social">
            <a href="#"><i class="fab fa-facebook-square" style="color:blue; font-size:28px;"></i></a>
            <a href="#"><i class="fab fa-instagram-square" style="color:red; font-size:28px;"></i></a>
            <a href="#"><i class="fab fa-line" style="color:green; font-size:28px;"></i></a>
        </div>
        <h1 class="credit">for <span>Yanbo Li</span> design &copy;</h1>
    </footer>
</template>

<style lang="scss" scoped>
    footer{
        margin-top: 20px;
        background-color: rgb(255,255,255);
        text-align: center;
        > .social{
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            align-items: center;
        }
        >h1{
            color:#777777;
            font-size: 12px;
            >span{
                color:#666666;
                font-size: 12px;
            }
        }
    }
</style>