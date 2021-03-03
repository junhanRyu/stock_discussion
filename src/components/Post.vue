<template>
  <div>
    <q-toolbar class="bg-primary text-white">
      <div class="col-6">
        <q-btn
          @click="goBack"
          flat
          round
          dense
          icon="arrow_back"
          id="create-back"
          class="justify-start"
        />
      </div>
      <div class="col-6">
        <q-btn flat round dense icon="save" id="post-save" />
      </div>
    </q-toolbar>

    <q-input
      outlined
      v-model="nickname"
      placeholder="닉네임"
      :dense="dense"
      class="q-ma-sm"
    />
    <q-input
      outlined
      v-model="password"
      placeholder="비밀번호"
      :dense="dense"
      class="q-ma-sm"
    />
    <q-input
      outlined
      v-model="title"
      placeholder="제목"
      :dense="dense"
      class="q-ma-sm"
    />
    <q-input
      v-model="description"
      :dense="dense"
      placeholder="내용"
      class="q-ma-sm"
      outlined
      type="textarea"
    />
    <q-input
      outlined
      v-model="tags"
      placeholder="#태그"
      :dense="dense"
      class="q-ma-sm"
    />
    <q-file
        filled
        label="사진 올리기"
        multiple
        class="q-ma-sm"
        max-file-size="204800"
        @rejected="onRejected"
      />
  </div>
</template>

<style>
</style>

<script>
export default {
  name: "Post",
  data: function () {
    return {
      nickname: "",
      password: "",
      title: "",
      description: "",
      tags: "",
      dense: false,
    };
  },
  methods: {
    goBack: function () {
      this.$router.go(-1);
    },
    onRejected (rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    },
  },
};
</script>
