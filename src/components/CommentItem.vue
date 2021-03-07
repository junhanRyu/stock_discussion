<template>
  <div>
    <div
      class="row items-center q-mx-sm justify-between"
      style="font-size: 1em"
    >
      <div class="row items-center col-4">
        <div class="text-black text-bold text-center">{{ comment.name }}</div>
        <q-btn flat icon="schedule" class="text-grey">
          {{ comment.createTime }}
        </q-btn>
      </div>
      <q-btn class="col-1" flat round icon="close" id="comment-delete" />
    </div>
    <div class="q-mx-sm" style="font-size: 1.2em; color=black;">
      {{ comment.content }}
    </div>
    <div class="row q-mx-sm">
      <q-btn flat round icon="thumb_up" class="q-mx-sm" id="comment-thumb-up">{{
        comment.like[0]
      }}</q-btn>
      <q-btn
        flat
        round
        icon="thumb_down"
        class="q-mx-sm"
        id="comment-thumb-down"
        >{{ comment.like[1] }}</q-btn
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
    return {};
  },
  created: function () {
    console.log(this.comment);
  },
};
</script>