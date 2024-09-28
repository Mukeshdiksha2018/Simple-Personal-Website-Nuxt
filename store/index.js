import Vuex from 'vuex'; // Correct import for Vuex

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
    },
    actions: {
      async setPosts({ commit }) { // Destructuring the commit method from context
        try {
          const res = await this.$axios.get(
            'https://nuxt-portfolio-blog-default-rtdb.firebaseio.com/posts.json'
          );
          const data = res.data; // Data is now defined
          let postsArray = [];
          Object.keys(data).forEach((key) => {
            postsArray.push(data[key]);
          });
          commit('setPosts', postsArray); // Committing with postsArray
        } catch (err) {
          console.error(err, 'unsuccessful API call');
        }
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
    },
  });
};

export default createStore;
