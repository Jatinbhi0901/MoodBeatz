import * as faceapi from "face-api.js";
import { useNavigate } from "react-router-dom";
import React from "react";
import swal from "sweetalert";
import Left from "./Left";
import style from "../css/face.module.css"

function App() {
  const history = useNavigate();

  const history1 = useNavigate();
  const history2 = useNavigate();
  const history3= useNavigate();
  const history4= useNavigate();
  const history5 = useNavigate();
  const history6 = useNavigate();
  const history7 = useNavigate();

  function happy() {
    history1("/happy")
  }

  function surprised() {
    history2("/surprised")
  }

  function angry() {
    history3("/angry")
  }

  function sad() {
    history4("/sad")
  }

  function fearful() {
    history5("/fearful")
  }

  function disgusted() {
    history6("/disgusted")
  }

  function neutral() {
    history7("/neutral")
  }

  const [modelsLoaded, setModelsLoaded] = React.useState(false);
  const [captureVideo, setCaptureVideo] = React.useState(false);

  const videoRef = React.useRef();
  const videoHeight = 480;
  const videoWidth = 640;
  const canvasRef = React.useRef();

  React.useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + "/models";

      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]).then(setModelsLoaded(true));
    };
    loadModels();
  }, []);

  const startVideo = () => {
    setCaptureVideo(true);
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  const handleVideoOnPlay = () => {
    setInterval(async () => {
      if (canvasRef && canvasRef.current) {
        canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
          videoRef.current
        );
        const displaySize = {
          width: videoWidth,
          height: videoHeight,
        };

        faceapi.matchDimensions(canvasRef.current, displaySize);

        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceLandmarks()
          .withFaceExpressions();

        const resizedDetections = faceapi.resizeResults(
          detections,
          displaySize
        );

        canvasRef &&
          canvasRef.current &&
          canvasRef.current
            .getContext("2d")
            .clearRect(0, 0, videoWidth, videoHeight);
        canvasRef &&
          canvasRef.current &&
          faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
        canvasRef &&
          canvasRef.current &&
          faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
        canvasRef &&
          canvasRef.current &&
          faceapi.draw.drawFaceExpressions(
            canvasRef.current,
            resizedDetections
          );

        //todetect facial expression
        // console.log(detections[0].expressions);
        if(detections[0]!=null){
            // console.log(detections[0].expressions);
            var arr = detections[0].expressions;
            let max = 0;
        let maxKey = "";

        for (let char in arr) {
          if (arr[char] > max) {
            max = arr[char];
            maxKey = char;
          }
        }
        console.log(maxKey);

        if (maxKey === "happy") {
          swal({
            title: "Your Cureent Mood is Happy",
            text: "Good job!",
            icon: "success",
            button: "Ok",
          }).then(happy);
        }
        else if (maxKey === "surprised") {
          swal({
            title: "Your Cureent Mood is surprised",
            text: "Good job!",
            icon: "success",
            button: "Ok",
          }).then(surprised);
        }
        else if (maxKey === "angry") {
          swal({
            title: "Your Cureent Mood is angry",
            text: "Good job!",
            icon: "success",
            button: "Ok",
          }).then(angry);
          }
         
          else if (maxKey === "sad") {
            swal({
              title: "Your Cureent Mood is fearful",
              text: "Good job!",
              icon: "success",
              button: "Ok",
            }).then(sad);
          }
          else if (maxKey === "fearful") {
            swal({
              title: "Your Cureent Mood is fearful",
              text: "Good job!",
              icon: "success",
              button: "Ok",
            }).then(fearful);
          }
          else if (maxKey === "disgusted") {
            swal({
              title: "Your Cureent Mood is disgusted",
              text: "Good job!",
              icon: "success",
              button: "Ok",
            }).then(disgusted);
          }
          else {
            swal({
              title: "Your Cureent Mood is neutral",
              text: "Good job!",
              icon: "success",
              button: "Ok",
            }).then(neutral);
          }
        }
       
        
      }
    }, 100);
  };

  const closeWebcam = () => {
    videoRef.current.pause();
    videoRef.current.srcObject.getTracks()[0].stop();
    setCaptureVideo(false);
  };

  return (
    <>
    <Left/>
    <div className={style.faceback}>
      <div style={{ textAlign: "center", padding: "10px" }}>
        {captureVideo && modelsLoaded ? (
          <button
            onClick={closeWebcam}
            className={style.off}
          >
            Close Webcam
          </button>
        ) : (
          <button
            onClick={startVideo}
            className={style.on}
          >
            Open Webcam
          </button>
        )}
      </div>
      {captureVideo ? (
        modelsLoaded ? (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              <video
                ref={videoRef}
                height={videoHeight}
                width={videoWidth}
                onPlay={handleVideoOnPlay}
                className={style.cam}
                // style={{ borderRadius: "10px" }}
              />
              <canvas ref={canvasRef} style={{ position: "absolute" }} />
            </div>
          </div>
        ) : (
          <div>loading...</div>
        )
      ) : (
        <></>
      )}
    </div>
    </>
  );
}

export default App;
