<template>
  <v-app-bar app clipped-left height="150" >
    <v-container>
      <v-row class="d-flex align-center g-0 h-100" dense>
        <v-col cols="2" class="d-flex justify-start">
          <v-app-bar-title class="mt-">
            <v-btn @click="navigateToAbout('')" prepend-icon="$vuetify" stacked variant="outlined">
              Titleasdasdasd
            </v-btn>
          </v-app-bar-title>
        </v-col>
      </v-row>
      <v-row >
            <v-col cols="1">
                <v-select
                    label="FontSize"
                    v-model="Size"
                    :items="FontSize"
                    variant="outlined"
                    @update:modelValue="changeFontSize(Size)"
                ></v-select>
            </v-col>
            <v-col>
                <v-btn-toggle 
                variant="outlined" 
                multiple
                >
                    <v-btn v-for="(style,index) in TextStyle" :key="index"
                    @click="style.value"
                    variant="text">
                        <v-icon :icon="style.icon"></v-icon>
                    </v-btn>
                </v-btn-toggle>
                
                <v-btn-toggle 
                variant="outlined" 
                divided
                >
                    <v-menu location="end">
                        <template v-slot:activator="{ props }">
                        <v-btn :color="FontColor" variant="text" v-bind="props"
                        @click="setFontColor(FontColor)">font
                            <v-icon ></v-icon>
                            </v-btn>
                        </template>
                        <v-color-picker hide-inputs show-swatches v-model="FontColor"
                        ></v-color-picker>
                    </v-menu>
                    <v-menu location="end">
                        <template v-slot:activator="{ props }">
                        <v-btn :color="FillColor" variant="text" v-bind="props"
                        @click="setFontBackground(FillColor)">Fill
                            <v-icon ></v-icon>
                            </v-btn>
                        </template>
                        <v-color-picker hide-inputs show-swatches v-model="FillColor"
                        ></v-color-picker>
                    </v-menu>
                </v-btn-toggle>
                <v-btn-toggle 
                variant="outlined" 
                divided
                >
                    <v-btn v-for="(style,index) in TextAlign" :key="index"
                    @click="style.value"
                    variant="text">
                        <v-icon :icon="style.icon"></v-icon>
                    </v-btn>
                </v-btn-toggle>
                
            </v-col>
            <v-col>
                <v-btn-toggle color="#b2d7ef" density="comfortable" rounded="pill" divided>
                <v-btn class="pe-2" prepend-icon="mdi-image" variant="flat" @click="store.GetImg">
                    <div class="text-none font-weight-regular">IMAGE</div>

                    <v-dialog activator="parent" max-width="500">
                        <template v-slot:default>
                            <v-card rounded="lg">
                            <v-card-title>asd</v-card-title>
                            <v-card-text>
                                <v-row>
                                  <v-col 
                                  v-for="(image,index) in store.Post_image"
                                  :key="index"
                                  cols="3">
                                      <v-img
                                        :width="100"
                                        aspect-ratio="16/9"
                                        cover
                                        :src="image"
                                        @click="insertImage(image)"
                                      ></v-img>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            </v-card>
                        </template>
                    </v-dialog>
                </v-btn>
                <input type="file" hidden id="upload-image" @change="handleImageUpload" />
                <label for="upload-image"
                class="file-label text-center text-button"  
                >    
                <v-icon icon="mdi-plus-thick"></v-icon>
                </label>
                </v-btn-toggle>
            </v-col>
        </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>

import { ref} from 'vue'
import {setStyle,changeFontSize,setFontColor,setFontBackground,alignText,insertImage} from '@/components/PostCreate/Postroule'
import { useCounterStore } from '@/store/DataManager.js'
import { useRouter } from 'vue-router';

const router = useRouter(); 
const store =useCounterStore()
const handleImageUpload =async (event) => {
  const file = event.target.files[0];
  store.uploadImage(file)
};
const Size=ref(8)
const TextStyle=ref([
        {
            icon:'mdi-format-bold',
            value:() => setStyle('bold')
        },
        {
            icon:'mdi-format-italic',
            value:() => setStyle('italic')
        },
        {
            icon:'mdi-format-underline',
            value:() => setStyle('underline')
        },
        {
            icon:'mdi-format-strikethrough-variant',
            value:() => setStyle('strikeThrough')
        },
        {
            icon:'mdi-numeric-1-box',
            value:() => setStyle('insertOrderedList')
        },
        {
            icon:'mdi-circle-medium',
            value:() => setStyle('insertUnorderedList')
        }
    ])
const TextAlign=ref([
        {
            icon:'mdi-format-align-left',
            value:() => alignText('Left')
        },
        {
            icon:'mdi-format-align-center',
            value:() => alignText('Center')
        },
        {
            icon:'mdi-format-align-right',
            value:() => alignText('Right')
        },
        {
            icon:'mdi-format-align-justify',
            value:() => alignText('Full')
        },
    ])
const FontColor=ref()
const FillColor=ref()
const FontSize=ref([8,12,16,20,24,30,38,45])
const navigateToAbout = (path) => {
  //const path=`/`;
  router.push(path);
};
</script>

<style scoped>
.v-app-bar {
  padding: 16px;
}
</style>
