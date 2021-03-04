<template>
  <div>
    <q-toolbar class="bg-primary text-white">
      <q-toolbar-title> 주식토론방 </q-toolbar-title>
      <q-btn
        @click="navigateToCreate"
        flat
        round
        dense
        icon="create"
        id="main-create"
      />
      <q-btn
        @click="navigateToSearch"
        flat
        round
        dense
        icon="search"
        id="main-search"
      />
    </q-toolbar>
    <q-tabs
      v-model="tabType"
      no-caps
      outside-arrows
      mobile-arrows
      class="text-black shadow-2"
    >
      <q-tab @click="tabToHit" name="hit" label="인기" class="col-6" />
      <q-tab @click="tabToLatest" name="latest" label="최신" class="col-6" />
    </q-tabs>
    <post-item
      v-on:on-item-selected="viewPost"
      v-for="(item) in posts"
      :post="item"
      :key="item.id"
    ></post-item>
  </div>
</template>

<style>
</style>

<script>
import PostItem from "./PostItem.vue";

export default {
  components: { PostItem },
  name: "Main",
  data: function () {
    return {
      tab: 0,
      tabType: "hit",
      posts: [],
      pageIndicator: 0,
      tabPosition: 0,
    };
  },
  methods: {
    addPost: function () {
      console.log("addpost");
      this.pageIndicator = this.pageIndicator + 1;
      this.$axios
        .get("https://asia-northeast3-stock-grounds.cloudfunctions.net/posts", {
          params: { type: this.tabType, page: this.pageIndicator }
        })
        .then((res) => {
          this.posts = [...this.posts, ...res.data];
          console.log(res.data);
        });
    },
    navigateToCreate: function () {
      this.$router.push("/post/");
    },
    navigateToSearch: function () {
      this.$router.push("/search/");
    },
    viewPost: function (id) {
      console.log("viewPost handled!" + id);
      this.$router.push("/post/view/" + id);
    },
    tabToHit: function () {
      this.tabType = "hit";
      this.posts = [];
      this.addPost()
    },
    tabToLatest: function () {
      this.tabType = "latest";
      this.posts = [];
      this.addPost()
    },
  },
  created: function () {
    this.addPost();
  },
  destroyed: function () {
    console.log("Main destroyed!");
  },
};
</script>
