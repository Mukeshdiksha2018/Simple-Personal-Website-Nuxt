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
    <div class="about-me">
      <h2>About me:</h2>
      <p>
        I am a passionate Vue.js and Nuxt.js developer with over three years of
        experience, specializing in building intuitive web applications. Since
        2021, I’ve been deeply involved in developing a no-code and document
        signing platform, driving innovation in simplifying workflows and
        enhancing user experiences.
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
  object-fit: cover;
}

.image {
  height: 16rem;
  width: 16rem;
  border-radius: 50px;
  margin: 0 auto;
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
}

.about-me {
  padding: 20px;
}

@media (min-width: 768px) {
  .main-container {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;
  }

  .image {
    height: 20rem;
    width: 20rem;
  }

  .home-page {
    text-align: left;
  }

  .about-me {
    padding: 40px;
  }
}
</style>
