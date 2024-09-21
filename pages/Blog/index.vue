<template>
  <div>
    <el-button
      @click="$router.push({ path: '/AddNewPost/' })"
      type="primary"
      size="large"
      >Add New Post</el-button
    >
    <PostPreview />
  </div>
</template>

<script>
import PostPreview from "~/components/PostPreview.vue";

export default {
  components: {
    PostPreview,
  },
};
</script>
