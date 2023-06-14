<template>
    <nav class="navbar navbar-expand-lg text-white">
      <div class="container-fluid">
        <a href="" class="me-5"><img src="/images/logo.png" class="img-fluid" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(link,index) in menu" :key="index">
                <router-link :to="{name: link.routeName}" class="nav-link">
                    {{ link.label }}
                </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
    export default {
    name: 'HeaderComponent',
    data() {
        return {
            menu: [
                    {
                        label: 'Home',
                        routeName: 'home'
                    },
                    {
                        label: 'Projects',
                        routeName: 'projects'
                    },
                    {
                        label: 'About Us',
                        routeName: 'about'
                    },
                    {
                        label: 'Contacts',
                        routeName: 'contacts'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
nav{
  background: $bg-color;
  color: white;
  height: 80px;
  img{
    max-width: 100px;
  }
  .nav-link{
    color: white;
  }
}
</style>