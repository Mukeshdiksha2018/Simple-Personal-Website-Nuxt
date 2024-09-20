<template>
  <div>
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
    <div>
      <h2>About me:</h2>
      <p>
        I am a passionate Vue.js and Nuxt.js developer with over three years of
        experience, specializing in building intuitive web applications. Since
        2021, I’ve been deeply involved in developing a no-code and document
        signing platform, driving innovation in simplifying workflows and
        enhancing user experiences
      </p>
      <p>
        I leverage powerful libraries such as Vuex for state management, Vue
        Router for seamless navigation, and Element UI for elegant user
        interfaces. Additionally, I use Axios to handle API interactions
        efficiently, ensuring high performance and scalability. My focus is on
        creating dynamic, responsive applications that align with modern web
        development trends.
      </p>
      <p>
        When I’m not coding, I enjoy exploring new technologies and contributing
        to projects that push the boundaries of web development. Let's build
        something amazing together!
      </p>
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
  height: 50vh;
}

.introduction {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
