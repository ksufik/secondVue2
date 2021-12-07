export default {
  state: {
    categoryList: []
  },
  mutations: {
    setCategoryList (state, categoryList) {
      state.categoryList = categoryList
    },
    addCategoryToList (state, category) {
      state.categoryList.push(category)
    }
  },
  getters: {
    // getCategoryList: ({ categoryList }) => categoryList
    getCategoryList: state => state.categoryList
  },
  actions: {
    fetchCategoryListData ({ commit }) {
      setTimeout(() => {
        const categoryList = ['Food', 'Transport', 'Education', 'Sport', 'Navigation', 'Entertaiment']
        commit('setCategoryList', categoryList)
      })
    }
  }
}
