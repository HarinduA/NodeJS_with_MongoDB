# 📝 To-Do List Web App

A simple To-Do list application built with **Node.js**, **Express**, **MongoDB**, and **EJS**. Users can add tasks which are stored in a MongoDB database.

---

## 📂 Project Structure

```bash
todo-app/
├── index.js                         # Main Express server file
├── models/
│   └── TodoTask.js                 # Mongoose model/schema for tasks
├── public/
│   └── stylesheets/
│       └── style.css              # CSS styling for the frontend
├── views/
│   └── todo.ejs                   # EJS template for the main UI
├── mongodbinfo.txt                # MongoDB Atlas connection info (not needed in production)
├── .env                           # Environment variables (e.g., DB connection string)
└── README.md                      # Project documentation
⚙️ Features
Add new tasks

Clean, responsive UI

Data persistence using MongoDB

Server-side rendering with EJS

Add date/timestamp display

Optional: Add authentication

🧰 Technologies Used
Node.js

Express

MongoDB Atlas

Mongoose

EJS

CSS

🚀 Getting Started
1. Clone the repository
bash
Copy
Edit
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
🔒 Note: Replace with your actual MongoDB URI if it's different.

4. Start the server
bash
Copy
Edit
node index.js
5. Open in browser
Visit: http://localhost:3000
