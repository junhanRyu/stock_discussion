import Main from "./components/Main.vue";
import Post from "./components/Post.vue";
import PostView from "./components/PostView.vue";
import PostEdit from "./components/PostEdit.vue";
import Search from "./components/Search.vue";
import NotFound from "./components/NotFound.vue";

const routes = [
    { path: "/", component: Main },
    { path: "/post", component: Post },
    { path: "/post/view/:id", component: PostView },
    { path: "/post/edit/:id", component: PostEdit },
    { path: "/search", component: Search },
    { path: "/notfound", component: NotFound },
  ];

export default routes;