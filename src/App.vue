<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>


<!-- <template>  
  <v-app>  
    <v-navigation-drawer v-model="drawer" app>  
      <!-- Данный код может содержать информацию о посте, если она открыта -->  
      <template v-if="selectedPost">  
        <v-list>  
          <v-list-item>  
            <v-list-item-title>{{ selectedPost.title }}</v-list-item-title>  
            <v-list-item-subtitle>{{ selectedPost.body }}</v-list-item-subtitle>  
          </v-list-item>  
        </v-list>  
        <v-btn @click="editPost">Редактировать</v-btn>  
      </template>  
    </v-navigation-drawer>  

    <v-app-bar app>  
      <v-toolbar-title>My Vue App</v-toolbar-title>  
      <v-spacer></v-spacer>  
      <v-btn @click="goto('one')">Вкладка 1</v-btn>  
      <v-btn @click="goto('two')">Вкладка 2</v-btn>  
    </v-app-bar>  

    <v-main>  
      <router-view />  
    </v-main>  
  </v-app>  
</template>  

<script>  
export default {  
  data() {  
    return {  
      drawer: false,  
      selectedPost: null,  
    };  
  },  
  methods: {  
    goto(route) {  
      this.$router.push(`/${route}`);  
    },  
    editPost() {  
      // Логика редактирования поста  
    },  
  },  
};  
</script>  

<style>  
/* Ваши стили */  
</style> -->