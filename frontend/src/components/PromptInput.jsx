import API from "../api";

export default function PromptInput({ prompt, setPrompt, transcript, setSummary }) {
  const handleGenerate = async () => {
    const { data } = await API.post("/summary/generate", { transcript, prompt });
    setSummary(data.summary);
  };

  return (
    <div>
      <input
        className="w-full p-3 border rounded"
        placeholder="Enter custom instruction..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={handleGenerate}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Generate Summary
      </button>
    </div>
  );
}
