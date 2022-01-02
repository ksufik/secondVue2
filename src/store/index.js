import Vue from 'vue'
import Vuex from 'vuex'
import category from './category'
import general from './general'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    // работает
    setList (state, paymentsList) {
      state.list = paymentsList
    },
    addDataToList (state, payment) {
      state.list.unshift(payment)
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
            date: '28.03.2020',
            category: 'Food',
            value: 169
          },
          {
            date: '24.03.2020',
            category: 'Transport',
            value: 360
          },
          {
            date: '24.03.2020',
            category: 'Food',
            value: 532
          },
          {
            date: '20.03.2020',
            category: 'Food',
            value: 169
          },
          {
            date: '19.03.2020',
            category: 'Navigation',
            value: 50
          },
          {
            date: '12.03.2020',
            category: 'Sport',
            value: 450
          }
        ]

        // this.state = initialPaymentsList;
        commit('setList', initialPaymentsList)
      })
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
