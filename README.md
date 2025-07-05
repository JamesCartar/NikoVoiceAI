# NikoVoiceAI

A web-based voice assistant powered by Google Gemini and the Web Speech API, featuring an emotionally charged AI personality that responds with frustration, sarcasm, and attitude. This project allows users to speak to the AI and hear its sharp, irritated responses generated in real-time for **_free_**.

---

## Features

-   Speech-to-text using Web Speech API
-   AI response generation using Google Gemini API
-   Text-to-speech with customizable voice selection
-   Easily testable in any browser environment

---

## Live Demo (Optional)

For quick testing without cloning, you can use **[Scribbler](https://scribbler.live/)**, a free online JavaScript notebook. Simply paste the code into a new notebook and test voice interactions immediately.

---

## Prerequisites

1. A modern web browser with Web Speech API support (Chrome recommended).
2. A **Google AI Studio API Key** from: [https://aistudio.google.com/apikey](https://aistudio.google.com/apikey)

> **Note for users in Myanmar:** Google AI Studio may not be accessible from Myanmar without a VPN. It is strongly recommended to use a reliable VPN when creating or using your API key.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/NikoVoiceAI.git
cd NikoVoiceAI
```

### 2. Add Your Google API Key

-   Open the main JavaScript file (e.g., `index.html` or `app.js`).
-   Locate the following line:

```javascript
const API_KEY = "....";
```

-   Replace the `"...."` with your actual Google API Key obtained from Google AI Studio.

Example:

```javascript
const API_KEY = "AIzaSyAxxxxxxx-your-api-key-here";
```

### 3. Run the Project

You can simply open the `index.html` file in your browser to run the project locally. No build steps or server setup are required.

Alternatively, you can copy the entire script into **[Scribbler](https://scribbler.live/)** for instant testing without any installation.

---

## Usage

1. Open the project in your browser.
2. Allow microphone access when prompted.
3. Speak to the AI by clicking the start button or automatically on page load.
4. The AI will listen, process your words, and respond with an angry or sarcastic voice.

---

## Notes

-   The speech recognition is currently configured for English (`en-GB` voice) but can be adjusted as needed.
-   Ensure you have a stable internet connection for the Gemini API calls to work.
-   Responses are designed to be humorous, blunt, and emotionally charged as per the AI's personality.
-   **Myanmar Users:** Always use VPN when accessing Google AI Studio services or APIs.

---

## License

This project is licensed under the MIT License.

---

## Disclaimer

This project is for educational and entertainment purposes only. It uses Google's AI services, which may have usage limitations and costs beyond the free tier. Users are responsible for their own API usage.

---

## Author

[Hein Htet](https://github.com/JamesCartar)
