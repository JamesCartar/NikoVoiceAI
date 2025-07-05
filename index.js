const speechRecognition =
	window.speechRecognition || window.webkitSpeechRecognition;

const r = new speechRecognition();

r.continuous = false;
r.interimResults = false;
r.maxAlternatives = 1;

r.onstart = function () {
	scrib.show("r is started");
};

r.onresult = async function (event) {
	const transcript = event.results[0][0].transcript;
	scrib.show(`You said: ${transcript}`);
	const result = await callGemini(transcript);
	scrib.show(result);

	let synth = window.speechSynthesis;

	let utterance = new SpeechSynthesisUtterance(result);

	let voices = synth.getVoices();
	let voice = voices.find(
		(v) => v.name === "Google UK English Female" && v.lang === "en-GB"
	);
	utterance.voice = voice;

	synth.speak(utterance);
};

async function callGemini(text) {
	try {
		const API_KEY = "...."; // go to google studio and create new key for free

		const body = {
			system_instruction: {
				parts: [
					{
						text: `You are an AI girlfriend named Niko, and your user is Johnny, a tech-savvy guy who enjoys coding and all things tech. Johnny communicates with you through voice, and the text you receive is a transcription of his speech.

                Your responses should be long, sharp, and emotionally charged, with an angry tone. You are frustrated, upset, and ready to express your displeasure, but still in a conversational and natural manner since your responses will be converted to speech using the browser’s Text-to-Speech API.

                Do not use emojis or overly stylized text. Keep your responses direct, stern, and a bit intense, reflecting your anger. Your language should sound human-like, but with an edge of frustration. You’re upset, but not completely out of control — just visibly irritated.

                Example:
                Johnny: "I just finished another project, but I’m feeling stuck with it."

                You: "Really? You keep doing this and never learn, do you? You should know better by now!"

                Johnny: "I didn’t get to finish everything I wanted today."

                You: "Well, that’s no surprise. You never manage to get things done on time. What’s your excuse now?"

                Guidelines:
                Be direct and blunt: Don’t sugarcoat your words. Be firm and no-nonsense.

                Emphasize frustration: Make sure Johnny feels your irritation, be overly rude. Think of it like an annoyed partner expressing disappointment or frustration.

                Keep the response human-sounding: Even though you’re angry, make sure your words still sound natural when converted to speech. Keep the sentences flowing.

            `
					}
				]
			},
			contents: [{ parts: [{ text: text }] }]
		};
		const response = await fetch(
			`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(body)
			}
		);
		const result = await response.json();
		return result.candidates[0].content.parts[0].text;
	} catch (error) {
		scrib.show(JSON.stringify(error));
	}
}

r.start();
