<template>
  <nav class="navbar" ref="navbar">
    <!-- Hamburger icon for mobile view -->
    <span class="hamburger" @click="toggleNav">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </span>
    <!-- Navigation links -->
    <el-row>
      <el-col :span="6">
        <img
          v-if="!isMobile"
          width="35px"
          height="35px"
          style="margin-left: 2rem"
          src="/MukeshCodesLogo.svg"
          alt="logo"
        />
      </el-col>
      <el-col :span="18">
        <ul class="nav-links" :class="{ active: showMenu }">
          <li class="nav-item" @click="closeNav">
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li class="nav-item" @click="closeNav">
            <nuxt-link to="/experience">Experience|Education</nuxt-link>
          </li>
          <li class="nav-item" @click="closeNav">
            <nuxt-link to="/portfolio">Portfolio</nuxt-link>
          </li>
          <li class="nav-item" @click="closeNav">
            <nuxt-link to="/Contact">Contact</nuxt-link>
          </li>
          <li class="nav-item" @click="closeNav">
            <nuxt-link to="/Admin">Admin Area</nuxt-link>
          </li>
        </ul>
      </el-col>
    </el-row>
  </nav>
</template>
<script>
import screenSizeMixin from "~/mixins/screenSizeMixin";
export default {
  data() {
    return {
      activeSection: "home",
      showMenu: false, // To toggle the menu on mobile
    };
  },
  mixins: [screenSizeMixin],
  mounted() {
    setTimeout(() => {
      this.$refs.navbar.classList.add("slide-down");
    }, 100);
  },
  methods: {
    toggleNav() {
      this.showMenu = !this.showMenu;
    },
    closeNav(route) {
      this.showMenu = false;
      this.$router.push(route);
    },
  },
};
</script>
<style scoped>
/* Navbar container */
.navbar {
  background: rgb(0, 196, 204);
  background: linear-gradient(
    90deg,
    rgba(0, 196, 204, 1) 0%,
    rgba(71, 109, 220, 1) 30%,
    rgba(88, 88, 224, 1) 59%,
    rgba(116, 52, 230, 1) 81%,
    rgba(125, 42, 232, 1) 100%
  );
  padding: 1rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  transform: translateY(-100%);
  transition: transform 0.5s ease-in-out;
  z-index: 1000;
}

.slide-down {
  transform: translateY(0);
}

/* Navigation links */
.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.nav-item {
  font-size: 1.2rem;
  transition: color 0.3s;
}

.nav-item a {
  color: white;
  text-decoration: none;
  padding: 0.5rem;
}

.nav-item a:hover {
  color: #ffffff;
  background-color: #3b85db;
  border-radius: 20px;
}

.nav-item a:active {
  color: #ffffff;
  background-color: #3b85db;
  border-radius: 20px;
}

.nav-item a.nuxt-link-active {
  color: #ffffff;
  background-color: #3b85db;
  border-radius: 20px;
}

/* Hamburger menu for mobile */
.hamburger {
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 4px;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #0f172a;
  border-radius: 5px;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: antiquewhite;
    display: none;
    flex-direction: column;
    align-items: center;
  }

  .nav-links.active {
    display: flex;
    margin-left: -35px;
    margin-top: 15px;
  }

  .nav-item {
    font-size: 1rem;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    border-bottom: 1px solid #ffffff;
  }

  .nav-item a {
    width: 100%;
    background-color: antiquewhite;
    color: black;
  }
}
</style>
