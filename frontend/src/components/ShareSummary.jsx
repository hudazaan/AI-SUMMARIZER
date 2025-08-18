import { useState } from "react";
import API from "../api";

export default function ShareSummary({ summary }) {
  const [recipients, setRecipients] = useState("");

  const handleSend = async () => {
    await API.post("/email/send", { recipients, summary });
    alert("Email sent!");
  };

  return (
    <div className="mt-4">
      <input
        className="w-full p-3 border rounded"
        placeholder="Enter recipient emails (comma separated)"
        value={recipients}
        onChange={(e) => setRecipients(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Share via Email
      </button>
    </div>
  );
}
