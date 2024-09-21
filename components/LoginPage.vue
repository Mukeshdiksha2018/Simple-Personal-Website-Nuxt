<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2 class="login-title">Login</h2>
      <el-form
        :model="form"
        :rules="rules"
        ref="loginForm"
        label-position="top"
      >
        <el-form-item label="Email" prop="email">
          <el-input
            v-model="form.email"
            placeholder="Enter your email"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="Enter your password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" :loading="loading"
            >Login</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: {
        email: "",
        password: "",
      },
      rules: {
        email: [
          {
            required: true,
            message: "Please enter your email",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Please enter a valid email",
            trigger: ["blur", "change"],
          },
        ],
        password: [
          {
            required: true,
            message: "Please enter your password",
            trigger: "blur",
          },
          {
            min: 6,
            message: "Password must be at least 6 characters",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          setTimeout(() => {
            this.$message.success("Login successful!");
            this.loading = false;
            // Proceed with actual login action here
          }, 2000);
        } else {
          this.$message.error("Please fix the errors in the form.");
        }
      });
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.login-card {
  width: 400px;
  padding: 20px;
}

.login-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
