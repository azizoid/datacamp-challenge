import { describe, it, expect } from 'vitest';
import { parseMarkdown } from './markdownParser';  // Adjust the path if necessary

describe('parseMarkdown', () => {
  it('should render headings with correct classes', () => {
    const markdown = '# Heading 1\n## Heading 2\n### Heading 3';
    const html = parseMarkdown(markdown);

    expect(html).toContain('<h1 class="font-bold mt-4 mb-2 text-4xl">Heading 1</h1>');
    expect(html).toContain('<h2 class="font-bold mt-4 mb-2 text-3xl">Heading 2</h2>');
    expect(html).toContain('<h3 class="font-bold mt-4 mb-2 text-2xl">Heading 3</h3>');
  });

  it('should render paragraphs with correct classes', () => {
    const markdown = 'This is a paragraph.';
    const html = parseMarkdown(markdown);

    expect(html).toContain('<p class="mb-4 text-lg">This is a paragraph.</p>');
  });

  it('should render code blocks with correct classes', () => {
    const markdown = '```javascript\nconsole.log("Hello, world!");\n```';
    const html = parseMarkdown(markdown);

    expect(html).toContain('<pre class="bg-blue-100 border border-black text-black p-2 rounded"><code class="language-javascript">console.log("Hello, world!");</code></pre>');
  });
});