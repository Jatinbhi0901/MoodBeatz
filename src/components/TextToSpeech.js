import React from "react";
import { useState } from "react";

function TextToSpeech() {
  const [ourText, setOurText] = useState("My name is jatin");
  const msg = new SpeechSynthesisUtterance();

  const speechHandler = (msg) => {
    msg.text = ourText;
    window.speechSynthesis.speak(msg);
  };
  function speak() {
    speechHandler(msg);
  }
  return (
    <div className='App'>
      <h1>React Text to Speech App</h1>
      <input
        type='text'
        value={ourText}
        placeholder='Enter Text'
        onChange={(e) => setOurText(e.target.value)}
      />
      <button onClick={() => speechHandler(msg)}>SPEAK FOR MORE INFORMATION</button>
    </div>
  );
}

export default TextToSpeech;
