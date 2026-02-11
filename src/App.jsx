import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import GrantCard from "./components/GrantCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div className="center-wrapper"><GrantCard /></div>} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
