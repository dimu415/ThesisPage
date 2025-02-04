<template>
    <v-card v-if="post" class="mx-auto mt-5 mb-5" max-width="70%" >
        <v-breadcrumbs :items="category">
            <template v-slot:title="{ item }">
            {{ item.title }}
            </template>
        </v-breadcrumbs>
        <v-card-title class="text-h3">{{ post.Title }}</v-card-title>
        <div class="font-weight-thin text-caption ma-5">
           {{ post.Date}}
           <span class="text-end">
            <v-menu location="end">
              <template v-slot:activator="{ props }">
                  <v-btn icon flat  v-bind="props">
                      <v-icon  size="x-small">mdi-pencil</v-icon>
                  </v-btn>
              </template>

          <v-list>
            <v-list-item >
              <v-list-item-title @click="showHtml">수정</v-list-item-title>
            </v-list-item>
            <v-list-item >
              <v-list-item-title @click="DeletePost">삭제</v-list-item-title>
            </v-list-item>
          </v-list>
          </v-menu>
        </span>
        </div>
        <v-divider></v-divider>
        <v-card-text>
           <div  v-html="marked(post.Contents)"></div>
        </v-card-text>
        
        <v-divider inset></v-divider>
        <div class="mt-5" >
            <v-chip
            v-for="tag in post.Tags" :key="tag"
            class="ma-2"
            label
            >{{ tag }}</v-chip>
        </div> 
        <div class="ma-5">
        {{post.Main_Category}}/{{ post.Sub_Category }} 관련 글
        </div>
        <v-slide-group show-arrows>
            <v-slide-group-item v-for="(another,n) in showPost" :key="n">
                
                <v-card class="ma-4 text-center" rounded 
                height="300" width="200"
                @click="navigateToAbout(`/post/${another.Main_Category}/${another.Sub_Category}/${another._id}`)"
                >
                
                    {{another.Title}}
                </v-card>
            </v-slide-group-item>
        </v-slide-group>

        <v-card-actions>
            <v-btn class="ma-3" @click="LikeBtn()">{{Like}}</v-btn>
            <p>댓글 </p>
        </v-card-actions>
        <v-divider></v-divider>
        <PostCommentVue/>
    </v-card>
       
    
</template>

<script setup>
import { ref, watch,onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCounterStore } from '@/store/Manager.js'
import { marked} from 'marked'
import PostCommentVue from './PostComment.vue';
import {getCookie} from '@/CookieManager.js'
const store =useCounterStore()
const router = useRouter();
const showPost=ref([])
const post = ref(); // 데이터를 담을 변수
const Like=ref(false);
const category=ref()

const fetchPost = async () => {
  
  await store.MongoDBConnet("Viewinc", {name:router.currentRoute.value.params.id,value:'NO LIKE', days:1});
  post.value = await store.MongoDBConnet('FindOnePost',router.currentRoute.value.params.id);
  Like.value= getCookie(router.currentRoute.value.params.id+"Like")
  console.log(post.value)
  if (post.value) {
    post.value.Tags = post.value.Tags.split(',');
    filteredItems();
    try{
        store.PostComments= post.value.comments 
    }
    catch{
        console.log("no comments")
    }
  }
};
const showHtml = () => {
  const htmlContent = marked(post.value.Contents);
  const modifiedContent = replaceContenteditable(htmlContent);
  post.value.Contents=modifiedContent
  store.PostModify=post.value
  navigateToAbout("/Create")
};
const replaceContenteditable = (htmlContent) => {
  const replacedContent = htmlContent.replace(/contenteditable="false"/g, 'contenteditable="true"');
  return replacedContent;
};
const DeletePost=async()=>{
  await store.MongoDBConnet('DeletePost',router.currentRoute.value.params.id);
  navigateToAbout("/")
}
const LikeBtn=async ()=>{
  Like.value= !Like.value
  await store.MongoDBConnet('LIKE',{name:router.currentRoute.value.params.id,value:Like.value});
}
onMounted(fetchPost);
watch(router.currentRoute, (to, from) => {
  if (to.params.id !== from.params.id) {
    
    fetchPost();
  }
});

const navigateToAbout = (path) => {
    router.push(path);
};

function filteredItems (){
      showPost.value= store.Posts.filter(item => item.Main_Category === post.value.Main_Category);
    
      //showPost.value= store.Posts
      category.value=
      [
        {
          title: post.value.Main_Category,
          disabled: false,
          href: '/',
        },
        {
          title: post.value.Sub_Category,
          disabled: false,
          href: '/',
        },
    ]
}

</script>

<style>

</style>