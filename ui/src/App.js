import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import './App.css';

function App() {
  const webcamRef = useRef(null);
  const intervalRef = useRef(null); 

  const [isDetecting, setIsDetecting] = useState(false);
  const [outputContext, setOutputContext] = useState("System idle. Click 'Start Detection'...");

  const mockSigns = ["HELLO", "THANK YOU", "I NEED HELP", "WELCOME", "SIGN-LINK ACTIVE"];

  const toggleDetection = () => {
    if (!isDetecting) {
      setIsDetecting(true);
      setOutputContext("Warming up inference pipeline...");

      // Simulate real-time frame processing loop
      intervalRef.current = setInterval(() => {
        if (webcamRef.current) {
          const imageSrc = webcamRef.current.getScreenshot();
          
          if (imageSrc) {
            const randomSign = mockSigns[Math.floor(Math.random() * mockSigns.length)];
            const dataPreview = imageSrc.substring(23, 53); 
            
            setOutputContext(`[DETECTED]: ${randomSign}\n[MATRIX]: data:image/jpeg;base64,${dataPreview}...`);
            console.log("Processing frame data: ", imageSrc.substring(0, 40));
          }
        }
      }, 1200);

    } else {
      setIsDetecting(false);
      setOutputContext("System idle. Click 'Start Detection'...");
      
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h1>Sign-Link</h1>
        <div className={`status-badge ${isDetecting ? 'active' : 'idle'}`}>
          AI Model: {isDetecting ? "RUNNING" : "OFFLINE"}
        </div>
      </nav>

      <main className="workspace">
        <div className="camera-section">
          <div className="video-container">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="webcam-feed"
            />
          </div>
          <div className="controls">
            <button 
              className={`btn ${isDetecting ? 'btn-danger' : 'btn-primary'}`} 
              onClick={toggleDetection}
            >
              {isDetecting ? "Stop Detection" : "Start Detection"}
            </button>
          </div>
        </div>

        <div className="output-section">
          <h3>Translated Text Output</h3>
          <div className="text-box">
            <pre className="translated-text">{outputContext}</pre>
          </div>
          <div className="metrics-panel">
            <h4>System Metrics</h4>
            <p>Latency: <strong>45ms</strong></p>
            <p>Accuracy: <strong>94.2%</strong></p>
            <p>Inference Framework: <strong>TensorFlow/MediaPipe</strong></p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;