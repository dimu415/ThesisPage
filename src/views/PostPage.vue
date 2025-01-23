<template>
  
  <v-row class="mt-5">
    <v-col>
    <Post />
    </v-col>
  </v-row>
</template>


<script setup>
import { ref } from 'vue';

import { useRouter } from 'vue-router';
import { useCounterStore } from '@/store/DataManager'

import Post from '@/components/PostComponents/Post.vue';

</script>

<style>

</style>