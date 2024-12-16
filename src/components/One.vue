<template>  
  <div>  
    <v-btn @click="addPost">Добавить пост</v-btn>  
    <v-data-table :headers="headers" :items="posts" @click:row="openDrawer" pagination>  
      <template v-slot:item.actions="{ item }">  
        <v-icon @click.stop="confirmDelete(item.id)">mdi-delete</v-icon>  
      </template>  
    </v-data-table>  
    <v-dialog v-model="dialog" max-width="600px">  
      <v-card>  
        <v-card-title>  
          <span>{{ editMode ? 'Редактирование поста' : 'Добавление поста' }}</span>  
        </v-card-title>  
        <v-card-text>  
          <v-text-field v-model="postData.title" label="Заголовок"></v-text-field>  
          <v-textarea v-model="postData.body" label="Текст поста"></v-textarea>  
        </v-card-text>  
        <v-card-actions>  
          <v-btn @click="savePost">Сохранить</v-btn>  
          <v-btn @click="dialog = false">Закрыть</v-btn>  
        </v-card-actions>  
      </v-card>  
    </v-dialog>  
  </div>  
</template>  

<script>  
import axios from 'axios';  

export default {  
  data() {  
    return {  
      posts: [],  
      headers: [  
        { text: 'ID', value: 'id' },  
        { text: 'Заголовок', value: 'title' },  
        { text: 'Текст', value: 'body' },  
        { text: 'Действия', value: 'actions', sortable: false },  
      ],  
      dialog: false,  
      editMode: false,  
      postData: {  
        id: null,  
        title: '',  
        body: '',  
      },  
    };  
  },  
  created() {  
    this.fetchPosts();  
  },  
  methods: {  
    async fetchPosts() {  
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');  
      this.posts = response.data;  
    },  
    openDrawer(post) {  
      this.selectedPost = post;  
      this.dialog = true;  
    },  
    async savePost() {  
      if (this.editMode) {  
        await axios.put(`https://jsonplaceholder.typicode.com/posts/${this.postData.id}`, this.postData);  
      } else {  
        await axios.post('https://jsonplaceholder.typicode.com/posts', this.postData);  
        this.posts.push(this.postData);  
      }  
      this.dialog = false;  
      this.fetchPosts(); // Обновление постов  
    },  
    addPost() {  
      this.editMode = false;  
      this.postData = { id: null, title: '', body: '' };  
      this.dialog = true;  
    },  
    async confirmDelete(id) {  
      // Модальное окно подтверждения удаления  
      const isConfirmed = confirm('Вы уверены, что хотите удалить этот пост?');  
      if (isConfirmed) {  
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);  
        this.fetchPosts();  
      }  
    },  
  },  
};  
</script>