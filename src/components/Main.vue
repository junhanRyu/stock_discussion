<template>
  <div>
    <q-toolbar class="bg-primary text-white">
      <q-toolbar-title> 주식토론방 </q-toolbar-title>
      <q-btn @click='navigateToCreate' flat round dense icon="create" id="main-create" />
      <q-btn @click='navigateToSearch' flat round dense icon="search" id="main-search" />
    </q-toolbar>
    <q-tabs
      v-model="tab"
      no-caps
      outside-arrows
      mobile-arrows
      class="text-black shadow-2"
    >
      <q-tab @click='tabToHit' name="hit" label="인기" />
      <q-tab @click='tabToLatest' name="latest" label="최신" />
    </q-tabs>
    <post-item v-on:on-item-selected='viewPost' v-for="(item, index) in items" :item=item :key=index></post-item> 
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
      tab : 0,
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
  },
  methods:{
    navigateToCreate : function(){
      this.$router.push('/post/')
    },
    navigateToSearch : function(){
      this.$router.push('/search/')
    },
    viewPost : function(id){
      console.log('viewPost handled!'+ id)
      this.$router.push('/postview/'+id)
    },
    tabToHit : function(){
      this.tabPosition = 0
    },
    tabToLatest : function(){
      this.tabPosition = 1
    }
  },
  destroyed: function(){
    console.log("Main destroyed!")
  }
};
</script>
