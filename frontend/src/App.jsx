
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import Login from "./Login.jsx";
import MenPage from "./Men/men-page.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/men" element={<MenPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
