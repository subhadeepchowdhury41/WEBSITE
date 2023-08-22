/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        custom: ["Poppins", "sans-serif"],
        navbar: ["Nunito", "sans-serif"],
      },
      transitionProperty: {
        justify: "justify-content",
      },
      keyframes: {
        randi: {
          from: {
            opacity: "0",
            right: "25%",
          },
          to: {
            opacity: "100%",
            right: "0",
          },
        },
        "randi-reverse": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "100%",
          },
        },
        "left-college-name-swipe": {
          from: {
            transform: "translateX(-50%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0%)",
            opacity: "100%",
          },
        },
        "right-college-name-swipe": {
          from: {
            transform: "translateX(50%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0%)",
            opacity: "100%",
          },
        },
        "mega-menu-open": {
          from: {
            transform: "translateY(-10%)",
            opacity: "0%",
          },
          to: {
            transform: "translateY(0%)",
            opacity: "100%",
          },
        },
        "carousel-change-start": {
          from: {
            transform: "translateY(-10%)",
            filter: "brightness(0)",
          },
          to: {
            transform: "translateY(0%)",
            filter: "brightness(1)",
          },
        },
        "carousel-title-change": {
          from: {
            transform: "translateY(100%)",
            opacity: "0%",
          },
          to: {
            transform: "translateY(0%)",
            opacity: "100%",
          },
        },
      },
      animation: {
        randimation: "randi 0.5s ease-in-out",
        "randimation-reverse": "randi-reverse 0.5s ease-in-out",
        "left-college-name-swipe-animation":
          "left-college-name-swipe 0.3s ease-in-out",
        "right-college-name-swipe-animation":
          "right-college-name-swipe 0.3s ease-in-out",
        "mega-menu-open": "mega-menu-open 0.3s ease-in",
        "carousel-change": "carousel-change-start 0.5s ",
        "carousel-title-change": "carousel-title-change 0.7s 0.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
