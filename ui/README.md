# Sign-Link: Real-Time Sign Language Translator

Hey there! This is my mini-project for the 3-2 academic semester. Sign-Link is a web-based application designed to bridge the communication gap for the hearing and speech impaired by converting hand gestures into digital text in real-time.

I wanted to focus on building a clean, fast user interface that can handle a live camera stream smoothly while laying down the groundwork for an AI processing pipeline.

## Why I Built This & How It Works

Most communication tools aren't built with accessibility in mind. With Sign-Link, the goal is to create a seamless dashboard where a user can turn on their camera, make a sign, and instantly see the translated text on the screen.

Here is the basic engineering flow under the hood:
1. The app uses the webcam to capture video frames at regular intervals right from the browser.
2. These frames are converted into data strings so they can be processed.
3. The underlying concept relies on tracking 21 specific coordinates on the human hand (using hand landmark models like MediaPipe) to read the geometry and angles of the fingers.
4. A neural network classification matrix then matches those coordinates against trained sign language data to output the correct word.

## Tech Stack Used
- Frontend Framework: React.js
- Styling: Custom CSS (designed with a sleek dark mode for a better user experience)
- Camera Integration: react-webcam

## How to Set Up and Run the Project Locally

If you want to clone this repository and run it on your own machine, follow these steps:

1. Open your terminal and navigate into the UI folder:
   cd ui

2. Install all the necessary packages and dependencies:
   npm install

3. Run the development server:
   npm start

This will automatically open up localhost:3000 in your browser where you can test out the webcam feed and the translation panel.
