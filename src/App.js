import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Fav from "./components/Fav";
import PageNotFound from "./components/PageNotFound";
import MovieDetails from "./components/MovieDetails";
import Login from "./components/Login";

function App() {
  return (
    <div id="app" className="bg-gray-900">
      <BrowserRouter>
        <Header />
        <div className="w-5/6 mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favourites" element={<Fav />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/details/:movieID" element={<MovieDetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
