import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

import Layout from "./layout";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Logement from "./pages/logement.jsx";
import NotFound from "./pages/error.jsx";

function LogementKey() {
  const { id } = useParams();
  return <Logement key={id} />;
}

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="logement/:id" element={<LogementKey />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Router;