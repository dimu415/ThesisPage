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
            @click="nav"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>Subtitle for {{ item.title }}</v-list-item-subtitle>
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
      items.value = [
        { id: 1, title: 'Latest Topic 1' },
        { id: 2, title: 'Latest Topic 2' },
      ];
};
const nav=()=>{
  store.navigateToAbout_Post_List("ca","te");
}
onMounted(() => {
  initializeItems();
});
</script>

<style>

</style>