export default {
  state: {
    page: [],
    formVisible: false
  },
  mutations: {
    setFormVisible (state, flag) {
      flag !== undefined ? state.formVisible = flag : state.formVisible = !state.formVisible
    }
  },
  namespaced: true
}
