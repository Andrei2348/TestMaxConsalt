<template>
  <v-container>
    <v-file-input label="Загрузить файл" v-model="file"></v-file-input>
    <v-btn @click="uploadFile" class="mt-2">Отправить</v-btn>
    <v-btn v-if="uploadedFileUrl" @click="downloadFile" class="mt-2">Скачать</v-btn>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      file: null,
      uploadedFileUrl: '',
    };
  },
  methods: {
    uploadFile() {
      const formData = new FormData();
      formData.append('file', this.file);
      axios.post('https://api.escuelajs.co/api/v1/files/upload', formData)
        .then(response => {
          this.uploadedFileUrl = response.data.location;
          alert('Файл успешно загружен');
        })
        .catch(error => {
          console.error(error);
          alert('Ошибка при загрузке файла');
        });
    },
    downloadFile() {
      window.open(this.uploadedFileUrl, '_blank');
    },
  },
};
</script>
