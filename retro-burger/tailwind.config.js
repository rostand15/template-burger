/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Paleta da marca: mude aqui e o site inteiro acompanha.
      colors: {
        asfalto: "#161618", // fundo principal
        grafite: "#232327", // superfícies escuras
        creme: "#F6EFE0", // papel / texto claro
        cereja: "#D7282F", // vermelho do diner
        gema: "#F4B73F", // amarelo mostarda (botões, preços)
        turquesa: "#4FB8AE", // detalhe anos 50, usar pouco
      },
      fontFamily: {
        display: ['"Alfa Slab One"', "Georgia", "serif"],
        cond: ['"Barlow Condensed"', "Arial Narrow", "sans-serif"],
        sans: ["Barlow", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "hard-red": "4px 4px 0 #D7282F",
        "hard-dark": "4px 4px 0 #161618",
        "hard-cream": "4px 4px 0 #F6EFE0",
      },
    },
  },
  plugins: [],
};
