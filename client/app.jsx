import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import QuizApp from "./pages/QuizApp";
import React from "react";
import { Map } from "./pages/Map";
import { Info } from "./pages/Info";
import Kvernhus from "./pages/Kvernhus";
import Kvernstein from "./pages/Kvernstein";
import Gardskvern from "./pages/Gardskvern";
import Sagblad from "./pages/Sagblad";
import Sager from "./pages/Sager";
import Achievements from "./pages/Achievements";
import data from "./pages/data";

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route path={"/quizApp"} element={<QuizApp />} />
        <Route path={"/map"} element={<Map />} />
        <Route path={"/info"} element={<Info />} />
        <Route path={"/FrontPage"} element={<FrontPage />} />
        <Route path={"/info/kvernhus"} element={<Kvernhus />} />
        <Route path={"/info/kvernstein"} element={<Kvernstein />} />
        <Route path={"/info/gardskvern"} element={<Gardskvern />} />
        <Route path={"/info/sagblad"} element={<Sagblad />} />
        <Route path={"/info/sager"} element={<Sager />} />
        <Route path={"/info/medaljer"} element={<Achievements />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
