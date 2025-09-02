import { useState } from "react";

export default function NoteCard({ note }: { note: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(note);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group border border-gray-300 bg-white text-black rounded-lg p-4 shadow hover:shadow-lg transition">
      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-md"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      {/* Note content */}
      <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-gray-800">
        {note}
      </pre>
    </div>
  );
}
