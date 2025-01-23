<template>
  <v-card class="mx-auto" flat >
        <!-- 카드 타이틀 -->
        <v-card-title>
          LatestList
        </v-card-title>

        <v-divider class="border-opacity-75" color="success" ></v-divider>
        <!-- 리스트 -->
        <v-list lines="two" rounded="lg"  class="rounded-xl" >
          <v-list-item
            v-for="item in items"
            :key="item.id"
            @click="nav(item.id)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle> {{ item.Main_Category }}/{{ item.Sub_Category }}   {{ item.date }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
        <v-divider class="border-opacity-75" color="success" ></v-divider>
      </v-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useCounterStore } from '@/store/DataManager.js'
const store =useCounterStore()

const items = ref([]);

const initializeItems = () => {
  const Posts=store.posts.slice(-3);
  Posts.forEach(post => {
    items.value.push({
      id: post.PostId, 
      title: post.Title, 
      Main_Category: post.MainCategory ,
      Sub_Category: post.SubCategory,
      date: post.Date
    })
    
  });
  console.log(store.indexedPosts);
};

onMounted(() => {
  initializeItems();
});

const nav=(id)=>{
  store.asd(id);
  
}
</script>

<style>

</style>