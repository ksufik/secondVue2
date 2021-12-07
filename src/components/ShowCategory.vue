<template>
    <button class="show_btn form__btn"
    @click="show(isOn)">
    ADD NEW CATEGORY</button>
</template>

<script>
export default {
  name: 'ShowCategory',
  props: ['isOn'],
  data () {
    return {
    //   isShow: true
    }
  },
  methods: {
    show (isOn) {
      this.$emit('showCategory', !isOn)
    }
  }
}
</script>
