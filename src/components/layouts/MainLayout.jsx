import React from "react";
import Footer from "../commons/Footer";
import Header from "../commons/Header";

function MainLayout(props) {
  const { children } = props;
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
