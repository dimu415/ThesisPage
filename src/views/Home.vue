<template>
  
  <v-row>
    <v-col>
      <RecommendedListDisplay />
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <LatestListDisplayCopy/>
    </v-col>
    <v-col> 
      <PopularListDisplay/>
    </v-col>
  </v-row>
</template>

<script setup>
  import LatestListDisplayCopy from '@/components/HomeComponents/LatestListDisplay copy.vue';
  import RecommendedListDisplay from '@/components/HomeComponents/RecommendedListDisplay.vue';
  import PopularListDisplay from '@/components/HomeComponents/PopularListDisplay.vue';
</script>
