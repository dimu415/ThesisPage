//stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';


export const useCounterStore = defineStore('jinmun', () => {
  
const router = useRouter(); 
  const Category=ref({});
  const posts=ref();
  const indexedPosts = ref();


const navigateToPost_List = (main,sub) => {//게시물 리스트이동
  const path=`/${main}/${sub}`;
  router.push(path);
};
const navigateToPost = (id) => { //게시물 이동
  const PostInfo=indexedPosts[id];

  console.log(`id:${id},PostInfo:${PostInfo}`);
  const Select_MainCategory=PostInfo.MainCategory;
  const Select_SubCategory=PostInfo.SubCategory;
  const Select_PostId=PostInfo.PostId;

  const path=`/${Select_MainCategory}/${Select_SubCategory}/${Select_PostId}`;
  router.push(path);
};

const JsonFileRead = async () => {//json파일읽기
  try {
    const response = await fetch('/data.json'); // JSON 파일 경로
    if (!response.ok) {
      throw new Error('Failed to fetch JSON file');
    }
    const jsonData = await response.json();
    posts.value = jsonData.posts;
   

    posts.value.forEach(post => {
        const main = post.MainCategory;
        const sub = post.SubCategory;

        // mainCategory가 이미 e 객체에 있으면 해당 subCategory 추가, 없으면 새로운 배열 생성
        if (!Category.value[main]) {
          Category.value[main] = []; // mainCategory가 없으면 빈 배열로 초기화
        }
        if(!Category.value[main].includes(sub)){
          Category.value[main].push(sub); // subCategory를 mainCategory 배열에 추가
        }
        
      });
    posts.value.forEach((post) => {
      indexedPosts[post.PostId] = post;
    });
    
  } catch (error) {
    console.error('JSON 파일 읽기 실패:', error);
  }
};
const searchPosts = (keyword) => { //KEYWORD SEARCH
  
  return posts.value.filter(
    (post) =>
      post.Title.includes(keyword) ||
      post.Content.includes(keyword) ||
      post.MainCategory.includes(keyword) ||
      post.SubCategory.includes(keyword)
  );
};
    return {posts,
      Category,
      indexedPosts,
      searchPosts,
      navigateToPost_List,
      navigateToPost,
      JsonFileRead,
    }
})
