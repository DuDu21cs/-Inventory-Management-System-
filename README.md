# StockMate 📦

A full-stack inventory management app built with the **PERN stack** (PostgreSQL, Express, React, Node.js). Features CRUD operations, a dynamic dashboard, low stock alerts, and a dark/gold UI theme with dark/light mode toggle.

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

## 📸 Screenshots

### Login Page
![Login](screenshots/login.jpg)

### Dashboard
![Dashboard](screenshots/dashboard.jpg)

### Analytics
![Analytics](screenshots/analytics.jpg)

### Reports
![Reports](screenshots/reports.jpg)

### Dark / Light Mode
| Dark Mode | Light Mode |
|---|---|
| ![Dark](screenshots/dashboard-dark.jpg) | ![Light](screenshots/dashboard-light.jpg) |

---

## 📁 Project Structure

```
StockMate/
├── backend/
│   ├── controllers/            # Route handler logic
│   │   ├── aiController.js
│   │   ├── analyticsController.js
│   │   ├── authController.js
│   │   ├── categoryController.js
│   │   ├── historyController.js
│   │   ├── locationController.js
│   │   ├── productController.js
│   │   ├── reportController.js
│   │   ├── stockMovementController.js
│   │   └── supplierController.js
│   ├── middleware/
│   │   └── authMiddleware.js   # JWT verification
│   ├── ml/
│   │   └── forecast_sales.py   # Sales forecasting model
│   ├── models/                 # Database query models
│   │   ├── Location.js
│   │   ├── Product.js
│   │   ├── StockMovement.js
│   │   ├── Supplier.js
│   │   └── User.js
│   ├── routes/                 # API route definitions
│   │   ├── aiRoutes.js
│   │   ├── analyticsRoutes.js
│   │   ├── authRoutes.js
│   │   ├── categoryRoutes.js
│   │   ├── historyRoutes.js
│   │   ├── locationRoutes.js
│   │   ├── productRoutes.js
│   │   ├── reportRoutes.js
│   │   ├── stockMovementRoutes.js
│   │   └── supplierRoutes.js
│   ├── services/
│   │   ├── analytics/          # Analytics query services
│   │   └── report/             # Report generation & PDF export
│   ├── utils/
│   │   ├── executeSQL.js
│   │   ├── groqClient.js       # GROQ AI client
│   │   ├── jwt.js
│   │   └── sqlRunner.js
│   ├── db.js                   # PostgreSQL connection
│   ├── server.js               # Express app entry point
│   └── .env                    # Environment variables (not committed)
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/                # API call helpers
│   │   ├── components/
│   │   │   ├── analytics/      # Analytics charts & blocks
│   │   │   ├── auth/           # Login & signup forms
│   │   │   ├── common/         # Sidebar, Navbar, Layout, Toast, etc.
│   │   │   ├── CRUDform/       # Dynamic form component
│   │   │   └── report/         # Report filters, table, PDF export
│   │   ├── context/
│   │   │   └── AuthContext.jsx # Global auth state
│   │   ├── css/                # Per-page stylesheets
│   │   ├── pages/              # All app pages
│   │   │   ├── AIQuery.jsx
│   │   │   ├── Analytics.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ExploreInventory.jsx
│   │   │   ├── Landing.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Report.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── UpdateInventory.jsx
│   │   │   └── Profile.jsx
│   │   ├── router/
│   │   │   └── AppRouter.jsx   # Route definitions
│   │   ├── utils/
│   │   │   └── fetchWithAuth.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── vite.config.js
│
├── schema/
│   ├── schema.sql              # Database schema
│   └── schema_diagram.png      # Visual schema diagram
│
├── screenshots/                # App screenshots for README
└── README.md
```

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

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add: description of your change"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a **Pull Request** describing your changes

---

## 📫 Contact

**Duresa Chemeda**
- GitHub: [@DuDu21cs](https://github.com/DuDu21cs)
- Email: [duresachemedadudu@gmail.com](mailto:duresachemedadudu@gmail.com)
- LinkedIn: [Duresa Chemeda](https://www.linkedin.com/in/duresa-chemeda-66a28a411/)