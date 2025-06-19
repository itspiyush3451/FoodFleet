# FoodFleet - Full Stack Food Delivery Platform

FoodFleet is a full stack web application for food delivery, featuring a robust Spring Boot backend and a modern, responsive React frontend. It streamlines restaurant menu management, user authentication, order processing, and delivery tracking for restaurants, staff, and customers.

---

##  Features

### Backend (Spring Boot)
- **User Authentication:** Admin and user login, registration, and role-based access
- **Menu & Product Management:** CRUD for products and menus
- **Order Management:** Place, update, and track orders
- **Admin Panel:** Add/update/delete users, products, and admins
- **RESTful API:** Well-structured endpoints for all core resources
- **PostgreSQL Integration:** Persistent data storage
- **CORS Support:** Allows secure frontend-backend communication

### Frontend (React + Vite)
- **Landing Page:** Modern, responsive, food-themed design (Bootstrap 5)
- **Pages:** Home, About, Login, Register, and more
- **API Integration:** Connects to backend for registration, login, product listing, etc.
- **Centralized API Service:** All backend calls managed in `src/api/index.js`
- **Responsive UI:** Mobile-first, professional styling with Bootstrap

---

## 🛠️ Technology Stack
- **Backend:** Java 8+, Spring Boot, Spring MVC, Spring Data JPA (Hibernate), PostgreSQL
- **Frontend:** React 18+, Vite, Bootstrap 5, React Router v6
- **Build Tools:** Maven (backend), npm/yarn (frontend)
- **IDE:** Eclipse, IntelliJ, VSCode, or STS

---

##  Folder Structure
```
FoodFleet/
├── src/
│   ├── main/java/com/example/demo/  # Spring Boot source
│   │   ├── controllers/             # REST controllers
│   │   ├── entities/                # JPA entities
│   │   ├── repositories/            # Spring Data repositories
│   │   ├── services/                # Business logic
│   └── resources/                   # application.properties, static, templates
├── frontend/FoodFleet/              # React frontend
│   ├── src/
│   │   ├── api/                     # API service (backend integration)
│   │   ├── pages/                   # React pages (Home, Login, Register, etc.)
│   │   ├── routes/                  # React Router definitions
│   │   ├── components/              # Reusable components
│   │   └── index.css                # Global styles
├── pom.xml                          # Maven config
└── README.md                        # This file
```

---

##  Getting Started

### Backend Setup (Spring Boot)
1. **Configure PostgreSQL:**
   - Create a database (e.g., `foodfleet`)
   - Update `src/main/resources/application.properties` with your DB credentials
2. **Build and Run:**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
   Backend runs on [http://localhost:8080](http://localhost:8080)

### Frontend Setup (React)
1. **Navigate to frontend:**
   ```bash
   cd frontend/FoodFleet
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn
   ```
3. **Start the dev server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Frontend runs on [http://localhost:5173](http://localhost:5173)

### API Integration
- All frontend API calls are managed in `src/api/index.js` (see example functions for registration, login, product listing, etc.)
- Ensure CORS is enabled on backend controllers (e.g., `@CrossOrigin(origins = "http://localhost:5173")`)

---

##  Customization & Contribution
- Add/modify backend endpoints in `controllers/` and `services/`
- Add new React pages/components in `frontend/FoodFleet/src/pages` or `components`
- Update styling in `frontend/FoodFleet/src/index.css` or use Bootstrap classes

### How to Contribute
1. Fork the repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit and push your changes
4. Open a Pull Request

---

##  License
This project is open source and free to use for learning and portfolio purposes.

---

**FoodFleet** – Where Quality Meets Innovation!
