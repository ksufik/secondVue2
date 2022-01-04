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
        <div class="table__col table__col_dark"></div>
      </div>
      <hr>
      <template>
        <div v-for="(item, index) in getList" :key="index" >
          <div  class="table__row" >
            <div class="table__col">{{ index + 1 }}</div>
            <div class="table__col">{{ item.date }}</div>
            <div class="table__col">{{ item.category }}</div>
            <div class="table__col">{{ item.value }}</div>
            <div class="table__col">
                <div class="table__points" @click="$modal.show(item)">
                  :
                </div>
                <transition name="fade">
                  <ModalWindow v-if="item.id == activeID" :item="item"></ModalWindow>
                </transition>
              </div>
          </div>
          <hr>
        </div>
      </template>
      <!-- <div v-for="(item, index) in getList" :key="index" >
        <div  class="table__row" >
          <div class="table__col">{{ index+1 }}</div>
          <div class="table__col">{{ item.date }}</div>
          <div class="table__col">{{ item.category }}</div>
          <div class="table__col">{{ item.value }}</div>
          <div class="table__col"></div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import ModalWindow from '@/components/ModalWindow.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'PaymentList',
  components: {
    ModalWindow
  },
  data () {
    return {
      M_Window: true,
      M_Window_Settings: {},
      activeID: null
    }
  },
  mounted () {
    this.$modal.EventBus.$on('shown', this.onShown)
    this.$modal.EventBus.$on('hide', this.onHide)
  },
  methods:
  {
    ...mapActions([
      'fetchData'
    ]),
    ...mapMutations([
      'setList'
    ]),
    onShown (params) {
      // this.M_Window = settings.name
      // this.M_Window_Settings = settings
      this.activeID = params.name.id
    },
    onHide () {
      // this.M_Window = ''
      // this.M_Window_Settings = {}
      this.activeID = null
    }
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
  text-transform: capitalize;
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
    position: relative;
    width: 25%;
    &_dark {
      font-weight: bold;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
