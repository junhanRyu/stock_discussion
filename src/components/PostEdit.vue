<template>
  <div>
    <q-toolbar class="bg-primary text-white">
      <q-btn
        @click="goBack"
        flat
        round
        dense
        icon="arrow_back"
        id="post-view-back"
      />
    </q-toolbar>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: "PostEdit",
  methods:{
    goBack: function () {
      this.$router.go(-1);
    },
  }
};
</script>