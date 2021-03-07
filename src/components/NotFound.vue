<template>
  <div class="q-ma-lg">
    페이지를 찾을 수 없습니다 ㅠㅠ (status code : {{status}})
  </div>
</template>

<style>
</style>

<script>
export default {
  data:function(){
    return{
      status: this.$route.params.status
    }
  },
  name: "NotFound",
};
</script>