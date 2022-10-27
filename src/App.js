import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Fav from "./components/Fav";

function App() {
  return (
    <div id="app" className="bg-gray-900">
      <Header />
      <div className="w-5/6 mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favourites" element={<Fav/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
