<template>
  
<div>
  <h1>Shopping Cart</h1>
    <ProductsList :cartItems="cartItems" v-on:remove-from-cart="removeFromCart" />
    <div>
<h3 id="total-price">Total: ${{totalPrice}}</h3>
   <button id="checkout-button">Proceed to Checkout</button>
   </div>
</div>

</template>

<script>
import axios from 'axios'
import ProductsList from '../components/ProductsList.vue'

export default {
  name: 'CartPage',
  components:{
    ProductsList
  },

  data(){
    return{
      cartItems: [],
    }
  },

  computed: {
  totalPrice() {
    return this.cartItems.reduce(
      (sum, item) => sum + (item && item.price ? Number(item.price) : 0),
      0
    );
  }
},

  async created(){
    const result = await axios.get('/api/users/12345/cart')
    const cartItems = result.data
    this.cartItems = cartItems
  },

  methods:{
    async removeFromCart(productId){
      // const result = await axios.delete(`/api/users/12345/cart/${productId}`)
      // this.cartItems = result.data

      try {
      const result = await axios.delete(`/api/users/12345/cart/${productId}`);
      console.log('Server response:', result.data);
      
      // Assuming the response data is an array of updated cart items
      this.cartItems = result.data;
    } catch (error) {
      console.error('Error removing product:', error);
    }
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
    top: auto;
  }

  #checkout-button {
    width: 50%;
    position: relative;
    top: auto;
    left: 330px;
  }

</style>