<template>
  <v-app>
    <v-container>
      <v-tabs v-model="tab" background-color="primary" centered>
        <v-tab href="#/one">Tab One</v-tab>
        <v-tab href="#/two">Tab Two</v-tab>
      </v-tabs>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
    };
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f5;
}
.v-application {
  color: #424242;
}
</style>
