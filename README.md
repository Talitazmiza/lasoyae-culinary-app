Overview La Soyae

![image](https://user-images.githubusercontent.com/54302300/159838590-7e18c3bb-71f2-4a5b-9419-a064b62c5048.png)
![image](https://user-images.githubusercontent.com/54302300/159838679-68355f67-225e-419c-b0fc-df6386dd86c4.png)
![image](https://user-images.githubusercontent.com/54302300/159838760-b603c058-4ab4-498f-a7b1-8433af6dcc30.png)
![image](https://user-images.githubusercontent.com/54302300/159838784-4636e519-0cc6-418d-9506-f1eeb0f885f7.png)
![image](https://user-images.githubusercontent.com/54302300/159838851-9acef1c4-da03-413c-a957-92bb0477c9aa.png)



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
  
for server side please check out in 
https://github.com/dianasaurus-debug/lasoyae-backend
