<template>

  <div>
    <div v-for="(product, index) in cartItems" :key="index">
      <!-- Check if the product is not null before accessing its properties -->
      <div v-if="product">
        <ProductsListItem :product="product" />
        <!-- Add other product details you want to display -->
      </div>
      <!-- <div v-else>
        <p>This product is not available.</p>
      </div> -->
    </div>
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