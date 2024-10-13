export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      dropShadow: {
        backshadow: "4px 3px 20px rgba(0, 123, 255, 0.7)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      boxShadow: {
        innerCustom: "inset -1px -27px 29px -14px rgba(66, 68, 90, 1)", // Custom inner shadow
      },
      backgroundImage: {
        "background-gradient":
          "linear-gradient(180deg, rgba(70,200,188,1) 0%, rgba(30,138,203,1) 100%)",
      },
   
    },
  },
  plugins: [require("flowbite/plugin")],
};