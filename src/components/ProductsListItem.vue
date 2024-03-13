<template>

  <div class="product-container">
    <img :src="product.imageUrl" class="product-image">
    <div class="details-wrap">
      <h3>{{product.name}}</h3>
      <p>${{product.price}}</p>
    </div>
    <!-- emmiting an event to remove the item from the cart -->
    <button class="remove-button" @click="removeFromCart(product.id)">Remove From Cart</button>
</div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'ProductsListItem',
  props: ['product'],

  methods:{
    async removeFromCart(productId){
      const result = await axios.delete(`/api/users/12345/cart/${productId}`)
      this.cartItems = result.data
    }
  }
}
</script>

<style>

  .product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }

  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }

  .remove-button {
    flex: 1;
    margin: auto;
  }

  .product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }

</style>