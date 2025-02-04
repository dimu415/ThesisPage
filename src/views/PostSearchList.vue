<template>
  <v-row class="mt-5">
    <v-col>
    <PostSearch />
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, watch,onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCounterStore } from '@/store/DataManager.js'
import PostSearch from '@/components/PostComponents/PostSearch.vue';
const store =useCounterStore()
const router = useRouter();

  const fetchPost = async () => {
  
  console.log(router.currentRoute.value.params)
  
};
onMounted(fetchPost);
watch(router.currentRoute, (to, from) => {
  if (to.params.id !== from.params.id) {
    
    fetchPost();
  }
});
</script>
