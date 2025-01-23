//stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';


export const useCounterStore = defineStore('jinmun', () => {
  
const router = useRouter(); 
  const Main_Category = ref();
  const Sub_Category = ref();
  const posts=ref();
  const indexedPosts = ref();

  const Select_MainCategory=ref();
  const Select_SubCategory=ref();
  const Select_PostId=ref();

const navigateToPost_List = () => {
  const path=`/${Select_MainCategory.value}/${Select_SubCategory.value}`;
  router.push(path);
};
const navigateToPost = () => {
  const path=`/${Select_MainCategory.value}/${Select_SubCategory.value}/${Select_PostId.value}`;
  router.push(path);
};

const JsonFileRead = async () => {
  try {
    const response = await fetch('/data.json'); // JSON 파일 경로
    if (!response.ok) {
      throw new Error('Failed to fetch JSON file');
    }
    const jsonData = await response.json();
    posts.value = jsonData.posts;

    // mainCategory와 subCategory 배열로 수집
    Main_Category.value = [...new Set(posts.value.map(post => post.MainCategory))];
    Sub_Category.value = [...new Set(posts.value.map(post => post.SubCategory))];
    
    posts.value.forEach((post) => {
      indexedPosts[post.PostId] = post;
    });
    
    console.log('indexedPosts:', indexedPosts);
  } catch (error) {
    console.error('JSON 파일 읽기 실패:', error);
  }
};
const asd=(id)=>{
  const PostInfo=indexedPosts[id];
   Select_MainCategory.value=PostInfo.MainCategory;
   Select_SubCategory.value=PostInfo.SubCategory;
  navigateToPost_List()
  
}
const asd2=(id)=>{
  const PostInfo=indexedPosts[id];
   Select_MainCategory.value=PostInfo.MainCategory;
   Select_SubCategory.value=PostInfo.SubCategory;
   Select_PostId.value=PostInfo.PostId;
   navigateToPost()
  
}
const searchPosts = (keyword) => { //KEYWORD SEARCH
  return posts.filter(
    (post) =>
      post.title.includes(keyword) ||
      post.content.includes(keyword) ||
      post.mainCategory.includes(keyword) ||
      post.subCategory.includes(keyword)
  );
};
const filterByCategory = (mainCategory, subCategory) => { //Category filter
  return posts.filter(
    (post) =>
      post.mainCategory === mainCategory &&
      (!subCategory || post.subCategory === subCategory)
  );
};

    return {posts,
      Main_Category,
      Sub_Category,
      Select_MainCategory,
      Select_SubCategory,
      indexedPosts,
      navigateToPost_List,
      navigateToPost,
      JsonFileRead,asd,asd2
    }
})
