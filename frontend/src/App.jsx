import UploadTranscript from "./components/UploadTranscript";
import PromptInput from "./components/PromptInput";
import SummaryEditor from "./components/SummaryEditor";
import ShareSummary from "./components/ShareSummary";
import { useState } from "react";

function App() {
  const [transcript, setTranscript] = useState("");
  const [prompt, setPrompt] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">AI Meeting Summarizer</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        <UploadTranscript setTranscript={setTranscript} />
        <PromptInput prompt={prompt} setPrompt={setPrompt} transcript={transcript} setSummary={setSummary} />
        {summary && <SummaryEditor summary={summary} setSummary={setSummary} />}
        {summary && <ShareSummary summary={summary} />}
      </div>
    </div>
  );
}

export default App;
