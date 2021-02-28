<template>
  <div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        v-for="(value, index) in tags"
        :key="index"
        color="primary"
        v-bind:label="value"
      />
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: "Tags",
  props: ["tags"],
};
</script>