<template>
  <v-row>
    <v-col cols="12">
      <RecommendedListDisplay/>
    </v-col>
    <v-col>
      <LatestListDisplayCopy/>
    </v-col>
  </v-row>
</template>

<script setup>
  import LatestListDisplayCopy from '@/components/HomeComponents/LatestListDisplay copy.vue';
  import RecommendedListDisplay from '@/components/HomeComponents/RecommendedListDisplay.vue';
  import PopularListDisplay from '@/components/HomeComponents/PopularListDisplay.vue';
  import { ref, watch,onBeforeMount } from 'vue';
  import { useRouter } from 'vue-router';
  import { useCounterStore } from '@/store/DataManager.js'
  const store =useCounterStore()
</script>
