// src/App.jsx

import { useState } from "react";
import ScrollTop from "./components/scrollTop";
import SplashLoader from "./components/ShimmerLoading";
import HomePage from "./pages/HomePage";

function App() {
  const [splashDone, setSplashDone] = useState(false);
  return (
    <>
      {!splashDone && <SplashLoader onFinish={() => setSplashDone(true)} />}
      {splashDone && (
        <>
          <HomePage />
          <ScrollTop />
        </>
      )}
    </>
  );
}

export default App;
