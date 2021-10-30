# Getting Started with Create React App

1. install tailwindcss in ReactJS 
  
   `npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`
   
3. install and configure Craco with 
   
   `npm install @craco/craco`
   
3. update your `scripts` in your `package.json` file to use craco instead of react-scripts for all scripts except `eject`:
   
   remove ->
  
   "start": "react-scripts start",
   
   "build": "react-scripts build",
   
   "test": "react-scripts test",
   
   replace with ->
   
   "start": "craco start",
   
   "build": "craco build",
   
   "test": "craco test",
   
   
4. create a `craco.config.js`, add **tailwindcss** and **autoprefixer**
   
   // craco.config.js
   
   module.exports = {
   
    style: {
    
    postcss: {
    
      plugins: [
 
        require('tailwindcss'),
        
        require('autoprefixer'),
        
      ],
      
    },
    
    },
    
   }
   

5. generate your `tailwind.config.js` file with:

   `npx tailwindcss-cli@latest init`
   
   
6. it'll create `tailwind.config.js` file, then edit purge in this this file 
   
   from this -> purge: [],
   
   to this -> purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   
   
7. open your `./src/index.css` include Tailwindcss: 
   
   /* ./src/index.css */
   
   @tailwind base;
   
   @tailwind components;
   
   @tailwind utilities;
   
   
8. npm run start

   you're FINISHED, Happy Hacking!:)


NOTE:

if your **caniuse-lite is oudated** please run:

`npx browserslist@latest --update-db`
  
