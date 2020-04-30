import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="antialiased flex flex-col h-full bg-gray-200 text-gray-900 text-xl">
      <Header />
      <main className="md:max-w-screen-md md:mx-auto flex-1">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
