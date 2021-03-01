<template>
  <div>
    <q-card @click='onItemSelected' class="my-card" flat bordered>
        <q-card-section horizontal>
            <tags :tags='item.tags'></tags>
        </q-card-section>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">{{item.title}}</div>
          <div class="text-caption text-grey">
            {{item.description}}
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat icon="thumb_up">
          {{item.like}}
        </q-btn>
        <q-btn flat icon="thumb_down">
          {{item.dislike}}
        </q-btn>
        <q-btn flat icon="schedule">
          {{item.time}}
        </q-btn>
        <q-btn flat icon="visibility">
          {{item.views}}
        </q-btn>
        <q-btn flat icon="comment">
          {{item.comments}}
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
  props : ['item'],
  components: {
      Tags
  },
  methods:{
    onItemSelected : function(){
      this.$emit('on-item-selected', this.item.title)
      console.log("item selected!")
    }
  }
};
</script>