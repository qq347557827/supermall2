<!-- 组件说明 -->
<template>
  <div class="search-bar-bgc">
    <navbar class="search-bar">
      <template v-slot:left class="search-left">
        <div>
          <i class="iconfont">&#xe6b0;</i>
        </div>
      </template>
      <template v-slot:center>
        <div class="center-search">
          <div class="search">
            <input type="text" />
          </div>
        </div>
      </template>
      <template v-slot:right class="search-left">
        <div>搜索</div>
      </template>
    </navbar>
  </div>
</template>

<script>
import Navbar from "../../../components/common/navbar/navbar.vue";
//import x from ''
export default {
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
/* @import url() */

.search-bar {
  position: fixed;
  box-shadow: none;
  background-color: #fff;
  z-index: 9;
}
.search-bar::after {
  content: "";
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ddd;
  transform: scaleY(0.5);
}
.center-search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* background-color: pink; */
}
.search {
  position: relative;
  height: 28px;
  padding-left: 40px;
  border-radius: 15px;
  line-height: 28px;
  background-color: #f7f7f7;
}
.search::before {
  position: absolute;
  content: "";
  width: 16px;
  top: 6px;
  left: 11px;
  height: 16px;
  background: url("~@/assets/images/search.png") no-repeat center;
  background-size: cover;
  z-index: 1;
}
.search input {
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
}
.search-left {
  width: 50px;
}
</style>

