<template>
  <v-card class="mx-auto" flat >
        <!-- 카드 타이틀 -->
        <v-tabs v-model="tab" align-tabs="end" color="deep-purple-accent-4">
            <v-tab v-for=" (name,n) in tab_name" :key="n" :value="n">{{name}}</v-tab>
          </v-tabs>

        <v-divider class="border-opacity-75" color="success" ></v-divider>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item v-for="n in 3" :key="n" :value="n">
            <v-container fluid>
              <v-list lines="two" rounded="lg"  class="rounded-xl" >
                <v-list-item
                  v-for="item in items[tab]"
                  :key="item.id"
                  @click="nav(item.id)"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle> {{ item.Main_Category }}/{{ item.Sub_Category }}   {{ item.date }}</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-container>
          </v-tabs-window-item>
        </v-tabs-window>
        <v-divider class="border-opacity-75" color="success" ></v-divider>
      </v-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useCounterStore } from '@/store/DataManager.js'
import {getRandomPosts,sortPostsReverseChronologically,sortPostsChronologically} from  './PostList'
const store =useCounterStore()

const items = ref([]);
const tab_name=ref(["전체글","최신글","추천글"])
const tab=ref("전체글");
onMounted(() => {
  items.value=[sortPostsReverseChronologically(),
  getRandomPosts(),
  sortPostsChronologically()];
});

const nav=(id)=>{
  store.navigateToPost(id);
  
}
</script>

<style>

</style>