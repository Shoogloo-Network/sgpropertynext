import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import { useState } from "react";

const App = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration: 1000
    });

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    const handleDownload = () =>{
        const blob = new Blob([transcript],{type:'text/plain'})
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = "test.txt"
        document.body.appendChild(link)
        link.click()
    
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
       }
    return (
        <>
            <div className="stxt-container">
                <h2 className="stxt-h2">Speech to Text Converter</h2>
                <br />
                <p className="stxt-p">A React hook that converts speech from the microphone to text and makes it available to your React components.</p>

                <div className="stxt-main-content" onClick={() => setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className="stxt-btn-style">
                    <button className="stxt-button" onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button className="stxt-button" onClick={startListening}>Start Listening</button>
                    <button className="stxt-button" onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                    <button className="stxt-button" onClick={handleDownload}>Download</button>
                </div>
            </div>
        </>
    );
};

export default App;
