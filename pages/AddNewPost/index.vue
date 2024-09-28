<template>
  <div class="blog-form">
    <el-form :model="formData" ref="blogForm" label-width="120px">
      <el-form-item
        label="Title"
        :rules="[
          {
            required: true,
            message: 'Please input the title',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          v-model="formData.title"
          placeholder="Enter blog title"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="Author Name"
        :rules="[
          {
            required: true,
            message: 'Please input the author name',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          v-model="formData.author"
          placeholder="Enter author name"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="Description"
        :rules="[
          {
            required: true,
            message: 'Please input the description',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          type="textarea"
          v-model="formData.description"
          placeholder="Enter blog description"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="Blog Body"
        :rules="[
          {
            required: true,
            message: 'Please input the blog body',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          type="textarea"
          v-model="formData.body"
          placeholder="Enter blog content"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleSubmit">Save</el-button>
        <el-button @click="handleCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      formData: {
        title: "",
        author: "",
        description: "",
        body: "",
      },
    };
  },
  methods: {
    ...mapActions(["setPosts"]),
    handleSubmit() {
      this.$refs.blogForm.validate((valid) => {
        if (valid) {
          console.log("Form Submitted:", this.formData);
          this.$axios
            .post(
              "https://nuxt-portfolio-blog-default-rtdb.firebaseio.com/posts.json",
              this.formData
            )
            .then((result) => console.log(result))
            .catch((err) => console.log(err));
          this.formData = {};
          this.setPosts();
          this.$router.push("/Blog/");
        } else {
          console.log("Error: Form is not valid!");
          return false;
        }
      });
    },
    handleCancel() {
      this.$refs.blogForm.resetFields();
      this.$router.push({ path: "/Blog/" });
    },
  },
};
</script>

<style scoped>
.blog-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.el-input {
  width: 100%;
}

.el-form-item {
  margin-bottom: 20px;
}

.el-button {
  margin-right: 10px;
}
</style>
