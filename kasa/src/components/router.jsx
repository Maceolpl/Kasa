import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Home from "../pages/home";
import About from "../pages/about";
import Logement from "../pages/logement";
import NotFound from "../pages/error";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="logement/:id" element={<Logement />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Router;