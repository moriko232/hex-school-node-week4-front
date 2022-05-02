import baseUrl from "./settings.js";
var app = new Vue({
  el: "#app",
  data: {
    isLoading: false,
    title: "",
    content: "",
    imgUrl: "",
    tag: "",
  },
  mounted() {},
  methods: {
    addPost() {
      const api = `${baseUrl}/posts`;
      const data = {
        userId: "626dff7421efaaf90fdb376b",
        title: this.title,
        content: this.content,
        imgUrl: this.imgUrl,
        tag: this.tag,
      };
      console.log("addPosts ", data);
      this.isLoading = true;
      axios
        .post(api, data)
        .then((response) => {
          this.isLoading = false;
          console.log("addPost res", response);
          this.resetForm();
          window.location = "./index.html";
        })
        .catch((err) => {
          this.isLoading = false;
          console.log("err", err);
        });
    },
    resetForm() {
      this.tiitle = "";
      this.content = "";
      this.imgUrl = "";
      this.tag = "";
    },
  },
});
