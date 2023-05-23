import React, { useState, useEffect } from 'react';

const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  let mediaRecorder;

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        setIsRecording(true);
        setRecordedChunks([]);

        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.addEventListener('dataavailable', (event) => {
          if (event.data.size > 0) {
            setRecordedChunks((prevChunks) => [...prevChunks, event.data]);
          }
        });

        mediaRecorder.start();
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
    setIsRecording(false);
  };

  const sendRecording = () => {
    if (recordedChunks.length === 0) {
      return;
    }

    const blob = new Blob(recordedChunks, { type: 'audio/webm' });

    // Create form data and append the audio file
    const formData = new FormData();
    formData.append('voiceRecording', blob);

    // Send the recorded audio to the API endpoint
    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the response from the API
        console.log('API response:', data);
      })
      .catch((error) => {
        console.error('Error sending recording to API:', error);
      });
  };

  useEffect(() => {
    sendRecording();
  }, [recordedChunks]);

  return (
    <div>
      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
    </div>
  );
};

export default VoiceRecorder;
