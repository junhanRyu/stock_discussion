<template>
  <div>
    <div id="top_area" class="row q-ma-sm">
      <span class="col-11">{{ comment.nickname }}</span>
      <q-btn class="col-1" flat round dense icon="close" id="comment-delete" />
    </div>
    <div class="q-ma-sm">{{ comment.contents }}</div>
    <div class="row q-ma-sm">
      <q-btn
        v-model="thumb_up"
        flat
        round
        dense
        icon="thumb_up"
        id="comment-thumb-up"
        >100</q-btn
      >
      <q-btn
        v-model="thumb_down"
        flat
        round
        dense
        icon="thumb_down"
        id="comment-thumb-down"
        >0</q-btn
      >
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: "CommentItem",
  props: ["comment"],
  data: function () {
    return {
      thumb_up: 100,
      thumb_down: 0,
      nickname: this.params.comment.nickname,
      contents: this.params.comment.contents,
    };
  },
};
</script>