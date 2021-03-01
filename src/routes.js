import Main from "./components/Main.vue";
import Post from "./components/Post.vue";
import PostView from "./components/PostView.vue";
import PostEdit from "./components/PostEdit.vue";
import Search from "./components/Search.vue";

const routes = [
    { path: "/main", component: Main },
    { path: "/post", component: Post },
    { path: "/postview/:id", component: PostView },
    { path: "/postedit/:id", component: PostEdit },
    { path: "/search", component: Search },
  ];

export default routes;