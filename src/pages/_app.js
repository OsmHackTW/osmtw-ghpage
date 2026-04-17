import React from "react";
import PropTypes from "prop-types";
import "../styles/global.css";

const App = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);


App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
