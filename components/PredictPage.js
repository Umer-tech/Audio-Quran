import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";


export default function PredictPage({sendDataToParent, state_up }) {
  const router = useRouter();
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const recordedChunksRef = useRef([]);

  useEffect(() => {
       if(state_up)
       sendDataToParent(prediction)
    switch (prediction) {
        case "Bayan":
          router.push({
          pathname: `/bayan`,
          })
          break;
        case "BookMark":
          if(router.pathname == '/')
          {
          router.push({
            pathname: `/bookmarks`,
          })
          }
          break;
        case "home":
            router.push({
              pathname: `/`,
            })
            break;
        case "tafheem":
            router.push({
              pathname: `/tafheem`,
            })
            break;
        case "tilawat":
            router.push({
              pathname: `/tilawat`,
            })
            break; 

    
      default:
        break;
    }
  }, [prediction]);
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const newMediaRecorder = new MediaRecorder(stream);

      newMediaRecorder.addEventListener("dataavailable", (event) => {
        recordedChunksRef.current.push(event.data);
      });

      newMediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(recordedChunksRef.current);
        const audioFile = new File([audioBlob], "recording", {
          type: audioBlob.type,
        });
        setMediaRecorder(null); // Reset the media recorder
        setPrediction(""); // Reset the prediction
        recordedChunksRef.current = []; // Reset the recorded chunks
        setPrediction(""); // Reset the prediction
        getPrediction(audioFile); // Pass the audio file to getPrediction
      });

      setMediaRecorder(newMediaRecorder);
      newMediaRecorder.start();
      console.log("Recording started.");
      setIsRecording(true);
    } catch (error) {
      console.log("Error starting recording:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      console.log("Recording stopped.");
      setIsRecording(false);
    }
  };

  const getPrediction = async (audioFile) => {
    const formData = new FormData();
    formData.append("file", audioFile);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData);
      const { keyword } = response.data;
      console.log("Keyword", keyword);
      setPrediction(keyword);
    } catch (error) {
      console.log("Prediction error:", error);
    }
  };

  return (
    <>
       <Col lg md sm xs xxs={3}>{prediction && (
         <div style={{marginTop: "20px"}}>
          <b>{prediction}</b>
          </div>
      )}</Col>
       <Col lg md sm xs xxs={6}>
      <img  style= {{marginTop: '0px', alignContent: 'center', marginLeft: '27px', marginBottom: '10px'}} onClick={isRecording ? stopRecording : startRecording} src = {isRecording ? "/Images/mike off.png" : "/Images/mike on.png"} width= "50px" height= "50px"/>
      </Col>
      <Col lg md sm xs xxs={3}></Col>
      </>
  );
}
