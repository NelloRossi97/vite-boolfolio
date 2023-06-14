<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
export default {
    name: "App",
    components: { HeaderComponent, FooterComponent }
}
</script>

<template>
  <HeaderComponent/>
  
  <main>
    <router-view></router-view>
  </main>
  
  <FooterComponent/>
</template>

<style scoped>

</style>
