module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        topherobackground:
          "url('https://cdn.solo.to/user/bg/5fe5cd367fa4b7_30328510.jpg')",
      }),
      colors: {
        ashDark: "#242424",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
