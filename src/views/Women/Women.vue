<template>
  <div class="Women">
    <WomenProducts :products="getWomenProducts"> </WomenProducts>
  </div>
</template>

<script>
import {mapGetters } from 'vuex';
import WomenProducts from '../../components/WomenProducts'

export default {
  name: "Women",
  components: {
    WomenProducts
  },
  computed: {
    ...mapGetters([
      'getWomenProducts',
    ]),
  },
}
</script>

<style scoped>
.Women {
  height: 100vh;
  width: 100%;
  padding-top: 100px;
}
</style>
