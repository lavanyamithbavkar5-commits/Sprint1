const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

app.use(cors());
app.use(express.json());

// ✅ Correct database name
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'security', // update if needed
  database: 'crm_dashboard'
});

// ✅ Confirm connection
db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err.message);
    return;
  }
  console.log('✅ Connected to MySQL');
});

// ✅ Add Lead
app.post('/leads', (req, res) => {
  const { name, email, phone, status } = req.body;
  const query = 'INSERT INTO leads (name, email, phone, status) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, phone, status], (err, result) => {
    if (err) {
      console.error('❌ Error inserting lead:', err.message);
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Lead added successfully' });
  });
});

// ✅ Get Leads
app.get('/leads', (req, res) => {
  console.log('GET /leads called');

  db.query('SELECT * FROM leads ORDER BY id DESC', (err, results) => {
    if (err) {
      console.error('❌ MySQL error:', err);
      res.status(500).json({ error: err.message });
      return;
    }

    console.log('✅ Leads fetched:', results);
    res.status(200).json(results);
  });
});


// ✅ Start Server
app.listen(5050, () => {
  console.log('🚀 Server running on port 5050');
});