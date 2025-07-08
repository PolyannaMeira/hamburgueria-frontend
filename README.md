# 🍔  Burger App

This is a Full Stack project developed as part of the **DevClub** course, with the goal of building a complete application to manage orders for a burger restaurant.

---

## 🚀 About the Project

**DevBurguer** is a web application that allows:

Customer:

* View a menu of burgers and sides
* Place orders online

Administrator:

* Manage orders through the admin panel

The focus is on applying best development practices, backend integration, API consumption, and component organization in a real-world environment.

---

<p>Login Screen</p>
<img src="https://github.com/user-attachments/assets/59ca2e23-6a68-4443-8b15-f53773550152" width="30%" />
<p>Menu Screen</p>
<img src="https://github.com/user-attachments/assets/4df205fe-7c0a-46b9-b453-ea55b25eadfe" width="30%" />
<p>Offers and Categories Screen</p>
<img src="https://github.com/user-attachments/assets/7295d282-ce55-4396-a775-1b69f9853d23" width="30%" />
<p>Cart Screen</p>
<img src="https://github.com/user-attachments/assets/dbb0b6c4-eaaa-45b7-a178-3c8d14760b86" width="30%" />
<p>Admin Screen</p>
<img src="https://github.com/user-attachments/assets/501fa25b-dd4f-4154-8d7f-e5aed2044e7e" width="30%" />
<p>Products Screen</p>
<img src="https://github.com/user-attachments/assets/863d0526-d55c-4dc6-9b8d-426eb9bcc2e1" width="30%" />

---

## 🛠️ Technologies Used

### Frontend:

* **React** (with React Hooks)
* **Axios** (for HTTP requests)
* **React Router DOM** (for routing)
* **Styled-Components** or **CSS Modules** (for styling)
* **Context API** (to manage global state)

### Backend:

* **Node.js** with **Express**
* **MongoDB** with **Mongoose**
* **Dotenv** (environment variables)
* **Cors** (to allow requests)
* **Nodemon** (for development)

### Others:

* **Git & GitHub** (version control)
* **Postman** (to test the API)
* **Docker**

---

## 📚 Learnings

During the development of DevBurguer, the following concepts were applied and learned:

* Structuring a Full Stack project from scratch
* Connecting frontend and backend using RESTful APIs
* Creating private routes for administrators
* Using MongoDB with Mongoose for data persistence
* Code organization and componentization in React
* Managing global state with Context API
* Error handling on both frontend and backend
* Securing sensitive information using `.env` files

---

## 🖥️ How to Run the Project Locally

### ⚙️ Prerequisites

Before starting, you will need to have installed:

* [Node.js](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)
* [Git](https://git-scm.com/)
* A package manager (npm or yarn)

### 🔧 Installation

1. **Clone the repository hamburgueria-frontend:**

```bash
git clone https://github.com/PolyannaMeira/hamburgueria-frontend.git
cd Hamburgueria
```

2. **Clone the repository hamburgueria-backend:**

```bash
git clone https://github.com/PolyannaMeira/hamburgueria-backend.git
cd Hamburgueria
```

3. **Configure the `.env` file:**

Create a `.env` file inside the `Devburger_API` folder with the following variables (example):

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/devburguer
JWT_SECRET=your_secret_key
```

4. **Start the backend:**

```bash
npm run dev
```

5. **Install frontend and backend dependencies (if in a separate folder):**

```bash
cd ../[frontend-folder]
npm install
```

6. **Start the frontend and the backend:**

```bash
npm start
```

---

## 📂 Project Structure (Summary)

```


├── hamburgueria-backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env (added to .gitignore)
│   ├── server.js
│   └── ...

├── hamburgueria-frontend/
│   ├── src/
│   ├── public/
│   └── ...
│

```

---

## 👩‍💻 Developed by

**Polyanna Meira**
🔗 [GitHub](https://github.com/PolyannaMeira)
🔗 [LinkedIn](https://www.linkedin.com/in/polyanna-meira/)

---

## ⚠️ Warning

This project is intended for learning purposes. Sensitive information (such as API keys or database credentials) should not be versioned — use `.env` files with properly configured `.gitignore`.
