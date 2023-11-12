export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        'MCMM': {
           'primary' : '#0F2452',           /* Primary color */
           'primary-focus' : '#07132c',     /* Primary color - focused */
           'primary-content' : '#ffffff',   /* Foreground content color to use on primary color */

           'secondary' : '#ED1D2E',         /* Secondary color */
           'secondary-focus' : '#bb0716',   /* Secondary color - focused */
           'secondary-content' : '#ffffff', /* Foreground content color to use on secondary color */

           'accent' : '#FFBB29',            /* Accent color */
           'accent-focus' : '#efa301',      /* Accent color - focused */
           'accent-content' : '#ffffff',    /* Foreground content color to use on accent color */

           'neutral' : '#3b424e',           /* Neutral color */
           'neutral-focus' : '#2a2e37',     /* Neutral color - focused */
           'neutral-content' : '#ffffff',   /* Foreground content color to use on neutral color */

           'base-100' : '#ffffff',          /* Base color of page, used for blank backgrounds */
           'base-200' : '#d6e2f5',          /* Base color, a little darker */
           'base-300' : '#7c8eab',          /* Base color, even more darker */
           'base-content' : '#001433',      /* Foreground content color to use on base color */

           'info' : '#114b9f',              /* Info */
           'success' : '#00d12a',           /* Success */
           'warning' : '#ED1D2E',           /* Warning */
           'error' : '#ff2424',             /* Error */

          '--rounded-box': '.3rem',          /* border-radius for cards and other big elements */
          '--rounded-btn': '0.15rem',        /* border-radius for buttons and similar elements */
          '--rounded-badge': '1.9rem',      /* border-radius for badge and other small elements */

          '--animation-btn': '.35s',       /* bounce animation time for button */
          '--animation-input': '0.25s',       /* bounce animation time for checkbox, toggle, etc */

          '--btn-text-case': 'titlecase',   /* default text case for buttons */
          '--navbar-padding': '0.75rem',      /* default padding for navbar */
          '--border-btn': '1px',            /* default border size for button */
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
