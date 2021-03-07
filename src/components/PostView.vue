<template>
  <div>
    <q-toolbar class="bg-primary text-white">
      <q-btn @click="goBack" flat round icon="arrow_back" />
      <q-space />
      <q-btn @click="navigateToEdit" flat round icon="edit" />
      <q-btn @click="deletePost" flat round icon="delete_forever" />
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
      <span class="text-black q-mx-sm">
        <q-icon name="visibility" style="font-size: 2em" />
        {{ post.view }}
      </span>
    </div>
    <div id="image" class="q-ma-lg">
      <!-- <q-img class="borders" :src="asd" /> -->
    </div>

    <q-separator inset class="q-ma-md" />

    <div class="q-ma-sm" style="font-size: 1.5em">
      {{ post.content }}
    </div>

    <div class="row justify-center">
      <q-btn flat icon="thumb_up" class="q-mx-sm col-1">
        {{ post.like[0] }}
      </q-btn>
      <q-btn flat icon="thumb_down" 
      class="q-mx-sm col-1">
        {{ post.like[1] }}
      </q-btn>
      <q-btn flat icon="comment"
      class="q-mx-sm col-1">
        {{ post.commentCount }}
      </q-btn>
    </div>

    <q-separator inset class="q-ma-md" />

    <div>
      <div class="row">
        <q-input
          class="col q-ma-sm"
          outlined
          v-model="nickname"
          label="닉네임"
        />
        <q-input
          class="col q-ma-sm"
          outlined
          v-model="password"
          label="비밀번호"
        />
      </div>
      <q-input
        v-model="description"
        label="내용"
        class="q-ma-sm"
        outlined
        type="textarea"
      />
      <q-space />
      <q-btn @click="addComment" class="q-ma-sm" color="primary"> 등록 </q-btn>
    </div>

    <q-separator inset class="q-ma-md" />
    <div>
      <comment-item
        v-for="value in comments"
        :key="value.id"
        :comment="value"
      ></comment-item>
    </div>
  </div>
</template>
 
<style>
</style>

<script>
import Tags from "./Tags.vue";
import CommentItem from "./CommentItem.vue";

export default {
  props: ["id"],
  name: "PostView",
  components: {
    Tags,
    CommentItem,
  },
  methods: {
    navigateToNotFound: function (err) {
      let status = 404;
      if (err.response) {
        console.log(err.response.status);
        status = err.response.status;
      }
      this.$router.push({ name: "notfound", params: { status } });
    },
    navigateToEdit: function () {
      this.$router.push("/post/edit/" + this.$route.params.id);
    },
    getPost: function () {
      this.$axios
        .get("https://asia-northeast3-stock-grounds.cloudfunctions.net/post", {
          params: { id: this.$route.params.id },
        })
        .then((res) => {
          this.post = res.data;
          //console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          this.navigateToNotFound(err);
        });
    },
    clearCommentForm: function () {
      this.nickname = "";
      this.password = "";
      this.description = "";
    },
    addComment: function () {
      let data = {
        name: this.nickname,
        passwd: this.password,
        content: this.description,
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          post_id: this.$route.params.id,
        },
      };
      this.$axios
        .post(
          "https://asia-northeast3-stock-grounds.cloudfunctions.net/comment",
          data,
          config
        )
        .then((res) => {
          console.log(res.data);
          this.clearCommentForm();
          this.getComments();
        })
        .catch((err) => {
          console.log(err);
          this.navigateToNotFound(err);
        });
    },
    getComments: function () {
      this.$axios
        .get(
          "https://asia-northeast3-stock-grounds.cloudfunctions.net/comments",
          {
            params: { id: this.$route.params.id, page: 1 },
          }
        )
        .then((res) => {
          this.comments = [...res.data];
          console.log("comments : " + res.data);
        })
        .catch((err) => {
          console.log(err);
          this.navigateToNotFound(err);
        });
    },
    goBack: function () {
      this.$router.go(-1);
    },
    deletePost: function () {},
  },
  data: function () {
    return {
      nickname: "",
      password: "",
      description: "",
      post: {
        content: "",
        title: "",
        tag: [],
        createTime: "",
        like: [0, 0],
        commentCount: 0,
        view: 0,
      },
      comments: [],
    };
  },
  created: function () {
    //console.log(this.$route.params.id);
    this.getPost();
    this.getComments();
  },
};
</script>
