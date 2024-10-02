import Vuex from 'vuex'; // Correct import for Vuex

const createStore = () => {
  return new Vuex.Store({
    state: {
      isLoggedIn: false,
      idToken : null,
    },
    mutations: {
      setToken(state,tokenId){
        state.idToken = tokenId;
      }
    },
    actions: {
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
    },
  });
};

export default createStore;
