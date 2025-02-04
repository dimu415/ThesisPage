<template>
  <v-app-bar app clipped-left height="150" >
    <v-container>
       
      <!-- 두 번째 줄: 검색창 -->
      <v-row class="d-flex align-center g-0 h-100" dense>
        <v-col cols="2" class="d-flex justify-start">
          <v-app-bar-title>
            <v-btn @click="navigateToAbout(`/`)" prepend-icon="$vuetify" stacked variant="outlined">
              Titleasdasdasd
            </v-btn>
          </v-app-bar-title>
        </v-col>
        <v-col cols="4" class="d-flex">
          <v-card-text class="py-0">
            <v-text-field
              v-model="searchQuery"
              :loading="loading"
              append-inner-icon="mdi-magnify"
              density="compact"
              label="Search templates"
              variant="solo"
              hide-details
              single-line
              @click:append-inner="onClick"
            >
            </v-text-field>
          </v-card-text>
        </v-col>
        <v-col cols="6" class="d-flex justify-end align-center">
  <!-- 버튼들 수평 정렬 -->
  <v-btn
    v-for="link in links"
    :key="link"
    size="small"
    rounded="xl"
    variant="text"
    @click="navigateToAbout(link.link)"
  >
    {{ link.name }}
  </v-btn>

  <!-- 사용자 메뉴 버튼 (우측 상단) -->
  <v-menu min-width="200">
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <v-avatar>
          <v-img
          v-if="user.state"
            alt="John"
            src="https://cdn.vuetifyjs.com/images/john.jpg"
          ></v-img>
          <v-icon
          v-else icon="mdi-account-circle"></v-icon>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <div class="mx-auto text-center">
          <v-avatar color="brown">
            <span class="text-h5">{{ user.initials }}</span>
          </v-avatar>
          <div v-if="user.state">
            <p class="text-caption mt-1">{{ user.email }}</p>
            <h3>{{ user.fullName }}</h3>
            <v-btn size="x-small" @click="user.state=false">
              <p class="text-caption mt-1">Logout</p>
            </v-btn>
          </div>
          <v-btn v-else size="small" @click="user.state=true">
            <p class="text-caption mt-1">Login</p>
          </v-btn>
          
          <v-divider class="my-3"></v-divider>
          <v-btn variant="text" rounded>Edit Account</v-btn>
          <v-divider class="my-3"></v-divider>
          <v-btn variant="text" rounded @click="navigateToAbout(`/PostCreate`)">CreatePost</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</v-col>

      </v-row>
      <!-- 세 번째 줄: 카테고리 -->
     
      <v-row justify="start">
        <div class="text-center">
          <v-menu
            open-on-hover
            v-for="Main in store.Main_Category" :key="Main" 
          >
            <template v-slot:activator="{ props }">
              <v-btn
                color="primary"
                v-bind="props"
              >
              {{ Main }}
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="Sub in store.Sub_Category"
                :key="Sub"
              >
                <v-list-item-title>{{ Sub }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-row>
      
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
const searchQuery=ref("");
const loaded = ref(false);
const loading = ref(false); 
const links = [
  { name: "About Us", link: "/about" },
  { name: "Team", link: "/team" },
  { name: "Services", link: "/services" },
  { name: "Blog", link: "/blog" },
  { name: "Contact Us", link: "/contact" }
];
const user = ref({
  state:false,
  initials: 'JM',
  fullName: 'JINMUN',
  email: 'john.doe@doe.com',
});

const onClick = () => {
  
  loading.value = true;
  search();
};
const search = () => {
  if (searchQuery.value.trim() !== '') {
    router.push({ path: '/search', query: { searchQuery: searchQuery.value} });
  }
  loading.value = false;
};
const navigateToAbout = (path) => {
  //const path=`/`;
  console.log(path);
  router.push(path);
};
</script>

<style scoped>
.v-app-bar {
  padding: 16px;
}
</style>
