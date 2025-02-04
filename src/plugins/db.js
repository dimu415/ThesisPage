
require('dotenv').config();
const mysql = require('mysql2/promise');

// MariaDB 연결 설정
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// 연결 테스트
async function testDBConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ MariaDB 연결 성공');
    connection.release();
  } catch (error) {
    console.error('❌ MariaDB 연결 실패:', error.message);
  }
}

testDBConnection();

module.exports = pool;