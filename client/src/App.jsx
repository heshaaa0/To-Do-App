import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://localhost:5000';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const fetchTasks = async () => {
    const res = await axios.get(`${API}/tasks`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await axios.post(`${API}/tasks`, { title });
    setTitle('');
    fetchTasks();
  };

  const markDone = async (id) => {
    await axios.put(`${API}/tasks/${id}/done`);
    fetchTasks();
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form onSubmit={addTask}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => markDone(task.id)}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
