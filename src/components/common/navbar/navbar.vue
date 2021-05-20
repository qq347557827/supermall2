<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NarBar',
}
</script>

<style>
  .nav-bar {
    display: flex;
    width: 100%;
    height: 44px;
    line-height: 44px;
    /* background-color: #fff; */
    box-shadow:5px 5px 10px #f7f7f7;
  }
  .left, .right, .center {
    text-align: center;
  }
  .left, .right {
    width: 60px;
  }
  .center {
    flex: 1;
    
  }
</style>