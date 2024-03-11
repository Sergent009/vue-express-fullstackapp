<template>
  
<div id="page-wrap">
  <ProductsGrid :products="products" />
</div>

</template>

<script>
import ProductsGrid from '../components/ProductsGrid.vue'
import axios from 'axios'

export default {
  name: 'ProductsPage',

  components:{
    ProductsGrid
  },

  data(){
    return{
      products: [],
    }
  },

  async created(){
    const result = await axios.get('/api/products')
    const products = result.data
    this.products = products
  }
}
</script>

<style scoped>

#page-wrap {
  max-width: 1000px; /* Adjust the maximum width according to your design */
  margin: 0 auto; /* Center the content */
}

</style>