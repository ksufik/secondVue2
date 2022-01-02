<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- Зарегистрирован в main.js -->
    <ListComponent/>
    <SlotExample >
      <template v-slot:header>
      </template>
    </SlotExample>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import List from "../components/List.vue";

export default {
  name: 'Home',
  components: {
    // HelloWorld
    // List,
  }
}
</script>
