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

// users 테이블 데이터 가져오는 API, Rtest, Read
app.get('/api/RTest', async (req, res) => 
  {
    try 
    {
      const [rows] = await pool.query('SELECT * FROM users');
      res.json(rows);
    }
    catch (error) 
    {
      console.error('❌ 데이터 조회 실패:', error.message);
      res.status(500).json({ error: '데이터 조회 중 오류 발생' });
    }
  }
);

// users 테이블에 데이터 삽입 API
app.post('/api/CTest', async (req, res) => 
  {
    const { name, email, age } = req.body; // 클라이언트에서 보낸 데이터 받기

    if (!name || !email || !age) {
      return res.status(400).json({ error: '이름, 이메일, 나이는 필수 입력 값입니다.' });
    }
  
    try {
      const query = 'INSERT INTO users (name, email, age) VALUES (?, ?, ?)';
      const [result] = await pool.query(query, [name, email, age]); // 데이터베이스에 삽입
      res.status(201).json({ message: '데이터가 성공적으로 삽입되었습니다.', id: result.insertId });
    } catch (error) {
      console.error('❌ 데이터 삽입 실패:', error.message);
      res.status(500).json({ error: '데이터 삽입 중 오류 발생' });
    }
  }
);

app.put('/api/UTest/:id', async (req, res) => 
  {
    const id = req.params.id; // URL에서 ID 가져오기
    const { name, email, age } = req.body; // 업데이트할 데이터 받기

    if (!name || !email || !age) {
      return res.status(400).json({ error: '이름, 이메일, 나이는 필수 입력 값입니다.' });
    }

    try {
      const query = 'UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?';
      const [result] = await pool.query(query, [name, email, age, id]);

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: '해당 ID의 사용자가 존재하지 않습니다.' });
      }

      res.status(200).json({ message: '데이터가 성공적으로 업데이트되었습니다.' });
    } catch (error) {
      console.error('❌ 데이터 업데이트 실패:', error.message);
      res.status(500).json({ error: '데이터 업데이트 중 오류 발생' });
    }
    }
);

//Delete
app.delete('/api/DTest/:id', async (req, res) => 
  {
    const id = req.params.id; // URL에서 ID 가져오기

    try 
    {
      const query = 'DELETE FROM users WHERE id = ?';
      const [result] = await pool.query(query, [id]);

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: '해당 ID의 사용자가 존재하지 않습니다.' });
      }

      res.status(200).json({ message: `ID ${id} 사용자가 삭제되었습니다.` });
    }
    catch (error) 
    {
      console.error('❌ 데이터 삭제 실패:', error.message);
      res.status(500).json({ error: '데이터 삭제 중 오류 발생' });
    }
  }
);

// 서버 실행
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
