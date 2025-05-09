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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">📝 To-Do List</h1>

        <form onSubmit={addTask} className="flex gap-2 mb-6">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a new task"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            Add
          </button>
        </form>

        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
            >
              <span className={task.done ? 'line-through text-gray-400' : 'text-gray-800'}>
                {task.title}
              </span>
              {!task.done && (
                <button
                  onClick={() => markDone(task.id)}
                  className="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md"
                >
                  Done
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
