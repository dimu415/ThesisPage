<template>
  <router-view />
</template>

<script setup>
    import { onBeforeMount } from 'vue';
  import { useCounterStore } from '@/store/DataManager.js'
  const store =useCounterStore()
  onBeforeMount(() => {
    store.JsonFileRead(); // JSON 파일 읽기 실행
});
</script>
