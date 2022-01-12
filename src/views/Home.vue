<template>
  <div class="home">
    <Links/>
    <ListComponent/>
    <SlotExample >
      <template v-slot:header>
      </template>
    </SlotExample>
  </div>
</template>

<script>
import Links from '@/components/Links.vue'

export default {
  name: 'Home',
  components: {
    Links
  }
}
</script>
