# 📝 To-Do List Web App

A simple To-Do list application built with **Node.js**, **Express**, **MongoDB**, and **EJS**. Users can add tasks which are stored in a MongoDB database.

---

## 📂 Project Structure

├── models/ │ └── TodoTask.js # Mongoose schema for tasks ├── public/ │ └── stylesheets/ │ └── style.css # App styling ├── views/ │ └── todo.ejs # Frontend template using EJS ├── .env # Environment variables (not committed) ├── index.js # Main Express server ├── mongodbinfo.txt # MongoDB connection details └── README.md # Project documentation

yaml
Copy
Edit

---

## ⚙️ Features

- Add new tasks
- Clean, responsive UI
- Data persistence using MongoDB
- Server-side rendering with EJS

---

## 🧰 Technologies Used

- **Node.js**
- **Express**
- **MongoDB Atlas**
- **Mongoose**
- **EJS**
- **CSS**

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/todo-list-app.git
cd todo-list-app
2. Install dependencies
bash
Copy
Edit
npm install
3. Set up environment variables
Create a .env file in the root directory and add your MongoDB connection string:

env
Copy
Edit
DB_CONNECT=mongodb+srv://todoListApp:todo123@cluster0.fx15ieg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
Note: Replace with your actual MongoDB URI if different.

4. Start the server
bash
Copy
Edit
node index.js
5. Open in browser
Go to: http://localhost:3000

🖼 UI Preview
The app features a minimalist, centered design with Google Fonts and Font Awesome icons.

css
Copy
Edit
[Input Field] [➕]
[List of tasks with ✏️ and ❌ icons]
🛠 To-Do / Improvements
Add functionality to edit and delete tasks

Display tasks dynamically from the database

Form validation and error handling

Add date/timestamp display

Optional: Add authentication

