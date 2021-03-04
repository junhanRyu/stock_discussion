<template>
  <div>
    <q-toolbar class="bg-primary text-white">
      <q-btn
        @click="goBack"
        flat
        round
        dense
        icon="arrow_back"
      />
      <q-btn
        @click="navigateToEdit"
        flat
        round
        dense
        icon="edit"
      />
      <q-btn
        @click="deletePost"
        flat
        round
        dense
        icon="delete_forever"
      />
    </q-toolbar>

    <div>
      <tags :tags="post.tag"></tags>
    </div>
    <div style="font-size: 2em" class="q-ma-sm">{{ post.title }}</div>
    <div class="q-ma-sm">
      <span class="text-black">
        <q-icon name="schedule" style="font-size: 2em" />
        {{ post.createTime }}
      </span>
      <span class="text-black">
        <q-icon name="visibility" style="font-size: 2em" />
        {{ post.view }}
      </span>
    </div>
    <div id="image" class="q-ma-lg">
      <!-- <q-img class="borders" :src="asd" /> -->
    </div>
    <div class="q-ma-sm" style="font-size: 1.5em">
      {{ post.content }}
    </div>
    <div>
      <q-btn flat icon="thumb_up">
        {{ post.like[0] }}
      </q-btn>
      <q-btn flat icon="thumb_down">
        {{ post.like[1] }}
      </q-btn>
      <q-btn flat icon="comment">
        {{ post.commentCount }}
      </q-btn>
    </div>

    <div id="comment-editor"></div>

    <div>
      <!-- <comment-item
        v-for="(value, index) in comments_values"
        :key="index"
        :comment=value
      ></comment-item> -->
    </div>
  </div>
</template>
 
<style>
</style>

<script>
import Tags from "./Tags.vue";
/* import CommentItem from "./CommentItem.vue"; */

export default {
  props: ["id"],
  name: "PostView",
  components: {
    Tags,
    /* CommentItem, */
  },
  methods: {
    getPost : function () {
      this.$axios
        .get("https://asia-northeast3-stock-grounds.cloudfunctions.net/post", {
          params: { id: this.$route.params.id }
        })
        .then((res) => {
          this.post = res.data;
          console.log(res.data);
        });
    },
    goBack: function () {
      this.$router.go(-1);
    },
    navigateToEdit: function () {
      this.$router.push("/post/edit/" + this.$route.params.id);
    },
    deletePost: function () {},
  },
  data: function () {
    return {
      post : {
        content:"",
        title:"",
        tag:[],
        createTime:"",
        like:[0,0],
        commentCount:0,
        view:0,
      }
    };
  },
  created: function(){
    console.log(this.$route.params.id)
    this.getPost();
  }
};
</script>
