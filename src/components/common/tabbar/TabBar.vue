<template>
  <div>
    <div id="tab-bar">
      <!-- <h2>tabbat</h2> -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabBar'
}
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow:  6px -6px 20px #d1d1d1;
    z-index: 9;
  }
  

</style>