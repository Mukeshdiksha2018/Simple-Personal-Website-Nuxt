<template>
  <div>
    <div class="main-container">
      <div class="home-page">
        <span class="wave">👋</span>
        <h1>Hello I'm {{ fullName }}</h1>
        <p>{{ profession }}</p>
        <span class="introduction">
          <h2>Skilled in:</h2>
          <p>Vue 2, Vue 3, Nuxt 2, Nuxt 3, Node, JavaScript, TypeScript</p>
        </span>
      </div>
      <div>
        <img class="image" src="~/assets/images/mukeshphoto.jpg" />
      </div>
    </div>
    <div class="about-me">
      <h2>About Me:</h2>
      <p>
        As a passionate Full Stack Software Developer specializing in Vue.js and
        Nuxt.js, I bring over three years of experience in creating intuitive
        and high-performing web applications. Since 2021, I have been dedicated
        to building a no-code and document signing platform, focusing on
        simplifying workflows and enhancing user experiences.
      </p>
      <p>My technical expertise encompasses:</p>
      <el-card shadow="always">
        <el-row :gutter="20">
          <el-col :span="24">
            <strong>Vue 2 & Vue 3</strong>: Crafting dynamic and responsive user
            interfaces.
          </el-col>
          <el-col :span="24">
            <strong>Nuxt 2 & Nuxt 3</strong>: Building efficient server-side
            rendered applications.
          </el-col>
          <el-col :span="24">
            <strong>Node.js</strong>: Developing scalable backend services.
          </el-col>
          <el-col :span="24">
            <strong>JavaScript & TypeScript</strong>: Ensuring robust and
            maintainable code.
          </el-col>
        </el-row>
      </el-card>
      <p>
        I leverage powerful libraries such as Vuex for state management, Vue
        Router for seamless navigation, and Element UI for creating elegant user
        interfaces. Additionally, I use Axios to handle API interactions
        efficiently, ensuring high performance and scalability. My focus is on
        creating dynamic, responsive applications that align with modern web
        development trends.
      </p>
      <p>
        When I’m not coding, I enjoy exploring new technologies and contributing
        to projects that push the boundaries of web development. Let's connect
        and build something amazing together!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      fullName: "Mukesh Kumar",
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

.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  font-size: 3rem;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
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
