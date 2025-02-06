import { useRouter } from 'vue-router'
  import { ref } from 'vue';

  import axios from 'axios';

  const router = useRouter();

  const backendMessage = ref('');

    const navigateToAbout = (path) => {
    // 클릭 시 '/about' 주소로 이동
    router.push(path);
    };
  
    //Create test
    const CTest = async () => 
    {
      try 
      {
        // 전송할 데이터 객체
        const userData = {
          name: '11홍길동',  // 사용자 이름
          email: 'hong@example.com',  // 사용자 이메일
          age: '1'
        };

        // axios를 사용하여 POST 요청 보내기
        const response = await axios.post('http://localhost:3002/api/CTest', userData, {
          headers: {
            'Content-Type': 'application/json'  // JSON 형식 지정
          }
        });

        console.log('삽입 성공:', response.data); // 성공 메시지 확인
        alert(response.data.message); // 성공 알림창 표시
      }
      catch (error) 
      {
        console.error('삽입 실패:', error);
        alert('데이터 삽입 실패!');
      }
    };

    //Read test
    const RTest = async () => 
    {
      try 
      {
        const response = await axios.get('http://localhost:3002/api/Rtest');

        // 응답 데이터가 존재하는지 확인
        console.log('백엔드 응답:', response.data);

      } catch (error) {
        console.error('백엔드 요청 실패:', error);
      }
    };


    //update id값으로로
    const UTest = async (id) => {
      try
      {
        const userData = {
          name: "aa",
          email: "22", // 입력된 이메일
          age: "33" // 입력된 나이
        };

        const response = await axios.put(`http://localhost:3002/api/UTest/${id}`, userData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log('업데이트 성공:', response.data);
        alert(response.data.message);
      }
      catch (error) 
      {
        console.error('업데이트 실패:', error);
        alert('데이터 업데이트 실패!');
      }
    };


    //update id값으로로
    const DTest = async (id) => {
      try
      {
        const response = await axios.delete(`http://localhost:3002/api/DTest/${id}`);
        console.log('삭제 성공:', response.data);
        alert(response.data.message);
      }
      catch (error) 
      {
        console.error('삭제 실패:', error);
        alert('데이터 삭제 실패!');
      }
    };
