<template>
  <div>
    <div class="q-pa-md q-gutter-sm q-mt-sm">
      <span
        id="tag"
        v-for="(value, index) in tags"
        :key="index"
        v-bind:label="value"
      >{{value}}</span>
    </div>
  </div>
</template>

<style>
#tag{
  margin:5px;
  padding:5px 10px;
  border-style:solid;
  border-radius: 18px;
  border-width:1px;
  border-color:rgb(240, 240, 240);
  background-color:rgb(240, 240, 240);
}
</style>

<script>
export default {
  name: "Tags",
  props: ["tags"],
};
</script>