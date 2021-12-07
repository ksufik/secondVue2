<template>
    <div>
        <!-- <div v-for="item in list" :key="item.value">{{item}}</div> -->
        <!-- summ = {{getFV}} -->
        <!-- list: {{getList}} -->
         <div class="table">
        <div class="table__row">
          <div class="table__col table__col_dark">№</div>
          <div class="table__col table__col_dark">Date</div>
          <div class="table__col table__col_dark">Category</div>
          <div class="table__col table__col_dark">Value</div>
        </div>
        <hr>
       <div v-for="(item, index) in getList" :key="index" >
          <div  class="table__row" >
            <div class="table__col">{{ index+1 }}</div>
            <div class="table__col">{{ item.date }}</div>
            <div class="table__col">{{ item.category }}</div>
            <div class="table__col">{{ item.value }}</div>
          </div>
          <hr>
        </div>
    </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'PaymentList',
  methods:
  {
    ...mapActions([
      'fetchData'
    ]),
    ...mapMutations([
      'setList'
    ])
  },
  computed: {
    ...mapGetters([
      'getList',
      'getFullValue'
    ]),
    // getFV () {
    //   return this.$store.getters.getFullValue
    // },
    getList () {
      return this.$store.getters.getList
    }
  },
  // получение данных
  created () {
    this.$store.commit('setList', this.fetchData())
  }
}
</script>

<style lang="scss">
.table{
  min-height: 300px;
  font-family: sans-serif;
  &__container{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }
  &__row{
    padding: 15px 5px;
    display: flex;
    width: 100%;
    // border-bottom: 1px solid rgb(206, 203, 203);
  }
  &__col{
    width: 25%;
    &_dark {
      font-weight: bold;
    }
  }
}
</style>
