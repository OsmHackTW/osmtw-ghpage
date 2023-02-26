export default [
  {
    extends: ["airbnb", "next", "prettier"],
    plugins: ["react", "import"],
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    rule: {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/jsx-props-no-spreading": "off",
      "react/function-component-definition": "off",
      "@next/next/no-img-element": "off"
    }
  }
]
