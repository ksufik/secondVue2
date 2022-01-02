<template>
  <div class="form-panel">
    <div class="form__btn" @click="changeHandler">{{ formVisible ? '- Hide' : '+ Show' }} Form</div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'VFormPanel',
  computed: {
    ...mapState('general', ['formVisible'])
  },
  methods: {
    ...mapMutations('general', ['setFormVisible']),
    changeHandler () {
      this.setFormVisible()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
