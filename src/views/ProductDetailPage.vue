<template>

<div id="page-wrap" v-if="product">
<div id="img-wrap">
  <img :src="product.imageUrl">
</div>
  <div id="product-details">
    <h1>{{product.name}}</h1>
    <h3 id="price">${{product.price}}</h3>
    <p>Average rating: {{product.averageRating}}</p>
    <button v-if="!itemIsInCart && !showSuccessMessage" id="add-to-cart" v-on:click="addToCart">Add to Cart</button>
    <button v-if="!itemIsInCart && showSuccessMessage" id="add-to-cart" class="green-button">Added The Item</button>
    <!-- <button v-if="itemIsInCart" id="add-to-cart" class="grey-button">Item is Already In Cart</button> -->
    <h4>Descrition</h4>
    <p>{{product.description}}</p>
  </div>
</div>

<NotFoundPage v-else />

</template>

<script>
import axios from 'axios'
import NotFoundPage from './NotFoundPage.vue'

export default {
  name: 'ProductDetailPage',
  components:{
    NotFoundPage
  },

  data(){
    return{
     product: {},
    //  cartItems: [],
     showSuccessMessage: false
    }
  },

  // computed: {
  //   itemIsInCart(){
  //     return this.cartItems.some(item => item.id === this.product.id)
  //   }
  // },

  async created(){
    const {data: product} = await axios.get(`/api/products/${this.$route.params.id}`)
    this.product = product

  // loading all the items in the cart
  // const {data: cartItems} = await axios.get('/api/users/12345/cart')
  // this.cartItems = cartItems
  },

  methods:{
    async addToCart(){
      await axios.post('/api/users/12345/cart', {
        productId: this.$route.params.id
      })
      this.showSuccessMessage = true
      setTimeout(() => {
      // redirecting the user to the /products page after 1.5 seconds
      this.$router.push('/products')
      }, 1500)
    }
  }
}
</script>


<style scoped>
  #page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #product-details {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
  }

  #price {
    position: absolute;
    top: 24px;
    right: 16px;
  }

  .green-button {
    background-color: green;
  }

  .grey-button {
    background-color: #888;
  }
</style>