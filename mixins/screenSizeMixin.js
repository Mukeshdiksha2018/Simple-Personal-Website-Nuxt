// mixins/screenSizeMixin.js
export default {
  data() {
    return {
      isMobile: false,
    };
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 768; // Define your mobile breakpoint
    },
  },
  mounted() {
    this.checkScreenSize(); // Check size on mount
    window.addEventListener('resize', this.checkScreenSize); // Listen for resize events
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize); // Cleanup listener
  },
};
