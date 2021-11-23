<template>
    <button class="show_btn form__btn"
    @click="show(isOn)">
    ADD NEW COST</button>
</template>

<script>
export default {
  name: 'ShowForm',
  props: ['isOn'],
  data () {
    return {
    //   isShow: true
    }
  },
  methods: {
    show (isOn) {
      this.$emit('showForm', !isOn)
    }
  }
}
</script>
