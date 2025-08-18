export default function SummaryEditor({ summary, setSummary }) {
  return (
    <textarea
      className="w-full p-3 border rounded mt-4"
      rows="8"
      value={summary}
      onChange={(e) => setSummary(e.target.value)}
    />
  );
}
