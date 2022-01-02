<template>
<div class="container">
  <br>
  <Links/>
  <br>
  <ShowForm @showForm="showForm"
  :isOn="show_Form"/>
  <!-- <PaymentForm v-show="show_Form"/>
  <PaymentList/> -->
  <PaymentForm v-show="formVisible"/>
  <PaymentList/>
  <ShowCategory @showCategory="showCategory"
  :isOn="show_Category"/>
  <AddCategory v-show="show_Category"/>
  <!-- <Pagination/> -->
</div>
</template>

<script>
import PaymentList from '@/components/PaymentList.vue'
import PaymentForm from '@/components/PaymentForm.vue'
import ShowForm from '@/components/ShowForm.vue'
import ShowCategory from '@/components/ShowCategory.vue'
import AddCategory from '@/components/AddCategory.vue'
import Links from '@/components/Links.vue'
import { mapState } from 'vuex'
// import Pagination from '@/components/Page.vue'

export default {
  name: 'List',
  components: {
    PaymentList,
    PaymentForm,
    ShowForm,
    ShowCategory,
    AddCategory,
    Links
  //  Pagination
  },
  data () {
    return {
      show_Form: false,
      show_Category: false
    }
  },
  computed: {
    ...mapState('general', ['formVisible'])
  },
  methods: {
    showForm (isOn) {
      this.show_Form = isOn
    },
    showCategory (isOn) {
      this.show_Category = isOn
    }
  }
}
</script>

<style  lang="scss">
.container{
width: 500px;
margin: 0 auto;
}
// .link{
  // &__dash{
  //   right: -45%;
  //   top: 100px;
  //   position: relative;
  // }
// }
</style>
