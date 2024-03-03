<template>
  
<div>
  <h1>Shopping Cart</h1>
    <ProductsList :cartItems="cartItems" />
    <div>
<h3 id="total-price">Total: ${{totalPrice}}</h3>
   <button id="checkout-button">Proceed to Checkout</button>
   </div>
</div>

</template>

<script>
import {cartItems} from '../fake-data';
import ProductsList from '../components/ProductsList.vue'

export default {
  name: 'CartPage',
  components:{
    ProductsList
  },

  data(){
    return{
      cartItems,
    }
  },

  computed:{
    totalPrice(){
      return this.cartItems.reduce(
        (sum, item) => sum + Number(item.price),
        0
      )
    }
  }
}
</script>

<style scoped>
  h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }

  #total-price {
    padding: 16px;
    text-align: right;
    position: relative;
    top: -230px;
  }

  #checkout-button {
    width: 50%;
    position: relative;
    top: -200px;
    left: 330px;
  }

</style>