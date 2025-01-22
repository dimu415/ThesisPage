<template>
  <v-card class="mx-auto pa-5"  flat>
        <!-- 카드 타이틀 -->
        <v-card-title>
          RecommendedList
        </v-card-title>

        <v-divider class="border-opacity-75 mb-5" color="success" ></v-divider>
        <!-- 리스트 -->
         <v-row>
          <v-col v-for="item in items"
          :key="item.id"
          cols="4">
            <v-card  class="square-card" >
              <v-card-title>
                {{ item.title }}
              </v-card-title>
              <v-card-text>
                {{ item.title }}
              </v-card-text>
            </v-card>
          </v-col>
         </v-row>
      </v-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const items = ref([]);
const initializeItems = () => {
      items.value = [
        { id: 1, title: 'Recommended Topic 1' },
        { id: 2, title: 'Recommended Topic 2' },
        { id: 2, title: 'Recommended Topic 3' },
        { id: 2, title: 'Recommended Topic 4' },
        { id: 2, title: 'Recommended Topic 5' },
      ];
};

onMounted(() => {
  initializeItems();
});
</script>

<style>

</style>