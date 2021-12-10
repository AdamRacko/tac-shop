<template>
  <div class="product">
    <h1>{{ currentProduct.title }}</h1>
    <b-card :img-src="require(`../../assets/images/men/${currentProduct.image}`)" :img-alt="currentProduct.title" img-left class="mb-3">
      <b-card-text>
        {{currentProduct.description}}
      </b-card-text>
      <b-card-text>
        <b>Price:</b> {{currentProduct.price}}
      </b-card-text>
      <b-button class="btn" @click="addProductToCart(currentProduct)">
        Add to cart
      </b-button>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "MenProductView",
  computed: {
    ...mapGetters({
      currentProduct: 'getCurrentProduct',
    }),
  },

  methods: {
    ...mapActions([
      'addProduct'
    ]),
    addProductToCart(product) {
      this.addProduct(product);
    },
  },
}
</script>

<style scoped>
.product {
  height: 100vh;
  width: 100%;
  padding-top: 100px;
  text-align: left
}

.btn {
  background-color: black
}
</style>
