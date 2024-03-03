<template>
<div>
<div id="page-wrap" v-if="cartItems.length > 0">
  <ProductsListItem v-for="product in cartItems" :key="product.id" :product="product" />
</div>
<p v-else>You haven't added anything to the Cart</p>
</div>
</template>

<script>
import ProductsListItem from './ProductsListItem.vue'
export default {
    name: 'ProductsList',
    props:['cartItems'],
    components:{
        ProductsListItem
    },
}
</script>

<style>

.page-wrap{
    margin: 20px;
    padding: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
}

</style>