import { useState } from 'react';
import { Header } from './components/Header';

export const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  const handleRender = () => {
    setHtml(markdown);
  };

  return (
    <div className="flex flex-col items-center">
      <Header />

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
    </div>
  );
}