<template>
  <div class="blog-preview-card">
    <img :src="imageSrc" alt="Blog thumbnail" class="blog-image" />
    <div class="blog-content">
      <h3 class="blog-title">{{ title }}</h3>
      <p class="blog-description">{{ description }}</p>
      <el-button type="primary" size="mini">Read More</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPostPreview",
  props: {
    title: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  mounted() {},
};
</script>

<style scoped>
.blog-preview-card {
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: transform 0.3s ease;
}
.blog-preview-card:hover {
  transform: translateY(-5px);
}
.blog-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
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
</style>
