<template>
    <div class="container">
        <input class="form__input" placeholder="Дата" type="text" v-model="currentItem.date">
        <input class="form__input" placeholder="Категория" type="text" v-model="currentItem.category">
        <!-- <select class="form__input form__select" placeholder="Категория" name="" id="" v-model="category">
      <option
          v-for="(category, index) of getCategory"
          :value="category"
          :key="index"
      >{{ category }}</option>
    </select> -->
        <input class="form__input" placeholder="Сумма" type="text" v-model.number="currentItem.value">
        <v-btn v-if="!isEdited && isNotEmpty" class="form__btn" @click="addItem">ADD</v-btn>
        <v-btn v-if="isEdited" class="form__btn" @click="editHandler">EDIT</v-btn>
    </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions, mapState } from 'vuex'
import { quickBTNs } from '@/assets/selects'
export default {
  name: 'PaymentForm',
  data () {
    return {
      category: {},
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
      'setCategoryList'
      // 'general', ['setFormVisible']
    ]),
    ...mapMutations('general', ['setFormVisible']),
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
      const { category, date, value } = this.currentItem
      const data = {
        id: this.$store.state.list.length + 1,
        date: date || this.formatDate(),
        category: category,
        value: value
      }
      this.$store.commit('addDataToList', data)
      // закрыть форму
      this.setFormVisible(false)
    },
    getCoincidence () {
      // return this.list.some(el => el.category === this.$route.name)
      return true
    },
    setParams () {
      if (this.getCoincidence()) {
        this.date = this.formatDate()
        this.category = this.$route.name
        this.value = this.$route.params?.value
      } else {
        this.date = null
        this.category = null
        this.value = null
      }
    },
    editHandler () {
      this.setFormVisible(false)
      // this.$store.commit('setFormVisible', false)
      // this.$router.push({ name: 'Home' })
    }
  },
  mounted () {
    this.setParams()
    if (this.isEdited) {
      const { date, category, value } = this.currentItem
      this.date = date
      this.value = value
      this.category = category
    }
  },
  computed: {
    ...mapState(['list', 'currentItem']),
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
    },
    isEdited () {
      return this.$route.name === 'edit'
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
