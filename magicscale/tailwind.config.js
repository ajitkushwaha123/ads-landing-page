/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#01B55E",
        secondary: "#E5FAF1",
      },
      backgroundImage: {
        "dotted-background": "url('/bg.png')",
        backy:
          "url('https://i.pinimg.com/736x/32/49/14/324914bb1233fa62e640c6a1133d550c.jpg')",
        pattern1: "url('/pattern1.png')",
        pattern2: "url('/pattern2.png')",
        pattern3: "url('/pattern3.png')",
      },
      animation: {
        bounce: "bounce 3s linear infinite",
      },
    },
  },
  plugins: [],
};
