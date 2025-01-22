<template>
  <v-card class="mx-auto" title="name" >
        <v-divider class="border-opacity-75" color="success"></v-divider>

        <v-list lines="three">
          <v-list-item v-for="n in 3" :key="n">
            <v-card
              class="mx-auto "
              :title="'title ' + n"
              color="blue"
            >
                <v-card
                style="max-width: 100%; min-height: 100px;max-height: 100px;"
                flat
               color="blue"
                @click="FunC_post">
                    <v-card-text class="text-subtitle-1 py-2 d-inline-bloc">
                    "Turns out semicolon-less style is easier and safer in TS
                    because most gotcha edge cases are type invalid as well."
                    </v-card-text>
                </v-card>
            
              <v-card-actions>
                <v-list-item class="w-100">
                  <template v-slot:prepend>
                    <v-avatar
                      color="grey-darken-3"
                      image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-avatar>
                  </template>

                  <v-list-item-title @click="FunC_writer(n)">writer {{n}}</v-list-item-title>

                  <v-list-item-subtitle @click="FunC_date(n)">date {{n}}</v-list-item-subtitle>

                  <template v-slot:append>
                    <div class="justify-self-end">
                      <v-icon class="me-1" icon="mdi-heart" @click="FunC_Like"></v-icon>
                      <span class="subheading me-2">256</span>
                      <span class="me-1">·</span>
                      <v-icon class="me-1" icon="mdi-share-variant" @click="FunC_share"></v-icon>
                      <span class="subheading">45</span>
                    </div>
                  </template>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-list-item>
        </v-list>
      </v-card>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue';
import { useCounterStore } from '@/store/DataManager.js'
const store =useCounterStore()

const FunC_post=()=>{
    console.log("Post_Name");
    console.log("Post_Content");
    console.log("Post_Content");
}
const FunC_writer=(writer)=>{
    console.log(writer);
}
const FunC_date=(date)=>{
    console.log(date);
}
const FunC_share=(postId)=>{
    console.log(`share${postId}`);
}
const FunC_Like=(postId)=>{
    console.log(`Like${postId}`);
}
</script>

<style>

</style>