import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";

function Layout() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      justifyContent: "space-between"
    }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;