import React from "react";

type NoteCardProps = {
  title: string;
  content: string;
};

const NoteCard: React.FC<NoteCardProps> = ({ title, content }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    alert("Copied to clipboard!");
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:border-blue-400 transition-all duration-200 relative"
    >
      <h2 className="text-lg font-semibold mb-2">{title}</h2>

      {/* Preserve formatting exactly as written */}
      <pre className="whitespace-pre-wrap break-words text-sm bg-gray-50 p-3 rounded-md border border-gray-100">
        {content}
      </pre>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow"
      >
        Copy
      </button>
    </div>
  );
};

export default NoteCard;
