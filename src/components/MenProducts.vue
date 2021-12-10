<template>
  <div>
    <h1>Men</h1>
    <b-container class="bv-example-row">
      <b-row class="justify-content-md-right">
        <b-col v-for="(product, index) in products" :key="index" col lg="3">
          <router-link @click.native="addCurrentProduct(product)" style="text-decoration: none; color: inherit;" to="/products/men/menproductview">
            <b-card
                :title="product.title"
                :img-src="require(`../assets/images/men/${product.image}`)"
                :img-alt="product.title"
                img-top
                img-height="388.5px"
                max-height="482px"
                tag="article"
                style="max-width: 20rem;"
                class="d-flex justify-content-center mb-2 card"
            >
              <b-card-text>
                Price: {{ product.price }}
              </b-card-text>
            </b-card>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "MenProducts",
  props: ['products'],
  methods: {
    ...mapActions([
      'addProduct',
      'currentProduct',
    ]),

    addProductToCart(product) {
      this.addProduct(product);
    },
    addCurrentProduct(product) {
      this.currentProduct(product);
    },
  },
}
</script>

<style scoped>

</style>
