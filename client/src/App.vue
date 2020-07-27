<template>
  <v-app class="home">
    <navigation-main/>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import NavigationMain from './components/navigation/Main'

export default {
  components: { NavigationMain }
}

</script>

<style scoped>
  .home {
    font-family: Verdana;
  }
</style>
