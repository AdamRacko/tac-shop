<template>
  <div class="men">
    <MenProducts :products="getMenProducts"> </MenProducts>
  </div>
</template>

<script>
import {mapGetters } from 'vuex';
import MenProducts from '../../components/MenProducts'

export default {
  name: "Men",
  components: {
    MenProducts
  },
  computed: {
    ...mapGetters([
      'getMenProducts',
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
