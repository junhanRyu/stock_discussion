<template>
  <div>
    <q-card @click="onSelected" class="my-card" flat bordered>
      <q-card-section horizontal>
        <tags :tags="post.tag"></tags>
      </q-card-section>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs col-8">
          <div class="text-h5 q-mt-sm q-mb-xs">{{ post.title }}</div>
          <div class="text-caption text-grey">
            {{ post.content }}
          </div>
        </q-card-section>

        <q-card-section class="col-4 flex flex-center justify-end">
          <q-img
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </q-card-section>
      </q-card-section>

      <q-card-actions class="row justify-end">
        <q-btn flat icon="thumb_up">
          {{ post.like[0] }}
        </q-btn>
        <q-btn flat icon="thumb_down">
          {{ post.like[1] }}
        </q-btn>
        <q-btn flat icon="schedule">
          {{ post.createTime }}
        </q-btn>
        <q-btn flat icon="visibility">
          {{ post.view }}
        </q-btn>
        <q-btn flat icon="comment">
          {{ post.commentCount }}
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<style>
</style>

<script>
import Tags from "./Tags.vue";

export default {
  name: "PostItem",
  props: ["post"],
  components: {
    Tags,
  },
  data: function () {
    return {
    };
  },
  methods: {
    onSelected: function () {
      this.$emit("on-item-selected", this.post.id);
      console.log("item selected!");
    },
  },
};
</script>