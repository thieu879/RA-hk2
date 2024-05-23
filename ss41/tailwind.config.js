/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "500px": "500px",
      },
      backgroundColor: {
        "rgb(255 255 255)": "rgb(255 255 255)",
      },
    },
  },
  plugins: [],
};
