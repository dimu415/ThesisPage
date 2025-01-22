<template>
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
    </v-navigation-drawer>
  </template>
  
<script setup>
import { ref } from 'vue';

    const items = ["주제 1", "주제 2", "주제 3", "주제 4", "주제 5"];
</script>
  
<style scoped>
  .v-navigation-drawer {
    width: 240px;
  }
  </style>
  