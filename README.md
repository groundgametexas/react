# GGTX React

### Install

1. Install the library

`yarn add @groundgametexas/react`

2. Install peer dependencies in your project

```
yarn add -D tailwindcss postcss autoprefixer react-hook-form
```

3. Configure Tailwind

Consumers will need Tailwind in order to generate the classes the library ships with.

```js
npx tailwindcss init -p

// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    "./pages/**/_.{js,ts,jsx,tsx}",
    "./components/**/_.{js,ts,jsx,tsx}",
    "./node_modules/@groundgametexas/react/*_/_.js",
  ],
  theme: {
    extend: {},
    // tokens here
  },
  plugins: [],
};
```
