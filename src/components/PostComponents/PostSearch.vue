<template>
  <v-card class="mx-auto" :title="`${route.query.searchQuery} 검색결과` " >
        <v-divider class="border-opacity-75" color="success"></v-divider>

        <v-list lines="three">
          <v-list-item v-for="post in filteredPosts" :key="post">
            <v-card
              class="mx-auto "
              :title="post.Title"
              color="blue"
            >
                <v-card
                style="max-width: 100%; min-height: 100px;max-height: 100px;"
                flat
               color="blue"
                @click="FunC_post(post.PostId)">
                    <v-card-text class="text-subtitle-1 py-2 d-inline-bloc">
                    {{ post.Content }}
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

                  <v-list-item-title @click="FunC_writer(post.PostId)">writer {{ post.PostId }}</v-list-item-title>

                  <v-list-item-subtitle @click="FunC_date(post.PostId)">{{ post.Date }}</v-list-item-subtitle>

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
import { useRoute,useRouter } from 'vue-router';
const route = useRoute();  // ✅ 현재 라우트 정보
const router = useRouter(); // ✅ 네비게이션을 위해 사용
const store =useCounterStore()

const filteredPosts = computed(() => {
  return store.searchPosts(route.query.searchQuery);
 
});

const FunC_post=(id)=>{
  console.log(id);
    store.navigateToPost(id);
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