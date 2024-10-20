
# Install Next.js & dependencies
```
npm install
```
```
npm install next@latest react@latest react-dom@latest
```
# Install Tailwind CSS and its peer dependencies

```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

# Install additional useful packages
```
npm install @heroicons/react @headlessui/react framer-motion
```

# Initialize Tailwind CSS
```
npx tailwindcss init -p
```

# Config files
```sh
# To use this script:
# Save this file to `setup-nextjs.sh`
# Make the script executable by running: `chmod +x setup-nextjs.sh`
# Run the script with `./setup-nextjs.sh`

#!/bin/bash

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

# Create or update pages/_app.js
cat <<EOF > pages/_app.js
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
EOF

# Create or update pages/_app.tsx
cat <<EOF > pages/_app.tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
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

echo "Project setup complete!"
```


# Finally, install the necessary dependencies for shadcn:
```
npm install @radix-ui/react-icons class-variance-authority clsx tailwind-merge
```


# Run it

```
npm run dev
```



# Add:
```
npx shadcn@latest add "https://v0.dev/chat/b/b_C4f25cL0ORa"
```