// store/auth.js
export const state = () => ({
  isLoggedIn: false,
  idToken: null,
});

export const mutations = {
  setToken(state, tokenId) {
    state.idToken = tokenId;
  },
};

export const actions = {
  authenticateUser({ commit }, authData) {
    let authURL =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      process.env.fbAPIKey;
    return this.$axios
      .post(authURL, {
        email: authData.email,
        password: authData.password,
      })
      .then((response) => {
        commit("setToken", response.data.idToken);
      })
      .catch((err) => console.log(err, "Error in Authentication"));
  },
};
