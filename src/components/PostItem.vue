<template>
  <div>
    <q-card @click="onSelected" class="my-card" flat bordered>
      <q-card-section v-if="isThereTags" horizontal>
        <tags :tags="post.tags"></tags>
      </q-card-section>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs col-8">
          <div class="text-h6 q-mt-sm q-mb-xs">{{ post.title }}</div>
          <div class="text-body text-grey">
            {{ post.content }}
          </div>
        </q-card-section>

        <q-card-section class="col-4 flex flex-center justify-end">
          <q-img v-if="isThereImage"
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </q-card-section>
      </q-card-section>

      <q-card-actions class="row justify-end">
        <q-btn flat round color="red" dense icon="thumb_up">
          {{ post.like[0] }}
        </q-btn>
        <q-btn flat round color="blue" dense icon="thumb_down">
          {{ post.like[1] }}
        </q-btn>
        <q-btn flat round color="grey" dense icon="schedule">
          {{ passedTime }}
        </q-btn>
        <q-btn flat round color="grey" dense icon="visibility">
          {{ post.view }}
        </q-btn>
        <q-btn flat round color="grey" dense icon="comment">
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
import * as TimeUtil from "../utils/timeutil";

export default {
  name: "PostItem",
  props: ["post"],
  components: {
    Tags,
  },
  computed: {
    passedTime: function () {
      let time = TimeUtil.getTimeToString(this.post.createTime);
      return TimeUtil.getLeftTimeString(time);
    },
    isThereImage : function() {
      if(this.post.image == undefined)
        return false;
      else
        return true;
    },
    isThereTags : function()  {
      const tags = this.post.tags;
      if(this.post.tags == undefined || tags.length == 0)
        return false;
      else{
        console.log(tags);
        return true;
      }
    }
  },
  data: function () {
    return {};
  },
  methods: {
    onSelected: function () {
      this.$emit("on-item-selected", this.post.id);
      console.log("item selected!");
    },
  },
};
</script>