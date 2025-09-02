import { useState } from "react";

export default function NoteCard({ note }: { note: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(note);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group border border-gray-700 bg-black/60 text-white shadow-md transition-all hover:border-cyan-400 hover:shadow-cyan-400/40 rounded-xl p-4">
      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-md"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      {/* Note content with preserved formatting */}
      <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-gray-200">
        {note}
      </pre>
    </div>
  );
}
