<template>
  <div>
    <navbar class="nav-bar-bgc">
      <template v-slot:center>
        <div class="nav-bar-title">购物车</div>
      </template>
    </navbar>
  </div>
</template>

<script>
import navbar from "../../../components/common/navbar/navbar.vue";
export default {
  components: { navbar },
};
</script>

<style scoped>
  .nav-bar-bgc {
    background-color: #fff;
    color: #000;
    width: 100%;
  }
  .nav-bar-title {
    font-size: 48.96;
    font-family: SourceHanSansSC-Regular;
  }
</style>