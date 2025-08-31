# 📓 Code Notes Manager

A simple and responsive website to organize and store your notes or code snippets.  
Built with **Vite + React + TypeScript** and styled in a **pitch-black retro-inspired theme** with a Gen-Z aesthetic.  

---

## 🚀 Features
- ✨ Add and view code snippets or notes in a clean, minimal UI.  
- 🎨 Retro pitch-black & white theme with subtle neon accents.  
- 📱 Fully responsive design (works on desktop, tablet, and mobile).  
- ⚡ Built for speed using **Vite**.  

---

## 🛠️ Tech Stack
- **React (TypeScript + .tsx)** – frontend framework  
- **Vite** – fast development/build tool  
- **React Router** – client-side routing  
- **Context API** – for global state management  

---

## 📂 Project Structure
```
project/
│
├── public/                # Public assets
│   └── _redirects          # Netlify redirects file
│
├── src/
│   ├── components/        # Reusable UI components
│   ├── context/           # Notes context (state management)
│   ├── pages/             # Application pages
│   │   ├── MainPage.tsx   # Homepage displaying notes
│   ├── App.tsx            # Application routes
│   └── main.tsx           # React entry point
│
├── package.json
└── tsconfig.json
```

---

## ⚡ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/code-notes-manager.git
cd code-notes-manager
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start development server
```bash
npm run dev
```
Visit `http://localhost:5173/` to see the site.

### 4️⃣ Build for production
```bash
npm run build
```

---

## 🌐 Deployment
This project is optimized for deployment on **Netlify**.  

If deploying on Netlify, ensure you have a `_redirects` file in your `public/` directory with the following rule:
```
/* /index.html 200
```

This ensures proper client-side routing for React.

---

## 🎨 Theme
- **Background**: Pitch black (#000000)  
- **Text**: White (#FFFFFF)  
- **Accents**: Subtle neon effects (cyan, purple, green) for hover and focus states  
- **Font**: Retro monospace / pixel-inspired style  

---

## 📷 Screenshots
*(Add your screenshots here once deployed!)*  

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!  
Feel free to fork the project and submit a pull request.  

---

## 📜 License
This project is licensed under the **MIT License** – feel free to use, modify, and share.  
