<template>
  <nav class="navbar" ref="navbar">
    <ul class="nav-links">
      <li class="nav-item" :class="{ active: activeSection === 'home' }">
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li class="nav-item" :class="{ active: activeSection === 'experience' }">
        <nuxt-link to="/experience">Experience/Education/Skills</nuxt-link>
      </li>
      <li class="nav-item" :class="{ active: activeSection === 'contact' }">
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
      <li class="nav-item" :class="{ active: activeSection === 'contact' }">
        <nuxt-link to="/blog">Blog</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeSection: "home",
    };
  },
  mounted() {
    setTimeout(() => {
      this.$refs.navbar.classList.add("slide-down");
    }, 100);
  },
  methods: {},
};
</script>

<style scoped>
/* Navbar container */
.navbar {
  background-color: #00dc82;
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

/* Mobile responsive */
@media (max-width: 768px) {
  .nav-links {
    flex-direction: row;
    gap: 0.5rem;
  }
  .nav-item {
    font-size: 1rem;
  }
}
</style>
