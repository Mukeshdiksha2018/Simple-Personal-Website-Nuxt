<template>
  <nav class="navbar" ref="navbar">
    <ul class="nav-links">
      <li class="nav-item" :class="{ active: activeSection === 'home' }">
        <nuxt-link to="/home" @click="changeSection('home')">Home</nuxt-link>
      </li>
      <li class="nav-item" :class="{ active: activeSection === 'experience' }">
        <nuxt-link to="/experience" @click="changeSection('experience')"
          >Experience</nuxt-link
        >
      </li>
      <li class="nav-item" :class="{ active: activeSection === 'skills' }">
        <nuxt-link to="/skills" @click="changeSection('skills')"
          >Skills</nuxt-link
        >
      </li>
      <li class="nav-item" :class="{ active: activeSection === 'contact' }">
        <nuxt-link to="/contact" @click="changeSection('contact')"
          >Contact</nuxt-link
        >
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
  methods: {
    changeSection(section) {
      this.activeSection = section;
    },
  },
};
</script>

<style scoped>
/* Navbar container */
.navbar {
  background-color: #00dc82;
  padding: 1rem;
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
  color: #0f172a;
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
