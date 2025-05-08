const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'todo_app',
});

db.connect();

// Get latest 5 incomplete tasks
app.get('/tasks', (req, res) => {
  db.query('SELECT * FROM tasks WHERE is_done = FALSE ORDER BY created_at DESC LIMIT 5', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Create a task
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  db.query('INSERT INTO tasks (title) VALUES (?)', [title], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId, title, is_done: false });
  });
});

// Mark task as done
app.put('/tasks/:id/done', (req, res) => {
  const { id } = req.params;
  db.query('UPDATE tasks SET is_done = TRUE WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json(err);
    res.sendStatus(200);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
