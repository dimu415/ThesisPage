import { ref } from 'vue';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./db'); // db.js 파일 가져오기

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 기본 라우트

app.get('/', (req, res) => {
  res.send(`<h1>Serdver is running on port ${PORT}</h1>`);
});

export const MongoDBserver=()=>{
    const GetPost = async () => { //게시물 전체 json형식으로 가지고오기
          try{
            const response = await fetch(`${apiUrl.value}/api/GetPost`);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data
          }
          catch (error) {
              console.error('Fetch Error:', error);
            }   
        
      }
    
      const InsertPost = async (InsertPost) => { // 게시물 등록
        try{
          const response = await fetch(`${apiUrl.value}/api/InsertPost`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(InsertPost)
        });
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          console.log(data)
        }
        catch (error) {
            console.error('Fetch Error:', error);
          }   
      }
      const UpdatePost = async (UpdatePost) => { //게시물 수정
        try{
          console.log("UpdatePost")
          const response = await fetch(`${apiUrl.value}/api/UpdatePost`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UpdatePost)
        });
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          console.log(data)
        }
        catch (error) {
            console.error('Fetch Error:', error);
          }   
      }
      const DeletePost = async (id) => { //게시물 삭제
        console.log("DeletePost")
        const param=ref('')
        try{
          param.value=`id=${id}`
          const response = await fetch(`${apiUrl.value}/api/DeletePost?${param.value}`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          console.log(data)
        }
        catch (error) {
            console.error('Fetch Error:', error);
          }   
      }
     
     
      return{
        GetPost,
        InsertPost,
        UpdatePost,
        DeletePost,
      }
}
  