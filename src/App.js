import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <BrowserRouter>
      <Header
        anchorElNav={anchorElNav}
        setAnchorElNav={setAnchorElNav}
        handleOpenNavMenu={handleOpenNavMenu}
        handleCloseNavMenu={handleCloseNavMenu}
      />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
