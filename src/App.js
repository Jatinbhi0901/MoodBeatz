import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import React from "react";
import Registration from "./components/Registration";
import SpeechToText from "./components/SpeechToText";
import MusicPlayer from "./components/MusicPlayer";
import Left from "./components/Left";
import Homepage from "./components/Homepage";
import Trending from "./components/Trending";
import Global from "./components/Global";
import HotHindi from "./components/HotHindi";
import HotPunjabi from "./components/HotPunjabi";
import Rap91 from "./components/Rap91";
import Imran from "./components/Imran";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />  
          <Route path="/speechtotext" element={<SpeechToText />} />
          <Route path="/musicplayer" element={<MusicPlayer />} />
          <Route path="/left" element={<Left />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/global" element={<Global />} />
          <Route path="/hothindi" element={<HotHindi />} />
          <Route path="/hotpunjabi" element={<HotPunjabi />} />
          <Route path="/rap91" element={<Rap91 />} />
          <Route path="/imran" element={<Imran />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
