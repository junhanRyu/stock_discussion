<template>
  <div>
    <keep-alive include="Main, Search">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "LayoutDefault",
};
</script>

<style>
</style>
