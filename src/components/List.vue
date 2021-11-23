<template>
<div class="container">
  <PaymentList :list="responseData"/>
  <!-- <div v-for="item in responseData" :key="item.value">
    {{item}}
  </div> -->
  <ShowForm @showForm="showForm"
  :isOn="show"/>
  <PaymentForm v-show="show"
   @add="addItem"/>
</div>
</template>

<script>
import PaymentList from '@/components/PaymentList.vue'
import PaymentForm from '@/components/PaymentForm.vue'
import ShowForm from '@/components/ShowForm.vue'

export default {
  name: 'List',
  components: {
    PaymentList,
    PaymentForm,
    ShowForm
  },
  data () {
    return {
      responseData: [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 450
        },
        {
          date: '12.03.2020',
          category: 'Transport',
          value: 120
        }
      ],
      show: false
    }
  },
  methods: {
    formatDate (date) {
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
    addItem (category, value) {
      this.responseData.unshift({ date: this.formatDate(new Date()), category: category, value: value })
    },
    showForm (isOn) {
      this.show = isOn
    }
  }
}
</script>

<style  lang="scss">
.container{
width: 500px;
margin: 0 auto
}
</style>
