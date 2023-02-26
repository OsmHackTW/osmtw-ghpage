import React from "react";
import { ThemeProvider } from 'next-themes'
import PropTypes from "prop-types";
import "../styles/global.css";

const App = ({ Component, pageProps }) => (
  <ThemeProvider enableSystem attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
);


App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.elementType.isRequired,
};

export default App;
