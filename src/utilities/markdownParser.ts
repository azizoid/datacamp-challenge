import { marked, Renderer } from 'marked';

const renderer = new Renderer();

renderer.heading = ({ text, depth }) => {
  const baseClass = 'font-bold mt-4 mb-2';
  const sizeClass = depth === 1 ? 'text-4xl' : depth === 2 ? 'text-3xl' : 'text-2xl';
  return `<h${depth} class="${baseClass} ${sizeClass}">${text}</h${depth}>`;
};

renderer.paragraph = ({ text }) => {
  return `<p class="mb-4 text-lg">${text}</p>`;
};

renderer.code = ({ text, lang }) => {
  return `<pre class="bg-blue-100 border border-black text-black p-2 rounded"><code class="language-${lang}">${text}</code></pre>`;
};

marked.setOptions({
  renderer
});

export const parseMarkdown = (markdown: string) => marked(markdown);