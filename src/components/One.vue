<template>
  <v-container>
    <v-btn @click="addPost" class="mb-4">Добавить пост</v-btn>
    <v-data-table :headers="headers" :items="posts" @click:row="selectPost" class="elevation-1">
      <template v-slot:item.action="{ item }">
        <v-icon @click.stop="editPost(item)" class="mr-2">edit</v-icon>
        <v-icon @click.stop="deletePost(item)">delete</v-icon>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>Редактировать Пост</v-card-title>
        <v-card-text>
          <v-text-field v-model="editedPost.title" label="Заголовок"></v-text-field>
          <v-text-field v-model="editedPost.body" label="Описание"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="savePost">Сохранить</v-btn>
          <v-btn color="secondary" @click="closeDialog">Отмена</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
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
        { text: 'Описание', value: 'body' },
        { text: 'Действия', value: 'action', sortable: false },
      ],
      dialog: false,
      editedPost: { id: null, title: '', body: '' },
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        this.posts = response.data;
      });
    },
    selectPost(post) {
      this.editedPost = { ...post };
      this.dialog = true;
    },
    editPost(post) {
      this.selectPost(post);
    },
    deletePost(post) {
      if (confirm('Вы уверены, что хотите удалить этот пост?')) {
        this.posts = this.posts.filter(p => p.id !== post.id);
        alert('Пост успешно удален');
      }
    },
    savePost() {
      const index = this.posts.findIndex(p => p.id === this.editedPost.id);
      if (index !== -1) {
        this.posts.splice(index, 1, this.editedPost);
        alert('Пост успешно отредактирован');
      } else {
        this.posts.push({ ...this.editedPost, id: Date.now() });
        alert('Пост успешно добавлен');
      }
      this.closeDialog();
    },
    closeDialog() {
      this.dialog = false;
      this.editedPost = { id: null, title: '', body: '' };
    },
    addPost() {
      this.editedPost = { id: null, title: '', body: '' };
      this.dialog = true;
    },
  },
};
</script>
