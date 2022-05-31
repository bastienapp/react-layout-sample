import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AccountNav from "../commons/AccountNav";
import Footer from "../commons/Footer";
import Header from "../commons/Header";
import "./AccountLayout.css";

function AccountLayout() {
  useEffect(() => {
    console.log("mount AccountLayout");
  }, []);

  return (
    <div className='AccountLayout'>
      <Header />
      <div className='main-container'>
        <AccountNav />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AccountLayout;
