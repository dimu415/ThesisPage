//stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';


export const useCounterStore = defineStore('jinmun', () => {
  
const router = useRouter(); 
  const MainCategory = ["카테고리1", "카테고리2", "카테고리3", "카테고리4", "카테고리5"];


const navigateToAbout_Post_List = (Main_Category,Sub_Category) => {
  const path=`/${Main_Category}/${Sub_Category}`;
  router.push(path);
};
    return {
      MainCategory,
      navigateToAbout_Post_List
    }
})
