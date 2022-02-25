<script>
import home from '@/components/Home.vue';
import category from '@/components/Category.vue';
import menubar from '@/components/Menu.vue';
import gallery from '@/components/Gallery.vue';
import review from '@/components/Review.vue';
import order from '@/components/Order.vue';
export default {
    components:{
        home,
        category,
        menubar,
        gallery,
        review,
        order
    }
}
</script>

<template>
    <home />
    <category />
    <menubar />
    <gallery />
    <review />
    <order />
</template>

<style>

</style>