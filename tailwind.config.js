/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorantSC: "var(--font-cormorant-sc)",
        cormorantGaramond: "var(--font-cormorant-garamond)",
        dancingScript: "var(--font-dancing-script)",
        libreBaskerville: "var(--font-libre-baskerville)",
        robotoFlex: "var(--font-roboto-flex)",
      },
      colors: {
        "nav-border": "#EBEAEA",
        "light-white": "#FAFAFB",
        "light-white-100": "#F1F4F5",
        "light-white-200": "#d7d7d7",
        "light-white-300": "#F3F3F4",
        "light-white-400": "#E2E5F1",
        "light-white-500": "#E4E4E4",
        gray: "#4D4A4A",
        "gray-100": "#3d3d4e",
        "black-100": "#252525",
        "gray-50": "#D9D9D9",

        "primary-dark": "#542e23",
        "primary-dark-500": "#bf7a66",
        "primary-dark-250": "#d3a294",
        "primary-dark-100": "#e8d0c9",
        "primary-dark-75": "#ead4cd",
        "primary-dark-50": "#f2e5e1",

        "primary-light": "#aa7e65",
        "primary-light-500": "#d0b7aa",
        "primary-light-250": "#ebe1db",
        "primary-light-100": "#f6f1ee",
        "primary-light-50": "#fbf9f8",

        "secondary-dark": "#234954",
        "secondary-dark-500": "#64aabe",
        "secondary-dark-250": "#aad1dc",
        "secondary-dark-100": "#d4e8ed",
        "secondary-dark-50": "#e9f3f6",
      },
      boxShadow: {
        menu: "0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)",
      },
      screens: {
        xs: "378px",
      },
      maxWidth: {
        "10xl": "1680px",
      },
    },
  },
  plugins: [],
};
