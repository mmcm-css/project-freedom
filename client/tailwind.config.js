export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        MCMM: {
          primary: "#0F2452",
          "primary-focus": "#07132c",
          "primary-content": "#ffffff",

          secondary: "#ED1D2E",
          "secondary-focus": "#bb0716",
          "secondary-content": "#ffffff",

          accent: "#FFBB29",
          "accent-focus": "#efa301",
          "accent-content": "#ffffff",

          neutral: "#3b424e",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#d6e2f5",
          "base-300": "#7c8eab",
          "base-content": "#001433",

          info: "#114b9f",
          success: "#00d12a",
          warning: "#ED1D2E",
          error: "#ff2424",

          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": ".25s",
          "--animation-input": ".2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
    ],
    darkTheme: "light",
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },
};
