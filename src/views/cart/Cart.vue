<template>
  <div class="bgc">
    <cart-navbar class="cart-navbar"></cart-navbar>
    <cart-list class="cart-list"></cart-list>
    
  </div>
</template>

<script>
import CartList from './childComps/CartList.vue';
import CartNavbar from './childComps/CartNavbar.vue';
export default {
  components: { CartNavbar, CartList },
  name: "Cart",
};
</script>

<style scoped>
  .bgc{
  background-color: #F8F8FA;
  min-height: 100vh;
  }
  .cart-navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 999;
  }
  .cart-list {
    padding: 44px 0 88px 0;
  }
</style>