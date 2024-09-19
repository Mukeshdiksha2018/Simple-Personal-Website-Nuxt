<template>
  <div class="home-page">
    <h1>{{ fullName }}</h1>
    <p>{{ profession }}</p>
    <p>Skilled in: Vue 2, Vue 3, React, Node, JavaScript</p>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      fullName: "Akkala Sai Mukesh Kumar",
      profession: "Full Stack Software Developer",
    };
  },
};
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 20px;
}

.profile-image {
  border-radius: 50%;
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin: 10px auto;
}

.contact-icons {
  margin-top: 20px;
  font-size: 24px;
}

.contact-icons img {
  width: 75px;
  height: 75px;
}

.contact-icons a {
  margin: 0 10px;
  color: #333;
  text-decoration: none;
}

.contact-icons i {
  transition: color 0.3s;
}

.contact-icons a:hover i {
  color: #007bff;
}
</style>
