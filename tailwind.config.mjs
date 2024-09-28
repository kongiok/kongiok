import aspectRatio from "@tailwindcss/aspect-ratio";

/** @type {import('tailwindcss').Config} */
const extendedColors = {
  olive: {
    50: "hsl(78, 52%, 95%)",
    100: "hsl(81, 53%, 89%)",
    200: "hsl(80, 50%, 80%)",
    300: "hsl(81, 49%, 67%)",
    400: "hsl(82, 44%, 55%)",
    500: "hsl(83, 46%, 44%)",
    600: "hsl(84, 49%, 37%)",
    700: "hsl(85, 45%, 27%)",
    800: "hsl(85, 40%, 23%)",
    900: "hsl(88, 36%, 20%)",
    950: "hsl(89, 45%, 10%)",
  },
  goldenrod: {
    50: "hsl(47, 90%, 96%)",
    100: "hsl(47, 82%, 89%)",
    200: "hsl(47, 83%, 77%)",
    300: "hsl(45, 84%, 68%)",
    400: "hsl(42, 84%, 56%)",
    500: "hsl(37, 80%, 50%)",
    600: "hsl(31, 82%, 44%)",
    700: "hsl(25, 79%, 37%)",
    800: "hsl(22, 71%, 31%)",
    900: "hsl(20, 67%, 26%)",
    950: "hsl(20, 81%, 14%)",
  },
  "burnt-sienna": {
    50: "hsl(23, 89%, 96%)",
    100: "hsl(24, 90%, 92%)",
    200: "hsl(21, 88%, 83%)",
    300: "hsl(20, 89%, 72%)",
    400: "hsl(16, 87%, 61%)",
    500: "hsl(13, 86%, 53%)",
    600: "hsl(9, 82%, 48%)",
    700: "hsl(7, 80%, 40%)",
    800: "hsl(4, 72%, 34%)",
    900: "hsl(4, 68%, 28%)",
    950: "hsl(2, 73%, 15%)",
  },
  concrete: {
    50: "hsl(0, 0%, 97%)",
    100: "hsl(0, 0%, 95%)",
    200: "hsl(0, 0%, 86%)",
    300: "hsl(0, 0%, 74%)",
    400: "hsl(0, 0%, 60%)",
    500: "hsl(0, 0%, 49%)",
    600: "hsl(0, 0%, 40%)",
    700: "hsl(0, 0%, 32%)",
    800: "hsl(0, 0%, 27%)",
    900: "hsl(0, 0%, 24%)",
    950: "hsl(0, 0%, 16%)",
  },
  sea: {
    50: "hsl(214, 47%, 97%)",
    100: "hsl(214, 44%, 94%)",
    200: "hsl(207, 41%, 86%)",
    300: "hsl(206, 41%, 74%)",
    400: "hsl(206, 41%, 60%)",
    500: "hsl(205, 38%, 48%)",
    600: "hsl(208, 42%, 39%)",
    700: "hsl(208, 42%, 32%)",
    800: "hsl(208, 39%, 27%)",
    900: "hsl(209, 34%, 24%)",
    950: "hsl(211, 36%, 16%)",
  },
  pesto: {
    50: "hsl(47, 36%, 95%)",
    100: "hsl(46, 38%, 89%)",
    200: "hsl(47, 37%, 80%)",
    300: "hsl(48, 36%, 67%)",
    400: "hsl(49, 33%, 55%)",
    500: "hsl(50, 34%, 41%)",
    600: "hsl(52, 36%, 35%)",
    700: "hsl(52, 32%, 27%)",
    800: "hsl(53, 29%, 23%)",
    900: "hsl(53, 26%, 20%)",
    950: "hsl(53, 33%, 10%)",
  },
};
const extendedKeyframes = {
  typing: {
    "0%": {
      width: "0%",
    },
    "75%": {
      width: "100%",
    },
    "100%": {
      width: "0%",
    },
  },
  blink: {
    "50%": {
      borderColor: "transparent",
    },
    "100%": {
      borderColor: "concrete-700",
    },
  },
};
const extendedAnimations = {
  typing: "typing 1.425s steps(12) infinite, blink 0.7s infinite",
};
const extendedFonts = {
  klee: ["LXGWWenKaiTC", "LXGWWenKaiTC-Mono"],
  text: ["Iansui", "LXGWWenKaiTC", "LXGWWenKaiTC-Mono", "Kaiti TC"],
  title: ["GenRyuMin", "Songti TC"],
  mono: ["JetBrainsMono", "BlexMono Nerd Font"],
  "handwriting-pure": ["Chenyuluoyan"],
  handwriting: ["Chenyuluoyan-mono"],
};

const extendedShadows = {
  anime: "4px 5px 0px 0px",
  "anime-inner": "inset 2px 2px 0px 0px",
};

const extendedScreens = {
  xs: "320px",
};

export default {
  content: ["pages/**/*.vue", "components/**/*.vue"],
  theme: {
    extend: {
      colors: extendedColors,
      keyframes: extendedKeyframes,
      animation: extendedAnimations,
      fontFamily: extendedFonts,
      boxShadow: extendedShadows,
      dropShadow: extendedShadows,
      screens: extendedScreens,
    },
  },
  plugins: [aspectRatio],
};
