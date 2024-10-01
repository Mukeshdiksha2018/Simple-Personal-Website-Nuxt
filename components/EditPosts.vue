<template>
  <div class="blog-grid">
    <div
      class="blog-preview-card"
      v-for="(post, index) in loadedPosts"
      :key="index"
    >
      <div class="blog-content">
        <h2 class="blog-title">{{ post.title }}</h2>
        <p class="blog-author"><strong>Author:</strong> {{ post.author }}</p>
        <p class="blog-description">
          <strong>Description:</strong>
          {{ truncateText(post.description, 50) }}
        </p>
        <p class="blog-body">{{ truncateText(post.body, 100) }}</p>
        <span>
          <el-button size="mini" type="primary">Read more...</el-button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"; // Import Vuex helpers

export default {
  name: "BlogPostPreview",
  middleware: "auth",
  async created() {
    // Call the Vuex action to set posts when the component is created
    await this.setPosts();
  },
  computed: {
    ...mapGetters({
      loadedPosts: "loadedPosts", // Map the loadedPosts getter from Vuex
    }),
  },
  methods: {
    ...mapActions(["setPosts"]), // Map the setPosts action from Vuex to component methods
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
      }
      return text;
    },
  },
};
</script>

<style scoped>
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(410px, 1fr));
  gap: 20px;
  padding: 20px;
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

@media (max-width: 768px) {
  .blog-preview-card {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: white;
    transition: transform 0.3s ease;
    width: 90vw;
  }
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
