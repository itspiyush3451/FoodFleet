import React, { Suspense } from "react";
import AppRoutes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* Layout wrapper - add NavBar/Footer here if needed */}
      {/* <NavBar /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
