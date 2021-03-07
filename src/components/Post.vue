<template>
  <div>
    <q-toolbar class="bg-primary text-white">
      <q-btn @click="goBack" flat round icon="arrow_back" id="create-back" />
      <q-space />
      <q-btn
        @click="requestPost"
        style="float: right"
        flat
        round
        icon="save"
        id="post-save"
      />
    </q-toolbar>

    <div class="row">
      <q-input outlined v-model="nickname" label="닉네임" class="col q-ma-sm" />
      <q-input
        outlined
        v-model="password"
        label="비밀번호"
        class="col q-ma-sm"
      />
    </div>

    <q-input outlined v-model="title" label="제목" class="q-ma-sm" />
    <q-input
      v-model="description"
      label="내용"
      class="q-ma-sm"
      outlined
      type="textarea"
    />
    <q-input outlined v-model="tags" label="#태그" class="q-ma-sm" />
    <q-file
      outlined
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
  computed: {
    getTagList: function () {
      if (this.tags.length <= 0) return [];
      else {
        let tags = this.tags.split("#");
        tags = tags.map((v) => {
          return v.trim();
        });
        tags = tags.filter((v) => {
          return v != "";
        });
        return tags;
      }
    },
  },
  methods: {
    goBack: function () {
      this.$router.go(-1);
    },
    onRejected(rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: "negative",
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`,
      });
    },
    isFormFilled: function () {
      console.log(this.$data);
      console.log(this.nickname);
      if (this.nickname == "") {
        alert("닉네임을 입력하세요.");
        return false;
      } else if (this.nickname.length > 20 && this.nickname.length < 4) {
        alert("닉네임은 4~20 글자여야 합니다.");
        return false;
      } else if (this.password == "") {
        alert("비밀번호를 입력하세요.");
        return false;
      } else if (this.password.length > 20 && this.password.length < 4) {
        alert("비밀번호는 4~20 글자여야 합니다.");
        return false;
      } else if (this.title == "") {
        return false;
      } else if (this.title.length > 200 && this.title.length < 1) {
        alert("제목은 1~200 글자여야 합니다.");
        return false;
      } else if (this.description == "") {
        return false;
      } else if (this.password.length > 100000 && this.password.length < 1) {
        alert("내용은 1~100000 글자여야 합니다.");
        return false;
      } else return true;
    },
    requestPost: function () {
      if (this.isFormFilled()) {
        let data = {
          category: "오른다",
          name: this.nickname,
          passwd: this.password,
          title: this.title,
          content: this.description,
          tags: this.getTagList,
        };
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        this.$axios
          .post(
            "https://asia-northeast3-stock-grounds.cloudfunctions.net/post",
            data,
            config
          )
          .then((res) => {
            console.log("success");
            console.log(res);
          })
          .catch((error) => {
            console.log("error");
            console.log(error.headers);
          })
          .then(() => {
            //back to list
          });
      } else {
        //error
        alert("모두 입력하세요!");
      }
    },
  },
};
</script>
