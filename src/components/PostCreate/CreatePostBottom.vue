<template>
  <v-bottom-navigation>
    <v-spacer></v-spacer>
      <v-btn @click="EditMode = !EditMode">
        <span>작성완료</span>
      </v-btn>
      <v-bottom-sheet v-model="EditMode">
      <v-card class="text-center" height="400">
        <v-card-text>
          <br />
          <br />
          <v-card class="mx-auto" width="70%" flat>
            <v-card-title class="text-left">
                 <v-menu open-on-hover class="ma-3 justify-left">
              <template v-slot:activator="{ props }">
                <v-btn rounded="0" v-bind="props" variant="outlined"> 
                  {{Category? Category : "category"}}
                  <v-icon end> mdi-menu-down </v-icon>
                </v-btn>
              </template>
              <v-list >
                <v-list-item v-for="(category, index) in store.Category" :key="index">
    
                  <v-menu open-on-hover location="end">
                    <template v-slot:activator="{ props }">
                      <v-btn
                      rounded="0"
                      v-bind="props"
                      variant="text"
                      @click="Category=category.Main_Category"
                    > {{category.Main_Category}}
                    <v-icon end> mdi-menu-right </v-icon>
                      </v-btn>
                    </template>
                      <v-list>
                        <v-list-item v-for="(sub, index) in category.Sub_Category" :key="index">
                        <v-list-item-title
                        @click="Category=`${category.Main_Category}/${sub}`"
                        >
                          {{ sub }}
                        </v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                </v-list-item>
              </v-list>
            </v-menu>
            <div>
              <b> Title:{{ Title }}</b>
            </div>
            </v-card-title>
          
            <v-card-text>
                <v-chip-group filter variant="outlined">
                    <v-chip>Public</v-chip>

                    <v-chip>Private</v-chip>
                </v-chip-group>
                <v-combobox
                variant="outlined"
                clearable
                chips
                multiple
                lass="d-flex flex-no-wrap align-center"
                label="Tags"
                v-model="chips"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
            ></v-combobox>

            </v-card-text>
              
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn  variant="text" @click="EditMode = !EditMode" class="mx-auto"  rounded="xl"> close </v-btn>
                <v-btn  variant="text" @click="EditMode = !EditMode,Post() " class="mx-auto"  rounded="xl"> ok </v-btn>
            </v-card-actions>
          </v-card>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
  </v-bottom-navigation>
  
</template>

<script setup>
import {ref} from 'vue'

  import { useCounterStore } from '@/store/DataManager.js'
import {editor,Title} from'./Postroule.js'
import { useRouter } from 'vue-router';
const router = useRouter();
const store =useCounterStore()
const chips=ref([])
const EditMode=ref(false)
const Category=ref()
const Main_Category=ref("-")
const Sub_Category=ref("-")
const replaceContenteditable = (htmlContent) => {
  const replacedContent = htmlContent.replace(/contenteditable="true"/g, 'contenteditable="false"');
  return replacedContent;
};
const Post=async ()=>{
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString();
if(Category.value){
    if (Category.value.includes("/")) {
      Main_Category.value = Category.value.split("/")[0];
      Sub_Category.value = Category.value.split("/")[1];
    } else {
      Main_Category.value = Category.value;
    }
  }  
  const modifiedContent = replaceContenteditable(editor.value.outerHTML);
  if(store.PostModify){
    let UpdatePost={
          'Title': store.PostModify.Title,
          "Contents":modifiedContent,
          "Main_Category": Main_Category.value,
          "Sub_Category":Sub_Category.value,
          "Tags":chips.value.join(","),
          "id":store.PostModify["_id"]
          
        }
        store.MongoDBConnet('UpdatePost',UpdatePost)
        router.push('/');
    }
  
  else{
    let InsertPost={
          'Title': Title.value,
          "Contents":modifiedContent,
          "Main_Category": Main_Category.value,
          "Sub_Category":Sub_Category.value,
          "Tags":chips.value.join(","),
          "Date":dateString,
          
        }
        store.MongoDBConnet('InsertPost',InsertPost)
        router.push('/');
    }
  }

</script>

<style>

</style>