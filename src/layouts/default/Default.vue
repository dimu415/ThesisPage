<template>
  <v-app>
    <DefaultSide v-if="isPostPage"/>
    
    <default-bar />
    <v-main>
      <v-container class="fill-height">
        <v-responsive class="align-center fill-height">
          <default-view />
        </v-responsive>
      </v-container>
    </v-main>
    <DefaultFooter />
  </v-app>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, watch,onMounted,computed } from 'vue';
import DefaultBar from './AppBar.vue';
import DefaultSide from './SideBar.vue';
import DefaultFooter from './FooterBar.vue';
import DefaultView from './View.vue';

const route = useRoute();
const isPostPage = computed(() => {
  return route.name === 'PostList'; // 라우트 이름이 'post'일 때만 활성화
});
</script>
