<template>
  <v-container fluid >
    <v-sheet color="light-green-lighten-5" class="pa-5">
      <v-text-field placeholder="Title" variant="underlined"></v-text-field>
    <v-textarea
      v-model="Post_Content"
      bg-color="light-green-lighten-5"
      variant="solo"
      rows="30"
      auto-grow
    ></v-textarea>
    </v-sheet>
  
  </v-container>
</template>
  
  <script setup>
  //type="submit"
  import { ref,onMounted} from 'vue'
  import { useCounterStore } from '@/store/DataManager.js'
  const store =useCounterStore()
 
  const Post_Content=ref("")
  </script>
  <style scoped>

  </style>