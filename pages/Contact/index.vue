<template>
  <div class="contact-page">
    <h1>Contact Me</h1>
    <p>
      I'd love to hear from you! Whether you have a question, project proposal,
      or just want to say hi, feel free to reach out.
    </p>

    <div class="contact-form-container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Your Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <input
            type="text"
            id="subject"
            v-model="formData.subject"
            placeholder="Subject"
            required
          />
        </div>
        <div class="form-group">
          <label for="message">Your Message</label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="5"
            placeholder="Type your message"
            required
          ></textarea>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic, e.g., send an email or API request
      alert("Your message has been sent!");
      // Reset form fields
      this.formData.name = "";
      this.formData.email = "";
      this.formData.subject = "";
      this.formData.message = "";
    },
  },
};
</script>
<style scoped>
.contact-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: "Arial", sans-serif;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #0f172a;
}

p {
  font-size: 1.2rem;
  color: #666;
}

.contact-form-container {
  background: #f7f9fb;
  padding: 20px 30px 20px 10px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  font-size: 1.1rem;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 5px;
}

.submit-btn {
  background-color: #229799;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #197a7d;
}
</style>
