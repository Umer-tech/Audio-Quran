import React, { useState } from "react";
import axios from "axios";

export default function UserAudioRecorder() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState("");

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      console.log("No file selected!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData);
      const { keyword } = response.data;
      setPrediction(keyword);
    } catch (error) {
      console.log("Prediction error:", error);
    }
  };

  return (
    <div>
      <h1>Keyword Prediction</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileUpload} />
        <button type="submit">Predict</button>
      </form>
      {prediction && (
        <div>
          <h2>Prediction Result:</h2>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
}
