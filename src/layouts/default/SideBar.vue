<template>
  <!--
    <v-navigation-drawer app permanent clipped >
      <v-list>
        <v-list-item title="My Application" subtitle="Vuetify" height="175"></v-list-item>
        <v-divider></v-divider>
        <v-list-item-group>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-content>
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer -->
    
    <v-card class="h-100" >
      <v-list lines="two">
        <v-list-item
    v-for="(subCategories, Main) in store.Category"
    class="font-weight-black"
    :key="Main"
    :title="Main"
  >
    <!-- Sub 카테고리 리스트 -->
    <v-list>
      <v-list-item
        v-for="Sub in subCategories"
        :key="Sub"
        class="font-weight-regular"
        :subtitle="Sub"
        @click="store.navigateToPost_List(Main, Sub)"
      >
      </v-list-item>
          
        <v-divider class="border-opacity-75" color="success" ></v-divider>
        </v-list>
      </v-list-item>
      </v-list>

      <PopularListDisplay/>

    </v-card>
  </template>
  
<script setup>
import { ref } from 'vue';

import PopularListDisplay from '@/components/HomeComponents/PopularListDisplay.vue';

import { useCounterStore } from '@/store/DataManager.js'
const store =useCounterStore()

</script>
  
<style scoped>
  .v-navigation-drawer {
    width: 240px;
  }
  </style>
  