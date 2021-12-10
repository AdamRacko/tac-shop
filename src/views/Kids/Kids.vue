<template>
  <div class="men">
    <KidsProducts :products="getKidsProducts"> </KidsProducts>
  </div>
</template>

<script>
import {mapGetters } from 'vuex';
import KidsProducts from '../../components/KidsProducts'

export default {
  name: "Kids",
  components: {
    KidsProducts
  },
  computed: {
    ...mapGetters([
      'getKidsProducts',
    ]),
  },
}
</script>

<style scoped>
.men {
  height: 100vh;
  width: 100%;
  padding-top: 100px;
}
</style>
