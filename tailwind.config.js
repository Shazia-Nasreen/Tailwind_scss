/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',            // Lägg till vägen till din HTML-fil (index.html)
    './**/*.html',              // Om du har flera HTML-filer i olika mappar
    './**/*.js',                // Om du använder JavaScript-filer också (t.ex. för React, Vue, eller vanligt JS)
  ],
  theme: {
    extend: {}, 
  },
  plugins: [],
};
