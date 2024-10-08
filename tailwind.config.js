import u from "./public/imgs/omgas.png";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ultramarine-color":      "#01447B",
        "ultramarine-gold-color": "#FFD700",
        "backGround-color":       "#E0E0E0",
        // RGBA
        modalBackground:          "rgba(0, 0, 0, 0.75)"
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "ultramar":     "url('./public/imgs/Warhammer Chapters Symbols/ultramar.png')",
        "imperialFist": "url('./public/imgs/Warhammer Chapters Symbols/imperial_fist.png')",
        "salamanders":  "url('./public/imgs/Warhammer Chapters Symbols/salamanders.png')",
        "ravenGuard":   "url('./public/imgs/Warhammer Chapters Symbols/raven_guard.png')",
        "whiteScars":   "url('./public/imgs/Warhammer Chapters Symbols/white_scars.png')",
        "bloodAngels":  "url('./public/imgs/Warhammer Chapters Symbols/blood_angels.png')",
        "spaceWolves":  "url('./public/imgs/Warhammer Chapters Symbols/space_wolves.png')",
        "darkAngels":   "url('./public/imgs/Warhammer Chapters Symbols/dark_angels.png')",
        "ironHands":    "url('./public/imgs/Warhammer Chapters Symbols/iron_hands.png')",
      },
      fontFamily: {
        "ancient": ['Ancient']
      }
    },
  },
  plugins: [],
}
