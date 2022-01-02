<template>
  <div class="v-page" >
    <div class="v-page__number" v-for="(item, index) in pages" :key="item" @click="choosePage(index)">
      {{ item }}
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Page',
  computed: {
    ...mapGetters([
      'getCategoryList'
    ]),
    methods: {
      ...mapActions([
        'fetchCategoryListData'
      ]),
      ...mapMutations([
        'setCategoryList'
      ]),
      pages () {
        const gettingList = this.$store.getters.getList
        return Math.ceil(gettingList.length / 5)
      },
      choosePage (page) {
        const startNum = page * this.count
        const lastNum = startNum + this.count
        this.activeList = this.list.slice(startNum, lastNum)
      }
    }
    // created () {
    //   this.$store.commit('setCategoryList', this.fetchCategoryListData())
    // }
  }
}
</script>

<style lang="scss" scoped>
  .v-page{
    cursor: pointer;
    display: flex;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    &__number{
      margin: 0 10px;
    }
  }
</style>
