<template>  
  <div>  
    <v-file-input v-model="file" label="Выберите файл" @change="onFileChange"></v-file-input>  
    <v-btn @click="uploadFile" :disabled="!file">Отправить</v-btn>  
    <v-snackbar v-model="snackbar" :timeout="3000">{{ snackbarText }}</v-snackbar>  
  </div>  
</template>  

<script>  
import axios from 'axios';  

export default {  
  data() {  
    return {  
      file: null,  
      snackbar: false,  
      snackbarText: '',  
    };  
  },  
  methods: {  
    onFileChange(event) {  
      this.file = event.target.files[0];  
    },  
    async uploadFile() {  
      const formData = new FormData();  
      formData.append('file', this.file);  
      try {  
        await axios.post('https://api.escuelajs.co/api/v1/files/upload', formData);  
        this.snackbarText = 'Файл успешно загружен!';  
      } catch (error) {  
        this.snackbarText = 'Ошибка при загрузке файла.';  
      } finally {  
        this.snackbar = true;  
      }  
    },  
  },  
};  
</script>