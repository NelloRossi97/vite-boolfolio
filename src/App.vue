<script>
import HeaderComponent from './components/HeaderComponent.vue';
export default {
    name: "App",
    components: { HeaderComponent }
}
</script>

<template>
  <HeaderComponent/>
  <router-view></router-view>
  <footer>
    <h3>Footer</h3>
  </footer>
</template>

<style scoped>

</style>
