<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
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
