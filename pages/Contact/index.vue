<template>
  <div class="contact-container">
    <h1>Contact Me</h1>
    <el-form :model="form" :rules="rules" ref="contactForm">
      <el-form-item label="Name" prop="name">
        <el-input v-model="form.name" placeholder="Your Name" />
      </el-form-item>

      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email" placeholder="Your Email" />
      </el-form-item>

      <el-form-item label="Message" prop="message">
        <el-input
          type="textarea"
          v-model="form.message"
          placeholder="Your Message"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input your name",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Please input your email",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Please input a valid email address",
            trigger: ["blur", "change"],
          },
        ],
        message: [
          {
            required: true,
            message: "Please input your message",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.contactForm.validate((valid) => {
        if (valid) {
          // Handle form submission
          console.log("Form submitted:", this.form);
          // Reset the form
          this.$refs.contactForm.resetFields();
        } else {
          console.error("Error in form submission");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.contact-container {
  max-width: 600px;
  margin: 10% 30%; /* Adjusted margin for better spacing */
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.el-form-item {
  margin-bottom: 15px;
}

/* Mobile responsiveness */
@media (max-width: 600px) {
  .contact-container {
    padding: 15px; /* Reduce padding on mobile */
    margin: 25% 0; /* Adjust margin for better spacing */
  }

  h1 {
    font-size: 24px; /* Smaller header font size for mobile */
  }

  .el-form-item {
    margin-bottom: 10px; /* Reduced margin on mobile */
  }

  .el-button {
    width: 100%; /* Full-width button on mobile */
    padding: 10px; /* Larger padding for easier tap */
  }

  .el-input,
  .el-input__inner {
    font-size: 14px; /* Adjust input font size for readability */
  }
}
</style>
