import React from "react";
import style from "../css/speechtotext.module.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import mic from "../images/mic.png";
import Left from "./Left";

const SpeechToText = () => {
  const commands = [
    {
      command: "reset",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
    {
      command: "open *",
      callback: (site) => {
        window.open("http://" + site);
      },
    },
    {
      command: ["play *", "global","punjabi", "trending", "hindi", "rap","emraanhashmi"],

      callback: (command) => {
        if (JSON.stringify(command).includes("punjabi")) {
          window.open("http://localhost:3000/punjabi", "_self");
        } else if (JSON.stringify(command).includes("trending")) {
          window.open("http://localhost:3000/trending", "_self");
        } else if (JSON.stringify(command).includes("hindi")) {
          window.open("http://localhost:3000/hindi", "_self");
        }  else if (JSON.stringify(command).includes("global")) {
            window.open("http://localhost:3000/global", "_self");
        } else if (JSON.stringify(command).includes("rap")) {
          window.open("http://localhost:3000/rap", "_self");
        } else if (JSON.stringify(command).includes("emraanhashmi")) {
          window.open("http://localhost:3000/emraanhashmi", "_self")
        } else {
          alert("No track found");
        }
      },
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true,
    },
  ];
  const { transcript, listening, resetTranscript } = useSpeechRecognition({
    commands,
  });

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <>
      <Left />

      <section className={style.sec2}>
        <h1>Speak : play 'music name/album name'</h1>
        <div className={style.loader}>
          <div className={style.line1}></div>
          <div className={style.line2}></div>
          <div className={style.line3}></div>
          <div className={style.line4}></div>
          <div className={style.mmic}>
            <img src={mic} width="250px" height="250px" />
          </div>
          <div className={style.line4}></div>
          <div className={style.line3}></div>
          <div className={style.line2}></div>
          <div className={style.line1}></div>
        </div>

        <div>
          {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
          <button
            className={style.start}
            onClick={SpeechRecognition.startListening({
              continuous: true,
              language: "en-IN",
            })}
          >
            Start
          </button>
          <div className={style.buttons}>
            <button
              className={style.stop}
              onClick={SpeechRecognition.stopListening}
            >
              Stop
            </button>
            <button className={style.reset} onClick={resetTranscript}>
              Reset
            </button>
          </div>
          <p className={style.text}>{transcript}</p>
        </div>
      </section>
    </>
  );
};

export default SpeechToText;
