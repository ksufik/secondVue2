<template>
    <div class="container">
        <input class="form__input" placeholder="Категория" type="text" v-model="category">
        <!-- <select class="form__input form__select" placeholder="Категория" name="" id="" v-model="category">
      <option
          v-for="(category, index) of getCategory"
          :value="category"
          :key="index"
      >{{ category }}</option>
    </select> -->
        <input class="form__input" placeholder="Сумма" type="text" v-model.number="value">
        <button v-show="isNotEmpty" class="form__btn" @click="addItem">
            ADD
        </button>
    </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import { quickBTNs } from '@/assets/selects'
export default {
  name: 'PaymentForm',
  data () {
    return {
      category: '',
      value: null
    }
  },
  methods: {
    ...mapActions([
      'fetchCategoryListData'
    ]),
    ...mapMutations([
      'setList',
      'addDataToList',
      'setCategoryList',
      'general', ['setFormVisible']
    ]),
    formatDate (date = new Date()) {
      let dd = date.getDate()
      if (dd < 10) {
        dd = '0' + dd
      }

      let mm = date.getMonth() + 1
      if (mm < 10) {
        mm = '0' + mm
      }

      let yy = date.getFullYear() % 100
      if (yy < 10) {
        yy = '0' + yy
      }
      return dd + '.' + mm + '.20' + yy
    },
    addItem () {
      const data = {
        date: this.formatDate(),
        category: this.category,
        value: this.value
      }
      this.$store.commit('addDataToList', data)
      // закрыть форму
      this.setFormVisible(false)
    },
    getCoincidence () {
      return this.list.some(el => el.category === this.$route.name)
    },
    setParams () {
      if (this.getCoincidence()) {
        this.date = this.formatDate()
        this.category = this.$route.name
        this.value = this.$route.params?.value
        console.log(this.$route)
      } else {
        this.date = null
        this.category = null
        this.value = null
      }
    }
  },
  mounted () {
    this.setParams()
  },
  computed: {
    ...mapGetters([
      'getCategoryList'
    ]),
    getCategory () {
      return this.$store.getters.getCategoryList
    },
    list () {
      return quickBTNs
    },
    isNotEmpty () {
      return this.category && this.value
    }
  },
  // получение данных
  created () {
    this.$store.commit('setCategoryList', this.fetchCategoryListData())
  }
}
</script>

<style lang="scss">
 .form{
    &__input{
      display: block;
      width: 100%;
      outline: none;
      border: 1px solid rgba(65, 184, 131, 1);
      padding: 10px 15px;
      margin: 15px 0;
    }
    &__btn{
      padding: 10px 20px;
      font-size: 20px;
      cursor: pointer;
      background-color: rgb(65, 184, 131);
      margin-bottom: 50px;
      margin-top: 20px;
      &:hover{
        background-color: rgba(65, 184, 131, 0.7);
      }
    }
    &__select{
      width: 106%;
    }
 }
</style>
