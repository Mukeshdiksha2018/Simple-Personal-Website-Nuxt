<template>
  <div class="main-container">
    <div class="home-page">
      <h1>{{ fullName }}</h1>
      <p>{{ profession }}</p>
      <span class="introduction">
        <h2>Skilled in:</h2>
        <p>Vue 2, Vue 3, Nuxt 2, Nuxt 3, Node, JavaScript, Typescript</p>
      </span>
    </div>
    <div>
      <img class="image" src="~/assets/images/mukeshphoto.jpg" />
    </div>
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

.image {
  height: 20rem;
  width: 20rem;
  border-radius: 50px;
}

.main-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 90vh;
}

.introduction {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
