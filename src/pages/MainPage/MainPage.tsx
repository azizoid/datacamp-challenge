import { useState } from "react";
import { parseMarkdown } from "../../utilities/markdownParser";

export const MainPage = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  const handleRender = async () => {
    const markedResult = await parseMarkdown(markdown)
    setHtml(markedResult);
  };

  return (
    <>
      <div className="flex w-3/4 mb-4 mt-10">
        <textarea
          className="w-1/2 h-64 border p-2 mr-2"
          placeholder="Enter your markdown here..."
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <div
          className="w-1/2 h-64 border p-2 overflow-auto"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={handleRender}
      >
        RENDER
      </button>
    </>
  );
}