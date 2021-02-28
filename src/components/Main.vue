<template>
  <div>
    <q-toolbar class="bg-primary text-white">
      <q-toolbar-title> 개미집 </q-toolbar-title>
      <q-btn flat round dense icon="create" id="create" />
      <q-btn flat round dense icon="search" id="search" />
    </q-toolbar>
    <q-tabs
      v-model="tab"
      no-caps
      outside-arrows
      mobile-arrows
      class="text-black shadow-2"
    >
      <q-tab name="hit" label="인기" />
      <q-tab name="latest" label="최신" />
    </q-tabs>
    <post-item v-for="(item, index) in items" :item=item :key=index></post-item> 
  </div>
</template>

<style>
</style>

<script>
import PostItem from './PostItem.vue';

export default {
  components: { PostItem },
  name: "Main",
  data : function(){
    return {
      tabPosition : 0,
      items : [
        {
          title : 'test1',
          description : 'test1',
          thumbnail: '',
          like : 1,
          dislike : 0,
          time : "지금",
          views : 10,
          comments : 10,
          tags : ['tag1', 'tag2', 'tag3']
        },
        {
          title : 'test2',
          description : 'test2',
          thumbnail: '',
          like : 1,
          dislike : 0,
          time : "3시간 전",
          views : 10,
          comments : 10,
          tags : ['tag1']
        },
        {
          title : 'test3',
          description : 'test3',
          thumbnail: '',
          like : 1,
          dislike : 0,
          time : "1일 전",
          views : 10,
          comments : 10,
          tags : ['tag1', 'tag2']
        }
        
      ]
    }
  }
};
</script>
