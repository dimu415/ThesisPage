<template>
  <v-card class="mx-auto" flat >
        <!-- 카드 타이틀 -->
        <v-card-title>
          PoularList
        </v-card-title>

        <v-divider class="border-opacity-75" color="success" ></v-divider>
        <!-- 리스트 -->
        <v-list lines="one" rounded="lg"  class="rounded-xl" >
          <v-list-item
            v-for="item in items"
            :key="item.id"
            @click="nav(item.id)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
  store.posts.forEach(post => {
    items.value.push({
      id: post.PostId, 
      title: post.Title, 
    })
    
  });
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