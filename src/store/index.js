import Vue from 'vue'
import Vuex from 'vuex'
import * as menProducts from '../../../data/men'
import * as womenProducts from '../../../data/women'
import * as kidsProducts from '../../../data/kids'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        menProducts: menProducts.menProducts,
        womenProducts: womenProducts.womenProducts,
        kidsProducts: kidsProducts.kidsProducts,
        currentProduct: {},
        cartProducts: [],
        quantity: '',
    },
    mutations: {
        ADD_PRODUCT: (state, product) => {
            state.cartProducts.push(product);
        },
        REMOVE_PRODUCT: (state, index) => {
            state.cartProducts.splice(index, 1);
        },
        CURRENT_PRODUCT: (state, product) => {
            state.currentProduct = product;
        },
    },

    getters: {
        getMenProducts: state => state.menProducts,
        getWomenProducts: state => state.womenProducts,
        getKidsProducts: state => state.kidsProducts,
        getIndex: state => state.index,
        getProductsInCart: state => state.cartProducts,
        getCurrentProduct: state => state.currentProduct,
    },

    actions: {
        addProduct: (context, product) => {
            context.commit('ADD_PRODUCT', product);
        },
        removeProduct: (context, index) => {
            context.commit('REMOVE_PRODUCT', index);
        },
        currentProduct: (context, product) => {
            context.commit('CURRENT_PRODUCT', product);
        },
    },

    modules: {}
})
