<template>
  <div>
    <div class="links">
      <div class="links__container">
        <div v-for="item in listBTN" :key="item.category" class="form__btn" @click="linkHandler(item)">
          {{item.category}}: {{item.params.value}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { quickBTNs } from '@/assets/selects'
export default {
  components: {
  },
  name: 'Links',
  computed: {
    listBTN () {
      return quickBTNs
    }
  },
  methods: {
    ...mapMutations('general', ['setFormVisible']),
    linkHandler (item) {
      const { category: name, params } = item
      //   избавление от дубликатов ссылок
      if (this.$route.name !== name) {
        this.$router.push({ name, params })
        this.setFormVisible(false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .links{
    &__container {
      margin: auto;
      max-width: 1000px;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
