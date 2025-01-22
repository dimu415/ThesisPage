<template>
  <v-card class="mx-auto" flat >
        <!-- 카드 타이틀 -->
        <v-card-title>
          PopularList
        </v-card-title>
        <v-divider class="border-opacity-75" color="success" ></v-divider>
        <!-- 리스트 -->
        <v-list lines="two" rounded="lg" class="rounded-xl" >
          <v-list-item
            v-for="item in items"
            :key="item.id"
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

const items = ref([]);
const initializeItems = () => {
      items.value = [
        { id: 1, title: 'Popular Topic 1' },
        { id: 2, title: 'Popular Topic 2' },
      ];
};

onMounted(() => {
  initializeItems();
});
</script>

<style>

</style>