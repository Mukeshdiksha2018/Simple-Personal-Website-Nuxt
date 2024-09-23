<template>
  <nav class="navbar" ref="navbar">
    <!-- Hamburger icon for mobile view -->
    <div class="hamburger" @click="toggleNav">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <!-- Navigation links -->
    <ul class="nav-links" :class="{ active: showMenu }">
      <li class="nav-item" @click="closeNav">
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li class="nav-item" @click="closeNav">
        <nuxt-link to="/experience">Experience/Education/Skills</nuxt-link>
      </li>
      <li class="nav-item" @click="closeNav">
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
      <li class="nav-item" @click="closeNav">
        <nuxt-link to="/blog">Blog</nuxt-link>
      </li>
      <li class="nav-item" @click="closeNav">
        <nuxt-link to="/Admin">Admin</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      activeSection: "home",
      showMenu: false, // To toggle the menu on mobile
    };
  },
  mounted() {
    setTimeout(() => {
      this.$refs.navbar.classList.add("slide-down");
    }, 100);
  },
  methods: {
    toggleNav() {
      this.showMenu = !this.showMenu;
    },
    closeNav() {
      this.showMenu = false;
    },
  },
};
</script>
<style scoped>
/* Navbar container */
.navbar {
  background-color: #229799;
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
  color: #0f172a;
  text-decoration: none;
  padding: 0.5rem;
}

.nav-item a:hover {
  color: #ffffff;
  background-color: #0f172a;
  border-radius: 20px;
}

.nav-item a:active {
  color: #ffffff;
  background-color: #0f172a;
  border-radius: 20px;
}

.nav-item a.nuxt-link-active {
  color: #ffffff;
  background-color: #0f172a;
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
    background-color: #229799;
    display: none;
    flex-direction: column;
    align-items: center;
  }

  .nav-links.active {
    display: flex;
    margin-left: -35px;
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
  }
}
</style>
