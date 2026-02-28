# macOS-Inspired Interactive Portfolio
An interactive portfolio built with **React + Vite**, designed to recreate a desktop-like macOS experience directly in the browser.

## 🚀 Overview
This project is more than a traditional portfolio website. It simulates a mini operating-system-style interface with movable app windows, a dock launcher, and app-like interactions to present projects and profile content in a modern, product-style format.

## ✨ Key Features
- Dock-based app launcher UI
- Draggable and resizable windows
- Terminal-style CLI experience
- Live date/time in navigation bar
- GitHub projects integration
- Notes-style markdown/content viewer
- Spotify and Resume app windows

## 🛠️ Tech Stack
- **Frontend:** React 19, Vite
- **Styling:** SCSS (Sass)
- **Window management:** `react-rnd`
- **Content rendering:** `react-markdown`
- **CLI simulation:** `react-console-emulator`

## 📁 Project Structure
```text
src/
	components/
		windows/       # Individual app windows (CLI, GitHub, Note, Resume, Spotify)
	assets/            # Static app data/content
	App.jsx            # Main desktop and app orchestration
```

## ⚙️ Getting Started

### 1) Clone the repository
```bash
git clone <your-repo-url>
cd mac-os
```

### 2) Install dependencies
```bash
npm install
```

### 3) Run development server
```bash
npm run dev
```

### 4) Build for production
```bash
npm run build
```

### 5) Preview production build
```bash
npm run preview
```

## 📜 Available Scripts
- `npm run dev` – Start Vite dev server
- `npm run build` – Build production assets
- `npm run preview` – Preview production build locally
- `npm run lint` – Run ESLint

## 📌 What This Project Demonstrates
- Component-driven architecture for complex UI
- Frontend state handling for multi-window interactions
- Clean separation of visual components and content
- Building a polished, interactive portfolio with product-level feel

## 🔗 Add Your Links
- **Live Demo:** `<your-deployed-url>`
- **LinkedIn Post:** `<your-linkedin-post-url>`

## 👤 Author

**Muzammil Ahmed Mangrio**

- GitHub: `https://github.com/muzammil-2003`
- LinkedIn: `https://www.linkedin.com/in/muzammil-ahmed-mangrio-39137a1b1/`
