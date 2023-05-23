import React, { useState, useRef } from "react";
import axios from "axios";

export default function UserAudioRecorder() {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const recordedChunksRef = useRef([]);

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
    <div>
      <h1>Keyword Prediction</h1>
      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      {prediction && (
        <div>
          <h2>Prediction Result:</h2>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
}

// import React, { useState } from "react";
// import axios from "axios";

// export default function UserAudioRecorder() {
//   const [recording, setRecording] = useState(null);
//   const [mediaRecorder, setMediaRecorder] = useState(null);
//   const [prediction, setPrediction] = useState("");
//   const [isRecording, setIsRecording] = useState(false);

//   const startRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       const newMediaRecorder = new MediaRecorder(stream);
//       const audioChunks = [];


//       newMediaRecorder.addEventListener("dataavailable", (event) => {
//         audioChunks.push(event.data);
//       });

//       newMediaRecorder.addEventListener("stop", () => {
//         const audioBlob = new Blob(audioChunks);
//         const audioFile = new File([audioBlob], "recording", {
//           type: audioBlob.type,
//         });
//         setRecording(audioFile);
//       });

//       setMediaRecorder(newMediaRecorder);
//       newMediaRecorder.start();
//       console.log("Recording started.");
//       setIsRecording(true)

//     } catch (error) {
//       console.log("Error starting recording:", error);
//     }
//   };

//   const stopRecording = () => {
//     if (mediaRecorder) {
//       mediaRecorder.stop();
//       console.log("Recording stopped.");
//       setIsRecording(false)


//     }
//     getPrediction()
//     setRecording(null)
//   };



//   const getPrediction = async () => {

//     if (!recording) {
//       console.log("No recording available!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", recording);

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/predict", formData);
//       const { keyword } = response.data;
//       console.log("Keyword", keyword);
//       setPrediction(keyword);
//     } catch (error) {
//       console.log("Prediction error:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Keyword Prediction</h1>
//       <button onClick={isRecording ? stopRecording : startRecording}>
//         {isRecording ? 'Stop Recording' : 'Start Recording'}
//       </button>
//       {prediction && (
//         <div>
//           <h2>Prediction Result:</h2>
//           <p>{prediction}</p>
//         </div>
//       )}
//     </div>
//   );
// }
