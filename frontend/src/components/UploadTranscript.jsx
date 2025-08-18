export default function UploadTranscript({ setTranscript }) {
  return (
    <textarea
      className="w-full p-3 border rounded"
      placeholder="Paste your transcript here..."
      rows="6"
      onChange={(e) => setTranscript(e.target.value)}
    />
  );
}
