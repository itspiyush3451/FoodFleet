# FoodFleet Frontend

A modern, responsive food delivery website built with React, Vite, Bootstrap 5, and React Router. This project features a professional landing page, modular routing, and clean, maintainable code for rapid development and scalability.

## 🚀 Project Overview
FoodFleet is a food delivery web application frontend designed to:
- Showcase a beautiful landing page (hero, features, sample menu)
- Provide About, Login, and Register pages
- Use Bootstrap for a professional, mobile-first UI
- Be easily scalable for future features (admin/user dashboards, product listings, etc.)

## ✨ Features
- **Responsive Landing Page:** Hero section, features, and sample menu with food imagery
- **Bootstrap 5 Styling:** Consistent, modern look across all devices
- **React Router v6:** Modular routing for easy navigation (can be static if desired)
- **Clean CSS:** Only necessary styles included, with Bootstrap as the base
- **Ready for Expansion:** Add more pages, authentication, or APIs as needed

## 🛠️ Tech Stack
- [React 18+](https://react.dev/)
- [Vite](https://vitejs.dev/) (for fast development and HMR)
- [Bootstrap 5](https://getbootstrap.com/) (styling & layout)
- [React Router v6](https://reactrouter.com/)
- [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/) (optional, for code quality)

## 📁 Folder Structure
```
frontend/FoodFleet/
├── public/
├── src/
│   ├── components/        # Reusable components (NavBar, Footer, etc.)
│   ├── pages/             # Page components (Home, About, Login, Register)
│   ├── routes/            # AppRoutes for modular routing
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global and custom styles
└── README.md
```

## 🖌️ Styling & Responsiveness
- Uses Bootstrap grid and utility classes for layout
- Custom styles in `index.css` for branding and tweaks
- Fully responsive: adapts to mobile, tablet, and desktop
- Optionally uses [Bootstrap Icons](https://icons.getbootstrap.com/) (add via CDN or npm if needed)

## ⚡ Getting Started
### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Setup
1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn
   ```
2. **Start the dev server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (default Vite port)

### Build for Production
```bash
npm run build
# or
yarn build
```

## 🧩 Customization
- Edit images, colors, and text to match your brand
- Add new pages/components in `src/pages` or `src/components`
- To use Bootstrap Icons, add via CDN in `index.html` or install with `npm install bootstrap-icons` and import in `main.jsx`

## 🤝 Contribution
1. Fork the repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to the branch and open a Pull Request

## 📄 License
This project is open source and free to use for learning and portfolio purposes.

---

**FoodFleet** – Where Quality Meets Innovation!
