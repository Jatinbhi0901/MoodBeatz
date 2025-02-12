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
import Hindi from "./components/Hindi";
import Punjabi from "./components/Punjabi";
import Rap91 from "./components/Rap91";
import EmraanHashmi from "./components/EmraanHashmi";
import TextToSpeech from"./components/TextToSpeech";
import Face from "./components/Face";
import Disgusted from "./Songs/Disgusted";
import Happy from "./Songs/Happy";
import Sad from "./Songs/Sad";
import Angry from "./Songs/Angry";
import Fearful from "./Songs/Fearful";
import Neutral from "./Songs/Neutral";
import Surprised from "./Songs/Surprised";
import Chatbot from "./components/Chatbot";


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
          <Route path="/hindi" element={<Hindi />} />
          <Route path="/punjabi" element={<Punjabi />} />
          <Route path="/rap91" element={<Rap91 />} />
          <Route path="/emraanhashmi" element={<EmraanHashmi />} />
          <Route path="/facerec" element={<Face />} />
          <Route path="/texttospeech" element={<TextToSpeech />} />
          <Route path="/chatbot" element={<Chatbot/>} />


          <Route path="/happy" element={<Happy />} />
          <Route path="/sad" element={<Sad />} />
          <Route path="/angry" element={<Angry />} />
          <Route path="/neutral" element={<Neutral />} />
          <Route path="/fearful" element={<Fearful />} />
          <Route path="/surprised" element={<Surprised />} />
          <Route path="/disgusted" element={<Disgusted />} />
          

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
