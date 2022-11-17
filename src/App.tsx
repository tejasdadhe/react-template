import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PrivateRoute from "./Components/PrivateRoute";
import AuthenticatedPage from "./Pages/AuthenticatedPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <PrivateRoute fallbackPath="/home">
            <Route path="/authenticated-route" element={<AuthenticatedPage />} />
          </PrivateRoute>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
