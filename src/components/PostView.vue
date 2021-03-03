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

    <div id="tags">
      <tags :tags="tags"></tags>
    </div>
    <div id="title" style="font-size: 2em" class="q-ma-sm">{{ title }}</div>
    <div id="indicators" class="q-ma-sm">
      <span class="text-black">
        <q-icon name="schedule" style="font-size: 2em" />
        {{ time }}
      </span>
      <span class="text-black">
        <q-icon name="visibility" style="font-size: 2em" />
        {{ views }}
      </span>
    </div>
    <div id="image" class="q-ma-lg">
      <q-img class="borders" :src="image_url" />
    </div>
    <div id="contents" class="q-ma-sm" style="font-size: 1.5em">
      {{ contents }}
    </div>
    <div id="actions">
      <q-btn flat icon="thumb_up">
        {{ likes }}
      </q-btn>
      <q-btn flat icon="thumb_down">
        {{ dislikes }}
      </q-btn>
      <q-btn flat icon="comment">
        {{ comments_size }}
      </q-btn>
    </div>

    <div id="comment-editor"></div>

    <div id="comment_list">
      <comment-item
        v-for="(value, index) in comments_values"
        :key="index"
        :comment=value
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
    goBack: function () {
      this.$router.go(-1);
    },
    navigateToEdit: function () {
      this.$router.push("/postedit/" + this.$route.params.id);
    },
    deletePost: function () {},
  },
  data: function () {
    return {
      title: "여기는 제목",
      contents: "주식토론방 커뮤니티 테스트 글",
      time: new Date(),
      views: 123,
      image_url: "https://cdn.quasar.dev/img/parallax2.jpg",
      likes: 0,
      dislikes: 0,
      comments_size: 0,
      comments_values: [
        { nickname: "형훈", contents: "안녕 얘들아" },
        { nickname: "동철", contents: "안녕하세요 형훈이형" },
        { nickname: "준한", contents: "ㅎㅎㅎㅎㅎㅎㅎㅎㅎ" },
      ],
      tags: ["tag1", "tag2"],
    };
  },
};
</script>
