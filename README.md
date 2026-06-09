# StockMate 📦

A full-stack inventory management system built with the PERN stack (PostgreSQL, Express, React, Node.js), featuring AI-powered natural language querying, real-time stock tracking, and a modern dark/gold theme.

> This project is a modified and extended version of [Inventory Management System](https://github.com/manjotkaurr31/Inventory-Management-System) by [manjotkaurr31](https://github.com/manjotkaurr31).
> Extended and redesigned by **Duresa Chemeda** ([@DuDu21cs](https://github.com/DuDu21cs)).

---

## ✨ What I Added & Changed

### 🎨 UI Redesign
- Replaced the original pink theme with a **dark background + gold accent** color scheme
- Modernized the overall look and feel across all pages

### 🌙 Dark Mode Toggle
- Added a **dark/light mode toggle button** in the sidebar
- Smooth transition between modes using CSS variables and React state
- Dark mode applies across the entire app

### ⚠️ Low Stock Alert
- Added a **real-time low stock warning** on the dashboard
- Automatically detects products with quantity of 5 or below
- Displays a red alert box with the product name and remaining quantity

### 🏷️ Rebranding
- Renamed the app from "Inventory Genie" to **StockMate**
- Updated the app title, sidebar, and browser tab name

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

---

## 🚀 Features

- AI-powered natural language query interface (GROQ LLaMA 3)
- Full CRUD for products, categories, suppliers, and locations
- Stock movement tracking (IN / OUT)
- Analytics dashboard with charts
- Low stock alert system
- Dark / Light mode toggle
- JWT authentication (login & signup)
- Export reports as PDF

---

## ⚙️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/DuDu21cs/-Inventory-Management-System-.git
cd "-Inventory-Management-System-"
```

### 2. Install dependencies
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Set up environment variables
Create a `.env` file inside the `backend/` folder:
```
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/inventory
ACCESS_TOKEN_SECRET=your_access_secret
REFRESH_TOKEN_SECRET=your_refresh_secret
NODE_ENV=development
PORT=5000
```

### 4. Set up the database
```bash
psql -U postgres -d inventory -f schema/schema.sql
```

### 5. Run the development servers
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## 📫 Contact

**Duresa Chemeda**
- GitHub: [@DuDu21cs](https://github.com/DuDu21cs)
- Email: [duresachemedadudu@gmail.com](mailto:duresachemedadudu@gmail.com)
- LinkedIn: [Duresa Chemeda](https://www.linkedin.com/in/duresa-chemeda-66a28a411/)