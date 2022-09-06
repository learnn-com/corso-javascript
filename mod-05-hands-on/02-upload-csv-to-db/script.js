const fs    = require('fs')
const mysql = require('mysql2')
const csv   = require('csv-parser')
require('dotenv').config()

const connection = mysql.createConnection(process.env.DATABASE_URL)

fs.createReadStream('./data.csv')
  .pipe(csv())
  .on('data', async (row) => {
    await connection.execute(
      `INSERT INTO users (id, first_name, last_name, email, gender, ip_address, job_title, company)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      Object.values(row)
    )
  })
  .on('end', () => {
    connection.end()
  });
