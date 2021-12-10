<template>
  <div class="home">
    <h1>eShopTAC</h1>
    <h3>Everything you need for men, women and kids. </h3>
    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center">
        <b-col col lg="3">
          <router-link style="text-decoration: none; color: inherit;" to="/products/men">
            <b-card
                title="Men"
                img-src="../assets/images/men_home.jpeg"
                img-alt="Men"
                img-top
                img-height="388.5px"
                tag="article"
                style="max-width: 20rem;"
                class="d-flex justify-content-center mb-2 card"
            >
            </b-card>
          </router-link>
        </b-col>
        <b-col col lg="3">
          <router-link style="text-decoration: none; color: inherit;" to="/products/women">
            <b-card
                title="Women"
                img-src="../assets/images/women_home.jpeg"
                img-alt="Women"
                img-top
                img-height="388.5px"
                tag="article"
                style="max-width: 20rem;"
                class="d-flex justify-content-center mb-2 card"
            >
            </b-card>
          </router-link>
        </b-col>
        <b-col col lg="3">
          <router-link style="text-decoration: none; color: inherit;" to="/products/kids">
            <b-card
                title="Kids"
                img-src="../assets/images/kids_home.jpeg"
                img-alt="Kids"
                img-top
                img-height="388.5px"
                tag="article"
                style="max-width: 20rem;"
                class="d-flex justify-content-center mb-2 card"
            >
            </b-card>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {}
}
</script>

<style scoped>

.home {
  height: 100vh;
  width: 100%;
  padding-top: 100px;
}

.card {
  max-height: 496px;
}
</style>
