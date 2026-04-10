import nextConfig from "eslint-config-next";

const config = [
  ...nextConfig,
  {
    rules: {
      "react/prop-types": "warn",
      "no-unused-vars": "warn",
      // setMounted(true) in useEffect is the standard next-themes hydration guard
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default config;
