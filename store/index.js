import Vuex from 'vuex'; // Correct import for Vuex

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      isLoggedIn: false,
      idToken : null,
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      setToken(state,tokenId){
        state.idToken = tokenId;
      }
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
      authenticateUser(vuexContext,authData){
        let authURL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + process.env.fbAPIKey;
        return this.$axios.post(authURL,{
          email: authData.email,
          password: authData.password,
        }).then(response => {
          vuexContext.commit('setToken', response.data.idToken);
        }).catch(err => console.log(err,"Error in Authentication"))
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
    },
  });
};

export default createStore;
