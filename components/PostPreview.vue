<template>
  <div class="blog-grid">
    <div
      class="blog-preview-card"
      v-for="(post, index) in loadedPosts"
      :key="index"
    >
      <div class="blog-content">
        <h2 class="blog-title">{{ post.title }}</h2>
        <p class="blog-description">{{ post.description }}</p>
        <p class="blog-author"><strong>Author:</strong> {{ post.author }}</p>
        <p class="blog-body">{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPostPreview",
  mounted() {
    this.loadThePosts();
  },
  data() {
    return {
      loadedPosts: [],
    };
  },
  methods: {
    async loadThePosts() {
      this.$axios
        .get(
          "https://nuxt-portfolio-blog-default-rtdb.firebaseio.com/posts.json"
        )
        .then((res) => {
          let data = res.data;
          Object.keys(data).forEach((key) => {
            this.loadedPosts.push(data[key]);
          });
        })
        .catch((err) => console.log(err, "unsuccessful API call"));
    },
  },
};
</script>

<style scoped>
.blog-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(410px, 1fr)
  ); /* Adjust min width as needed */
  gap: 20px; /* Space between grid items */
  padding: 20px; /* Padding around the grid */
}

.blog-preview-card {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: transform 0.3s ease;
}
.blog-preview-card:hover {
  transform: translateY(-5px);
}
.blog-content {
  padding: 15px;
}
.blog-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}
.blog-description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
}
.blog-author {
  font-size: 0.9rem;
  color: #999;
}
.blog-body {
  font-size: 1rem;
  color: #444;
}
</style>
