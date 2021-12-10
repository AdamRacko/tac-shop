<template>
  <div>
    <b-container fluid fixed class="bv-example-row toolbar">
      <b-row class="text-center">
        <b-col>
          <router-link to="/"><img src="../assets/images/logo.png"/></router-link>
        </b-col>
        <b-col cols="8"></b-col>
        <b-col>
          <router-link to="/cart">
            <b-icon icon="basket2" class="basket"></b-icon>
            <b-badge class="btn-circle" v-if="hasProduct()">{{ getProductsInCart.length }}</b-badge>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
    <router-view/>
  </div>
</template>

<script>
import {BIcon} from 'bootstrap-vue'
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "NavBar",
  components: {
    BIcon,
  },
  methods: {
    ...mapActions([
      'showOrHiddenPopupCart',
    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    }
  },
  computed: {
    ...mapGetters([
      'getProductsInCart'
    ]),
  },
}
</script>

<style scoped>
.toolbar {
  background-color: black;
  height: 60px;
  position: absolute
}

.basket {
  font-size: 15px;
  color: white;
  display: block;
  margin-left: auto;
  margin-right: 0px;
  margin-top: 12px;
  height: 32px;
  width: 50px;
}

img {
  display: block;
  margin-left: 5px;
  margin-right: auto;
  margin-top: 11px;
  height: 38px;
  width: 160px;
}

.btn-circle {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  position: absolute;
  top: 6px;
  right: 11px;
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
