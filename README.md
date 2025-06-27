# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/0f75453e-b28e-4c79-b18f-27611abb9d69

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/0f75453e-b28e-4c79-b18f-27611abb9d69) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/0f75453e-b28e-4c79-b18f-27611abb9d69) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

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
