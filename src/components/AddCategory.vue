<template>
    <div>
        <input class="form__input" placeholder="Категория" type="text" v-model="category">
        <button class="form__btn" @click="addItem(category)">
            ADD
        </button>
    </div>
</template>

<script>

import { mapMutations } from 'vuex'
export default {
  name: 'Addcategory',
  data () {
    return {
      category: ''
    }
  },
  methods: {
    ...mapMutations([
      'addCategoryToList'
    ]),
    addItem (data) {
      console.log(data)
      this.$store.commit('addCategoryToList', data)
    }
  }
}
</script>
