import Vue from 'vue'
import Vuex from 'vuex'
import category from './category'
import general from './general'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    currentItem: {}
  },
  mutations: {
    // работает
    setList (state, paymentsList) {
      state.list = paymentsList
    },
    addDataToList (state, payment) {
      state.list.push(payment)
    },
    setCurrentItem (state, item) {
      Vue.set(state, 'currentItem', item)
    }
  },
  getters: {
    // получаем список покупок
    getList: state => state.list

    // получаем сумму всех платежей
    // getFullValue: state => {
    //   return state.list
    //     .reduce((res, cur) => res + cur.value, 0)
    // }
  },
  actions: {
    fetchData ({ commit }) {
      setTimeout(() => {
        const initialPaymentsList = [
          {
            id: 1,
            date: '28.03.2020',
            category: 'Food',
            value: 169
          },
          {
            id: 2,
            date: '24.03.2020',
            category: 'Transport',
            value: 360
          },
          {
            id: 3,
            date: '24.03.2020',
            category: 'Food',
            value: 532
          },
          {
            id: 4,
            date: '20.03.2020',
            category: 'Food',
            value: 169
          },
          {
            id: 5,
            date: '19.03.2020',
            category: 'Navigation',
            value: 50
          },
          {
            id: 6,
            date: '12.03.2020',
            category: 'Sport',
            value: 450
          }
        ]

        // this.state = initialPaymentsList;
        commit('setList', initialPaymentsList)
      })
    },
    removeItem ({ commit, state }, item) {
      const list = state.list.filter(el => el.id !== item.id)
      commit('setList', list)
    }
    // fetchCategoryListData({ commit }) {
    //   setTimeout(() => {
    //     const categoryList = ['Food', 'Transport', 'Education', 'Sport'];
    //
    //     commit('SET_CATEGORY_LIST', categoryList);
    //   });
    // },
  },
  modules: {
    namespaced: true,
    category,
    general
  }
})
