import React from "react";
import { Route, Routes } from "react-router-dom";
import IntanceToken from "./Components/intanceToken/IntanceToken";
import Cropper from "./Pages/Cropper/Cropper";
import DownLoad from "./Pages/DownLoad/DownLoad";
import Home from "./Pages/Home";
import MultiplePicture from "./Pages/MultipePicture/MultiplePicture";
import Onboarding from "./Pages/Onboarding/Onboarding";
const App = () => {
  return (
    <React.Fragment>
      <Routes>
        //!Logic
        <Route path="/" element={<Home />} />
        //! Download,Upload
        <Route path="/download" element={<DownLoad />} />
        //! How to select multiple picture ?
        <Route path="/multiple" element={<MultiplePicture />} />
        //! Cropper Image
        <Route path="/crop" element={<Cropper />} />
        //!React-User-Onboarding
        <Route path="/onboard" element={<Onboarding />} />
        //! Check Accept Token before request
        <Route path="/request" element={<IntanceToken />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
