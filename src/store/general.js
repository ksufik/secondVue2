export default {
  state: {
    page: [],
    formVisible: false
  },
  mutations: {
    setFormVisible (state, flag) {
      if (flag !== undefined) {
        state.formVisible = flag
      } else {
        state.formVisible = !state.formVisible
      }
    }
  },
  namespaced: true
}
