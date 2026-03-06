import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Ici seront affichées les pages */}
      </main>
      <Footer />
    </>
  );
}

export default Layout;