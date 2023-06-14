<script>
import HeaderComponent from './components/HeaderComponent.vue';
export default {
    name: "App",
    components: { HeaderComponent }
}
</script>

<template>
  <HeaderComponent/>
  
  <main>
    <router-view></router-view>
  </main>
  
  <footer>
    <h3>Footer</h3>
  </footer>
</template>

<style scoped>

</style>
