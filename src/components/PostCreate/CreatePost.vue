<template>
        <v-btn @click="console.log(editor.outerHTML)">

        </v-btn>
      <v-form @submit.prevent>
        <v-row class="ma-10">
          
          <v-col cols="12">
            <v-card class="mx-auto" max-width="100%" >
              <v-card-title > 
                <v-text-field  v-if="!store.PostModify"
                 label="제목 입력" variant="underlined" v-model="Title">
                </v-text-field>
                <v-text-field  v-else 
                 label="제목 입력" variant="underlined" v-model="store.PostModify.Title">
                </v-text-field>
              </v-card-title>
                 
              <v-card-text >
                <div v-if="!store.PostModify"
                ref="editor" :contenteditable=true class="ma-3 editable-content" @input="handleInput">
                </div>
                <div ref="editor" v-else v-html="marked(store.PostModify.Contents)"></div>
              </v-card-text>
              <v-dialog
                v-model="sizecontroller"
                width="auto"
              >
                <v-card
                width="400"
                  max-width="400"
                >
                <v-card-text>
                  
                  <v-row>
                    <v-col>
                      <v-text-field label="x" variant="outlined" v-model="x"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field label="y" variant="outlined" v-model="y"></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>
                  <template v-slot:actions>
                    <v-btn
                      class="ms-auto"
                      text="Ok"
                      @click="sizecontroller = false"
                    ></v-btn>
                  </template>
                </v-card>
              </v-dialog>
            </v-card>
          </v-col>
        </v-row>
        <router-link to="/">
           
        </router-link>
        <CreatePostBottomVue/>
      </v-form>
        
  </template>
  
  <script setup>
  //type="submit"
  import { ref,onMounted} from 'vue'
  import { useCounterStore } from '@/store/DataManager.js'
  import {editor,Title,sizecontroller,x,y} from'./Postroule.js'
  import CreatePostAppbar from './CreatePostAppbar.vue';
  import CreatePostBottomVue from './CreatePostBottom.vue';
  import { marked} from 'marked'
  const store =useCounterStore()
  const selectedImage = ref(null);


const handleInput = (event) => {
  // Handle input events if needed
};

  </script>
  <style scoped>
  .editable-content {
  min-height: 200px; /* 필요에 따라 조정하세요 */
   /* 내용이 넘칠 경우 스크롤 가능하도록 설정합니다 */
}
  </style>