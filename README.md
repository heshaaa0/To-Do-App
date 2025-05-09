# 📝 To-Do Web App

A simple full-stack To-Do List application built with React, Express, and MySQL.

## 🚀 Features

- Add new tasks  
- View the latest 5 incomplete tasks  
- Mark tasks as done  
- Delete tasks  
- Toast notifications for actions  
- Responsive UI using Tailwind CSS  

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS, Axios, react-hot-toast  
- **Backend:** Node.js, Express.js  
- **Database:** MySQL  

## 📂 Project Structure

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app

2. Backend Setup
cd server
npm install

MySQL Setup

CREATE DATABASE todo_app;
USE todo_app;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  is_done BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```
✅ Usage

Add a task using the input field.

Click "Done" to mark it as complete.

(Optional) Use the delete button to remove a task.

Toast messages appear for each action.

🧱 Future Improvements

User login & authentication

Pagination

Filters & categories

Dark mode toggle

🧩 Troubleshooting

Ensure MySQL server is running

Double-check DB credentials

If ports are in use, change them in the code


  ## Running Tests

### Backend Tests (Express API)

The backend is tested using **Mocha**, **Chai**, and **Supertest**.

#### 1. Install Testing Dependencies

Navigate to the `backend` directory and install the necessary test dependencies:

```bash
cd backend
npm install --save-dev mocha chai supertest

```
Frontend Tests (React + Vitest)
The frontend is tested using Vitest, React Testing Library, and Jest DOM.

1. Install Testing Dependencies
Navigate to the frontend directory and install the necessary test dependencies:

```
cd frontend
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```
