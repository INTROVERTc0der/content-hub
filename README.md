# Welcome to your Content-Hub project

## Project info

# Step 1: Clone the repository using the project's Git URL.
git clone <https://github.com/INTROVERTc0der/content-hub.git>

# Step 2: Navigate to the project directory.
cd <Content-Hub>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

# ContentHub

ContentHub is a modern, responsive, and customizable content dashboard that allows users to discover, organize, and interact with news, entertainment, sports, and finance content. Built with React, TypeScript, Vite, and Tailwind CSS, it features authentication, user preferences, and a beautiful UI.

## Features

- 📰 Personalized dashboard for news, entertainment, sports, and finance
- 🔥 Trending content section
- ❤️ Favorites management
- ⚙️ User settings and preferences (dark mode, notifications, categories)
- 🔒 Authentication (login/signup, local storage based)
- 🌙 Dark mode support
- ⚡ Fast, responsive, and mobile-friendly UI
- 🧩 Modular component structure
- 🛠️ Built with React, TypeScript, Vite, Tailwind CSS

## Screenshots

![Dashboard Screenshot](https://lovable.dev/opengraph-image-p98pqg.png)

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/INTROVERTc0der/content-hub.git
   cd content-hub
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

4. **Build for production:**
   ```sh
   npm run build
   ```

5. **Lint the code:**
   ```sh
   npm run lint
   ```

### Project Structure

```
contenthub/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── contexts/          # React context (Auth, etc.)
│   ├── data/              # Mock data
│   ├── pages/             # Page components (Dashboard, Trending, etc.)
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── index.html             # HTML template
├── package.json           # Project metadata and scripts
├── tailwind.config.ts     # Tailwind CSS config
├── tsconfig.json          # TypeScript config
└── vite.config.ts         # Vite config
```

### Authentication
- Local storage based (no backend required)
- Signup and login with email and password
- User preferences are saved per user

### Customization
- Easily add new content categories or UI themes
- Modify mock data in `src/data/mockContent.ts`
- Update Tailwind config for custom styles

### Deployment
You can deploy the production build (`dist` folder) to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## Credits
- Built by Arpit Gupta for a job application round
- UI inspired by modern dashboard designs
- Icons by [Lucide](https://lucide.dev/)

## License
This project is for demonstration and job application purposes only.
