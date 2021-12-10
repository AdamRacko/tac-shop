<template>
  <div class="cart">
    <div class="checkout-box">
      <ul class="checkout-list">
        <transition-group name="fade">
          <li v-for="(product, index) in getProductsInCart" :key="product" class="checkout-product">
            <h3 class="product-name">{{ product.title }}</h3>
            <span class="product-price"> {{ product.price }} </span>
            <b-form-input v-model="quantity" placeholder="Qty">1</b-form-input>
            <button class="product-remove" @click="remove(index)">X</button>
          </li>
        </transition-group>
      </ul>
      <div v-if="!hasProduct()" class="checkout-message">
        <h3>No products...</h3>
        <router-link to="/">Back to list of products</router-link>
      </div>
      <h3 class="total" v-if="hasProduct()">
        Total: {{ getTotalPrice() }} €
      </h3>
      <b-button class="btn" v-if="hasProduct()">
        Order
      </b-button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'Cart',
  data() {
    return {
      quantity: 1,
    }
  },
  computed: {
    ...mapGetters([
      'getProductsInCart',
    ]),
  },
  methods: {
    ...mapActions([
      'removeProduct',
    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    getTotalPrice() {
      return this.getProductsInCart.reduce((current, next) =>
          parseFloat(current) + parseFloat(next.price) * this.quantity, 0).toFixed(2);
    },
    remove(index) {
      this.removeProduct(index);
    },
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
  width: 100%;
  padding-top: 100px;
}
.btn {
  background-color: black;
  font-size: 2em;
  font-weight: bold;
  align-self: flex-end;
}
.checkout-box {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  box-sizing: border-box;
  padding: 1em;
}

.checkout-list {
  padding: 0;
}

.checkout-product {
  display: grid;
  grid-template-columns: 3fr 2fr .4fr .5fr;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
  border-radius: 5px;
  list-style: none;
  box-sizing: border-box;
  padding: .8em;
  margin: 1em 0;
}

.checkout-product * {
  place-self: center;
}

.product-name {
  box-sizing: border-box;
}

.product-price {
  font-size: 1.2em;
  font-weight: bold;
}

.product-remove {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 0;
  background-color: red;
  color: #fff;
  cursor: pointer;
}

.total {
  font-size: 2em;
  font-weight: bold;
  align-self: flex-end;
}

.checkout-message {
  font-size: 1.5em;
}
</style>
