<template>
    <div>
    <!-- через слоты передаем нестабильные данные (могу быть,а  могут и нет) и разметку -->
      <div class="header"></div>
      <slot name="header"></slot>
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'SlotExample',
  data () {
    return {
      category: '',
      value: null
    }
  }
}
</script>

<style scoped>

</style>
