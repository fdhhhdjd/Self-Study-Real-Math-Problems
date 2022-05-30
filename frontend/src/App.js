import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
