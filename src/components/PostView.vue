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
      <q-btn
        @click="navigateToEdit"
        flat
        round
        dense
        icon="edit"
        id="post-view-edit"
      />
      <q-btn
        @click="deletePost"
        flat
        round
        dense
        icon="delete_forever"
        id="post-view-delete"
      />
    </q-toolbar>
  </div>
</template>

<style>
</style>

<script>
export default {
  props:['id'],
  name: "PostView",
  methods: {
    goBack: function () {
      this.$router.go(-1);
    },
    navigateToEdit: function () {
      this.$router.push('/postedit/'+this.$route.params.id);
    },
    deletePost: function () {

    },
  },
};
</script>
