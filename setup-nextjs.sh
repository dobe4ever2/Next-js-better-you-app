# To use this script:

# Save it to a file, for example, setup-nextjs.sh.
# Make the script executable by running chmod +x setup-nextjs.sh.
# Run the script with ./setup-nextjs.sh.

#!/bin/bash

# Create or update package.json
cat <<EOF > package.json
{
  "name": "Next-js-better-you-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --port 3000 --hostname 0.0.0.0",
    "build": "next build",
    "start": "next start --port 3000 --hostname 0.0.0.0",
    "lint": "next lint"
  },
  "dependencies": {
    "@headlessui/react": "^2.1.10",
    "@heroicons/react": "^2.1.5",
    "@radix-ui/react-avatar": "^1.1.1",
    "@radix-ui/react-icons": "^1.3.0",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-scroll-area": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "class-variance-authority": "^0.7.0",
    "lucide-react": "^0.452.0",
    "clsx": "^2.1.1",
    "tailwindcss-animate": "^1.0.7",
    "framer-motion": "^11.11.9",
    "next": "^14.2.15",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^2.5.4"
  },
  "devDependencies": {
    "@types/node": "^20.11.6",
    "@types/react": "^18.2.48",
    "@types/react-dom": "^18.2.18",
    "autoprefixer": "^10.4.20",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.1.0",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.14",
    "typescript": "^5.6.3"
  }
}
EOF

# Install Next.js & dependencies
npm install -g npm@10.9.0

npm install next@latest react@latest react-dom@latest

# Install Tailwind CSS and its peer dependencies
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# Install additional useful packages
npm install @heroicons/react @headlessui/react framer-motion

# Initialize Tailwind CSS
npx tailwindcss init -p

# Create directories if they don't exist
mkdir -p styles
mkdir -p pages
mkdir -p components

# Create or update tailwind.config.js
cat <<EOF > tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

# Create or update styles/globals.css
cat <<EOF > styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

# Create or update tsconfig.json
cat <<EOF > tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
EOF

# Create or update components.json
cat <<EOF > components.json
{
  "\$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
EOF

# Finally, install the necessary dependencies for shadcn
npm install @radix-ui/react-icons class-variance-authority clsx tailwind-merge

echo "Project setup complete!"

# Run the development server
npm run dev




