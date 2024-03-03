<template>
  
<div id="page-wrap">
  <ProductsGrid :products="products" />
</div>

</template>

<script>
import {products} from '../fake-data'
import ProductsGrid from '../components/ProductsGrid.vue'

export default {
  name: 'ProductsPage',

  components:{
    ProductsGrid
  },

  data(){
    return{
      products,
    }
  },

  mounted() {
  console.log('Products:', this.products);
}
}
</script>

<style scoped>

#page-wrap {
  max-width: 1000px; /* Adjust the maximum width according to your design */
  margin: 0 auto; /* Center the content */
}

</style>