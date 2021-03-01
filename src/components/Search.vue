<template>
  <div>
    <q-toolbar class="bg-primary text-white">
      <q-btn @click='goBack' flat round dense icon="arrow_back" id="search-back" />
      <q-input
        dark
        dense
        standout
        v-model="text"
        input-class="text-right"
        class="q-ml-md"
      >
        <template v-slot:append>
          <q-icon v-if="text === ''" name="search" />
          <q-icon
            v-else
            name="clear"
            class="cursor-pointer"
            @click="text = ''"
          />
        </template>
      </q-input>
    </q-toolbar>
    <q-tabs
      v-model="tab"
      no-caps
      outside-arrows
      mobile-arrows
      class="text-black shadow-1"
    >
      <q-tab name="hit" label="인기" />
      <q-tab name="latest" label="태그" />
      <q-tab name="latest" label="키워드" />
    </q-tabs>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: "Search",
  data: function(){
    return {
      text : "",
      tab : 0,
    }
  },
  methods:{
    goBack:function(){
      this.$router.go(-1)
    }
  }
};
</script>
