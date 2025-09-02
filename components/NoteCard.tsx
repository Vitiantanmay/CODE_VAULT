import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NoteCard({ note }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(note);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="relative group border border-gray-700 bg-black/60 text-white shadow-md transition-all hover:border-cyan-400 hover:shadow-cyan-400/40 rounded-xl">
      <CardContent className="p-4">
        {/* Copy button */}
        <Button
          onClick={handleCopy}
          className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-md"
        >
          {copied ? "Copied!" : "Copy"}
        </Button>

        {/* Note content with preserved formatting */}
        <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-gray-200">
          {note}
        </pre>
      </CardContent>
    </Card>
  );
}
