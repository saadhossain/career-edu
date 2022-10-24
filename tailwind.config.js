/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
          colors:{
            "edu": "#00508F",
            "edu2nd": "#140C40",
            "eduhf": "#06112A"
          }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light", "dark", "night"],
    },
}