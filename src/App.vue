<template>
  <AppNav />
  <div class="container-fluid page-body-wrapper">
        <RightSideBar />
        <SideNav />
        <router-view />
       
    </div>
 
</template>

<script>
import AppNav from './components/AppNav.vue';
import RightSideBar from './components/RightSideBar.vue';
import SideNav from './components/SideNav.vue';



export default {
  name: 'App',
  components: {
    AppNav,
    RightSideBar,
    SideNav,
  
  }
}
</script>


<style>

</style>
