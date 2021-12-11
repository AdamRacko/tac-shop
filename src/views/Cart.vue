<template>
  <div class="cart">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <h5 class="header-col-8">
            Payment Information
          </h5>
      <form>
            <div class="mb-3 mb-3-full-name">
              <input type="text" class="form-control form-control-first-name" id="exampleInputFirstName" placeholder="First Name">
              <input type="text" class="form-control" id="exampleInputLastName" placeholder="Last Name">
            </div>
            <div class="mb-3 mb-3-others-information">
              <input type="text" class="form-control form-control-first-name" id="exampleInputAddress" placeholder="Address">
              <input type="text" class="form-control form-control-first-name" id="exampleInputPincode" placeholder="Pincode">
              <input type="text" class="form-control " id="exampleInputCountry" placeholder="Country">
            </div>
            <button type="submit" class="btn">Order</button>
          </form>
        </div>
        <div class="col-4">
          <h5 class="header-col-4">
            Order summary
          </h5>
          <div class="products">
            <div class="order-information">
            <div class="name-product">Nike Shoes</div>
            <div class="prize-product">125€</div>
            <input type="number" id="exampleInputValue">
            <button class="products-button">X</button>
          </div>
                      <div class="order-information">
            <div class="name-product">Nike Shoes</div>
            <div class="prize-product">125€</div>
            <input type="number" id="exampleInputValue">
            <button class="products-button">X</button>
          </div>
          <hr>
          <div class="total-amount-order">
          <p>Total amount</p>
          <p>150€</p>
          </div>
          </div>
          
        </div>
      </div>
         
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
.container-fluid{
  width: 90%;
}
.container-fluid .row{
  justify-content: space-evenly;
}
.col-6, .col-4{
  margin-top: 100px;
}
.header-col-8, .header-col-4{
  display: flex;
  font-size: 16px;
  font-weight: bold;
  margin-left: 6px;
}
.mb-3-full-name{
  display: flex;
}
form, .products{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 20px;
  border-radius: 10px;
}
.form-control{
  background-color: rgb(241, 241, 241);
  border: 0;
  padding: 0.675rem .75rem;
}
.form-control-first-name{
  margin-right: 20px;
}
.mb-3-others-information{
  display: flex;
}
.mb-3 {
    margin-bottom: 2rem!important;
}
form button{
  display: flex;
  background-color: black;
  color: white;
  padding: 10px 20px;
}
form button:hover{
  color: white;
}
.order-information{
  display: flex;
  justify-content: space-between;
  margin: 10px 0 10px 0;
}
.name-product{
  font-size: 14px;
  font-weight: bold;
  padding: 5px;
}
.prize-product{
  font-size: 14px;
  font-weight: bold;
  padding: 5px;
}
#exampleInputValue{
  width: 70px !important;
  padding: 0 5px 0 5px !important;
  margin: 0 5px 0 5px;
}
.products-button{
  background:0;
  border: 0;
  color: black;
  font-size: 20px;
  font-weight: bold;
}
.total-amount-order{
  display: flex;
  justify-content: space-between;
}
.total-amount-order p {
  font-size: 14px;
  font-weight: bold;
  padding: 5px;
}

</style>
