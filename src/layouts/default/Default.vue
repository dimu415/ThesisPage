<template>
  <v-app>
    <default-bar v-if="isAppBar" />
    <CreatePostAppbar v-else/>
    <v-main>
      <v-container class="fill-height">
        <v-responsive class="align-center fill-height">
          <v-row class="mt-5">
            <v-col cols="2">
              <DefaultSide v-if="isSideBar" />
            </v-col>
            <v-col cols="10">
              <default-view />
            </v-col>
          </v-row>
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
import CreatePostAppbar from './CreatePostBar.vue';
import DefaultView from './View.vue';

const route = useRoute();
const isSideBar = computed(() => {
  return route.name !== '' && route.name !== 'PostCreate';
});
const isAppBar = computed(() => {
  return route.name !== '' && route.name !== 'PostCreate';
});
</script>
