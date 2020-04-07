export const state = () => ({
  directory: ''
})

export const getters = {

}

export const mutations = {
  saveInfo(state, payload) {
    state.directory = payload.directory
  }
}

export const actions = {

}
