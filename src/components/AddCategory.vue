<template>
    <div>
        <v-text-field label="Категория" type="text" v-model="category"></v-text-field>
        <v-btn @click="addItem(category)">
            ADD
        </v-btn>
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
      this.$store.commit('addCategoryToList', data)
    }
  }
}
</script>
