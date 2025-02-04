<template>
     <v-card>
        <v-form ref="form">
            <v-textarea class="ml-3 mr-3 mt-3"
                auto-grow
                variant="outlined"
                v-model="Comment.name"
                :rules="Comment.rules"
                >
            </v-textarea>
            
                <v-row>
                    <v-col cols="3">
                        <v-text-field
                        variant="outlined"
                        v-model="Name.name"
                        :rules="Name.rules"
                        label=" name"
                        
                    ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                        <v-text-field
                    variant="outlined"
                    v-model="Password.name"
                    :rules="Password.rules"
                    label="Password"
                    
                ></v-text-field>
                    </v-col>
                    <v-col cols="2"></v-col>
                    <v-col cols="2"> <v-checkbox-btn
                        v-model="Private"
                        color="secondary"
                        label="Private"
                    ></v-checkbox-btn></v-col>
                    <v-col cols="2">
                        <v-btn @click="submitComment" type="submit"  >댓글 작성</v-btn>
                    </v-col>
            </v-row>
               
                
        </v-form>
            
            
      
       
            <v-list density="compact">
                <v-list-item
                    v-for="(item, i) in store.PostComments"
                    :key="i"
                >
                    <v-card>
                        <v-card-title class="d-flex justify-space-between align-center">
                            {{ item.name }}
                            <span class="text-end">
                                <v-menu location="end">
                                    <template v-slot:activator="{ props }">
                                        <v-btn icon flat  v-bind="props">
                                            <v-icon  size="x-small">mdi-pencil</v-icon>
                                        </v-btn>
                                    </template>

                                    <v-list>
                                        <v-list-item >
                                        <v-list-item-title @click="showHtml">수정/삭제</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </span>
                        </v-card-title>
                        <v-card-subtitle> {{  item.Date}} </v-card-subtitle>
                        <v-card-text> {{item.text}} </v-card-text>
                        
                        <v-card-actions>
                            <v-expansion-panels flat>
                                <v-expansion-panel
                                    title="답글" >
                                    <v-expansion-panel-text>
                                     
                                        <v-divider></v-divider>
                                        <v-list density="compact">
                                            <v-list-item
                                            v-for="(item, i) in items"
                                            :key="i"
                                            >
                                                <v-card>
                                                    <v-card-title>user</v-card-title>
                                                    <v-card-subtitle> {{ item.Date }} </v-card-subtitle>
                                                    <v-card-text> {{item.text}} </v-card-text>
                                                    <v-divider></v-divider>
                                                </v-card>
                                            </v-list-item>
                                        </v-list>
                                        <v-form ref="form">
                                            <div class="ml-3">답글 작성</div>
                                            <v-textarea class="ml-3 mr-3 mt-3"
                                                auto-grow
                                                variant="outlined"
                                                v-model="Comment.name"
                                                :rules="Comment.rules"
                                                >
                                            </v-textarea>
                                            
                                                <v-row class="ml-3">
                                                    <v-col cols="3">
                                                        <v-text-field
                                                        variant="outlined"
                                                        v-model="Name.name"
                                                        :rules="Name.rules"
                                                        label=" name"
                                                        
                                                    ></v-text-field>
                                                    </v-col>
                                                    <v-col cols="3">
                                                        <v-text-field
                                                    variant="outlined"
                                                    v-model="Password.name"
                                                    :rules="Password.rules"
                                                    label="Password"
                                                    
                                                ></v-text-field>
                                                    </v-col>
                                                    <v-col cols="2"></v-col>
                                                    <v-col cols="2"> <v-checkbox-btn
                                                        v-model="Private"
                                                        color="secondary"
                                                        label="Private"
                                                    ></v-checkbox-btn></v-col>
                                                    <v-col cols="2">
                                                        <v-btn @click="submitComment" type="submit"  >댓글 작성</v-btn>
                                                    </v-col>
                                            </v-row>
                                        </v-form>
                                        <v-divider></v-divider>
                                    </v-expansion-panel-text>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-card-actions>
                    </v-card>
                </v-list-item>
            </v-list>
        </v-card>
</template>

<script setup>

import { ref} from 'vue';
import { useCounterStore } from '@/store/Manager.js'
import { useRouter } from 'vue-router';
const store =useCounterStore()
const router = useRouter();
const form=ref('')
const Private=ref(false)
const Name = ref({
  name: '',
  rules: [
    value => {
      if (value?.length >= 3) return true;
      return 'Name must be at least 3 characters.';
    },
  ],
});

const Password = ref({
  name: '',
  rules: [
    value => {
      if (value?.length >= 4) return true;
      return 'Password must be at least 4 characters.';
    },
  ],
});

const Comment = ref({
  name: '',
  rules: [
    value => {
      if (value?.length >= 1) return true;
      return 'Comment must be at least 1 characters.';
    },
  ],
});

const items= ref([
        { text: 'Real-Timeasdasdasdasdasczx', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ])
const submitComment = async () => {
    const { valid } = await form.value.validate()
    console.log(valid)
    if (valid){
        const currentDate = new Date();
        const dateString = currentDate.toLocaleDateString(); 
        const comment=ref({
            name:Name.value.name,
            Password:Password.value.name,
            id:router.currentRoute.value.params.id,
            text:Comment.value.name,
            Date:dateString,

        })
        console.log(comment.value)
        store.MongoDBConnet('InsertComment',comment.value)
    items.value.push({text:Comment.value})
    Comment.value = ''; // Clear comment field after submission
    }
   
};
</script>

<style>

</style>