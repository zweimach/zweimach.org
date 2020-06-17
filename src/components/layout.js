import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="antialiased flex flex-col h-full bg-white text-gray-800 text-lg md:text-xl">
      <Header />
      <main className="w-full sm:max-w-screen-lg sm:mx-auto flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
