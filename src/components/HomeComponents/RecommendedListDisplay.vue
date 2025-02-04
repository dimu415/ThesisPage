<template>
    <v-slide-group show-arrows>
      <v-slide-group-item
        v-for="item in items"
          :key="item.title"
      >
        <v-card class="ma-4">
            <v-img
              src='https://cdn.vuetifyjs.com/images/cards/house.jpg'
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              width="255px"
              cover
            >
              <v-card-title class="text-white" >
                {{ item.title }}
              </v-card-title>
            </v-img>
          </v-card>
      </v-slide-group-item>
    </v-slide-group>

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