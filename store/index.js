import axios from 'axios'

export const state = () => ({
  authUser: null
})

export const mutations = {
  SET_USER(state, user) {
    state.authUser = user
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login({ commit }, user) {
    try {
      const { data } = await axios.post('/api/auth/login', user)
      console.log(data)
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout({ commit }) {
    await axios.post('/api/auth/logout')
    commit('SET_USER', null)
  }
}
