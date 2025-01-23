<template>
  <v-app-bar app clipped-left height="150" >
    <v-container>
      <!-- 첫 번째 줄: 타이틀  -->
      <v-row justify="center" class="mb-3 text-center">
        <v-app-bar-title >
          <v-btn @click="navigateToAbout">Title</v-btn>
        </v-app-bar-title>
      </v-row>
       
      <!-- 두 번째 줄: 검색창 -->
          <v-row class=" g-0 h-100 align-center" no-gutters>
          <v-col cols="2">
            <v-select
              v-model="searchType"
              :items="searchOptions"
              outlined  
              variant="outlined"
              single-line
              hide-details
              flat
              dense
            />
          </v-col>
          <v-col class="d-flex align-center rounded-e-lg">
            <v-text-field
              append-inner-icon="mdi-magnify"
              label="Search templates"
              variant="outlined"
              hide-details
              single-line
              flat
              @click:append-inner="onSearch"
            ></v-text-field>
          </v-col>
          <v-col cols="1" >
            <v-btn prepend-icon="$vuetify" stacked variant="text">
              글쓰기
            </v-btn>
          </v-col>
          <v-col cols="1">
            <v-btn prepend-icon="$vuetify" stacked variant="text">
              정보
            </v-btn>
          </v-col>
        </v-row>
      <!-- 세 번째 줄: 카테고리 -->
       <!--
      <v-row justify="start">
        <v-btn v-for="category in categories" :key="category" text class="mr-2">
          {{ category }}
        </v-btn>
      </v-row>
      -->
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';

import { useRouter } from 'vue-router';
import { useCounterStore } from '@/store/DataManager'
  
const router = useRouter(); 
const store =useCounterStore()
// 검색 옵션 및 카테고리 설정
const searchOptions = ["전체", "제목", "저자"];
const searchType = ref("전체");
const categories = ["카테고리1", "카테고리2", "카테고리3", "카테고리4", "카테고리5"];

const keyword = ref('');
const onSearch = () => {
  console.log("검색 기준:", searchType.value);
};
const navigateToAbout = () => {
  const path=`/`;
  router.push(path);
};
</script>

<style scoped>
.v-app-bar {
  padding: 16px;
}
</style>
